"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[98633],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"client-libraries-go",title:"Pulsar Go client",sidebar_label:"Go client"},l=void 0,o={unversionedId:"client-libraries-go",id:"client-libraries-go",title:"Pulsar Go client",description:"You can use a Pulsar Go client to create Pulsar producers, consumers, and readers in Golang.",source:"@site/docs/client-libraries-go.md",sourceDirName:".",slug:"/client-libraries-go",permalink:"/docs/next/client-libraries-go",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-go.md",tags:[],version:"current",frontMatter:{id:"client-libraries-go",title:"Pulsar Go client",sidebar_label:"Go client"},sidebar:"docsSidebar",previous:{title:"Use",permalink:"/docs/next/client-libraries-cpp-use"},next:{title:"Set up",permalink:"/docs/next/client-libraries-go-setup"}},c={},s=[{value:"Get started",id:"get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reference doc",id:"reference-doc",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use a Pulsar ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-go"},"Go client")," to create Pulsar producers, consumers, and readers in Golang."),(0,a.kt)("h2",{id:"get-started"},"Get started"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-go-setup"},"Set up Go client library")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-go-initialize"},"Initialize a Go client")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-go-use"},"Use a Go client"))),(0,a.kt)("h2",{id:"whats-next"},"What's next?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-clients"},"Work with clients")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-producers"},"Work with producers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-consumers"},"Work with consumers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-readers"},"Work with readers"))),(0,a.kt)("h2",{id:"reference-doc"},"Reference doc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar"},"Go client API docs"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ClientOptions"},"Client configurations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ProducerOptions"},"Producer configurations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ConsumerOptions"},"Consumer configurations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ReaderOptions"},"Reader configurations")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"pathname:///release-notes/client-go"},"Release notes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Client feature matrix"))))}u.isMDXComponent=!0}}]);