(function() {
var data = [
  {
    "t": 27970,
    "command": "create goroutine",
    "name": "#1"
  },
  {
    "t": 27970,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 101641,
    "command": "create goroutine",
    "name": "Producer 2",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 109487,
    "command": "create goroutine",
    "name": "Producer 1",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 116005,
    "command": "create goroutine",
    "name": "Reader",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 120106,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 124515,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 125582,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 127336,
    "command": "unblock goroutine",
    "name": "#5"
  },
  {
    "t": 158909,
    "command": "block goroutine",
    "name": "#5"
  },
  {
    "t": 168011,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 168746,
    "command": "send to channel",
    "from": "Producer 2",
    "to": "#1",
    "ch": "#4",
    "value": "0",
    "duration": 67034
  },
  {
    "t": 207976,
    "command": "sleep goroutine",
    "name": "Producer 2"
  },
  {
    "t": 209967,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 220302,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 229641,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 231774,
    "command": "send to channel",
    "from": "Producer 1",
    "to": "#1",
    "ch": "#4",
    "value": "0",
    "duration": 23609
  },
  {
    "t": 232248,
    "command": "block goroutine",
    "name": "Producer 1"
  },
  {
    "t": 235069,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 237179,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "0",
    "duration": 35105
  },
  {
    "t": 259199,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "0",
    "duration": 133073
  },
  {
    "t": 259626,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 262186,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 271786,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 290464,
    "command": "sleep goroutine",
    "name": "Producer 1"
  },
  {
    "t": 404858,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 406660,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 407300,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 10806748,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 10808739,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 10824312,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 10836116,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 10838250,
    "command": "send to channel",
    "from": "Producer 2",
    "to": "#1",
    "ch": "#4",
    "value": "1",
    "duration": 29345
  },
  {
    "t": 10861954,
    "command": "sleep goroutine",
    "name": "Producer 2"
  },
  {
    "t": 10866481,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10869112,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "1",
    "duration": 13748
  },
  {
    "t": 10873758,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 10875322,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 10877219,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 10882339,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 10883666,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 10887032,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 10910641,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 10915050,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 10934273,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 21451268,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 21457360,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 21477745,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 21512044,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 21518420,
    "command": "send to channel",
    "from": "Producer 2",
    "to": "#1",
    "ch": "#4",
    "value": "2",
    "duration": 40059
  },
  {
    "t": 21533093,
    "command": "sleep goroutine",
    "name": "Producer 2"
  },
  {
    "t": 21536838,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 21537668,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 21542788,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 21545466,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 21557816,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 21567274,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "2",
    "duration": 14317
  },
  {
    "t": 21578035,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 21580856,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 21631297,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 25663982,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 25666731,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 25683206,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 25692924,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 25702548,
    "command": "send to channel",
    "from": "Producer 1",
    "to": "#1",
    "ch": "#4",
    "value": "1",
    "duration": 17635
  },
  {
    "t": 25716343,
    "command": "sleep goroutine",
    "name": "Producer 1"
  },
  {
    "t": 25719496,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 25721037,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "1",
    "duration": 8509
  },
  {
    "t": 25725730,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 25729214,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 25751354,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 32636777,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 32638342,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 32650004,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 32658300,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 32660196,
    "command": "send to channel",
    "from": "Producer 2",
    "to": "#1",
    "ch": "#4",
    "value": "3",
    "duration": 16569
  },
  {
    "t": 32671313,
    "command": "sleep goroutine",
    "name": "Producer 2"
  },
  {
    "t": 32676173,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 32677500,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "3",
    "duration": 9742
  },
  {
    "t": 32678590,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 32679918,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 32682146,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 32686081,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 32686744,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 32687598,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 32703479,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 45364164,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 45367008,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 45385782,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 45416099,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 45418374,
    "command": "send to channel",
    "from": "Producer 2",
    "to": "#1",
    "ch": "#4",
    "value": "4",
    "duration": 32901
  },
  {
    "t": 45446226,
    "command": "sleep goroutine",
    "name": "Producer 2"
  },
  {
    "t": 45450493,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 45452508,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "4",
    "duration": 11851
  },
  {
    "t": 45459050,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 45463980,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 45488513,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 50800865,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 50802785,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 50814732,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 50836042,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 50838056,
    "command": "send to channel",
    "from": "Producer 1",
    "to": "#1",
    "ch": "#4",
    "value": "2",
    "duration": 16474
  },
  {
    "t": 50850690,
    "command": "sleep goroutine",
    "name": "Producer 1"
  },
  {
    "t": 50854009,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 50856308,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 50859674,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 50859959,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "2",
    "duration": 7917
  },
  {
    "t": 50864036,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 50867283,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 50884397,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 56768008,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 56769335,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 56778248,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 56788203,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 56790100,
    "command": "block goroutine",
    "name": "Producer 2"
  },
  {
    "t": 56804464,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 56805365,
    "command": "send to channel",
    "from": "Producer 2",
    "to": "#1",
    "ch": "#4",
    "value": "5",
    "duration": 17612
  },
  {
    "t": 56819753,
    "command": "sleep goroutine",
    "name": "Producer 2"
  },
  {
    "t": 56822479,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 56823759,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "5",
    "duration": 9173
  },
  {
    "t": 56828002,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 56829377,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 56831107,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 56832387,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 56848529,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 67333903,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 67335752,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 67340350,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 67349595,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 67351301,
    "command": "send to channel",
    "from": "Producer 2",
    "to": "#1",
    "ch": "#4",
    "value": "6",
    "duration": 10904
  },
  {
    "t": 67358507,
    "command": "sleep goroutine",
    "name": "Producer 2"
  },
  {
    "t": 67361684,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 67363106,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "6",
    "duration": 7703
  },
  {
    "t": 67367515,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 67370430,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 67388587,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 67391906,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 67393921,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 78228189,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 78231318,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 78238737,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 78240467,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 78254073,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 78256562,
    "command": "send to channel",
    "from": "Producer 2",
    "to": "#1",
    "ch": "#4",
    "value": "7",
    "duration": 75046
  },
  {
    "t": 78269149,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 78270310,
    "command": "sleep goroutine",
    "name": "Producer 2"
  },
  {
    "t": 78275169,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 78279389,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 78312621,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 78315252,
    "command": "send to channel",
    "from": "Producer 1",
    "to": "#1",
    "ch": "#4",
    "value": "3",
    "duration": 27568
  },
  {
    "t": 78315987,
    "command": "block goroutine",
    "name": "Producer 1"
  },
  {
    "t": 78330707,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 78332959,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "7",
    "duration": 29724
  },
  {
    "t": 78350381,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "3",
    "duration": 42240
  },
  {
    "t": 78350832,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 78356473,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 78358061,
    "command": "sleep goroutine",
    "name": "Producer 1"
  },
  {
    "t": 78361877,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 78408574,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 78413599,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 78414547,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 89910764,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 89912518,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 89917188,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 89925390,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 89926907,
    "command": "send to channel",
    "from": "Producer 2",
    "to": "#1",
    "ch": "#4",
    "value": "8",
    "duration": 9718
  },
  {
    "t": 89934089,
    "command": "sleep goroutine",
    "name": "Producer 2"
  },
  {
    "t": 89936151,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 89937241,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "8",
    "duration": 7183
  },
  {
    "t": 89941058,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 89944044,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 89944874,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 89956844,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 89958527,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 89963955,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 89983416,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 100021786,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 100023895,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 100036150,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 100047907,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 100049519,
    "command": "send to channel",
    "from": "Producer 2",
    "to": "#1",
    "ch": "#4",
    "value": "9",
    "duration": 26429
  },
  {
    "t": 100066562,
    "command": "sleep goroutine",
    "name": "Producer 2"
  },
  {
    "t": 100070165,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 100071350,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 100075664,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 100077134,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "9",
    "duration": 6376
  },
  {
    "t": 100080500,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 100083154,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 100100932,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 103742032,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 103745279,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 103769576,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 103781593,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 103789250,
    "command": "send to channel",
    "from": "Producer 1",
    "to": "#1",
    "ch": "#4",
    "value": "4",
    "duration": 17066
  },
  {
    "t": 103802595,
    "command": "block goroutine",
    "name": "Producer 1"
  },
  {
    "t": 103804989,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 103807501,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "4",
    "duration": 6993
  },
  {
    "t": 103811673,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 103814020,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 103841564,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 103844550,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 103846138,
    "command": "sleep goroutine",
    "name": "Producer 1"
  },
  {
    "t": 103847561,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 103848367,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 111879010,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 111881736,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 111896337,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 111898518,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 111908071,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 111941540,
    "command": "unblock goroutine",
    "name": "Producer 2"
  },
  {
    "t": 111942441,
    "command": "stop goroutine",
    "name": "Producer 2"
  },
  {
    "t": 129098791,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 129101161,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 129108438,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 129119816,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 129122305,
    "command": "send to channel",
    "from": "Producer 1",
    "to": "#1",
    "ch": "#4",
    "value": "5",
    "duration": 29132
  },
  {
    "t": 129136337,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 129137025,
    "command": "sleep goroutine",
    "name": "Producer 1"
  },
  {
    "t": 129140675,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 129144183,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 129150394,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 129153048,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "5",
    "duration": 19532
  },
  {
    "t": 129166512,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 129172011,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 129197920,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 155332515,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 155337588,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 155352663,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 155372242,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 155374542,
    "command": "block goroutine",
    "name": "Producer 1"
  },
  {
    "t": 155378050,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 155378713,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 155381179,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 155382056,
    "command": "send to channel",
    "from": "Producer 1",
    "to": "#1",
    "ch": "#4",
    "value": "6",
    "duration": 20646
  },
  {
    "t": 155388740,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 155389048,
    "command": "sleep goroutine",
    "name": "Producer 1"
  },
  {
    "t": 155390423,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 155392059,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 155402085,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 155403579,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "6",
    "duration": 9623
  },
  {
    "t": 155410382,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 155412823,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 155432118,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 181871614,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 181873889,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 181880834,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 181893516,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 181896029,
    "command": "send to channel",
    "from": "Producer 1",
    "to": "#1",
    "ch": "#4",
    "value": "7",
    "duration": 26571
  },
  {
    "t": 181909563,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 181910298,
    "command": "sleep goroutine",
    "name": "Producer 1"
  },
  {
    "t": 181914494,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 181918310,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 181921510,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 181924544,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "7",
    "duration": 19864
  },
  {
    "t": 181938221,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 181943649,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 181968894,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 211940215,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 211943226,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 211951166,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 211965768,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 211967949,
    "command": "send to channel",
    "from": "Producer 1",
    "to": "#1",
    "ch": "#4",
    "value": "8",
    "duration": 71514
  },
  {
    "t": 211978307,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 211980109,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 212002603,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 212004168,
    "command": "sleep goroutine",
    "name": "Producer 1"
  },
  {
    "t": 212012014,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 212016565,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 212038277,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 212041620,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "8",
    "duration": 20243
  },
  {
    "t": 212054609,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 212061152,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 212092156,
    "command": "block goroutine",
    "name": "Reader"
  },
  {
    "t": 237680097,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 237681756,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 237687445,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 237707972,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 237711244,
    "command": "send to channel",
    "from": "Producer 1",
    "to": "#1",
    "ch": "#4",
    "value": "9",
    "duration": 59022
  },
  {
    "t": 237725489,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 237725892,
    "command": "sleep goroutine",
    "name": "Producer 1"
  },
  {
    "t": 237728547,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 237731581,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 237769081,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 237772209,
    "command": "send to channel",
    "from": "#1",
    "to": "Reader",
    "ch": "#5",
    "value": "9",
    "duration": 24415
  },
  {
    "t": 237792879,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 237795889,
    "command": "unblock goroutine",
    "name": "Reader"
  },
  {
    "t": 237827581,
    "command": "stop goroutine",
    "name": "Reader"
  },
  {
    "t": 264204736,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 264206846,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 264220808,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 264249015,
    "command": "unblock goroutine",
    "name": "Producer 1"
  },
  {
    "t": 264250532,
    "command": "stop goroutine",
    "name": "Producer 1"
  },
  {
    "t": 289419415,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 289420814,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 289428233,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 289429608,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 289433329,
    "command": "block goroutine",
    "name": "#9"
  },
  {
    "t": 289435581,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 289443854,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 289443864,
    "command": "stop goroutine",
    "name": "#1"
  }
];

	window.samples.fanin = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				camera: "perspective",
				allCaps: true,
				speed: 2.2,
				angle: 120,
				angle2: 360/3,
				zoom: 1.8,
				autoAngle: false,
				distance: 80,
				distance2: 20,
				autoRotate: true,
				cameraPos: {x: 160, y: 60, z: 160}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

