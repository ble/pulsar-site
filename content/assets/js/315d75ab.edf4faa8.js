"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[34401],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={id:"reference-cli-tools",title:"Pulsar command-line tools",sidebar_label:"Pulsar CLI tools"},l=void 0,i={unversionedId:"reference-cli-tools",id:"version-2.11.x/reference-cli-tools",title:"Pulsar command-line tools",description:"Pulsar offers several command-line tools that you can use for managing Pulsar installations, performance testing, using command-line producers and consumers, and more.",source:"@site/versioned_docs/version-2.11.x/reference-cli-tools.md",sourceDirName:".",slug:"/reference-cli-tools",permalink:"/docs/2.11.x/reference-cli-tools",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/reference-cli-tools.md",tags:[],version:"2.11.x",frontMatter:{id:"reference-cli-tools",title:"Pulsar command-line tools",sidebar_label:"Pulsar CLI tools"},sidebar:"docsSidebar",previous:{title:"Terminology",permalink:"/docs/2.11.x/reference-terminology"},next:{title:"Pulsar Configuration",permalink:"/docs/2.11.x/reference-configuration"}},s={},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar offers several command-line tools that you can use for managing Pulsar installations, performance testing, using command-line producers and consumers, and more."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pulsar-admin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pulsar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pulsar-client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pulsar-daemon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pulsar-perf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pulsar-shell")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeper"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For the latest and complete information about command-line tools, including commands, flags, descriptions, and more information, see ",(0,o.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/"},"Pulsar Reference"),".")),(0,o.kt)("p",null,"All Pulsar command-line tools can be run from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," directory of your ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.11.x/getting-started-standalone"},"installed Pulsar package"),"."),(0,o.kt)("p",null,"You can get help for any CLI tool, command, or subcommand using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," flag, or ",(0,o.kt)("inlineCode",{parentName:"p"},"-h")," for short. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar broker --help\n")))}u.isMDXComponent=!0}}]);