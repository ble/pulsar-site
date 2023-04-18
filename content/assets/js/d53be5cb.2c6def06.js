"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[80407],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(b,i(i({ref:t},c),{},{components:a})):r.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),l=a(86010),i=a(72389),s=a(67392),o=a(7094),u=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:i,values:d,groupId:m,className:b}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,s.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:P}=(0,o.U)(),[y,w]=(0,n.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=m){const e=g[m];null!=e&&e!==y&&f.some((t=>t.value===e))&&w(e)}const A=e=>{const t=e.currentTarget,a=N.indexOf(t),r=f[a].value;r!==y&&(I(t),w(r),null!=m&&P(m,String(r)))},x=e=>{let t=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},b)},f.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>N.push(e),onKeyDown:x,onClick:A},i,{className:(0,l.Z)("tabs__item",p,i?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,n.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,i.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},6615:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));a(65488),a(85162);const l={id:"pulsar-api-overview",title:"Pulsar APIs",sidebar_label:"Pulsar APIs"},i=void 0,s={unversionedId:"pulsar-api-overview",id:"pulsar-api-overview",title:"Pulsar APIs",description:"Pulsar is a messaging and streaming platform that scales across organizations of all sizes.",source:"@site/docs/pulsar-api-overview.md",sourceDirName:".",slug:"/pulsar-api-overview",permalink:"/docs/next/pulsar-api-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/pulsar-api-overview.md",tags:[],version:"current",frontMatter:{id:"pulsar-api-overview",title:"Pulsar APIs",sidebar_label:"Pulsar APIs"},sidebar:"docsSidebar",previous:{title:"Reference",permalink:"/docs/next/reference-landing"},next:{title:"REST APIs",permalink:"/docs/next/reference-rest-api-overview"}},o={},u=[{value:"Pulsar client APIs",id:"pulsar-client-apis",level:2},{value:"Pulsar admin APIs",id:"pulsar-admin-apis",level:2},{value:"Comparison",id:"comparison",level:2}],c={toc:u};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pulsar is a messaging and streaming platform that scales across organizations of all sizes. "),(0,n.kt)("p",null,"As the core building blocks of Pulsar, Pulsar APIs allow you to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"build applications with Pulsar using client APIs"),(0,n.kt)("li",{parentName:"ul"},"administer Pulsar clusters using admin APIs")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pulsar APIs - Definition",src:a(75991).Z,width:"879",height:"503"})),(0,n.kt)("h2",{id:"pulsar-client-apis"},"Pulsar client APIs"),(0,n.kt)("p",null,"Pulsar client APIs encapsulate and optimize Pulsar's client-broker communication protocols and add additional features using Pulsar primitives. "),(0,n.kt)("p",null,"With Pulsar client APIs, you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create and configure producers, consumers, and readers"),(0,n.kt)("li",{parentName:"ul"},"produce and consume messages"),(0,n.kt)("li",{parentName:"ul"},"perform authentication and authorization tasks ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Client APIs - Definition",src:a(1112).Z,width:"1210",height:"375"})),(0,n.kt)("p",null,"Pulsar exposes client APIs with language bindings. For more details about Pulsar clients, including language-specific client libraries, feature matrix, third-party clients, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/client-libraries"},"Pulsar client - Overview"),"."),(0,n.kt)("h2",{id:"pulsar-admin-apis"},"Pulsar admin APIs"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/admin-api-overview"},"Pulsar admin API - Overview"),"."),(0,n.kt)("h2",{id:"comparison"},"Comparison"),(0,n.kt)("p",null,"Here is a simple comparison between Pulsar client APIs and Pulsar admin APIs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Pulsar client APIs"),(0,n.kt)("th",{parentName:"tr",align:null},"Pulsar admin APIs"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Audiences"),(0,n.kt)("td",{parentName:"tr",align:null},"Developers"),(0,n.kt)("td",{parentName:"tr",align:null},"DevOps")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Goals"),(0,n.kt)("td",{parentName:"tr",align:null},"Build applications with Pulsar"),(0,n.kt)("td",{parentName:"tr",align:null},"Administer Pulsar clusters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Use cases"),(0,n.kt)("td",{parentName:"tr",align:null},"Pulsar client APIs help you create applications that rely on real-time data. ",(0,n.kt)("br",null),(0,n.kt)("br",null)," For example, you can build a financial application to handle fraud alerts or an eCommerce application that creates recommendations based on user activities."),(0,n.kt)("td",{parentName:"tr",align:null},"Pulsar administration APIs let you administer the entire Pulsar instance, including clusters, tenants, namespaces, and topics, from a single endpoint. ",(0,n.kt)("br",null),(0,n.kt)("br",null)," For example, you can configure security and compliance, or get information about brokers, check for any issues, and then troubleshoot solutions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Key features"),(0,n.kt)("td",{parentName:"tr",align:null},"- Process data with producers, consumers, readers, and TableView ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Secure data with authentication and authorization ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Protect data with transactions and schema ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Stabilize data with cluster-level auto failover"),(0,n.kt)("td",{parentName:"tr",align:null},"- Configure authentication and authorization ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Set data retention and resource isolation policies ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Facilitate workflow of application development",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Troubleshoot Pulsar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interfaces"),(0,n.kt)("td",{parentName:"tr",align:null},"- ",(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/client/2.11.x/"},"Java client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/cpp/3.1.x"},"C++ client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/python/3.1.x"},"Python client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," -  ",(0,n.kt)("a",{parentName:"td",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar"},"Go client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-node"},"Node.js client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-websocket#api-reference"},"WebSocket client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-dotnet"},"C# client API")),(0,n.kt)("td",{parentName:"tr",align:null},"- ",(0,n.kt)("a",{parentName:"td",href:"/docs/next/admin-api-overview"},"Java admin API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"/docs/next/reference-rest-api-overview"},"REST API"))))))}p.isMDXComponent=!0},1112:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/client-api-definition-d44017eab8965a0a3e55c420f7864158.svg"},75991:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar-api-definition-1bb809ca922df54959aeb62cdfc026f0.svg"}}]);