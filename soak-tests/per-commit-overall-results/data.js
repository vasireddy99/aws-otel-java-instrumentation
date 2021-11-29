window.BENCHMARK_DATA = {
  "lastUpdate": 1638216667500,
  "repoUrl": "https://github.com/aws-observability/aws-otel-java-instrumentation",
  "entries": {
    "Soak Test Results - sample-app-spark-awssdkv1-auto": [
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a49aa48ce7a7eaece23dff0f773cc9495980746e",
          "message": "Fix gh-pages link for auto Soak Test links (#92)",
          "timestamp": "2021-09-29T04:51:56Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/a49aa48ce7a7eaece23dff0f773cc9495980746e"
        },
        "date": 1632946254434,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 27.185208333333332,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3454.077990301724,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1e5ce35bb81462d44f539d98bb481659f8e13392",
          "message": "Detect docker-compose start up failures and fail early (#95)",
          "timestamp": "2021-10-14T05:02:30Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/1e5ce35bb81462d44f539d98bb481659f8e13392"
        },
        "date": 1634242066453,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 24.096934523809523,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3461.8015894396553,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "795b02e14aa9e12ae2568bb395430eec2b2242ba",
          "message": "Fix log injection of xray ID. (#102)",
          "timestamp": "2021-10-19T23:51:55Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/795b02e14aa9e12ae2568bb395430eec2b2242ba"
        },
        "date": 1634760360025,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 25.618363095238095,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3455.0024245689656,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "df0590993f7aed5887f9c79eb77af78268fe1f69",
          "message": "Update to OTel 1.7 and dependencies (#103)\n\n* Update to OTel 1.7\r\n\r\n* Update dependencies\r\n\r\n* Update licenses",
          "timestamp": "2021-10-25T03:46:50Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/df0590993f7aed5887f9c79eb77af78268fe1f69"
        },
        "date": 1635192374472,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 25.021724137931034,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3459.3243489583333,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4a29df3ff7bbfb3583b078e25e7eca3351f57dc9",
          "message": "Use upstream benchmark action + update issues when names match (#104)",
          "timestamp": "2021-11-02T17:17:01Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/4a29df3ff7bbfb3583b078e25e7eca3351f57dc9"
        },
        "date": 1635970248329,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 22.327827380952378,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3457.0336745689656,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a75098a6d21338c7247f48324ba08a874eac20bf",
          "message": "Revert \"Use aws-credentials action to configure creds bc it uses OIDC by default (#110)\" (#111)\n\nThis reverts commit 16bd8a42187668bc85f790883f9ad7468a9dca6b.",
          "timestamp": "2021-11-04T00:11:01Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/a75098a6d21338c7247f48324ba08a874eac20bf"
        },
        "date": 1636056674806,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 38.87057471264368,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3463.515625,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5d89f4cfe5222eaaa94205a0458f3eb32f8eee0c",
          "message": "Update OTel dependency to 1.7.2 (#112)",
          "timestamp": "2021-11-05T00:05:42Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/5d89f4cfe5222eaaa94205a0458f3eb32f8eee0c"
        },
        "date": 1636142999603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 22.498065476190476,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3454.806842672414,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2a354ab79961e834c49db7de920481956327295e",
          "message": "Bump the CPU Threshold after several violations (#120)",
          "timestamp": "2021-11-27T03:49:39Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/2a354ab79961e834c49db7de920481956327295e"
        },
        "date": 1638043714412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 30.66970238095238,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3456.3558728448274,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0247a4538a905388ebcc9c190da864f044403694",
          "message": "Update Gradle and build dependencies. (#119)",
          "timestamp": "2021-11-29T01:00:53Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/0247a4538a905388ebcc9c190da864f044403694"
        },
        "date": 1638216653185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 26.884553571428572,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3454.723733836207,
            "unit": "Megabytes"
          }
        ]
      }
    ],
    "Soak Test Results - sample-app-springboot-auto": [
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a49aa48ce7a7eaece23dff0f773cc9495980746e",
          "message": "Fix gh-pages link for auto Soak Test links (#92)",
          "timestamp": "2021-09-29T04:51:56Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/a49aa48ce7a7eaece23dff0f773cc9495980746e"
        },
        "date": 1632946259549,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 27.619791666666664,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3488.2797683189656,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "525ef8f8ea2f3922515ba6b38a232e5e4dc4b4a2",
          "message": "Increase points to alarm for memory usage poll (#94)",
          "timestamp": "2021-10-11T02:50:29Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/525ef8f8ea2f3922515ba6b38a232e5e4dc4b4a2"
        },
        "date": 1633982732871,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 22.78252976190476,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3482.6492456896553,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1e5ce35bb81462d44f539d98bb481659f8e13392",
          "message": "Detect docker-compose start up failures and fail early (#95)",
          "timestamp": "2021-10-14T05:02:30Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/1e5ce35bb81462d44f539d98bb481659f8e13392"
        },
        "date": 1634242108719,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 29.73767857142857,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3488.458917025862,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "795b02e14aa9e12ae2568bb395430eec2b2242ba",
          "message": "Fix log injection of xray ID. (#102)",
          "timestamp": "2021-10-19T23:51:55Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/795b02e14aa9e12ae2568bb395430eec2b2242ba"
        },
        "date": 1634760362087,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 29.715890804597702,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3480.0290364583334,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "df0590993f7aed5887f9c79eb77af78268fe1f69",
          "message": "Update to OTel 1.7 and dependencies (#103)\n\n* Update to OTel 1.7\r\n\r\n* Update dependencies\r\n\r\n* Update licenses",
          "timestamp": "2021-10-25T03:46:50Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/df0590993f7aed5887f9c79eb77af78268fe1f69"
        },
        "date": 1635278939987,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 24.698958333333334,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3485.0006734913795,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4a29df3ff7bbfb3583b078e25e7eca3351f57dc9",
          "message": "Use upstream benchmark action + update issues when names match (#104)",
          "timestamp": "2021-11-02T17:17:01Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/4a29df3ff7bbfb3583b078e25e7eca3351f57dc9"
        },
        "date": 1635970272176,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 30.3241091954023,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3494.4493489583333,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a75098a6d21338c7247f48324ba08a874eac20bf",
          "message": "Revert \"Use aws-credentials action to configure creds bc it uses OIDC by default (#110)\" (#111)\n\nThis reverts commit 16bd8a42187668bc85f790883f9ad7468a9dca6b.",
          "timestamp": "2021-11-04T00:11:01Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/a75098a6d21338c7247f48324ba08a874eac20bf"
        },
        "date": 1636056685163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 38.730803571428574,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3490.498922413793,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5d89f4cfe5222eaaa94205a0458f3eb32f8eee0c",
          "message": "Update OTel dependency to 1.7.2 (#112)",
          "timestamp": "2021-11-05T00:05:42Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/5d89f4cfe5222eaaa94205a0458f3eb32f8eee0c"
        },
        "date": 1636142835189,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 24.76672619047619,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3483.9812769396553,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2a354ab79961e834c49db7de920481956327295e",
          "message": "Bump the CPU Threshold after several violations (#120)",
          "timestamp": "2021-11-27T03:49:39Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/2a354ab79961e834c49db7de920481956327295e"
        },
        "date": 1638043727183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 32.798363095238095,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3487.838631465517,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0247a4538a905388ebcc9c190da864f044403694",
          "message": "Update Gradle and build dependencies. (#119)",
          "timestamp": "2021-11-29T01:00:53Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/0247a4538a905388ebcc9c190da864f044403694"
        },
        "date": 1638216666919,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 34.329597701149424,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3488.780078125,
            "unit": "Megabytes"
          }
        ]
      }
    ],
    "Soak Test Results - sample-app-spark-auto": [
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a49aa48ce7a7eaece23dff0f773cc9495980746e",
          "message": "Fix gh-pages link for auto Soak Test links (#92)",
          "timestamp": "2021-09-29T04:51:56Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/a49aa48ce7a7eaece23dff0f773cc9495980746e"
        },
        "date": 1632946270439,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 23.646465517241378,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3460.6529947916665,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "525ef8f8ea2f3922515ba6b38a232e5e4dc4b4a2",
          "message": "Increase points to alarm for memory usage poll (#94)",
          "timestamp": "2021-10-11T02:50:29Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/525ef8f8ea2f3922515ba6b38a232e5e4dc4b4a2"
        },
        "date": 1633982740402,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 30.678869047619045,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3462.4260506465516,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1e5ce35bb81462d44f539d98bb481659f8e13392",
          "message": "Detect docker-compose start up failures and fail early (#95)",
          "timestamp": "2021-10-14T05:02:30Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/1e5ce35bb81462d44f539d98bb481659f8e13392"
        },
        "date": 1634241994665,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 23.240178571428572,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3459.9154094827586,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "795b02e14aa9e12ae2568bb395430eec2b2242ba",
          "message": "Fix log injection of xray ID. (#102)",
          "timestamp": "2021-10-19T23:51:55Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/795b02e14aa9e12ae2568bb395430eec2b2242ba"
        },
        "date": 1634760371016,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 26.91623563218391,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3464.0677083333335,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "df0590993f7aed5887f9c79eb77af78268fe1f69",
          "message": "Update to OTel 1.7 and dependencies (#103)\n\n* Update to OTel 1.7\r\n\r\n* Update dependencies\r\n\r\n* Update licenses",
          "timestamp": "2021-10-25T03:46:50Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/df0590993f7aed5887f9c79eb77af78268fe1f69"
        },
        "date": 1635192370664,
        "tool": "custombenchmark",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 39.32597701149425,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3468.6408854166666,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4a29df3ff7bbfb3583b078e25e7eca3351f57dc9",
          "message": "Use upstream benchmark action + update issues when names match (#104)",
          "timestamp": "2021-11-02T17:17:01Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/4a29df3ff7bbfb3583b078e25e7eca3351f57dc9"
        },
        "date": 1635970270769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 19.20264367816092,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3456.9342447916665,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a75098a6d21338c7247f48324ba08a874eac20bf",
          "message": "Revert \"Use aws-credentials action to configure creds bc it uses OIDC by default (#110)\" (#111)\n\nThis reverts commit 16bd8a42187668bc85f790883f9ad7468a9dca6b.",
          "timestamp": "2021-11-04T00:11:01Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/a75098a6d21338c7247f48324ba08a874eac20bf"
        },
        "date": 1636056654988,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 31.00922619047619,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3461.5922683189656,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5d89f4cfe5222eaaa94205a0458f3eb32f8eee0c",
          "message": "Update OTel dependency to 1.7.2 (#112)",
          "timestamp": "2021-11-05T00:05:42Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/5d89f4cfe5222eaaa94205a0458f3eb32f8eee0c"
        },
        "date": 1636142829995,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 25.85255747126437,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3459.1403645833334,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN",
            "email": "enowell@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2a354ab79961e834c49db7de920481956327295e",
          "message": "Bump the CPU Threshold after several violations (#120)",
          "timestamp": "2021-11-27T03:49:39Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/2a354ab79961e834c49db7de920481956327295e"
        },
        "date": 1638043623674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 33.42399425287356,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3467.2696614583333,
            "unit": "Megabytes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Anuraag Agrawal",
            "username": "anuraaga",
            "email": "aanuraag@amazon.co.jp"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0247a4538a905388ebcc9c190da864f044403694",
          "message": "Update Gradle and build dependencies. (#119)",
          "timestamp": "2021-11-29T01:00:53Z",
          "url": "https://github.com/aws-observability/aws-otel-java-instrumentation/commit/0247a4538a905388ebcc9c190da864f044403694"
        },
        "date": 1638216664317,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Soak Test Average CPU Load",
            "value": 32.39744252873563,
            "unit": "Percent"
          },
          {
            "name": "Soak Test Average Virtual Memory Used",
            "value": 3461.5411458333333,
            "unit": "Megabytes"
          }
        ]
      }
    ]
  }
}