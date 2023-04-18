"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={id:"sql-getting-started",title:"Query data with Pulsar SQL",sidebar_label:"Query data"},l=void 0,s={unversionedId:"sql-getting-started",id:"version-2.11.x/sql-getting-started",title:"Query data with Pulsar SQL",description:"Before querying data in Pulsar, you need to install Pulsar and built-in connectors.",source:"@site/versioned_docs/version-2.11.x/sql-getting-started.md",sourceDirName:".",slug:"/sql-getting-started",permalink:"/docs/2.11.x/sql-getting-started",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/sql-getting-started.md",tags:[],version:"2.11.x",frontMatter:{id:"sql-getting-started",title:"Query data with Pulsar SQL",sidebar_label:"Query data"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/2.11.x/sql-overview"},next:{title:"Configuration and deployment",permalink:"/docs/2.11.x/sql-deployment-configurations"}},i={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Query data in Pulsar",id:"query-data-in-pulsar",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before querying data in Pulsar, you need to install Pulsar and built-in connectors."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.11.x/getting-started-standalone"},"Pulsar"),"."),(0,r.kt)("li",{parentName:"ol"},"Install Pulsar ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.11.x/io-quickstart#install-pulsar-and-built-in-connector"},"built-in connectors"),".")),(0,r.kt)("h2",{id:"query-data-in-pulsar"},"Query data in Pulsar"),(0,r.kt)("p",null,"To query data in Pulsar with Pulsar SQL, complete the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start a Pulsar standalone cluster:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PULSAR_STANDALONE_USE_ZOOKEEPER=1 ./bin/pulsar standalone\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Starting the Pulsar standalone cluster from scratch doesn't enable ZooKeeper by default. However, the Pulsar SQL depends on ZooKeeper. Therefore, you need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"PULSAR_STANDALONE_USE_ZOOKEEPER=1")," to enable ZooKeeper.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Start a Pulsar SQL worker:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar sql-worker run\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"After initializing Pulsar standalone cluster and the SQL worker, run SQL CLI:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar sql\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Test with SQL commands:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'trino> show catalogs;\n Catalog\n---------\n pulsar\n system\n(2 rows)\n\nQuery 20180829_211752_00004_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [0 rows, 0B] [0 rows/s, 0B/s]\n\n\ntrino> show schemas in pulsar;\n        Schema\n-----------------------\n information_schema\n public/default\n public/functions\n(3 rows)\n\nQuery 20180829_211818_00005_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [4 rows, 89B] [21 rows/s, 471B/s]\n\n\ntrino> show tables in pulsar."public/default";\n Table\n-------\n(0 rows)\n\nQuery 20180829_211839_00006_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [0 rows, 0B] [0 rows/s, 0B/s]\n')),(0,r.kt)("p",null,"Since there is no data in Pulsar, no records are returned."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Start the built-in connector ",(0,r.kt)("inlineCode",{parentName:"li"},"DataGeneratorSource")," and ingest some mock data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar-admin sources create --name generator --destinationTopicName generator_test --source-type data-generator\n")),(0,r.kt)("p",null,'And then you can query a topic in the namespace "public/default":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'trino> show tables in pulsar."public/default";\n     Table\n----------------\n generator_test\n(1 row)\n\nQuery 20180829_213202_00000_csyeu, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:02 [1 rows, 38B] [0 rows/s, 17B/s]\n')),(0,r.kt)("p",null,'You can now query the data within the topic "generator_test":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'trino> select * from pulsar."public/default".generator_test;\n\n  firstname  | middlename  |  lastname   |              email               |   username   | password | telephonenumber | age |                 companyemail                  | nationalidentitycardnumber |\n-------------+-------------+-------------+----------------------------------+--------------+----------+-----------------+-----+-----------------------------------------------+----------------------------+\n Genesis     | Katherine   | Wiley       | genesis.wiley@gmail.com          | genesisw     | y9D2dtU3 | 959-197-1860    |  71 | genesis.wiley@interdemconsulting.eu           | 880-58-9247                |\n Brayden     |             | Stanton     | brayden.stanton@yahoo.com        | braydens     | ZnjmhXik | 220-027-867     |  81 | brayden.stanton@supermemo.eu                  | 604-60-7069                |\n Benjamin    | Julian      | Velasquez   | benjamin.velasquez@yahoo.com     | benjaminv    | 8Bc7m3eb | 298-377-0062    |  21 | benjamin.velasquez@hostesltd.biz              | 213-32-5882                |\n Michael     | Thomas      | Donovan     | donovan@mail.com                 | michaeld     | OqBm9MLs | 078-134-4685    |  55 | michael.donovan@memortech.eu                  | 443-30-3442                |\n Brooklyn    | Avery       | Roach       | brooklynroach@yahoo.com          | broach       | IxtBLafO | 387-786-2998    |  68 | brooklyn.roach@warst.biz                      | 085-88-3973                |\n Skylar      |             | Bradshaw    | skylarbradshaw@yahoo.com         | skylarb      | p6eC6cKy | 210-872-608     |  96 | skylar.bradshaw@flyhigh.eu                    | 453-46-0334                |\n...\n')),(0,r.kt)("p",null,"You can query the mock data."))}p.isMDXComponent=!0}}]);