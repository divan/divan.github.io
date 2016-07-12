(function() {

var data = [
  {
    "t": 50461,
    "command": "create goroutine",
    "name": "#1"
  },
  {
    "t": 50461,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 122040,
    "command": "create goroutine",
    "name": "Generate",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 140622,
    "command": "unblock goroutine",
    "name": "#5"
  },
  {
    "t": 146927,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 160105,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 185893,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 200422,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 208006,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 218411,
    "command": "block goroutine",
    "name": "#5"
  },
  {
    "t": 228579,
    "command": "unblock goroutine",
    "name": "#5"
  },
  {
    "t": 229741,
    "command": "block goroutine",
    "name": "#5"
  },
  {
    "t": 241378,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 242089,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 242777,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 246000,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 247019,
    "command": "send to channel",
    "from": "Generate",
    "to": "#1",
    "ch": "#4",
    "value": "2",
    "duration": 22588
  },
  {
    "t": 259060,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 259368,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 260624,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 262426,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 269347,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 335617,
    "command": "create goroutine",
    "name": "Filter 2",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 337797,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 338722,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 338864,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 339362,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 342301,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 343652,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 343936,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 347870,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "3",
    "duration": 38943
  },
  {
    "t": 376052,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 376644,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 380389,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 381954,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 386504,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 387737,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "#1",
    "ch": "#5",
    "value": "3",
    "duration": 9765
  },
  {
    "t": 394990,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 397360,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 442441,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 442938,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 443389,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 446422,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 447181,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "4",
    "duration": 17942
  },
  {
    "t": 450570,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 451044,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 452917,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 455216,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 464649,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 465811,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 515347,
    "command": "create goroutine",
    "name": "Filter 3",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 518594,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 519305,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 519756,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 521510,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 523595,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 524283,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 524449,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "5",
    "duration": 25100
  },
  {
    "t": 534475,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 541798,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 542178,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 543695,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 544690,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 549193,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 550355,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "5",
    "duration": 20336
  },
  {
    "t": 565571,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 570454,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 571283,
    "command": "send to channel",
    "from": "Filter 3",
    "to": "#1",
    "ch": "Generate",
    "value": "5",
    "duration": 3200
  },
  {
    "t": 573061,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 574317,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 624944,
    "command": "create goroutine",
    "name": "Filter 5",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 628191,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 630633,
    "command": "unblock goroutine",
    "name": "Filter 5"
  },
  {
    "t": 633145,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 634212,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 637838,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 638312,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 638620,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 640374,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 640872,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "6",
    "duration": 81344
  },
  {
    "t": 642199,
    "command": "block goroutine",
    "name": "Filter 5"
  },
  {
    "t": 665948,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 666731,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 668864,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 670404,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 721908,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 722904,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 780238,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 780831,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 781423,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 785145,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 785785,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "7",
    "duration": 13865
  },
  {
    "t": 789174,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 789529,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 790928,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 792374,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 799366,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 800243,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "7",
    "duration": 7632
  },
  {
    "t": 805718,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 807709,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 808396,
    "command": "send to channel",
    "from": "Filter 3",
    "to": "Filter 5",
    "ch": "Generate",
    "value": "7",
    "duration": 4172
  },
  {
    "t": 810221,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 811999,
    "command": "unblock goroutine",
    "name": "Filter 5"
  },
  {
    "t": 812947,
    "command": "send to channel",
    "from": "Filter 5",
    "to": "#1",
    "ch": "#7",
    "value": "7",
    "duration": 3721
  },
  {
    "t": 814914,
    "command": "block goroutine",
    "name": "Filter 5"
  },
  {
    "t": 816478,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 828353,
    "command": "create goroutine",
    "name": "Filter 7",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 830533,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 832738,
    "command": "unblock goroutine",
    "name": "Filter 7"
  },
  {
    "t": 834373,
    "command": "block goroutine",
    "name": "Filter 7"
  },
  {
    "t": 866062,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 869096,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 870542,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 874500,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 875235,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "8",
    "duration": 15548
  },
  {
    "t": 879170,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 879478,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 881137,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 882511,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 890475,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 891755,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 955608,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 956248,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 958073,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 961201,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 961889,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "9",
    "duration": 6850
  },
  {
    "t": 965231,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 965444,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 966890,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 968122,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 968359,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 969307,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "9",
    "duration": 7893
  },
  {
    "t": 974545,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 976892,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 977650,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1034843,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1035198,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1037521,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1039915,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1040365,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "10",
    "duration": 9528
  },
  {
    "t": 1043115,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1043375,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1044679,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1045935,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1049491,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1050723,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1114481,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1114884,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1117159,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1121331,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1121757,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "11",
    "duration": 9007
  },
  {
    "t": 1124293,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1124554,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1125739,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1127019,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1130314,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1131854,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "11",
    "duration": 7798
  },
  {
    "t": 1137021,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1139297,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1140197,
    "command": "send to channel",
    "from": "Filter 3",
    "to": "Filter 5",
    "ch": "Generate",
    "value": "11",
    "duration": 4551
  },
  {
    "t": 1142496,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1144274,
    "command": "unblock goroutine",
    "name": "Filter 5"
  },
  {
    "t": 1145317,
    "command": "send to channel",
    "from": "Filter 5",
    "to": "Filter 7",
    "ch": "#7",
    "value": "11",
    "duration": 3768
  },
  {
    "t": 1147260,
    "command": "block goroutine",
    "name": "Filter 5"
  },
  {
    "t": 1148967,
    "command": "unblock goroutine",
    "name": "Filter 7"
  },
  {
    "t": 1149251,
    "command": "send to channel",
    "from": "Filter 7",
    "to": "#1",
    "ch": "Filter 2",
    "value": "11",
    "duration": 3650
  },
  {
    "t": 1151029,
    "command": "block goroutine",
    "name": "Filter 7"
  },
  {
    "t": 1152664,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1168284,
    "command": "create goroutine",
    "name": "Filter 11",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1170488,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1172929,
    "command": "unblock goroutine",
    "name": "Filter 11"
  },
  {
    "t": 1173759,
    "command": "block goroutine",
    "name": "Filter 11"
  },
  {
    "t": 1190658,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1191203,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1191796,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1194759,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1195446,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "12",
    "duration": 12609
  },
  {
    "t": 1198409,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1198622,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1199902,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1201182,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1207652,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1208909,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1272856,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1273164,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1275037,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1285252,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1285916,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "13",
    "duration": 17847
  },
  {
    "t": 1289921,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1290301,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1291889,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1293287,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1303337,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1304474,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "13",
    "duration": 42332
  },
  {
    "t": 1344127,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1346497,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1347209,
    "command": "send to channel",
    "from": "Filter 3",
    "to": "Filter 5",
    "ch": "Generate",
    "value": "13",
    "duration": 4693
  },
  {
    "t": 1349768,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1351641,
    "command": "unblock goroutine",
    "name": "Filter 5"
  },
  {
    "t": 1352304,
    "command": "send to channel",
    "from": "Filter 5",
    "to": "Filter 7",
    "ch": "#7",
    "value": "13",
    "duration": 7798
  },
  {
    "t": 1354651,
    "command": "block goroutine",
    "name": "Filter 5"
  },
  {
    "t": 1359723,
    "command": "unblock goroutine",
    "name": "Filter 7"
  },
  {
    "t": 1360410,
    "command": "send to channel",
    "from": "Filter 7",
    "to": "Filter 11",
    "ch": "Filter 2",
    "value": "13",
    "duration": 4907
  },
  {
    "t": 1362994,
    "command": "block goroutine",
    "name": "Filter 7"
  },
  {
    "t": 1364298,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1364866,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1365056,
    "command": "unblock goroutine",
    "name": "Filter 11"
  },
  {
    "t": 1365435,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1365720,
    "command": "send to channel",
    "from": "Filter 11",
    "to": "#1",
    "ch": "Filter 7",
    "value": "13",
    "duration": 17397
  },
  {
    "t": 1368137,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1368682,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "14",
    "duration": 14269
  },
  {
    "t": 1374157,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1374394,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1375698,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1377049,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1380320,
    "command": "block goroutine",
    "name": "Filter 11"
  },
  {
    "t": 1382572,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1382714,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1383686,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1413408,
    "command": "create goroutine",
    "name": "Filter 13",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1420376,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1423078,
    "command": "unblock goroutine",
    "name": "Filter 13"
  },
  {
    "t": 1435427,
    "command": "block goroutine",
    "name": "Filter 13"
  },
  {
    "t": 1446353,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1446661,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1448178,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1450074,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1460953,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "15",
    "duration": 65228
  },
  {
    "t": 1476194,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1502337,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1516131,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1520421,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1525801,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1527200,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "15",
    "duration": 6802
  },
  {
    "t": 1532343,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1533765,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1534239,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1542416,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1542843,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1543127,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1545711,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1546114,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "16",
    "duration": 8698
  },
  {
    "t": 1548840,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1549100,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1549977,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1550925,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1554457,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1555310,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1635635,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1636299,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1638337,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1641916,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1642485,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "17",
    "duration": 9031
  },
  {
    "t": 1648103,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1648434,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1650212,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1651208,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1651563,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1651966,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "17",
    "duration": 6044
  },
  {
    "t": 1655711,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1657820,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1658437,
    "command": "send to channel",
    "from": "Filter 3",
    "to": "Filter 5",
    "ch": "Generate",
    "value": "17",
    "duration": 9599
  },
  {
    "t": 1665571,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1667775,
    "command": "unblock goroutine",
    "name": "Filter 5"
  },
  {
    "t": 1668486,
    "command": "send to channel",
    "from": "Filter 5",
    "to": "Filter 7",
    "ch": "#7",
    "value": "17",
    "duration": 4385
  },
  {
    "t": 1670856,
    "command": "block goroutine",
    "name": "Filter 5"
  },
  {
    "t": 1672705,
    "command": "unblock goroutine",
    "name": "Filter 7"
  },
  {
    "t": 1673179,
    "command": "send to channel",
    "from": "Filter 7",
    "to": "Filter 11",
    "ch": "Filter 2",
    "value": "17",
    "duration": 4148
  },
  {
    "t": 1675265,
    "command": "block goroutine",
    "name": "Filter 7"
  },
  {
    "t": 1677090,
    "command": "unblock goroutine",
    "name": "Filter 11"
  },
  {
    "t": 1677611,
    "command": "send to channel",
    "from": "Filter 11",
    "to": "Filter 13",
    "ch": "Filter 7",
    "value": "17",
    "duration": 4243
  },
  {
    "t": 1679744,
    "command": "block goroutine",
    "name": "Filter 11"
  },
  {
    "t": 1681688,
    "command": "unblock goroutine",
    "name": "Filter 13"
  },
  {
    "t": 1682138,
    "command": "send to channel",
    "from": "Filter 13",
    "to": "#1",
    "ch": "Filter 11",
    "value": "17",
    "duration": 6732
  },
  {
    "t": 1686831,
    "command": "block goroutine",
    "name": "Filter 13"
  },
  {
    "t": 1688680,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1707381,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1707997,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1708447,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1711505,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1712121,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "18",
    "duration": 12775
  },
  {
    "t": 1715060,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1715321,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1716672,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1717786,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1722929,
    "command": "create goroutine",
    "name": "Filter 17",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1724730,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1725252,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1725702,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1728475,
    "command": "unblock goroutine",
    "name": "Filter 17"
  },
  {
    "t": 1729779,
    "command": "block goroutine",
    "name": "Filter 17"
  },
  {
    "t": 1787303,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1788085,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1788678,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1792778,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1793442,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "19",
    "duration": 10524
  },
  {
    "t": 1798585,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1798941,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1800410,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1802235,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1803681,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1804653,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "19",
    "duration": 13036
  },
  {
    "t": 1809583,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1817310,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1818139,
    "command": "send to channel",
    "from": "Filter 3",
    "to": "Filter 5",
    "ch": "Generate",
    "value": "19",
    "duration": 3864
  },
  {
    "t": 1820059,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1821694,
    "command": "unblock goroutine",
    "name": "Filter 5"
  },
  {
    "t": 1822240,
    "command": "send to channel",
    "from": "Filter 5",
    "to": "Filter 7",
    "ch": "#7",
    "value": "19",
    "duration": 3910
  },
  {
    "t": 1824183,
    "command": "block goroutine",
    "name": "Filter 5"
  },
  {
    "t": 1825961,
    "command": "unblock goroutine",
    "name": "Filter 7"
  },
  {
    "t": 1826482,
    "command": "send to channel",
    "from": "Filter 7",
    "to": "Filter 11",
    "ch": "Filter 2",
    "value": "19",
    "duration": 4432
  },
  {
    "t": 1828331,
    "command": "block goroutine",
    "name": "Filter 7"
  },
  {
    "t": 1830654,
    "command": "unblock goroutine",
    "name": "Filter 11"
  },
  {
    "t": 1831294,
    "command": "send to channel",
    "from": "Filter 11",
    "to": "Filter 13",
    "ch": "Filter 7",
    "value": "19",
    "duration": 3863
  },
  {
    "t": 1833166,
    "command": "block goroutine",
    "name": "Filter 11"
  },
  {
    "t": 1835039,
    "command": "unblock goroutine",
    "name": "Filter 13"
  },
  {
    "t": 1835441,
    "command": "send to channel",
    "from": "Filter 13",
    "to": "Filter 17",
    "ch": "Filter 11",
    "value": "19",
    "duration": 3816
  },
  {
    "t": 1837385,
    "command": "block goroutine",
    "name": "Filter 13"
  },
  {
    "t": 1839092,
    "command": "unblock goroutine",
    "name": "Filter 17"
  },
  {
    "t": 1839423,
    "command": "send to channel",
    "from": "Filter 17",
    "to": "#1",
    "ch": "#11",
    "value": "19",
    "duration": 3769
  },
  {
    "t": 1841177,
    "command": "block goroutine",
    "name": "Filter 17"
  },
  {
    "t": 1842860,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1859096,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1859617,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1860068,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1863220,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1863789,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "20",
    "duration": 19222
  },
  {
    "t": 1867154,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1867391,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1868979,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1870402,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1882371,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1884101,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1932714,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1933116,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1937786,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1940274,
    "command": "create goroutine",
    "name": "Filter 19",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1941294,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 1941839,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "21",
    "duration": 18724
  },
  {
    "t": 1943119,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1945655,
    "command": "unblock goroutine",
    "name": "Filter 19"
  },
  {
    "t": 1947740,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1948072,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 1949779,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1951462,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1955657,
    "command": "block goroutine",
    "name": "Filter 19"
  },
  {
    "t": 1960255,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1961013,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "21",
    "duration": 6613
  },
  {
    "t": 1965138,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 1967389,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 1968006,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 2020695,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2021121,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2022923,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2025956,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2026502,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "22",
    "duration": 13367
  },
  {
    "t": 2030365,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2030649,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 2031929,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2033612,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2039561,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2040723,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2091231,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2091752,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2092535,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2095497,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2096137,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "23",
    "duration": 15098
  },
  {
    "t": 2099527,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2099811,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 2101162,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2102513,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2110738,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2112326,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "23",
    "duration": 5996
  },
  {
    "t": 2115976,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2118109,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 2118749,
    "command": "send to channel",
    "from": "Filter 3",
    "to": "Filter 5",
    "ch": "Generate",
    "value": "23",
    "duration": 3911
  },
  {
    "t": 2120645,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 2122494,
    "command": "unblock goroutine",
    "name": "Filter 5"
  },
  {
    "t": 2123063,
    "command": "send to channel",
    "from": "Filter 5",
    "to": "Filter 7",
    "ch": "#7",
    "value": "23",
    "duration": 4669
  },
  {
    "t": 2124982,
    "command": "block goroutine",
    "name": "Filter 5"
  },
  {
    "t": 2127613,
    "command": "unblock goroutine",
    "name": "Filter 7"
  },
  {
    "t": 2127969,
    "command": "send to channel",
    "from": "Filter 7",
    "to": "Filter 11",
    "ch": "Filter 2",
    "value": "23",
    "duration": 4527
  },
  {
    "t": 2130055,
    "command": "block goroutine",
    "name": "Filter 7"
  },
  {
    "t": 2132164,
    "command": "unblock goroutine",
    "name": "Filter 11"
  },
  {
    "t": 2132828,
    "command": "send to channel",
    "from": "Filter 11",
    "to": "Filter 13",
    "ch": "Filter 7",
    "value": "23",
    "duration": 4005
  },
  {
    "t": 2134913,
    "command": "block goroutine",
    "name": "Filter 11"
  },
  {
    "t": 2136715,
    "command": "unblock goroutine",
    "name": "Filter 13"
  },
  {
    "t": 2137070,
    "command": "send to channel",
    "from": "Filter 13",
    "to": "Filter 17",
    "ch": "Filter 11",
    "value": "23",
    "duration": 4954
  },
  {
    "t": 2139322,
    "command": "block goroutine",
    "name": "Filter 13"
  },
  {
    "t": 2141408,
    "command": "unblock goroutine",
    "name": "Filter 17"
  },
  {
    "t": 2142332,
    "command": "send to channel",
    "from": "Filter 17",
    "to": "Filter 19",
    "ch": "#11",
    "value": "23",
    "duration": 4717
  },
  {
    "t": 2144631,
    "command": "block goroutine",
    "name": "Filter 17"
  },
  {
    "t": 2146788,
    "command": "unblock goroutine",
    "name": "Filter 19"
  },
  {
    "t": 2147499,
    "command": "send to channel",
    "from": "Filter 19",
    "to": "#1",
    "ch": "#12",
    "value": "23",
    "duration": 8319
  },
  {
    "t": 2153140,
    "command": "block goroutine",
    "name": "Filter 19"
  },
  {
    "t": 2155534,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 2171722,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2172291,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2173358,
    "command": "create goroutine",
    "name": "Filter 23",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 2174495,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2176131,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 2177648,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2178335,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "24",
    "duration": 4859
  },
  {
    "t": 2178785,
    "command": "unblock goroutine",
    "name": "Filter 23"
  },
  {
    "t": 2179876,
    "command": "block goroutine",
    "name": "Filter 23"
  },
  {
    "t": 2181677,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2181914,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 2182957,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2183478,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2183763,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2184972,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2259040,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2259751,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2261718,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2265060,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2265676,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "25",
    "duration": 12870
  },
  {
    "t": 2273166,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2273498,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 2275370,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2277029,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2278262,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2279044,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "25",
    "duration": 9267
  },
  {
    "t": 2283689,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2285775,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 2288572,
    "command": "send to channel",
    "from": "Filter 3",
    "to": "Filter 5",
    "ch": "Generate",
    "value": "25",
    "duration": 3863
  },
  {
    "t": 2290563,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 2292293,
    "command": "unblock goroutine",
    "name": "Filter 5"
  },
  {
    "t": 2292696,
    "command": "block goroutine",
    "name": "Filter 5"
  },
  {
    "t": 2358919,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2359298,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2359654,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2363090,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2363612,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "26",
    "duration": 39013
  },
  {
    "t": 2367831,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2368186,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 2370082,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2389305,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2402127,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2403360,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2463278,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2463894,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2466359,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2470602,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2471076,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "27",
    "duration": 36406
  },
  {
    "t": 2474868,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2486292,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 2487975,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2489113,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2507008,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2508169,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "27",
    "duration": 6731
  },
  {
    "t": 2512672,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2514663,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 2515256,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 2547040,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2547419,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2548936,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2551970,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2552373,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "28",
    "duration": 20241
  },
  {
    "t": 2554885,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2555146,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 2556805,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2558085,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2572448,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2573064,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2618287,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2618643,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2619828,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2622293,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2622720,
    "command": "send to channel",
    "from": "Generate",
    "to": "Filter 2",
    "ch": "#4",
    "value": "29",
    "duration": 19554
  },
  {
    "t": 2625398,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2625635,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 2626868,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2628361,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2642037,
    "command": "unblock goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2642771,
    "command": "send to channel",
    "from": "Filter 2",
    "to": "Filter 3",
    "ch": "#5",
    "value": "29",
    "duration": 5333
  },
  {
    "t": 2646066,
    "command": "block goroutine",
    "name": "Filter 2"
  },
  {
    "t": 2647915,
    "command": "unblock goroutine",
    "name": "Filter 3"
  },
  {
    "t": 2648602,
    "command": "send to channel",
    "from": "Filter 3",
    "to": "Filter 5",
    "ch": "Generate",
    "value": "29",
    "duration": 4195
  },
  {
    "t": 2650688,
    "command": "block goroutine",
    "name": "Filter 3"
  },
  {
    "t": 2652631,
    "command": "unblock goroutine",
    "name": "Filter 5"
  },
  {
    "t": 2653224,
    "command": "send to channel",
    "from": "Filter 5",
    "to": "Filter 7",
    "ch": "#7",
    "value": "29",
    "duration": 4337
  },
  {
    "t": 2655689,
    "command": "block goroutine",
    "name": "Filter 5"
  },
  {
    "t": 2657395,
    "command": "unblock goroutine",
    "name": "Filter 7"
  },
  {
    "t": 2657964,
    "command": "send to channel",
    "from": "Filter 7",
    "to": "Filter 11",
    "ch": "Filter 2",
    "value": "29",
    "duration": 6684
  },
  {
    "t": 2660050,
    "command": "block goroutine",
    "name": "Filter 7"
  },
  {
    "t": 2664316,
    "command": "unblock goroutine",
    "name": "Filter 11"
  },
  {
    "t": 2666118,
    "command": "send to channel",
    "from": "Filter 11",
    "to": "Filter 13",
    "ch": "Filter 7",
    "value": "29",
    "duration": 4100
  },
  {
    "t": 2668038,
    "command": "block goroutine",
    "name": "Filter 11"
  },
  {
    "t": 2669886,
    "command": "unblock goroutine",
    "name": "Filter 13"
  },
  {
    "t": 2670431,
    "command": "send to channel",
    "from": "Filter 13",
    "to": "Filter 17",
    "ch": "Filter 11",
    "value": "29",
    "duration": 4456
  },
  {
    "t": 2672541,
    "command": "block goroutine",
    "name": "Filter 13"
  },
  {
    "t": 2674176,
    "command": "unblock goroutine",
    "name": "Filter 17"
  },
  {
    "t": 2675290,
    "command": "send to channel",
    "from": "Filter 17",
    "to": "Filter 19",
    "ch": "#11",
    "value": "29",
    "duration": 4077
  },
  {
    "t": 2677518,
    "command": "block goroutine",
    "name": "Filter 17"
  },
  {
    "t": 2679201,
    "command": "unblock goroutine",
    "name": "Filter 19"
  },
  {
    "t": 2679675,
    "command": "send to channel",
    "from": "Filter 19",
    "to": "Filter 23",
    "ch": "#12",
    "value": "29",
    "duration": 3532
  },
  {
    "t": 2681429,
    "command": "block goroutine",
    "name": "Filter 19"
  },
  {
    "t": 2683088,
    "command": "unblock goroutine",
    "name": "Filter 23"
  },
  {
    "t": 2683396,
    "command": "send to channel",
    "from": "Filter 23",
    "to": "#1",
    "ch": "#13",
    "value": "29",
    "duration": 6400
  },
  {
    "t": 2685435,
    "command": "block goroutine",
    "name": "Filter 23"
  },
  {
    "t": 2689582,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 2713308,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2714066,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2714683,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2718356,
    "command": "unblock goroutine",
    "name": "Generate"
  },
  {
    "t": 2722599,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2722907,
    "command": "sleep goroutine",
    "name": "Generate"
  },
  {
    "t": 2724590,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2726178,
    "command": "create goroutine",
    "name": "Filter 29",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 2736346,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2895361,
    "command": "unblock goroutine",
    "name": "Filter 29"
  },
  {
    "t": 2897566,
    "command": "block goroutine",
    "name": "Filter 29"
  },
  {
    "t": 2908302,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 2908312,
    "command": "stop goroutine",
    "name": "#1"
  }
];
	
	window.samples.primesieve = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				camera: "perspective",
				allCaps: true,
				speed: 3.8,
				angle: 15,
				zoom: 1.0,
				cameraPos: {x: 120, y: 60, z: 120}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

