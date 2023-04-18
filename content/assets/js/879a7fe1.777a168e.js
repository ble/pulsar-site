"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[76166],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,d=c["".concat(i,".").concat(h)]||c[h]||m[h]||l;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},24199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"helm-deploy",title:"Deploy a Pulsar cluster on Kubernetes",sidebar_label:"Deploy"},o=void 0,s={unversionedId:"helm-deploy",id:"version-2.11.x/helm-deploy",title:"Deploy a Pulsar cluster on Kubernetes",description:"Before deploying a Pulsar cluster, you need to prepare Kubernetes resources and then continue with the following steps.",source:"@site/versioned_docs/version-2.11.x/helm-deploy.md",sourceDirName:".",slug:"/helm-deploy",permalink:"/docs/2.11.x/helm-deploy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/helm-deploy.md",tags:[],version:"2.11.x",frontMatter:{id:"helm-deploy",title:"Deploy a Pulsar cluster on Kubernetes",sidebar_label:"Deploy"},sidebar:"docsSidebar",previous:{title:"Prepare",permalink:"/docs/2.11.x/helm-prepare"},next:{title:"Upgrade",permalink:"/docs/2.11.x/helm-upgrade"}},i={},p=[{value:"Select configuration options",id:"select-configuration-options",level:2},{value:"Kubernetes namespace",id:"kubernetes-namespace",level:4},{value:"Persistence",id:"persistence",level:4},{value:"Affinity",id:"affinity",level:4},{value:"Components",id:"components",level:4},{value:"Docker images",id:"docker-images",level:4},{value:"TLS",id:"tls",level:4},{value:"Provision TLS certificates using cert-manager",id:"provision-tls-certificates-using-cert-manager",level:5},{value:"Enable TLS",id:"enable-tls",level:5},{value:"Authentication",id:"authentication",level:4},{value:"Authorization",id:"authorization",level:4},{value:"CPU and RAM resource requirements",id:"cpu-and-ram-resource-requirements",level:4},{value:"Install dependent charts",id:"install-dependent-charts",level:2},{value:"Install storage provisioner",id:"install-storage-provisioner",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Prepare Helm release",id:"prepare-helm-release",level:2},{value:"Deploy Pulsar cluster using Helm",id:"deploy-pulsar-cluster-using-helm",level:2},{value:"Access Pulsar cluster",id:"access-pulsar-cluster",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Uninstall",id:"uninstall",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before deploying a Pulsar cluster, you need to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.11.x/helm-prepare"},"prepare Kubernetes resources")," and then continue with the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select configuration options"),(0,r.kt)("li",{parentName:"ol"},"Install dependent charts"),(0,r.kt)("li",{parentName:"ol"},"Prepare Helm release"),(0,r.kt)("li",{parentName:"ol"},"Deploy your Pulsar cluster using Helm")),(0,r.kt)("h2",{id:"select-configuration-options"},"Select configuration options"),(0,r.kt)("p",null,"Specify how to run Pulsar using Helm's ",(0,r.kt)("inlineCode",{parentName:"p"},"--set option.name=value")," command line option. In each section, collect the options that are combined to use with the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("h4",{id:"kubernetes-namespace"},"Kubernetes namespace"),(0,r.kt)("p",null,"By default, the Pulsar Helm Chart is installed in a namespace called ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"namespace: pulsar\n")),(0,r.kt)("p",null,"To install the Pulsar Helm Chart into a different Kubernetes namespace, you can include this option in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--set namespace=<different-k8s-namespace>\n")),(0,r.kt)("p",null,"By default, the Pulsar Helm Chart doesn't create the namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"namespaceCreate: false\n")),(0,r.kt)("p",null,"To use the Pulsar Helm Chart to create the Kubernetes namespace automatically, you can include this option in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--set namespaceCreate=true\n")),(0,r.kt)("h4",{id:"persistence"},"Persistence"),(0,r.kt)("p",null,"By default, the Pulsar Helm Chart creates Volume Claims with the expectation that a dynamic provisioner creates the underlying Persistent Volumes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"volumes:\n  persistence: true\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before installing the production instance of Pulsar, ensure to plan the storage settings to avoid extra storage migration work. Because after initial installation, you must edit Kubernetes objects manually if you want to change storage settings.")),(0,r.kt)("p",null,"The Pulsar Helm Chart is designed for production use. To use the Pulsar Helm Chart in a development environment (such as Minikube), you can disable persistence by including this option in your ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--set volumes.persistence=false\n")),(0,r.kt)("h4",{id:"affinity"},"Affinity"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"anti-affinity")," is enabled to ensure pods of the same component can run on different nodes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"affinity:\n  anti_affinity: true\n")),(0,r.kt)("p",null,"To use the Pulsar Helm Chart in a development environment (such as Minikube), you can disable ",(0,r.kt)("inlineCode",{parentName:"p"},"anti-affinity")," by including this option in your ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--set affinity.anti_affinity=false\n")),(0,r.kt)("h4",{id:"components"},"Components"),(0,r.kt)("p",null,"The Pulsar Helm Chart is designed for production usage. It deploys a production-ready Pulsar cluster, including Pulsar core components and monitoring components."),(0,r.kt)("p",null,"You can customize the components to be deployed by turning on/off individual components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## Components\n##\n## Control what components of Apache Pulsar to deploy for the cluster\ncomponents:\n  # zookeeper\n  zookeeper: true\n  # bookkeeper\n  bookkeeper: true\n  # bookkeeper - autorecovery\n  autorecovery: true\n  # broker\n  broker: true\n  # functions\n  functions: true\n  # proxy\n  proxy: true\n  # toolset\n  toolset: true\n  # pulsar manager\n  pulsar_manager: true\n\n## Monitoring Components\n##\n## Control what components of the monitoring stack to deploy for the cluster\nmonitoring:\n  # monitoring - prometheus\n  prometheus: true\n  # monitoring - grafana\n  grafana: true\n")),(0,r.kt)("h4",{id:"docker-images"},"Docker images"),(0,r.kt)("p",null,"The Pulsar Helm Chart is designed to enable controlled upgrades. So it can configure independent image versions for components. You can customize the images by setting individual components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## Images\n##\n## Control what images to use for each component\nimages:\n  zookeeper:\n    repository: apachepulsar/pulsar-all\n    tag: 2.11.0\n    pullPolicy: IfNotPresent\n  bookie:\n    repository: apachepulsar/pulsar-all\n    tag: 2.11.0\n    pullPolicy: IfNotPresent\n  autorecovery:\n    repository: apachepulsar/pulsar-all\n    tag: 2.11.0\n    pullPolicy: IfNotPresent\n  broker:\n    repository: apachepulsar/pulsar-all\n    tag: 2.11.0\n    pullPolicy: IfNotPresent\n  proxy:\n    repository: apachepulsar/pulsar-all\n    tag: 2.11.0\n    pullPolicy: IfNotPresent\n  functions:\n    repository: apachepulsar/pulsar-all\n    tag: 2.11.0\n  pulsar_manager:\n    repository: apachepulsar/pulsar-manager\n    tag: v0.3.0\n    pullPolicy: IfNotPresent\n    hasCommand: false\n")),(0,r.kt)("h4",{id:"tls"},"TLS"),(0,r.kt)("p",null,"The Pulsar Helm Chart can be configured to enable TLS (Transport Layer Security) to protect all the traffic between components. Before enabling TLS, you have to provision TLS certificates for the required components."),(0,r.kt)("h5",{id:"provision-tls-certificates-using-cert-manager"},"Provision TLS certificates using cert-manager"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," to provision the TLS certificates, you have to install the ",(0,r.kt)("a",{parentName:"p",href:"#install-cert-manager"},"cert-manager")," before installing the Pulsar Helm Chart. After successfully installing the cert-manager, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"certs.internal_issuer.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Therefore, the Pulsar Helm Chart can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"selfsigning")," TLS certificates for the configured components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"certs:\n  internal_issuer:\n    enabled: false\n    component: internal-cert-issuer\n    type: selfsigning\n")),(0,r.kt)("p",null,"You can also customize the generated TLS certificates by configuring the fields as the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tls:\n  # common settings for generating certs\n  common:\n    # 90d\n    duration: 2160h\n    # 15d\n    renewBefore: 360h\n    organization:\n      - pulsar\n    keySize: 4096\n    keyAlgorithm: rsa\n    keyEncoding: pkcs8\n")),(0,r.kt)("h5",{id:"enable-tls"},"Enable TLS"),(0,r.kt)("p",null,"After installing the ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager"),", you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to enable TLS encryption for the entire cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tls:\n  enabled: false\n")),(0,r.kt)("p",null,"You can also configure whether to enable TLS encryption for individual components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tls:\n  # settings for generating certs for proxy\n  proxy:\n    enabled: false\n    cert_name: tls-proxy\n  # settings for generating certs for broker\n  broker:\n    enabled: false\n    cert_name: tls-broker\n  # settings for generating certs for bookies\n  bookie:\n    enabled: false\n    cert_name: tls-bookie\n  # settings for generating certs for zookeeper\n  zookeeper:\n    enabled: false\n    cert_name: tls-zookeeper\n  # settings for generating certs for recovery\n  autorecovery:\n    cert_name: tls-recovery\n  # settings for generating certs for toolset\n  toolset:\n    cert_name: tls-toolset\n")),(0,r.kt)("h4",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"By default, authentication is disabled. You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.authentication.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to enable authentication.\nCurrently, the Pulsar Helm Chart only supports the JWT authentication provider. You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.authentication.provider")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt")," to use the JWT authentication provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Enable or disable broker authentication and authorization.\nauth:\n  authentication:\n    enabled: false\n    provider: "jwt"\n    jwt:\n      # Enable JWT authentication\n      # If the token is generated by a secret key, set the usingSecretKey as true.\n      # If the token is generated by a private key, set the usingSecretKey as false.\n      usingSecretKey: false\n  superUsers:\n    # broker to broker communication\n    broker: "broker-admin"\n    # proxy to broker communication\n    proxy: "proxy-admin"\n    # pulsar-admin client to broker/proxy communication\n    client: "admin"\n')),(0,r.kt)("p",null,"To enable authentication, you can run ",(0,r.kt)("a",{parentName:"p",href:"#prepare-helm-release"},"prepare helm release")," to generate token secret keys and tokens for three super users specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.superUsers")," field. The generated token keys and super user tokens are uploaded and stored as Kubernetes secrets prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"<pulsar-release-name>-token-"),". You can use the following command to find those secrets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secrets -n <k8s-namespace>\n")),(0,r.kt)("h4",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"By default, authorization is disabled. Authorization can be enabled only when authentication is enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"auth:\n  authorization:\n    enabled: false\n")),(0,r.kt)("p",null,"To enable authorization, you can include this option in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--set auth.authorization.enabled=true\n")),(0,r.kt)("h4",{id:"cpu-and-ram-resource-requirements"},"CPU and RAM resource requirements"),(0,r.kt)("p",null,"By default, the resource requests and the number of replicas for the Pulsar components in the Pulsar Helm Chart are adequate for small production deployment. If you deploy a non-production instance, you can reduce the defaults to fit into a smaller cluster."),(0,r.kt)("p",null,"Once you have all of your configuration options collected, you can install dependent charts before installing the Pulsar Helm Chart."),(0,r.kt)("h2",{id:"install-dependent-charts"},"Install dependent charts"),(0,r.kt)("h3",{id:"install-storage-provisioner"},"Install storage provisioner"),(0,r.kt)("p",null,"For more information about storage provisioner, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/#provisioner"},"Kubernetes documentation"),". Note that you need to create a storage class for your Kubernetes cluster and configure the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-helm-chart/blob/master/charts/pulsar/values.yaml"},"storage class name")," in the Helm Chart."),(0,r.kt)("p",null,"If you want to use ",(0,r.kt)("strong",{parentName:"p"},"local")," ",(0,r.kt)("a",{parentName:"p",href:"#persistence"},"persistent volumes")," as the persistent storage, you need to install a local storage provisioner. Here are two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher/local-path-provisioner"},"Local Path Provisioner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/sig-storage-local-static-provisioner"},"Local Persistence Volume Static Provisioner"))),(0,r.kt)("h3",{id:"install-cert-manager"},"Install cert-manager"),(0,r.kt)("p",null,"The Pulsar Helm Chart uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jetstack/cert-manager"},"cert-manager")," to provision and manage TLS certificates automatically. To enable TLS encryption for brokers or proxies, you need to install the cert-manager in advance."),(0,r.kt)("p",null,"For details about how to install the cert-manager, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/kubernetes/#installing-with-helm"},"official instructions"),"."),(0,r.kt)("p",null,"Alternatively, we provide a bash script ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/cert-manager/install-cert-manager.sh"},"install-cert-manager.sh")," to install a cert-manager release to the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/cert-manager/install-cert-manager.sh\n")),(0,r.kt)("h2",{id:"prepare-helm-release"},"Prepare Helm release"),(0,r.kt)("p",null,"Once you have installed all the dependent charts and collected all of your configuration options, you can run ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh"},"prepare_helm_release.sh")," to prepare the Helm release."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/pulsar/prepare_helm_release.sh -n <k8s-namespace> -k <helm-release-name>\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"prepare_helm_release")," creates the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Kubernetes namespace for installing the Pulsar release."),(0,r.kt)("li",{parentName:"ul"},"JWT secret keys and tokens for three super users: ",(0,r.kt)("inlineCode",{parentName:"li"},"broker-admin"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy-admin"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"),". By default, it generates an asymmetric public/private key pair. You can choose to generate a symmetric secret key by specifying ",(0,r.kt)("inlineCode",{parentName:"li"},"--symmetric"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"broker-admin")," role is used for inter-broker communications."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy-admin")," role is used for proxies to communicate with brokers."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")," role is used by the admin tools.")))),(0,r.kt)("h2",{id:"deploy-pulsar-cluster-using-helm"},"Deploy Pulsar cluster using Helm"),(0,r.kt)("p",null,"Once you have finished the above steps, you can install a Helm release."),(0,r.kt)("p",null,"In this example, the Helm release is named ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add apache https://pulsar.apache.org/charts\nhelm repo update\nhelm install pulsar apache/pulsar \\\n    --timeout 10m \\\n    --set [your configuration options]\n")),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--version <installation version>")," option if you want to install a specific version of Pulsar Helm Chart."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A list of installed resources is output once the Pulsar cluster is deployed. This may take 5-10 minutes."),(0,r.kt)("p",{parentName:"admonition"},"To check the status of the deployment, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm status pulsar")," command. It can also be done while the deployment is taking place if you run the command in another terminal.")),(0,r.kt)("h2",{id:"access-pulsar-cluster"},"Access Pulsar cluster"),(0,r.kt)("p",null,"The default values will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIP")," for the following resources, which you can use to interact with the cluster."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proxy: You can use the IP address to produce and consume messages to the installed Pulsar cluster."),(0,r.kt)("li",{parentName:"ul"},"Pulsar Manager: You can access the Pulsar Manager UI at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<pulsar-manager-ip>:9527"),"."),(0,r.kt)("li",{parentName:"ul"},"Grafana Dashboard: You can access the Grafana dashboard at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<grafana-dashboard-ip>:3000"),".")),(0,r.kt)("p",null,"To find the IP addresses of those components, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get service -n <k8s-namespace>\n")),(0,r.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,r.kt)("p",null,"Although we have done our best to make these charts as seamless as possible, troubles do go out of our control occasionally. We have been collecting tips and tricks for troubleshooting common issues. Check it first before raising an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/new/choose"},"issue"),", and feel free to add your solutions by creating a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/compare"},"Pull Request"),"."),(0,r.kt)("h2",{id:"uninstall"},"Uninstall"),(0,r.kt)("p",null,"To uninstall the Pulsar Helm Chart, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall <pulsar-release-name>\n")),(0,r.kt)("p",null,"For the purposes of continuity, some Kubernetes objects in these charts cannot be removed by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm uninstall")," command. It is recommended to ",(0,r.kt)("em",{parentName:"p"},"consciously")," remove these items, as they affect re-deployment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PVCs for stateful data: remove these items.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ZooKeeper: This is your metadata."),(0,r.kt)("li",{parentName:"ul"},"BookKeeper: This is your data."),(0,r.kt)("li",{parentName:"ul"},"Prometheus: This is your metrics data, which can be safely removed."))),(0,r.kt)("li",{parentName:"ul"},"Secrets: if the secrets are generated by the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh"},"prepared release script"),", they contain secret keys and tokens. You can use the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/cleanup_helm_release.sh"},"cleanup release script")," to remove these secrets and tokens as needed.")))}c.isMDXComponent=!0}}]);