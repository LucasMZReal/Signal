"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[331],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76647:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s=void 0,c={type:"mdx",permalink:"/FastSignal/",source:"@site/pages/index.md"},p=[{value:"What about GoodSignal?",id:"what-about-goodsignal",children:[]},{value:"Installation",id:"installation",children:[{value:"From GitHub",id:"from-github",children:[]},{value:"From Roblox",id:"from-roblox",children:[]},{value:"From Wally",id:"from-wally",children:[]}]}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{href:"https://github.com/LucasMZReal/FastSignal/releases"},(0,i.kt)("img",{alt:"Releases",src:"https://img.shields.io/github/v/release/LucasMZReal/FastSignal"})),(0,i.kt)("a",{href:"https://github.com/LucasMZReal/FastSignal"},(0,i.kt)("img",{alt:"",src:"https://img.shields.io/github/downloads/LucasMZReal/FastSignal/total"})),(0,i.kt)("h1",{id:"fastsignal"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/RBLXUtils/FastSignal"},(0,i.kt)("em",{parentName:"a"},"Fast"),"Signal")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Fast"),"Signal is a Signal library made with consistency and expectable behaviour in mind, it is efficient, easy to use, and widely compatible."),(0,i.kt)("h2",{id:"what-about-goodsignal"},"What about GoodSignal?"),(0,i.kt)("p",null,"GoodSignal while being an interesting implementation, sadly it suffers from some issues."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GoodSignal does not support ",(0,i.kt)("inlineCode",{parentName:"p"},".Connected"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GoodSignal's ",(0,i.kt)("inlineCode",{parentName:"p"},":Destroy"),' method is unproper, only "disconnecting" everything, but not preventing new connections from being connected')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GoodSignal's ",(0,i.kt)("inlineCode",{parentName:"p"},":Destroy")," does not ",(0,i.kt)("inlineCode",{parentName:"p"},":Disconnect")," connections properly.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GoodSignal's connection and linked list nodes are the same thing, which causes issues such as disconnected connections leaking the connection's function, signal, and other connections.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GoodSignal's classes are strict, this is pretty useless, and means that empty fields in a class are false, and not nil.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GoodSignal's connections are not compatible with ",(0,i.kt)("a",{parentName:"p",href:"https://GitHub.com/howmanysmall/Janitor"},"Janitor."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GoodSignal's methods don't have any type declaration at all, which would make it way nicer to use."))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Fast"),"Signal fixes all these issues.\n",(0,i.kt)("em",{parentName:"p"},"Fast"),"Signal's selling point is ",(0,i.kt)("em",{parentName:"p"},"consistency")," and ",(0,i.kt)("em",{parentName:"p"},"familiarity"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Fast"),"Signal has a familiar API and behaviour to RBXScriptSignals and other signal libraries, which help you work faster, these help you not have headaches while using ",(0,i.kt)("em",{parentName:"p"},"Fast"),"Signal."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"from-github"},"From GitHub"),(0,i.kt)("p",null,"You can get a ",(0,i.kt)("inlineCode",{parentName:"p"},".rbxmx")," file from a release on GitHub, you can do that by visiting ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RBLXUtils/FastSignal/releases"},"FastSignal's releases.")),(0,i.kt)("h3",{id:"from-roblox"},"From Roblox"),(0,i.kt)("p",null,"You can get FastSignal directly from Roblox, via its Roblox Model.\nYou can find it ",(0,i.kt)("a",{parentName:"p",href:"https://www.roblox.com/library/6532460357"},"here.")),(0,i.kt)("h3",{id:"from-wally"},"From Wally"),(0,i.kt)("p",null,"You can get FastSignal as a dependancy on Wally.\nAdd ",(0,i.kt)("inlineCode",{parentName:"p"},"lucasmzreal/fastsignal")," in your dependencies and you're done."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'Signal = "lucasmzreal/fastsignal@7.1.6"\n')))}m.isMDXComponent=!0}}]);