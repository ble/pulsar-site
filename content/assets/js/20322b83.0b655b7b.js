"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66158],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?t.createElement(g,s(s({ref:r},p),{},{components:n})):t.createElement(g,s({ref:r},p))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86533:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const o={id:"client-libraries-go-use",title:"Use Pulsar Go client",sidebar_label:"Use"},s=void 0,i={unversionedId:"client-libraries-go-use",id:"client-libraries-go-use",title:"Use Pulsar Go client",description:"Create a producer",source:"@site/docs/client-libraries-go-use.md",sourceDirName:".",slug:"/client-libraries-go-use",permalink:"/docs/next/client-libraries-go-use",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-go-use.md",tags:[],version:"current",frontMatter:{id:"client-libraries-go-use",title:"Use Pulsar Go client",sidebar_label:"Use"},sidebar:"docsSidebar",previous:{title:"Initialize",permalink:"/docs/next/client-libraries-go-initialize"},next:{title:"Python client",permalink:"/docs/next/client-libraries-python"}},l={},c=[{value:"Create a producer",id:"create-a-producer",level:2},{value:"Monitor",id:"monitor",level:3},{value:"Create a consumer",id:"create-a-consumer",level:2},{value:"Create a single-topic consumer",id:"create-a-single-topic-consumer",level:3},{value:"Create a regex-topic consumer",id:"create-a-regex-topic-consumer",level:3},{value:"Monitor",id:"monitor-1",level:3},{value:"Create a reader",id:"create-a-reader",level:2}],p={toc:c};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-a-producer"},"Create a producer"),(0,a.kt)("p",null,"You can ",(0,a.kt)("a",{parentName:"p",href:"#producer-configuration"},"configure")," Go producers using a ",(0,a.kt)("inlineCode",{parentName:"p"},"ProducerOptions")," object. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'producer, err := client.CreateProducer(pulsar.ProducerOptions{\n    Topic: "my-topic",\n})\n\nif err != nil {\n    log.Fatal(err)\n}\n\n_, err = producer.Send(context.Background(), &pulsar.ProducerMessage{\n    Payload: []byte("hello"),\n})\n\ndefer producer.Close()\n\nif err != nil {\n    fmt.Println("Failed to publish message", err)\n}\nfmt.Println("Published message")\n')),(0,a.kt)("p",null,"For all available methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"Producer")," interface, see ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#Producer"},"here"),"."),(0,a.kt)("h3",{id:"monitor"},"Monitor"),(0,a.kt)("p",null,"Pulsar Go client registers client metrics using Prometheus. This section demonstrates how to create a simple Pulsar producer application that exposes Prometheus metrics via HTTP."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Write a simple producer application.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Create a Pulsar client\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\n\ndefer client.Close()\n\n// Start a separate goroutine for Prometheus metrics\n// In this case, Prometheus metrics can be accessed via http://localhost:2112/metrics\ngo func() {\n    prometheusPort := 2112\n    log.Printf("Starting Prometheus metrics at http://localhost:%v/metrics\\n", prometheusPort)\n    http.Handle("/metrics", promhttp.Handler())\n    err = http.ListenAndServe(":"+strconv.Itoa(prometheusPort), nil)\n    if err != nil {\n        log.Fatal(err)\n    }\n}()\n\n// Create a producer\nproducer, err := client.CreateProducer(pulsar.ProducerOptions{\n    Topic: "topic-1",\n})\nif err != nil {\n    log.Fatal(err)\n}\n\ndefer producer.Close()\n\nctx := context.Background()\n\n// Write your business logic here\n// In this case, you build a simple Web server. You can produce messages by requesting http://localhost:8082/produce\nwebPort := 8082\nhttp.HandleFunc("/produce", func(w http.ResponseWriter, r *http.Request) {\n    msgId, err := producer.Send(ctx, &pulsar.ProducerMessage{\n        Payload: []byte(fmt.Sprintf("hello world")),\n    })\n    if err != nil {\n        log.Fatal(err)\n    } else {\n        log.Printf("Published message: %v", msgId)\n        fmt.Fprintf(w, "Published message: %v", msgId)\n    }\n})\n\nerr = http.ListenAndServe(":"+strconv.Itoa(webPort), nil)\nif err != nil {\n    log.Fatal(err)\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"To scrape metrics from applications, configure a local running Prometheus instance using a configuration file (",(0,a.kt)("inlineCode",{parentName:"li"},"prometheus.yml"),").")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n- job_name: pulsar-client-go-metrics\n  scrape_interval: 10s\n  static_configs:\n  - targets:\n  - localhost:2112\n")),(0,a.kt)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,a.kt)("p",null,"Pulsar consumers subscribe to one or more Pulsar topics and listen for incoming messages produced on that topic/those topics. You can configure Go consumers using a ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerOptions")," object."),(0,a.kt)("p",null,"Here's a basic example that uses channels:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'consumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:            "topic-1",\n    SubscriptionName: "my-sub",\n    Type:             pulsar.Shared,\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n\nfor i := 0; i < 10; i++ {\n    // may block here\n    msg, err := consumer.Receive(context.Background())\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Printf("Received message msgId: %#v -- content: \'%s\'\\n",\n        msg.ID(), string(msg.Payload()))\n\n    consumer.Ack(msg)\n}\n\nif err := consumer.Unsubscribe(); err != nil {\n    log.Fatal(err)\n}\n')),(0,a.kt)("p",null,"For all available methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer")," interface, see ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#Consumer"},"here"),"."),(0,a.kt)("h3",{id:"create-a-single-topic-consumer"},"Create a single-topic consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{URL: "pulsar://localhost:6650"})\nif err != nil {\n    log.Fatal(err)\n}\n\ndefer client.Close()\n\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    // fill `Topic` field will create a single-topic consumer\n    Topic:            "topic-1",\n    SubscriptionName: "my-sub",\n    Type:             pulsar.Shared,\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n')),(0,a.kt)("h3",{id:"create-a-regex-topic-consumer"},"Create a regex-topic consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\ndefer client.Close()\n\ntopicsPattern := "persistent://public/default/topic.*"\nopts := pulsar.ConsumerOptions{\n    // fill `TopicsPattern` field will create a regex consumer\n    TopicsPattern:    topicsPattern,\n    SubscriptionName: "regex-sub",\n}\n\nconsumer, err := client.Subscribe(opts)\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n')),(0,a.kt)("h3",{id:"monitor-1"},"Monitor"),(0,a.kt)("p",null,"In this guide, This section demonstrates how to create a simple Pulsar consumer application that exposes Prometheus metrics via HTTP."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Write a simple consumer application.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Create a Pulsar client\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\n\ndefer client.Close()\n\n// Start a separate goroutine for Prometheus metrics\n// In this case, Prometheus metrics can be accessed via http://localhost:2112/metrics\ngo func() {\n    prometheusPort := 2112\n    log.Printf("Starting Prometheus metrics at http://localhost:%v/metrics\\n", prometheusPort)\n    http.Handle("/metrics", promhttp.Handler())\n    err = http.ListenAndServe(":"+strconv.Itoa(prometheusPort), nil)\n    if err != nil {\n        log.Fatal(err)\n    }\n}()\n\n// Create a consumer\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:            "topic-1",\n    SubscriptionName: "sub-1",\n    Type:             pulsar.Shared,\n})\nif err != nil {\n    log.Fatal(err)\n}\n\ndefer consumer.Close()\n\nctx := context.Background()\n\n// Write your business logic here\n// In this case, you build a simple Web server. You can consume messages by requesting http://localhost:8083/consume\nwebPort := 8083\nhttp.HandleFunc("/consume", func(w http.ResponseWriter, r *http.Request) {\n    msg, err := consumer.Receive(ctx)\n    if err != nil {\n        log.Fatal(err)\n    } else {\n        log.Printf("Received message msgId: %v -- content: \'%s\'\\n", msg.ID(), string(msg.Payload()))\n        fmt.Fprintf(w, "Received message msgId: %v -- content: \'%s\'\\n", msg.ID(), string(msg.Payload()))\n        consumer.Ack(msg)\n    }\n})\n\nerr = http.ListenAndServe(":"+strconv.Itoa(webPort), nil)\nif err != nil {\n    log.Fatal(err)\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"To scrape metrics from applications, configure a local running Prometheus instance using a configuration file (",(0,a.kt)("inlineCode",{parentName:"li"},"prometheus.yml"),").")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n- job_name: pulsar-client-go-metrics\n  scrape_interval: 10s\n  static_configs:\n  - targets:\n  - localhost: 2112\n")),(0,a.kt)("h2",{id:"create-a-reader"},"Create a reader"),(0,a.kt)("p",null,"Pulsar readers process messages from Pulsar topics. Readers are different from consumers because with readers you need to explicitly specify which message in the stream you want to begin with (consumers, on the other hand, automatically begin with the most recent unacked message). You can ",(0,a.kt)("a",{parentName:"p",href:"#reader-configuration"},"configure")," Go readers using a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReaderOptions")," object. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'reader, err := client.CreateReader(pulsar.ReaderOptions{\n    Topic:          "topic-1",\n    StartMessageID: pulsar.EarliestMessageID(),\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer reader.Close()\n')),(0,a.kt)("p",null,"For all available methods of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Reader")," interface, see ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#Reader"},"here"),"."))}u.isMDXComponent=!0}}]);