local IsDeferred: boolean do
	IsDeferred = false

	local bindable = Instance.new("BindableEvent")

	local handlerRun = false
	bindable.Event:Connect(function()
		handlerRun = true
	end)

	bindable:Fire()
	bindable:Destroy()

	if handlerRun == false then
		IsDeferred = true
	end
end

--[=[
	A class which holds data and methods for ScriptSignals.

	@class ScriptSignal
]=]
local ScriptSignal = {}
ScriptSignal.__index = ScriptSignal

--[=[
	A class which holds data and methods for ScriptConnections.

	@class ScriptConnection
]=]
local ScriptConnection = {}
ScriptConnection.__index = ScriptConnection

--[=[
	A boolean which determines if a ScriptConnection is active or not.

	@prop Connected boolean
	@within ScriptConnection

	@readonly
]=]

local RunListener

if IsDeferred then
	RunListener = task.defer
else
	local FreeThread: thread? = nil

	local function RunHandlerInFreeThread(
		handler: (...any) -> (),
		...
	)
		local thread = FreeThread :: thread
		FreeThread = nil

		handler(...)

		FreeThread = thread
	end

	local function CreateFreeThread()
		FreeThread = coroutine.running()

		while true do
			RunHandlerInFreeThread( coroutine.yield() )
		end
	end

	function RunListener(
		handler: (...any) -> (),
		...
	)
		if FreeThread == nil then
			task.spawn(CreateFreeThread)
		end

		task.spawn(
			FreeThread :: thread,
			handler, ...
		)
	end
end

--[=[
	Creates a ScriptSignal object.

	@return ScriptSignal
]=]
function ScriptSignal.new()
	return setmetatable({
		_active = true,
		_head = nil
	}, ScriptSignal)
end

--[=[
	Returns a boolean determining if the object is a ScriptSignal.

	```lua
	local janitor = Janitor.new()
	local signal = ScriptSignal.new()

	ScriptSignal.Is(signal) -> true
	ScriptSignal.Is(janitor) -> false
	```

	@param object any
	@return boolean
]=]
function ScriptSignal.Is(object): boolean
	return typeof(object) == 'table'
		and getmetatable(object) == ScriptSignal
end

--[=[
	Returns a boolean determing if a ScriptSignal object is active.

	```lua
	ScriptSignal:IsActive() -> true
	ScriptSignal:Destroy()
	ScriptSignal:IsActive() -> false
	```

	@return boolean
]=]
function ScriptSignal:IsActive(): boolean
	return self._active == true
end

--[=[
	Connects a handler to a ScriptSignal object.

	```lua
	ScriptSignal:Connect(function(text)
		print(text)
	end)

	ScriptSignal:Fire("Something")
	ScriptSignal:Fire("Something else")

	-- "Something" and then "Something else" are printed
	```

	@param handler (...: any) -> ()
	@return ScriptConnection
]=]
function ScriptSignal:Connect(
	handler: (...any) -> ()
)
	assert(
		typeof(handler) == 'function',
		"Must be function"
	)

	if self._active == false then
		return setmetatable({
			Connected = false
		}, ScriptConnection)
	end

	local _head = self._head

	local node = {
		_signal = self,
		_connection = nil,
		_handler = handler,

		_next = _head,
		_prev = nil
	}

	if _head then
		_head._prev = node
	end
	self._head = node

	local connection = setmetatable({
		Connected = true,
		_node = node
	}, ScriptConnection)

	node._connection = connection

	return connection
end

--[=[
	Connects a handler to a ScriptSignal object, but only allows that
	connection to run once. Any `:Fire` calls called afterwards won't trigger anything.

	```lua
	ScriptSignal:ConnectOnce(function()
		print("Connection fired")
	end)

	ScriptSignal:Fire()
	ScriptSignal:Fire()

	-- "Connection fired" is only fired once
	```

	@param handler (...: any) -> ()
]=]
function ScriptSignal:ConnectOnce(
	handler: (...any) -> ()
)
	assert(
		typeof(handler) == 'function',
		"Must be function"
	)

	local connection
	connection = self:Connect(function(...)
		if connection == nil then
			return
		end

		connection:Disconnect()
		connection = nil

		handler(...)
	end)
end

--[=[
	Yields the thread until a `:Fire` call occurs, returns what the signal was fired with.

	```lua
	task.spawn(function()
		print(
			ScriptSignal:Wait()
		)
	end)

	ScriptSignal:Fire("Arg", nil, 1, 2, 3, nil)
	-- "Arg", nil, 1, 2, 3, nil are printed
	```

	@yields
	@return ...any
]=]
function ScriptSignal:Wait(): (...any)
	local thread do
		thread = coroutine.running()

		local connection
		connection = self:Connect(function(...)
			if connection == nil then
				return
			end

			connection:Disconnect()
			connection = nil

			task.spawn(thread, ...)
		end)
	end

	return coroutine.yield()
end

--[=[
	Fires a ScriptSignal object with the arguments passed through it.

	```lua
	ScriptSignal:Connect(function(text)
		print(text)
	end)

	ScriptSignal:Fire("Some Text...")

	-- "Some Text..." is printed twice
	```

	@param ... any
]=]
function ScriptSignal:Fire(...)
	local node = self._head
	while node ~= nil do
		if node._connection ~= nil then
			RunListener(node._handler, ...)
		end

		node = node._next
	end
end

--[=[
	Disconnects all connections from a ScriptSignal object without making it unusable.

	```lua
	local connection = ScriptSignal:Connect(function() end)

	connection.Connected -> true
	ScriptSignal:DisconnectAll()
	connection.Connected -> false
	```
]=]
function ScriptSignal:DisconnectAll()
	local node = self._head
	while node ~= nil do
		local _connection = self._connection
		if _connection ~= nil then
			_connection:Disconnect()
		end

		node = node._next
	end
end

--[=[
	Destroys a ScriptSignal object, disconnecting all connection and making it unusable.

	```lua
	ScriptSignal:Destroy()

	local connection = ScriptSignal:Connect(function() end)
	connection.Connected -> false
	```
]=]
function ScriptSignal:Destroy()
	if self._active == false then
		return
	end

	self:DisconnectAll()
	self._active = false
end

--[=[
	Disconnects a connection, any `:Fire` calls from now on will not
	invoke this connection's handler.

	```lua
	local connection = ScriptSignal:Connect(function() end)

	connection.Connected -> true
	connection:Disconnect()
	connection.Connected -> false
	```
]=]
function ScriptConnection:Disconnect()
	if self.Connected == false then
		return
	end

	self.Connected = false

	local _node = self._node
	local _prev = self._prev
	local _next = self._next

	if _next then
		_next._prev = _prev
	end

	if _prev then
		_prev._next = _next
	else
		-- _node == _signal._head

		_node._signal._head = _next
	end

	_node._connection = nil
	self._node = nil
end
ScriptConnection.Destroy = ScriptConnection.Disconnect

export type Class = typeof(
	ScriptSignal.new()
)

export type ScriptConnection = typeof(
	ScriptSignal.new():Connect(function() end)
)

return ScriptSignal