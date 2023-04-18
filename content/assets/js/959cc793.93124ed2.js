"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[14581],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>b});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(b,i(i({ref:a},p),{},{components:t})):n.createElement(b,i({ref:a},p))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(86010);const o="tabItem_Ymn6";function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(87462),r=t(67294),o=t(86010),i=t(72389),s=t(67392),l=t(7094),c=t(12466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:a,block:t,defaultValue:i,values:m,groupId:d,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),v=(0,s.l)(y,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:g}=(0,l.U)(),[w,T]=(0,r.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=d){const e=k[d];null!=e&&e!==w&&y.some((a=>a.value===e))&&T(e)}const P=e=>{const a=e.currentTarget,t=x.indexOf(a),n=y[t].value;n!==w&&(I(a),T(n),null!=d&&g(d,String(n)))},O=e=>{let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},b)},y.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>x.push(e),onKeyDown:O,onClick:P},i,{className:(0,o.Z)("tabs__item",u,i?.className,{"tabs__item--active":w===a})}),t??a)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function d(e){const a=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(a)},e))}},8841:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=t(87462),r=(t(67294),t(3905)),o=t(65488),i=t(85162);const s={id:"administration-isolation-broker",title:"Isolate brokers",sidebar_label:"Isolate brokers"},l=void 0,c={unversionedId:"administration-isolation-broker",id:"version-2.11.x/administration-isolation-broker",title:"Isolate brokers",description:"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers.",source:"@site/versioned_docs/version-2.11.x/administration-isolation-broker.md",sourceDirName:".",slug:"/administration-isolation-broker",permalink:"/docs/2.11.x/administration-isolation-broker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/administration-isolation-broker.md",tags:[],version:"2.11.x",frontMatter:{id:"administration-isolation-broker",title:"Isolate brokers",sidebar_label:"Isolate brokers"},sidebar:"docsSidebar",previous:{title:"Pulsar isolation",permalink:"/docs/2.11.x/administration-isolation"},next:{title:"Isolate bookies",permalink:"/docs/2.11.x/administration-isolation-bookie"}},p={},u=[],m={toc:u};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers."),(0,r.kt)("p",null,"To set a namespace isolation policy for a broker cluster, you can use one of the following methods."),(0,r.kt)(o.Z,{defaultValue:"Pulsar-admin CLI",values:[{label:"Pulsar-admin CLI",value:"Pulsar-admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Pulsar-admin CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin ns-isolation-policy set options\n")),(0,r.kt)("p",null,"For more information about the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin ns-isolation-policy set options"),", see ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},"Pulsar admin docs"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin ns-isolation-policy set \\\n--auto-failover-policy-type min_available \\\n--auto-failover-policy-params min_limit=1,usage_threshold=80 \\\n--namespaces my-tenant/my-namespace \\\n--primary 10.193.216.*  my-cluster policy-name\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.0&apiversion=v2#operation/createNamespace"},"PUT /admin/v2/:namespace/:tenant/:namespace"))),(0,r.kt)(i.Z,{value:"Java admin API",mdxType:"TabItem"},(0,r.kt)("p",null,"For how to set namespace isolation policy using Java admin API, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L251"},"code"),"."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To guarantee all the data that belongs to a namespace is stored in desired bookies, you can isolate the data of the namespace into user-defined groups of bookies. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/administration-isolation-bookie#configure-bookie-affinity-groups"},"configure bookie affinity groups")," for more details.")))}d.isMDXComponent=!0}}]);