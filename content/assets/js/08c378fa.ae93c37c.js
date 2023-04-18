"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35609],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),c=n,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return t?r.createElement(k,i(i({ref:a},u),{},{components:t})):r.createElement(k,i({ref:a},u))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(67294),n=t(86010);const l="tabItem_Ymn6";function i(e){let{children:a,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>c});var r=t(87462),n=t(67294),l=t(86010),i=t(72389),o=t(67392),s=t(7094),p=t(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:a,block:t,defaultValue:i,values:d,groupId:c,className:k}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??f.map((e=>{let{props:{value:a,label:t,attributes:r}}=e;return{value:a,label:t,attributes:r}})),v=(0,o.l)(b,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[N,T]=(0,n.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=c){const e=g[c];null!=e&&e!==N&&b.some((a=>a.value===e))&&T(e)}const E=e=>{const a=e.currentTarget,t=x.indexOf(a),r=b[t].value;r!==N&&(I(a),T(r),null!=c&&y(c,String(r)))},w=e=>{let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}a?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},k)},b.map((e=>{let{value:a,label:t,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>x.push(e),onKeyDown:w,onClick:E},i,{className:(0,l.Z)("tabs__item",m,i?.className,{"tabs__item--active":N===a})}),t??a)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function c(e){const a=(0,i.Z)();return n.createElement(d,(0,r.Z)({key:String(a)},e))}},30673:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=t(87462),n=(t(67294),t(3905)),l=t(65488),i=t(85162);const o={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers"},s=void 0,p={unversionedId:"admin-api-brokers",id:"version-2.11.x/admin-api-brokers",title:"Managing Brokers",description:"This page only shows some frequently used operations.",source:"@site/versioned_docs/version-2.11.x/admin-api-brokers.md",sourceDirName:".",slug:"/admin-api-brokers",permalink:"/docs/2.11.x/admin-api-brokers",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/admin-api-brokers.md",tags:[],version:"2.11.x",frontMatter:{id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers"},sidebar:"docsSidebar",previous:{title:"Tenants",permalink:"/docs/2.11.x/admin-api-tenants"},next:{title:"Namespaces",permalink:"/docs/2.11.x/admin-api-namespaces"}},u={},m=[{value:"Brokers resources",id:"brokers-resources",level:2},{value:"List active brokers",id:"list-active-brokers",level:3},{value:"Get the information of the leader broker",id:"get-the-information-of-the-leader-broker",level:3},{value:"list of namespaces owned by a given broker",id:"list-of-namespaces-owned-by-a-given-broker",level:4},{value:"Dynamic broker configuration",id:"dynamic-broker-configuration",level:3},{value:"Update dynamic configuration",id:"update-dynamic-configuration",level:3},{value:"List updated values",id:"list-updated-values",level:3},{value:"List all",id:"list-all",level:3}],d={toc:m};function c(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"}," This page only shows ",(0,n.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more information, see ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},"Pulsar admin doc"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.11.x/"},"Java admin API doc"),".")))),(0,n.kt)("p",null,"Pulsar brokers consist of two components:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An HTTP server exposing a ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," interface administration and ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.11.x/reference-terminology#topic"},"topic")," lookup."),(0,n.kt)("li",{parentName:"ol"},"A dispatcher that handles all Pulsar ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.11.x/reference-terminology#message"},"message")," transfers.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-terminology#broker"},"Brokers")," can be managed via:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"brokers")," command of the ",(0,n.kt)("a",{parentName:"li",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers")," endpoint of the admin ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"brokers")," method of the ",(0,n.kt)("inlineCode",{parentName:"li"},"PulsarAdmin")," object in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.11.x/client-libraries-java"},"Java API"))),(0,n.kt)("p",null,"In addition to being configurable when you start them up, brokers can also be ",(0,n.kt)("a",{parentName:"p",href:"#dynamic-broker-configuration"},"dynamically configured"),"."),(0,n.kt)("p",null,"For a full listing of broker-specific configuration parameters, see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-configuration#broker"},"Configuration")," page."),(0,n.kt)("h2",{id:"brokers-resources"},"Brokers resources"),(0,n.kt)("h3",{id:"list-active-brokers"},"List active brokers"),(0,n.kt)("p",null,"Fetch all available active brokers that are serving traffic with cluster name."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers list use\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"localhost:8080\n"))),(0,n.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.0&apiversion=v2#operation/getActiveBrokers"},"GET /admin/v2/brokers/:cluster"))),(0,n.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().getActiveBrokers(clusterName)\n")))),(0,n.kt)("h3",{id:"get-the-information-of-the-leader-broker"},"Get the information of the leader broker"),(0,n.kt)("p",null,"Fetch the information of the leader broker, for example, the service url."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers leader-broker\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "serviceUrl" : "http://localhost:8080"\n}\n'))),(0,n.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.0&apiversion=v2#operation/getLeaderBroker"},"GET /admin/v2/brokers/leaderBroker"))),(0,n.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().getLeaderBroker()\n")),(0,n.kt)("p",null,"For the detail of the code above, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/BrokersImpl.java#L80"},"here")))),(0,n.kt)("h4",{id:"list-of-namespaces-owned-by-a-given-broker"},"list of namespaces owned by a given broker"),(0,n.kt)("p",null,"It finds all namespaces which are owned and served by a given broker."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers namespaces use \\\n    --url localhost:8080\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"public/default/0x00000000_0x40000000    [broker_assignment=shared is_controlled=false is_active=true]\npublic/default/0xc0000000_0xffffffff    [broker_assignment=shared is_controlled=false is_active=true]\npublic/functions/0x40000000_0x80000000    [broker_assignment=shared is_controlled=false is_active=true]\npublic/functions/0x00000000_0x40000000    [broker_assignment=shared is_controlled=false is_active=true]\npulsar/standalone/localhost:8080/0x00000000_0xffffffff    [broker_assignment=shared is_controlled=false is_active=true]\npulsar/localhost:8080/0x00000000_0xffffffff    [broker_assignment=shared is_controlled=false is_active=true]\npublic/functions/0x80000000_0xc0000000    [broker_assignment=shared is_controlled=false is_active=true]\npublic/default/0x80000000_0xc0000000    [broker_assignment=shared is_controlled=false is_active=true]\n"))),(0,n.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.0&apiversion=v2#operation/getOwnedNamespaes"},"GET /admin/v2/brokers/:cluster/:broker/ownedNamespaces"))),(0,n.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n")))),(0,n.kt)("h3",{id:"dynamic-broker-configuration"},"Dynamic broker configuration"),(0,n.kt)("p",null,"One way to configure a Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-terminology#broker"},"broker")," is to supply a ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-configuration#broker"},"configuration")," when the broker is ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.11.x/reference-cli-tools"},"started up"),"."),(0,n.kt)("p",null,"But since all broker configuration in Pulsar is stored in ZooKeeper, configuration values can also be dynamically updated ",(0,n.kt)("em",{parentName:"p"},"while the broker is running"),". When you update broker configuration dynamically, ZooKeeper will notify the broker of the change and the broker will then override any existing configuration values."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"brokers")," command for the ",(0,n.kt)("a",{parentName:"li",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool has a variety of subcommands that enable you to manipulate a broker's configuration dynamically, enabling you to ",(0,n.kt)("a",{parentName:"li",href:"#update-dynamic-configuration"},"update config values")," and more."),(0,n.kt)("li",{parentName:"ul"},"In the Pulsar admin ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API, dynamic configuration is managed through the ",(0,n.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers/configuration")," endpoint.")),(0,n.kt)("h3",{id:"update-dynamic-configuration"},"Update dynamic configuration"),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/brokers?id=update-dynamic-config"},(0,n.kt)("inlineCode",{parentName:"a"},"update-dynamic-config"))," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,n.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," flag respectively. Here's an example of the ",(0,n.kt)("a",{parentName:"p",href:"reference-configuration.md#broker-brokerShutdownTimeoutMs"},(0,n.kt)("inlineCode",{parentName:"a"},"brokerShutdownTimeoutMs"))," parameter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n"))),(0,n.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.0&apiversion=v2#operation/updateDynamicConfiguration"},"POST /admin/v2/brokers/configuration/:configName/:configValue"))),(0,n.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().updateDynamicConfiguration(configName, configValue);\n")))),(0,n.kt)("h3",{id:"list-updated-values"},"List updated values"),(0,n.kt)("p",null,"Fetch a list of all potentially updatable configuration parameters."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers list-dynamic-config\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"forceDeleteNamespaceAllowed\nloadBalancerMemoryResourceWeight\nallowAutoTopicCreation\nbrokerDeleteInactivePartitionedTopicMetadataEnabled\nmanagedLedgerInactiveLedgerRolloverTimeSeconds\nloadBalancerNamespaceBundleMaxMsgRate\nresourceUsageTransportPublishIntervalInSecs\n# omit...\n"))),(0,n.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.0&apiversion=v2#operation/getDynamicConfigurationName"},"GET /admin/v2/brokers/configuration"))),(0,n.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().getDynamicConfigurationNames();\n")))),(0,n.kt)("h3",{id:"list-all"},"List all"),(0,n.kt)("p",null,"Fetch a list of all parameters that have been dynamically updated."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers get-all-dynamic-config\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"brokerShutdownTimeoutMs    100\n"))),(0,n.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.0&apiversion=v2#operation/getAllDynamicConfigurations"},"GET /admin/v2/brokers/configuration/values"))),(0,n.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().getAllDynamicConfigurations();\n")))))}c.isMDXComponent=!0}}]);