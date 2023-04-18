"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(a),f=n,h=s["".concat(c,".").concat(f)]||s[f]||m[f]||i;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},87472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={id:"client-java-2.7.2",title:"Client Java 2.7.2",sidebar_label:"Client Java 2.7.2"},l=void 0,o={unversionedId:"versioned/client-java-2.7.2",id:"versioned/client-java-2.7.2",title:"Client Java 2.7.2",description:"- Java] Fix: seemingly equal ClientConfigurationData's objects end up not being equal [#10091",source:"@site/release-notes/versioned/client-java-2.7.2.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.7.2",permalink:"/release-notes/versioned/client-java-2.7.2",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-2.7.2.md",tags:[],version:"current",frontMatter:{id:"client-java-2.7.2",title:"Client Java 2.7.2",sidebar_label:"Client Java 2.7.2"}},c={},p=[],u={toc:p};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix: seemingly equal ClientConfigurationData's objects end up not being equal ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10091"},"#10091")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix AutoConsumeSchema KeyValue encoding ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10089"},"#10089")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix error OutOfMemoryError while using KeyValue<GenericRecord, GenericRecord> ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9981"},"#9981")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix concurrency issue in incrementing epoch (#10278) ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10436"},"#10436")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Allow pulsar client receive external timer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9802"},"#9802")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Handle NPE while receiving ack for closed producer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8979"},"#8979")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix batch size not set when deserializing from byte array ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9855"},"#9855")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix ensure single-topic consumer can be closed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9849"},"#9849")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Issue 9585: delete disconnected consumers to allow auto-discovery ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9660"},"#9660"))))}s.isMDXComponent=!0}}]);