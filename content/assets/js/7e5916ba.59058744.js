"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[15161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>d});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,o=n(e,["components","mdxType","originalType","parentName"]),c=s(a),m=l,d=c["".concat(u,".").concat(m)]||c[m]||h[m]||i;return a?r.createElement(d,p(p({ref:t},o),{},{components:a})):r.createElement(d,p({ref:t},o))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,p=new Array(i);p[0]=m;var n={};for(var u in t)hasOwnProperty.call(t,u)&&(n[u]=t[u]);n.originalType=e,n[c]="string"==typeof e?e:l,p[1]=n;for(var s=2;s<i;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54163:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>n,toc:()=>s});var r=a(87462),l=(a(67294),a(3905));const i={id:"pulsar-2.7.2",title:"Apache Pulsar 2.7.2",sidebar_label:"Apache Pulsar 2.7.2"},p=void 0,n={unversionedId:"versioned/pulsar-2.7.2",id:"versioned/pulsar-2.7.2",title:"Apache Pulsar 2.7.2",description:"2021-05-11",source:"@site/release-notes/versioned/pulsar-2.7.2.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.7.2",permalink:"/release-notes/versioned/pulsar-2.7.2",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.7.2.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.7.2",title:"Apache Pulsar 2.7.2",sidebar_label:"Apache Pulsar 2.7.2"}},u={},s=[{value:"2021-05-11",id:"2021-05-11",level:4},{value:"Broker",id:"broker",level:4},{value:"Bookie",id:"bookie",level:4},{value:"Dependency upgrade",id:"dependency-upgrade",level:4},{value:"Proxy",id:"proxy",level:4},{value:"Pulsar Admin",id:"pulsar-admin",level:4},{value:"Pulsar SQL",id:"pulsar-sql",level:4},{value:"Docker",id:"docker",level:4},{value:"Client",id:"client",level:4},{value:"Functions and Pulsar IO",id:"functions-and-pulsar-io",level:4},{value:"Tiered Storage",id:"tiered-storage",level:4}],o={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2021-05-11"},"2021-05-11"),(0,l.kt)("h4",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix the useless retry when the maximum number of subscriptions is reached ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9991"},"#9991")),(0,l.kt)("li",{parentName:"ul"},"wrong timeunit in updating lastLedgerCreationInitiationTimestamp ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10049"},"#10049")),(0,l.kt)("li",{parentName:"ul"},"Avoid spammy logs in case of BK problems ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10088"},"#10088")),(0,l.kt)("li",{parentName:"ul"},"Fix NonDurableCursorImpl initialPosition by startCursorPosition greater than lastConfirmedEntry problem. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10095"},"#10095")),(0,l.kt)("li",{parentName:"ul"},"fix 8115 Some partitions get stuck after adding additional consumers to the KEY_SHARED subscriptions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10096"},"#10096")),(0,l.kt)("li",{parentName:"ul"},"Add underReplicate state in the topic internal stats ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10013"},"#10013")),(0,l.kt)("li",{parentName:"ul"},"Continue graceful shutdown even if web service closing fails ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9835"},"#9835")),(0,l.kt)("li",{parentName:"ul"},"Issue 9804: Allow to enable or disable the cursor metrics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9814"},"#9814")),(0,l.kt)("li",{parentName:"ul"},"Allow to configure BookKeeper all BK client features using bookkeeper_ prefix ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9232"},"#9232")),(0,l.kt)("li",{parentName:"ul"},"Fix NPEs and thread safety issue in PersistentReplicator ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9763"},"#9763")),(0,l.kt)("li",{parentName:"ul"},"Non Persistent Topics: Auto-create partitions even when the auto-creation is disabled ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9786"},"#9786")),(0,l.kt)("li",{parentName:"ul"},"Issue 9602: Add schema type validation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9797"},"#9797")),(0,l.kt)("li",{parentName:"ul"},"Fix message not dispatch for key_shared sub type in non-persistent subscription ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9826"},"#9826")),(0,l.kt)("li",{parentName:"ul"},"zkBookieRackAffinityMapping bug to support for bookkeeper dnsResolver ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9894"},"#9894")),(0,l.kt)("li",{parentName:"ul"},"Messaging Fix delay message block ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10078"},"#10078")),(0,l.kt)("li",{parentName:"ul"},"Make PersistentDispatcherMultipleConsumers.readMoreEntries synchronized ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10435"},"#10435")),(0,l.kt)("li",{parentName:"ul"},"Fix issue in reusing EntryBatchIndexesAcks instances ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10400"},"#10400")),(0,l.kt)("li",{parentName:"ul"},"Fix schema not added when subscribing an empty topic without schema ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9853"},"#9853")),(0,l.kt)("li",{parentName:"ul"},"Support advertisedListeners for standalone ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10297"},"#10297")),(0,l.kt)("li",{parentName:"ul"},"Fix schema ledger deletion when deleting topic with delete schema. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10383"},"#10383")),(0,l.kt)("li",{parentName:"ul"},"Fix primitive schema upload for ALWAYS_COMPATIBLE strategy. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10386"},"#10386")),(0,l.kt)("li",{parentName:"ul"},"Fix schema type check issue when use always compatible strategy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10367"},"#10367")),(0,l.kt)("li",{parentName:"ul"},"Fix CPU 100% when deleting namespace ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10337"},"#10337")),(0,l.kt)("li",{parentName:"ul"},"add return statement to exit asyncMarkDelete early on failure ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10272"},"#10272")),(0,l.kt)("li",{parentName:"ul"},"Adding more permits debug statements to better diagnose permit issues ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10217"},"#10217"))),(0,l.kt)("h4",{id:"bookie"},"Bookie"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fallback to PULSAR_GC if BOOKIE_GC is not defined ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9621"},"#9621")),(0,l.kt)("li",{parentName:"ul"},"Fallback to PULSAR_EXTRA_OPTS if BOOKIE_EXTRA_OPTS isn't defined ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10397"},"#10397"))),(0,l.kt)("h4",{id:"dependency-upgrade"},"Dependency upgrade"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Upgrade Bouncy Castle to 1.68 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9199"},"#9199")),(0,l.kt)("li",{parentName:"ul"},"Upgrade athenz version and remove yahoo.bintray.com repository ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10471"},"#10471")),(0,l.kt)("li",{parentName:"ul"},"Upgrade Netty version to 4.1.60.final ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10073"},"#10073")),(0,l.kt)("li",{parentName:"ul"},"Upgrade commons-io to address CVE-2021-29425 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10287"},"#10287")),(0,l.kt)("li",{parentName:"ul"},"Upgrade Jetty libraries to 9.4.39.v20210325 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10177"},"#10177"))),(0,l.kt)("h4",{id:"proxy"},"Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Issue 10221: Fix authorization error while using proxy and ",(0,l.kt)("inlineCode",{parentName:"li"},"Prefix")," subscription authentication mode ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10226"},"#10226"))),(0,l.kt)("h4",{id:"pulsar-admin"},"Pulsar Admin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add get version command for pulsar rest api, pulsar-admin, pulsar-client ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9975"},"#9975"))),(0,l.kt)("h4",{id:"pulsar-sql"},"Pulsar SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using pulsar SQL query messages will appear NoSuchLedger\u2026 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9910"},"#9910"))),(0,l.kt)("h4",{id:"docker"},"Docker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Allow DockerImage to be built from source tarball ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9846"},"#9846")),(0,l.kt)("li",{parentName:"ul"},"Fix docker standalone image error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10359"},"#10359")),(0,l.kt)("li",{parentName:"ul"},'Suppress printing of "skip Processing" lines in startup scripts ',(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10275"},"#10275")),(0,l.kt)("li",{parentName:"ul"},"Issue 10058:apply-config-from-env.py to commented default values ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10060"},"#10060"))),(0,l.kt)("h4",{id:"client"},"Client"),(0,l.kt)("h4",{id:"functions-and-pulsar-io"},"Functions and Pulsar IO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Allow customizable function logging ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10389"},"#10389")),(0,l.kt)("li",{parentName:"ul"},"Pass through record properties from Pulsar Sources ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9943"},"#9943")),(0,l.kt)("li",{parentName:"ul"},"ISSUE 10153: Pulsar Functions Go fix time unit ns -> ms ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10160"},"#10160")),(0,l.kt)("li",{parentName:"ul"},"Kinesis Connector: Fix kinesis sink can not retry to send messages ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10420"},"#10420")),(0,l.kt)("li",{parentName:"ul"},"Kinesis Connector: Fix null error messages in onFailure exception in KinesisSink. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10416"},"#10416"))),(0,l.kt)("h4",{id:"tiered-storage"},"Tiered Storage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Prevent Class Loader Leak; Restore Offloader Directory Override ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9878"},"#9878")),(0,l.kt)("li",{parentName:"ul"},"Add logs for cleanup offloaded data operation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9852"},"#9852"))))}c.isMDXComponent=!0}}]);