module.exports = {
  languages: [
    "Java",
    "C++",
    "Go",
    "Python",
    "Node.js",
    "C#/DotPulsar",
    "Websocket",
    "REST",
    ".NET (C#/F#/VB)",
  ],
  client: [
    {
      Feature: "TLS encryption",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 2,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Authentication",
      Children: [
        {
          Feature: "JWT",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "mTLS",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Kerberos",
          Java: 2,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 0,
        },
        {
          Feature: "OAuth2",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Athenz",
          Java: 2,
          "C++": 0,
          Go: 2,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 0,
        },
        {
          Feature: "HTTP Basic",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 0,
        },
      ],
    },
    {
      Feature: "Transaction",
      Java: 2,
      "C++": 0,
      Go: 0,
      Python: 0,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Cluster-level failover",
      Java: 2,
      "C++": 0,
      Go: 0,
      Python: 0,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 0,
    },
    {
      Feature: "Multi-host service",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Statistics",
      Java: 2,
      "C++": 0,
      Go: 0,
      Python: 0,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Proxy",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 2,
      Websocket: 2,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Reconnection",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 2,
      Websocket: 2,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
  ],
  producer: [
    {
      Feature: "Batching",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 0,
      Websocket: 2,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Chunking",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Delayed message delivery",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 2,
      Websocket: 0,
      REST: 2,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Compression",
      Children: [
        {
          Feature: "LZ4",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 2,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "ZLIB",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "ZSTD",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "SNAPPY",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
      ],
    },
    {
      Feature: "Schema",
      Children: [
        {
          Feature: "Primitive",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 2,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Avro",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 2,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "JSON",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 2,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Protobuf",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Protobuf-native",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Native avro",
          Java: 2,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 0,
        },
        {
          Feature: "KeyValue",
          Java: 2,
          "C++": 2,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 2,
          REST: 2,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Autoschema",
          Java: 2,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
      ],
    },
    {
      Feature: "Transaction",
      Java: 2,
      "C++": 0,
      Go: 0,
      Python: 0,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "End-to-end encryption",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Sync | Async Send",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 2,
      Websocket: 2,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
  ],
  consumer: [
    {
      Feature: "ACK",
      Children: [
        {
          Feature: "Batch-Index ACK",
          Java: 2,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "ACK Timeout",
          Java: 2,
          "C++": 2,
          Go: 0,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "NACK",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "NACK Backoff",
          Java: 2,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 0,
        },
      ],
    },
    {
      Feature: "Batching",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 2,
      Websocket: 2,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Chunking",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Seek",
      Children: [
        {
          Feature: "by timestamp",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "by messageID",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 0,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Inclusive/Non-inclusive",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 0,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
      ],
    },
    {
      Feature: "Subscription type",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 2,
      Websocket: 2,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Subscription mode",
      Java: 2,
      "C++": 0,
      Go: 2,
      Python: 0,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Retry letter topic",
      Java: 2,
      "C++": 0,
      Go: 2,
      Python: 0,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Dead letter topic",
      Java: 2,
      "C++": 0,
      Go: 2,
      Python: 0,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 2,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Compression",
      Children: [
        {
          Feature: "LZ4",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 2,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "ZLIB",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "ZSTD",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "SNAPPY",
          Java: 2,
          "C++": 2,
          Go: 0,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
      ],
    },
    {
      Feature: "Compaction",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 2,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Schema",
      Children: [
        {
          Feature: "Primitive",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Avro",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "JSON",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Protobuf",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Protobuf-native",
          Java: 0,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Native avro",
          Java: 0,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 0,
        },
        {
          Feature: "KeyValue",
          Java: 2,
          "C++": 2,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 2,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Autoschema",
          Java: 2,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
      ],
    },
    {
      Feature: "End-to-end encryption",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 2,
      Websocket: 2,
      REST: 2,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Transaction",
      Java: 2,
      "C++": 0,
      Go: 0,
      Python: 0,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
  ],
  reader: [
    {
      Feature: "Batching",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 2,
      Websocket: 2,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Chunking",
      Java: 2,
      "C++": 0,
      Go: 2,
      Python: 0,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Seek",
      Children: [
        {
          Feature: "by timestamp",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 0,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "by messageID",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Inclusive/Non-inclusive",
          Java: 2,
          "C++": 0,
          Go: 2,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
      ],
    },
    {
      Feature: "Compression",
      Children: [
        {
          Feature: "LZ4",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 2,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "ZLIB",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "ZSTD",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "SNAPPY",
          Java: 2,
          "C++": 2,
          Go: 0,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
      ],
    },
    {
      Feature: "Compaction",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 2,
      "C#/DotPulsar": 2,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Schema",
      Children: [
        {
          Feature: "Primitive",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 2,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Avro",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "JSON",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 2,
          Nodejs: 2,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Protobuf",
          Java: 2,
          "C++": 0,
          Go: 2,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Protobuf-native",
          Java: 2,
          "C++": 0,
          Go: 2,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Native avro",
          Java: 2,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 0,
        },
        {
          Feature: "KeyValue",
          Java: 2,
          "C++": 2,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Autoschema",
          Java: 2,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
      ],
    },
    {
      Feature: "End-to-end encryption",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 2,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
  ],
  tableview: [
    {
      Feature: "Compaction",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 0,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 2,
    },
    {
      Feature: "Schema",
      Children: [
        {
          Feature: "Primitive",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Avro",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "JSON",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Protobuf",
          Java: 2,
          "C++": 2,
          Go: 2,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Protobuf-native",
          Java: 0,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 0,
        },
        {
          Feature: "Native avro",
          Java: 0,
          "C++": 0,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 0,
        },
        {
          Feature: "KeyValue",
          Java: 2,
          "C++": 2,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
        {
          Feature: "Autoschema",
          Java: 2,
          "C++": 2,
          Go: 0,
          Python: 0,
          Nodejs: 0,
          "C#/DotPulsar": 0,
          Websocket: 0,
          REST: 0,
          "NET(C#/F#/VB)": 2,
        },
      ],
    },
    {
      Feature: "Listener",
      Java: 2,
      "C++": 2,
      Go: 2,
      Python: 0,
      Nodejs: 0,
      "C#/DotPulsar": 0,
      Websocket: 0,
      REST: 0,
      "NET(C#/F#/VB)": 0,
    },
  ],
};
