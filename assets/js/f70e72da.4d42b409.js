"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78618],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),a=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=a(r),f=p,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,s=new Array(o);s[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:p,s[1]=c;for(var a=2;a<o;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},15699:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return a},toc:function(){return u},default:function(){return l}});var n=r(87462),p=r(63366),o=(r(67294),r(3905)),s=["components"],c={},i=void 0,a={unversionedId:"puppeteer.cdpsession.detach",id:"version-9.1.1/puppeteer.cdpsession.detach",isDocsHomePage:!1,title:"puppeteer.cdpsession.detach",description:"Home &gt; puppeteer &gt; CDPSession &gt; detach",source:"@site/versioned_docs/version-9.1.1/puppeteer.cdpsession.detach.md",sourceDirName:".",slug:"/puppeteer.cdpsession.detach",permalink:"/puppeteer/docs/9.1.1/puppeteer.cdpsession.detach",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.cdpsession.detach.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.cdpsession",permalink:"/puppeteer/docs/9.1.1/puppeteer.cdpsession"},next:{title:"puppeteer.cdpsession.send",permalink:"/puppeteer/docs/9.1.1/puppeteer.cdpsession.send"}},u=[{value:"CDPSession.detach() method",id:"cdpsessiondetach-method",children:[]}],d={toc:u};function l(e){var t=e.components,r=(0,p.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.cdpsession"},"CDPSession")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.cdpsession.detach"},"detach")),(0,o.kt)("h2",{id:"cdpsessiondetach-method"},"CDPSession.detach() method"),(0,o.kt)("p",null,"Detaches the cdpSession from the target. Once detached, the cdpSession object won't emit any events and can't be used to send messages."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"detach(): Promise<void>;\n")),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","void",">"))}l.isMDXComponent=!0}}]);