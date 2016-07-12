(function() {

	var data = [
  {
    "t": 30506,
    "command": "create goroutine",
    "name": "#1"
  },
  {
    "t": 30506,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 111122,
    "command": "create goroutine",
    "name": "#6",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 113896,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 114915,
    "command": "unblock goroutine",
    "name": "#5"
  },
  {
    "t": 130583,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 152414,
    "command": "block goroutine",
    "name": "#5"
  },
  {
    "t": 156278,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 160213,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 169671,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 100172005,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 100181226,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 100190731,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 100191774,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 100195591,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 100198364,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 100200663,
    "command": "send to channel",
    "from": "#6",
    "to": "#1",
    "ch": "#4",
    "value": "1",
    "duration": 5547
  },
  {
    "t": 100204954,
    "command": "stop goroutine",
    "name": "#6"
  },
  {
    "t": 100205712,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 100228610,
    "command": "create goroutine",
    "name": "#17",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 100234797,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 100245890,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 100268574,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 100269214,
    "command": "sleep goroutine",
    "name": "#17"
  },
  {
    "t": 100272604,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 100274808,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 200386939,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 200388574,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 200392106,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 200400639,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 200402702,
    "command": "send to channel",
    "from": "#17",
    "to": "#1",
    "ch": "#5",
    "value": "1",
    "duration": 6660
  },
  {
    "t": 200407656,
    "command": "stop goroutine",
    "name": "#17"
  },
  {
    "t": 200408628,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 200412254,
    "command": "create goroutine",
    "name": "#8",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 200415691,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 200418465,
    "command": "unblock goroutine",
    "name": "#8"
  },
  {
    "t": 200420100,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 200420337,
    "command": "sleep goroutine",
    "name": "#8"
  },
  {
    "t": 200422376,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 200424485,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 301181736,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 301183513,
    "command": "unblock goroutine",
    "name": "#8"
  },
  {
    "t": 301187282,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 301195697,
    "command": "unblock goroutine",
    "name": "#8"
  },
  {
    "t": 301197001,
    "command": "send to channel",
    "from": "#8",
    "to": "#1",
    "ch": "#6",
    "value": "1",
    "duration": 8249
  },
  {
    "t": 301203922,
    "command": "stop goroutine",
    "name": "#8"
  },
  {
    "t": 301204657,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 301208260,
    "command": "create goroutine",
    "name": "#18",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 301220183,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 301225730,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 301227508,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 301243792,
    "command": "sleep goroutine",
    "name": "#18"
  },
  {
    "t": 301247466,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 301250002,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 301257967,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 301258678,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 405285356,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 405287134,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 405291163,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 405300360,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 405301759,
    "command": "send to channel",
    "from": "#18",
    "to": "#1",
    "ch": "#7",
    "value": "1",
    "duration": 7348
  },
  {
    "t": 405307874,
    "command": "stop goroutine",
    "name": "#18"
  },
  {
    "t": 405308633,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 405312757,
    "command": "create goroutine",
    "name": "#9",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 405318494,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 405322026,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 405323519,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 405324017,
    "command": "sleep goroutine",
    "name": "#9"
  },
  {
    "t": 405326103,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 405328828,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 505361741,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 505363234,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 505366790,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 505381178,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 505382624,
    "command": "send to channel",
    "from": "#9",
    "to": "#1",
    "ch": "#8",
    "value": "1",
    "duration": 4859
  },
  {
    "t": 505386440,
    "command": "stop goroutine",
    "name": "#9"
  },
  {
    "t": 505387080,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 505390091,
    "command": "create goroutine",
    "name": "#19",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 505394097,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 505397131,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 505398529,
    "command": "sleep goroutine",
    "name": "#19"
  },
  {
    "t": 505400141,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 505401587,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 607984117,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 607985610,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 607989284,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 607997723,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 607999477,
    "command": "send to channel",
    "from": "#19",
    "to": "#1",
    "ch": "#9",
    "value": "1",
    "duration": 5902
  },
  {
    "t": 608004360,
    "command": "stop goroutine",
    "name": "#19"
  },
  {
    "t": 608004976,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 608008295,
    "command": "create goroutine",
    "name": "#10",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 608011305,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 608013178,
    "command": "unblock goroutine",
    "name": "#10"
  },
  {
    "t": 608014505,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 608014695,
    "command": "sleep goroutine",
    "name": "#10"
  },
  {
    "t": 608015904,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 608017563,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 710632496,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 710634179,
    "command": "unblock goroutine",
    "name": "#10"
  },
  {
    "t": 710638303,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 710646813,
    "command": "unblock goroutine",
    "name": "#10"
  },
  {
    "t": 710648638,
    "command": "send to channel",
    "from": "#10",
    "to": "#1",
    "ch": "#10",
    "value": "1",
    "duration": 8984
  },
  {
    "t": 710655892,
    "command": "stop goroutine",
    "name": "#10"
  },
  {
    "t": 710656935,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 710661083,
    "command": "create goroutine",
    "name": "#20",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 710666795,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 710669403,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 710671204,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 710672579,
    "command": "sleep goroutine",
    "name": "#20"
  },
  {
    "t": 710674617,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 710676869,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 811844526,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 811845924,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 811853936,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 811862730,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 811865788,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 811867637,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 811868632,
    "command": "send to channel",
    "from": "#20",
    "to": "#1",
    "ch": "#11",
    "value": "1",
    "duration": 4314
  },
  {
    "t": 811871880,
    "command": "stop goroutine",
    "name": "#20"
  },
  {
    "t": 811872354,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 811875625,
    "command": "create goroutine",
    "name": "#21",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 811879417,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 811881977,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 811883210,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 811883542,
    "command": "sleep goroutine",
    "name": "#21"
  },
  {
    "t": 811885367,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 811887168,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 912249515,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 912251814,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 912257148,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 912269331,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 912271370,
    "command": "send to channel",
    "from": "#21",
    "to": "#1",
    "ch": "#12",
    "value": "1",
    "duration": 8818
  },
  {
    "t": 912278149,
    "command": "stop goroutine",
    "name": "#21"
  },
  {
    "t": 912279334,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 912284834,
    "command": "create goroutine",
    "name": "#22",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 912291400,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 912294505,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 912297065,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 912297539,
    "command": "sleep goroutine",
    "name": "#22"
  },
  {
    "t": 912300715,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 912303891,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 912305717,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 912309106,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1015180845,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1015182599,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1015186866,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1015195755,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1015197414,
    "command": "send to channel",
    "from": "#22",
    "to": "#1",
    "ch": "#13",
    "value": "1",
    "duration": 5950
  },
  {
    "t": 1015202273,
    "command": "stop goroutine",
    "name": "#22"
  },
  {
    "t": 1015202937,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1015206753,
    "command": "create goroutine",
    "name": "#11",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1015209930,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1015211731,
    "command": "unblock goroutine",
    "name": "#11"
  },
  {
    "t": 1015212727,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1015212940,
    "command": "sleep goroutine",
    "name": "#11"
  },
  {
    "t": 1015214291,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1015216282,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1119981520,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1119983393,
    "command": "unblock goroutine",
    "name": "#11"
  },
  {
    "t": 1119988631,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1120007333,
    "command": "unblock goroutine",
    "name": "#11"
  },
  {
    "t": 1120008874,
    "command": "send to channel",
    "from": "#11",
    "to": "#1",
    "ch": "#14",
    "value": "1",
    "duration": 5950
  },
  {
    "t": 1120013828,
    "command": "stop goroutine",
    "name": "#11"
  },
  {
    "t": 1120014421,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1120029828,
    "command": "create goroutine",
    "name": "#33",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1120034095,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1120035967,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 1120042036,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1120042320,
    "command": "sleep goroutine",
    "name": "#33"
  },
  {
    "t": 1120044027,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1120045639,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1120051067,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1120051707,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1225237401,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1225240056,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 1225246788,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1225262053,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 1225264257,
    "command": "send to channel",
    "from": "#33",
    "to": "#1",
    "ch": "#15",
    "value": "1",
    "duration": 26738
  },
  {
    "t": 1225272601,
    "command": "block goroutine",
    "name": "#33"
  },
  {
    "t": 1225290284,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1225298675,
    "command": "create goroutine",
    "name": "#12",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1225303653,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1225306047,
    "command": "unblock goroutine",
    "name": "#12"
  },
  {
    "t": 1225307303,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1225307825,
    "command": "sleep goroutine",
    "name": "#12"
  },
  {
    "t": 1225310574,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1225313774,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1225328613,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 1225329111,
    "command": "stop goroutine",
    "name": "#33"
  },
  {
    "t": 1225330794,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1225332595,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1330507267,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1330509282,
    "command": "unblock goroutine",
    "name": "#12"
  },
  {
    "t": 1330515468,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1330529667,
    "command": "unblock goroutine",
    "name": "#12"
  },
  {
    "t": 1330531824,
    "command": "send to channel",
    "from": "#12",
    "to": "#1",
    "ch": "#16",
    "value": "1",
    "duration": 10714
  },
  {
    "t": 1330540049,
    "command": "stop goroutine",
    "name": "#12"
  },
  {
    "t": 1330541803,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1330547350,
    "command": "create goroutine",
    "name": "#34",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1330553157,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1330559534,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 1330563303,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1330563800,
    "command": "sleep goroutine",
    "name": "#34"
  },
  {
    "t": 1330566431,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1330569608,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1432993489,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1432996404,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 1433005602,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1433021578,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 1433024043,
    "command": "send to channel",
    "from": "#34",
    "to": "#1",
    "ch": "#17",
    "value": "1",
    "duration": 11212
  },
  {
    "t": 1433032813,
    "command": "stop goroutine",
    "name": "#34"
  },
  {
    "t": 1433034425,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1433040683,
    "command": "create goroutine",
    "name": "#13",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1433049690,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1433054692,
    "command": "unblock goroutine",
    "name": "#13"
  },
  {
    "t": 1433057939,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1433059456,
    "command": "sleep goroutine",
    "name": "#13"
  },
  {
    "t": 1433063960,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1433068701,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1433081122,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1433082639,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1533263581,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1533265975,
    "command": "unblock goroutine",
    "name": "#13"
  },
  {
    "t": 1533273750,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1533289939,
    "command": "unblock goroutine",
    "name": "#13"
  },
  {
    "t": 1533292476,
    "command": "send to channel",
    "from": "#13",
    "to": "#1",
    "ch": "#18",
    "value": "1",
    "duration": 12017
  },
  {
    "t": 1533301696,
    "command": "stop goroutine",
    "name": "#13"
  },
  {
    "t": 1533303474,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1533309424,
    "command": "create goroutine",
    "name": "#35",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1533320280,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1533324167,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 1533327296,
    "command": "sleep goroutine",
    "name": "#35"
  },
  {
    "t": 1533331065,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1533334573,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1533362496,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1533363587,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1633438218,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1633440683,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 1633468061,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1633481880,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 1633484369,
    "command": "send to channel",
    "from": "#35",
    "to": "#1",
    "ch": "#19",
    "value": "1",
    "duration": 13132
  },
  {
    "t": 1633493969,
    "command": "block goroutine",
    "name": "#35"
  },
  {
    "t": 1633496529,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1633503190,
    "command": "create goroutine",
    "name": "#14",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1633511012,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1633517459,
    "command": "unblock goroutine",
    "name": "#14"
  },
  {
    "t": 1633520256,
    "command": "sleep goroutine",
    "name": "#14"
  },
  {
    "t": 1633525376,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1633529406,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1633541495,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 1633541945,
    "command": "stop goroutine",
    "name": "#35"
  },
  {
    "t": 1733640161,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1733641797,
    "command": "unblock goroutine",
    "name": "#14"
  },
  {
    "t": 1733646727,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1733654953,
    "command": "unblock goroutine",
    "name": "#14"
  },
  {
    "t": 1733656778,
    "command": "send to channel",
    "from": "#14",
    "to": "#1",
    "ch": "#20",
    "value": "1",
    "duration": 7182
  },
  {
    "t": 1733662514,
    "command": "stop goroutine",
    "name": "#14"
  },
  {
    "t": 1733663438,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1733667018,
    "command": "create goroutine",
    "name": "#36",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1733671735,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1733674982,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 1733676973,
    "command": "block goroutine",
    "name": "#36"
  },
  {
    "t": 1733680244,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1733680553,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1733682401,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 1733682710,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1733683065,
    "command": "sleep goroutine",
    "name": "#36"
  },
  {
    "t": 1733685033,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1733687095,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1835943059,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1835944742,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 1835958016,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1835965530,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 1835967047,
    "command": "send to channel",
    "from": "#36",
    "to": "#1",
    "ch": "#21",
    "value": "1",
    "duration": 6542
  },
  {
    "t": 1835972309,
    "command": "stop goroutine",
    "name": "#36"
  },
  {
    "t": 1835973163,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1835976552,
    "command": "create goroutine",
    "name": "#15",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1835980203,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1835982289,
    "command": "unblock goroutine",
    "name": "#15"
  },
  {
    "t": 1835983450,
    "command": "sleep goroutine",
    "name": "#15"
  },
  {
    "t": 1835985038,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1835986437,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1938375213,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1938376588,
    "command": "unblock goroutine",
    "name": "#15"
  },
  {
    "t": 1938380025,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 1938388321,
    "command": "unblock goroutine",
    "name": "#15"
  },
  {
    "t": 1938389696,
    "command": "send to channel",
    "from": "#15",
    "to": "#1",
    "ch": "#22",
    "value": "1",
    "duration": 4598
  },
  {
    "t": 1938393133,
    "command": "stop goroutine",
    "name": "#15"
  },
  {
    "t": 1938393891,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1938397352,
    "command": "create goroutine",
    "name": "#37",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 1938400339,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1938401832,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 1938403183,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1938403373,
    "command": "sleep goroutine",
    "name": "#37"
  },
  {
    "t": 1938404511,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 1938406217,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2039388795,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2039390430,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 2039394721,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2039402519,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 2039403870,
    "command": "send to channel",
    "from": "#37",
    "to": "#1",
    "ch": "#23",
    "value": "1",
    "duration": 5737
  },
  {
    "t": 2039407497,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2039408256,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2039408469,
    "command": "stop goroutine",
    "name": "#37"
  },
  {
    "t": 2039409180,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 2039412499,
    "command": "create goroutine",
    "name": "#16",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 2039417690,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 2039420629,
    "command": "unblock goroutine",
    "name": "#16"
  },
  {
    "t": 2039421885,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2039422241,
    "command": "sleep goroutine",
    "name": "#16"
  },
  {
    "t": 2039424469,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2039426792,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2142942323,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2142944765,
    "command": "unblock goroutine",
    "name": "#16"
  },
  {
    "t": 2142949908,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2142967876,
    "command": "unblock goroutine",
    "name": "#16"
  },
  {
    "t": 2142969559,
    "command": "send to channel",
    "from": "#16",
    "to": "#1",
    "ch": "#24",
    "value": "1",
    "duration": 4551
  },
  {
    "t": 2142973233,
    "command": "stop goroutine",
    "name": "#16"
  },
  {
    "t": 2142973731,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 2142976575,
    "command": "create goroutine",
    "name": "#49",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 2142979325,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 2142981150,
    "command": "unblock goroutine",
    "name": "#49"
  },
  {
    "t": 2142982596,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2142982809,
    "command": "sleep goroutine",
    "name": "#49"
  },
  {
    "t": 2142984492,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2142986673,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2247796901,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2247798821,
    "command": "unblock goroutine",
    "name": "#49"
  },
  {
    "t": 2247804415,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2247813327,
    "command": "unblock goroutine",
    "name": "#49"
  },
  {
    "t": 2247815318,
    "command": "send to channel",
    "from": "#49",
    "to": "#1",
    "ch": "#25",
    "value": "1",
    "duration": 6969
  },
  {
    "t": 2247820604,
    "command": "stop goroutine",
    "name": "#49"
  },
  {
    "t": 2247821789,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 2247826127,
    "command": "create goroutine",
    "name": "#38",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 2247830275,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 2247833594,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 2247835135,
    "command": "sleep goroutine",
    "name": "#38"
  },
  {
    "t": 2247837552,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2247839923,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2347951508,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2347953001,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 2347956154,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2347963834,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 2347965303,
    "command": "send to channel",
    "from": "#38",
    "to": "#1",
    "ch": "#26",
    "value": "1",
    "duration": 6946
  },
  {
    "t": 2347971111,
    "command": "stop goroutine",
    "name": "#38"
  },
  {
    "t": 2347971846,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 2347974856,
    "command": "create goroutine",
    "name": "#50",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 2347981303,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 2347984503,
    "command": "unblock goroutine",
    "name": "#50"
  },
  {
    "t": 2347986234,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2347986542,
    "command": "sleep goroutine",
    "name": "#50"
  },
  {
    "t": 2347988628,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2347991140,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2450928633,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 2450930648,
    "command": "unblock goroutine",
    "name": "#50"
  },
  {
    "t": 2450935602,
    "command": "block goroutine",
    "name": "#7"
  },
  {
    "t": 2450954376,
    "command": "unblock goroutine",
    "name": "#50"
  },
  {
    "t": 2450955703,
    "command": "send to channel",
    "from": "#50",
    "to": "#1",
    "ch": "#27",
    "value": "1",
    "duration": 6779
  },
  {
    "t": 2450961179,
    "command": "stop goroutine",
    "name": "#50"
  },
  {
    "t": 2450962056,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 2450971348,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 2450971358,
    "command": "stop goroutine",
    "name": "#1"
  }
	];

	window.samples.timer01 = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				camera: "perspective",
				allCaps: false,
				speed: 3.8,
				angle: -360/24,
				zoom: 1.2,
				autoAngle: true,
				distance: 40,
				autoRotate: true,
				cameraPos: {x: 60, y: 60, z: -60}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

