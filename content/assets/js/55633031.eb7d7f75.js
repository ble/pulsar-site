"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21551],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||n;return r?i.createElement(k,l(l({ref:t},u),{},{components:r})):i.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const n={id:"pulsar-2.10.3",title:"Apache Pulsar 2.10.3",sidebar_label:"Apache Pulsar 2.10.3"},l=void 0,o={unversionedId:"versioned/pulsar-2.10.3",id:"versioned/pulsar-2.10.3",title:"Apache Pulsar 2.10.3",description:"2023-1-4",source:"@site/release-notes/versioned/pulsar-2.10.3.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.10.3",permalink:"/release-notes/versioned/pulsar-2.10.3",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.10.3.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.10.3",title:"Apache Pulsar 2.10.3",sidebar_label:"Apache Pulsar 2.10.3"}},s={},p=[{value:"2023-1-4",id:"2023-1-4",level:4},{value:"Broker",id:"broker",level:3},{value:"Transaction",id:"transaction",level:3},{value:"Pulsar IO and Pulsar Functions",id:"pulsar-io-and-pulsar-functions",level:3},{value:"Tiered Storage",id:"tiered-storage",level:3},{value:"Pulsar SQL",id:"pulsar-sql",level:3},{value:"CLI",id:"cli",level:3},{value:"Admin",id:"admin",level:2},{value:"Security",id:"security",level:3},{value:"Dependency &amp; Library updates",id:"dependency--library-updates",level:3},{value:"CI &amp; Test",id:"ci--test",level:3},{value:"Others",id:"others",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"2023-1-4"},"2023-1-4"),(0,a.kt)("h3",{id:"broker"},"Broker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Omit making a copy of CommandAck when there are no broker interceptors ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18997"},"#18997")),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Copy proto command fields into final variables in ServerCnx ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/18987"},"#18987")),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]","Add a cache eviction policy\uff1aEvicting cache data by the slowest markDeletedPosition #14985"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix broker cache eviction of entries read by active cursors #17273"),(0,a.kt)("li",{parentName:"ul"},"[enh][broker]"," Add metrics for entry cache insertion, eviction #17248"),(0,a.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Extracted interface for EntryCacheManager #15933"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Support dynamic update cache config #13679"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," refactor ManagedLedger cacheEvictionTask implement #14488"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Add logs for why namespace bundle been split (#19003)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix deadlock in PendingAckHandleImpl (#18989)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Branch-2.10 Avoid endless blocking call. (#18914)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","[functions-worker]"," Ensure prometheus metrics are grouped by type (#8407, #13865) #15558"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","Update interceptor handler exception (#18940)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix incorrect bundle split count metric (#17970)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Avoid OOM not trigger PulsarByteBufAllocator outOfMemoryListener when use ByteBufAllocator.DEFAULT.heapBuffer in PrometheusMetricsGeneratorUtils (#18747)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Make Consumer#equals more effective (#18662)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," In the trimDeletedEntries method, release the removed entry (#18305)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Remove locallyAcquiredLock when removeOwnership (#18197)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Avoid unnecessary creation of BitSetRecyclable objects #17998"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," add return for PersistentMessageExpiryMonitor#findEntryFailed #17816"),(0,a.kt)("li",{parentName:"ul"},"[fix][ml]"," Persist correct markDeletePosition to prevent message loss (#18237)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Support setting forceDeleteTenantAllowed dynamically (#18192)"),(0,a.kt)("li",{parentName:"ul"},"Make BookieId work with PulsarRegistrationDriver (second take) #17922"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Extract additional servlets to the default directory by\u2026 (#17477)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]","Improve PersistentMessageExpiryMonitor expire speed when ledger not existed (#17842)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","Fix mutex never released when trimming (#17911)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix if dynamicConfig item in ZK do not exist in broker cause NPE. #17705"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix system service namespace create internal event topic. (#17867)"),(0,a.kt)("li",{parentName:"ul"},"[bugfix]"," Prevent Automatic Topic Creation during namespace deletion #17609"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","Cache invalidation due to concurrent access (#18076)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","add test case for deleting namespace fail when has partitioned system topic (#17338)"),(0,a.kt)("li",{parentName:"ul"},"Skip creating a subscription replication snapshot if no messages have been published after the topic gets activated on a broker #16618"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix uncompleted future when get the topic policies of  a deleted topic (#18824)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix delete system topic clean topic policy (#18823)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]","[PIP-149]","Make getList async #16221"),(0,a.kt)("li",{parentName:"ul"},"[fix][flaky-test]","ManagedCursorMetricsTest.testManagedCursorMetrics #16878"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," System topic writer/reader connection not counted (#18603)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," System topic writer/reader connection not counted. (#18369)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]","unify time unit at dropping the backlog on a topic #17957","[fix][broker]","unify time unit at dropping the backlog on a topic #17957"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Support setting ForceDeleteNamespaceAllowed dynamically #18181"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix ",(0,a.kt)("inlineCode",{parentName:"li"},"getPositionAfterN")," infinite loop. (#17971)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Update the log print content of createSubscriptions (#18024)"),(0,a.kt)("li",{parentName:"ul"},"[Broker]"," Make PersistentTopicsBase#internalGetPartitionedMetadata async #14153"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix duplicated schemas creation #18701"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," Using ",(0,a.kt)("inlineCode",{parentName:"li"},"handle")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"handleAsync")," to avoid using common pool thread (#17403)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix dispatch duplicated messages with ",(0,a.kt)("inlineCode",{parentName:"li"},"Exclusive")," mode. (#17237)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix the order of resource close in the InMemoryDelayedDeliveryTracker (#18000)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]"," reduce code duplication to avoid endless wait ",(0,a.kt)("inlineCode",{parentName:"li"},"CompletableFuture"),"  (#14853)"),(0,a.kt)("li",{parentName:"ul"},"[improve][ML]"," Print log when delete empty ledger. (#17859)"),(0,a.kt)("li",{parentName:"ul"},"[improve]"," clean the empty topicAuthenticationMap in zk when revoke permission (#16815)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," fix can not revoke permission after update topic partition (#17393)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix Npe thrown by splitBundle (#17370)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix executeWithRetry result is null (#17694)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix SystemTopicBasedTopicPoliciesService NPE issue (#17602)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix broker cache eviction of entries read by active cursors #17273"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix namespace can not be deleted by force (#18686)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Create replicated subscriptions for new partitions when needed (#18659)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," DnsResolverUtil.TTL should be greater than zero (#18565)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Correctly set byte and message out totals per subscription (#18451)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," fix delete_when_subscriptions_caught_up doesn't work while have active consumers (#18320)"),(0,a.kt)("li",{parentName:"ul"},"[improve][broker]","consumer backlog eviction policy should not reset read position for consumer (#18037)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when ResourceGroupService execute scheduled task. #17840"),(0,a.kt)("li",{parentName:"ul"},"[fix][storage]"," Autorecovery default reppDnsResolverClass to ZkBookieRackAffinityMapping (#15640)"),(0,a.kt)("li",{parentName:"ul"},"[broker]"," Fixed delayed delivery after read operation error (#18098)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix issue where leader broker information isn't available after 10 minutes (#17401)"),(0,a.kt)("li",{parentName:"ul"},"[fix][broker]"," Make full async call in PulsarAuthorizationProvider (#18050)")),(0,a.kt)("h3",{id:"transaction"},"Transaction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][txn]"," Transaction buffer recover blocked by readNext #18833"),(0,a.kt)("li",{parentName:"ul"},"[fix][txn]"," transaction pending ack store future not completely problem (#18943)"),(0,a.kt)("li",{parentName:"ul"},"[fix][txn]"," Fix PendingAckHandleImpl when ",(0,a.kt)("inlineCode",{parentName:"li"},"pendingAckStoreProvider.checkInitializedBefore")," failed (#18859)"),(0,a.kt)("li",{parentName:"ul"},"[improve][txn]"," Add getState in transaction for client API (#17423)"),(0,a.kt)("li",{parentName:"ul"},"[improve][txn]"," Implementation of Delayed Transaction Messages (#17548)")),(0,a.kt)("h3",{id:"pulsar-io-and-pulsar-functions"},"Pulsar IO and Pulsar Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][io]"," Only bundle kafka schema registry client (#18931)"),(0,a.kt)("li",{parentName:"ul"},"[fix][fn]"," Typo in method name (#18844)"),(0,a.kt)("li",{parentName:"ul"},"[fix][function]"," Fix invalid metric type ",(0,a.kt)("inlineCode",{parentName:"li"},"gauge ")," (#18129)"),(0,a.kt)("li",{parentName:"ul"},"[fix][fn]"," fix function failed to start if no ",(0,a.kt)("inlineCode",{parentName:"li"},"typeClassName")," provided in ",(0,a.kt)("inlineCode",{parentName:"li"},"FunctionDetails")," (#18111)")),(0,a.kt)("h3",{id:"tiered-storage"},"Tiered Storage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][offload]"," Fix numerical overflow bug while reading data from tiered storage (#18595)"),(0,a.kt)("li",{parentName:"ul"},"[fix][offload]"," Fix memory leak while Offloading ledgers (#18500)")),(0,a.kt)("h3",{id:"pulsar-sql"},"Pulsar SQL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][sql]"," Fix message without schema issue. (#18745)")),(0,a.kt)("h3",{id:"cli"},"CLI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][cli]"," Fix CLI client produce don't able to use multiple -m send multiple messages (#18238)"),(0,a.kt)("li",{parentName:"ul"},"[fix][cli]"," Check numMessages after incrementing counter #17826")),(0,a.kt)("h2",{id:"admin"},"Admin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[improve][admin]"," Fix NPE in admin-CLI topic stats command (#18326)"),(0,a.kt)("li",{parentName:"ul"},"[improve][admin]"," add topic name and sub name for NotFound error message (#15606)"),(0,a.kt)("li",{parentName:"ul"},"PIP-105: new API to get subscription properties #16095"),(0,a.kt)("li",{parentName:"ul"},"[fix][admin]"," returns 4xx error when pulsar-worker-service is disabled and trying to access it (#17901)"),(0,a.kt)("li",{parentName:"ul"},"Pulsar Admin: grab contextual stacktrace for sync methods (#14620)"),(0,a.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix NPE when get OffloadThreshold on namespace (#18061)")),(0,a.kt)("h3",{id:"security"},"Security"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," Upgrade scala-library to get rid of CVE-2022-36944 (#18021)"),(0,a.kt)("li",{parentName:"ul"},"[Improve][Auth]","Update authentication failed metrics report (#17787)"),(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," Upgrade jackson-databind to 2.13.4.2 to get rid of CVE-2022-42003 (#18394)"),(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," Upgrade protobuf to 3.19.6 to get rid of CVE-2022-3171 (#18086)"),(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," File tiered storage: upgrade jettison to get rid of CVE-2022-40149 (#18022)"),(0,a.kt)("li",{parentName:"ul"},"[fix][sec]"," Upgrade JacksonXML to 2.13.4 (#18020)")),(0,a.kt)("h3",{id:"dependency--library-updates"},"Dependency & Library updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bump jackson version from 2.13.2 to 2.13.3 #16508"),(0,a.kt)("li",{parentName:"ul"},"Remove invalid Netty system property which never was valid for Netty 4.1.x (#13563)"),(0,a.kt)("li",{parentName:"ul"},"[improve][misc]"," Upgrade Netty to 4.1.86.Final and Netty Tcnative to 2.0.54.Final (#18599)"),(0,a.kt)("li",{parentName:"ul"},"[improve][build]"," Remove versions that are handled by netty-bom (#18629)")),(0,a.kt)("h3",{id:"ci--test"},"CI & Test"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[improve][test]"," force initialize field to avoid polluted by mocks (#17022)"),(0,a.kt)("li",{parentName:"ul"},"[fix][flaky-test]","ManagedCursorMetricsTest.testManagedCursorMetrics (#16878)"),(0,a.kt)("li",{parentName:"ul"},"[improve][test]"," remove WhiteBox on MockZooKeeper #17579"),(0,a.kt)("li",{parentName:"ul"},"[improve][test]"," try remove whitebox on MockZooKeeper (#17579)"),(0,a.kt)("li",{parentName:"ul"},"[improve][test]"," Add test case for system topic schema not compatible bug. (#17992)"),(0,a.kt)("li",{parentName:"ul"},"[fix][flaky-test]","BatchMessageWithBatchIndexLevelTest.testBatchMessageAck (#17436)"),(0,a.kt)("li",{parentName:"ul"},"[fix][test]","The pulsarMessageOverhead in 2.10 is different (#18704)"),(0,a.kt)("li",{parentName:"ul"},"[improve][test]"," Add subscribing regex topic test for ",(0,a.kt)("inlineCode",{parentName:"li"},"delete_when_subscriptions_caught_up"),". (#18368)")),(0,a.kt)("h3",{id:"others"},"Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[fix][metrics]","wrong metrics text generated when label_cluster specified #17704"),(0,a.kt)("li",{parentName:"ul"},"[fix][meta]"," fix getChildren in MemoryMetadataStore and EtcdMetadataStore (#18172)"),(0,a.kt)("li",{parentName:"ul"},"[improve][schema]"," Change update schema auth from tenant to produce (#18074)"),(0,a.kt)("li",{parentName:"ul"},"[fix][schema]","ledger handle leak when update schema (#17283)"),(0,a.kt)("li",{parentName:"ul"},"[fix][metrics]"," fixed ProxyStats to use common.stats.JvmMetrics (#15692)"),(0,a.kt)("li",{parentName:"ul"},"[refactor][java]"," Improve docs and code quality about KeyValueSchema usages (#17256)"),(0,a.kt)("li",{parentName:"ul"},"Allow to configure and disable the size of lookahead for detecting fixed delays in messages #17907"),(0,a.kt)("li",{parentName:"ul"},"[refactor][java]"," Unify the acknowledge process for batch and non-batch message IDs #17833"),(0,a.kt)("li",{parentName:"ul"},"[fix][common]"," Fix parsing partitionedKey with Base64 encode issue. (#17687)"),(0,a.kt)("li",{parentName:"ul"},"[fix][schema]"," Fix cherry-pick issue from #18283 (#18555)"),(0,a.kt)("li",{parentName:"ul"},"[fix][monitor]"," fix metrics string encoding (#18138)")))}c.isMDXComponent=!0}}]);