(function() {

var data = [
  {
    "t": 51863,
    "command": "create goroutine",
    "name": "#1"
  },
  {
    "t": 51863,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 191974,
    "command": "create goroutine",
    "name": "#6",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 205959,
    "command": "create goroutine",
    "name": "#7",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 208235,
    "command": "create goroutine",
    "name": "#8",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 224756,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 285152,
    "command": "create goroutine",
    "name": "#9",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 294088,
    "command": "create goroutine",
    "name": "#10",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 296293,
    "command": "create goroutine",
    "name": "#11",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 298403,
    "command": "create goroutine",
    "name": "#12",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 300394,
    "command": "create goroutine",
    "name": "#13",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 305822,
    "command": "create goroutine",
    "name": "#14",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 315113,
    "command": "create goroutine",
    "name": "#15",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 321419,
    "command": "create goroutine",
    "name": "#16",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 329359,
    "command": "create goroutine",
    "name": "#17",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 416778,
    "command": "create goroutine",
    "name": "#18",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 431711,
    "command": "create goroutine",
    "name": "#19",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 433607,
    "command": "create goroutine",
    "name": "#20",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 435053,
    "command": "create goroutine",
    "name": "#21",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 436499,
    "command": "create goroutine",
    "name": "#22",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 438751,
    "command": "create goroutine",
    "name": "#23",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 441192,
    "command": "create goroutine",
    "name": "#24",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 442757,
    "command": "create goroutine",
    "name": "#25",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 444724,
    "command": "create goroutine",
    "name": "#26",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 484664,
    "command": "unblock goroutine",
    "name": "#15"
  },
  {
    "t": 517114,
    "command": "create goroutine",
    "name": "#27",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 518987,
    "command": "create goroutine",
    "name": "#28",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 520409,
    "command": "create goroutine",
    "name": "#29",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 521831,
    "command": "create goroutine",
    "name": "#30",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 523206,
    "command": "create goroutine",
    "name": "#31",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 524557,
    "command": "create goroutine",
    "name": "#32",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 538187,
    "command": "create goroutine",
    "name": "#33",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 569878,
    "command": "create goroutine",
    "name": "#34",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 575283,
    "command": "create goroutine",
    "name": "#35",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 583081,
    "command": "create goroutine",
    "name": "#36",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 585357,
    "command": "create goroutine",
    "name": "#37",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 588462,
    "command": "create goroutine",
    "name": "#38",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 589837,
    "command": "create goroutine",
    "name": "#39",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 591117,
    "command": "create goroutine",
    "name": "#40",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 592444,
    "command": "create goroutine",
    "name": "#41",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 626316,
    "command": "sleep goroutine",
    "name": "#6"
  },
  {
    "t": 638690,
    "command": "unblock goroutine",
    "name": "#49"
  },
  {
    "t": 649925,
    "command": "block goroutine",
    "name": "#49"
  },
  {
    "t": 705889,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 717835,
    "command": "unblock goroutine",
    "name": "#41"
  },
  {
    "t": 718855,
    "command": "sleep goroutine",
    "name": "#41"
  },
  {
    "t": 720395,
    "command": "unblock goroutine",
    "name": "#16"
  },
  {
    "t": 721344,
    "command": "sleep goroutine",
    "name": "#16"
  },
  {
    "t": 725231,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 725918,
    "command": "sleep goroutine",
    "name": "#17"
  },
  {
    "t": 727104,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 727578,
    "command": "sleep goroutine",
    "name": "#18"
  },
  {
    "t": 729189,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 730303,
    "command": "sleep goroutine",
    "name": "#19"
  },
  {
    "t": 731986,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 732745,
    "command": "sleep goroutine",
    "name": "#20"
  },
  {
    "t": 733835,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 734783,
    "command": "sleep goroutine",
    "name": "#21"
  },
  {
    "t": 735992,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 736585,
    "command": "sleep goroutine",
    "name": "#22"
  },
  {
    "t": 737746,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 738078,
    "command": "sleep goroutine",
    "name": "#23"
  },
  {
    "t": 739287,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 739500,
    "command": "sleep goroutine",
    "name": "#24"
  },
  {
    "t": 740662,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 740923,
    "command": "sleep goroutine",
    "name": "#25"
  },
  {
    "t": 742037,
    "command": "unblock goroutine",
    "name": "#26"
  },
  {
    "t": 742440,
    "command": "sleep goroutine",
    "name": "#26"
  },
  {
    "t": 743506,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 744478,
    "command": "sleep goroutine",
    "name": "#27"
  },
  {
    "t": 745545,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 748010,
    "command": "sleep goroutine",
    "name": "#28"
  },
  {
    "t": 749124,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 749954,
    "command": "sleep goroutine",
    "name": "#29"
  },
  {
    "t": 751115,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 751803,
    "command": "sleep goroutine",
    "name": "#30"
  },
  {
    "t": 752964,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 753580,
    "command": "sleep goroutine",
    "name": "#31"
  },
  {
    "t": 754718,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 755026,
    "command": "sleep goroutine",
    "name": "#32"
  },
  {
    "t": 755287,
    "command": "unblock goroutine",
    "name": "#5"
  },
  {
    "t": 756235,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 756567,
    "command": "sleep goroutine",
    "name": "#33"
  },
  {
    "t": 757752,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 758060,
    "command": "sleep goroutine",
    "name": "#34"
  },
  {
    "t": 759127,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 761971,
    "command": "sleep goroutine",
    "name": "#35"
  },
  {
    "t": 763109,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 763441,
    "command": "sleep goroutine",
    "name": "#36"
  },
  {
    "t": 764626,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 764887,
    "command": "sleep goroutine",
    "name": "#37"
  },
  {
    "t": 766025,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 766262,
    "command": "sleep goroutine",
    "name": "#38"
  },
  {
    "t": 767423,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 767660,
    "command": "sleep goroutine",
    "name": "#39"
  },
  {
    "t": 768845,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 769082,
    "command": "sleep goroutine",
    "name": "#40"
  },
  {
    "t": 771358,
    "command": "unblock goroutine",
    "name": "#10"
  },
  {
    "t": 771713,
    "command": "sleep goroutine",
    "name": "#10"
  },
  {
    "t": 776170,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 776952,
    "command": "sleep goroutine",
    "name": "#7"
  },
  {
    "t": 778540,
    "command": "unblock goroutine",
    "name": "#8"
  },
  {
    "t": 779109,
    "command": "sleep goroutine",
    "name": "#8"
  },
  {
    "t": 780342,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 783541,
    "command": "sleep goroutine",
    "name": "#9"
  },
  {
    "t": 785153,
    "command": "unblock goroutine",
    "name": "#12"
  },
  {
    "t": 785959,
    "command": "sleep goroutine",
    "name": "#12"
  },
  {
    "t": 787263,
    "command": "unblock goroutine",
    "name": "#11"
  },
  {
    "t": 788116,
    "command": "sleep goroutine",
    "name": "#11"
  },
  {
    "t": 792644,
    "command": "unblock goroutine",
    "name": "#13"
  },
  {
    "t": 793473,
    "command": "sleep goroutine",
    "name": "#13"
  },
  {
    "t": 794967,
    "command": "unblock goroutine",
    "name": "#14"
  },
  {
    "t": 795464,
    "command": "sleep goroutine",
    "name": "#14"
  },
  {
    "t": 802575,
    "command": "sleep goroutine",
    "name": "#15"
  },
  {
    "t": 830048,
    "command": "block goroutine",
    "name": "#5"
  },
  {
    "t": 11404688,
    "command": "unblock goroutine",
    "name": "#49"
  },
  {
    "t": 11411704,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 11423603,
    "command": "unblock goroutine",
    "name": "#15"
  },
  {
    "t": 11424670,
    "command": "unblock goroutine",
    "name": "#41"
  },
  {
    "t": 11425523,
    "command": "unblock goroutine",
    "name": "#16"
  },
  {
    "t": 11426353,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 11427135,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 11427633,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 11428344,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 11428866,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 11429292,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 11430146,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 11430691,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 11431473,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 11432255,
    "command": "unblock goroutine",
    "name": "#26"
  },
  {
    "t": 11432966,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 11433464,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 11434104,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 11435289,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 11438134,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 11439224,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 11439674,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 11440149,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 11440717,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 11441191,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 11441618,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 11442092,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 11442756,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 11443396,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 11443894,
    "command": "unblock goroutine",
    "name": "#10"
  },
  {
    "t": 11444297,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11444866,
    "command": "unblock goroutine",
    "name": "#8"
  },
  {
    "t": 11445363,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 11445908,
    "command": "unblock goroutine",
    "name": "#12"
  },
  {
    "t": 11446288,
    "command": "unblock goroutine",
    "name": "#11"
  },
  {
    "t": 11446809,
    "command": "unblock goroutine",
    "name": "#13"
  },
  {
    "t": 11447307,
    "command": "unblock goroutine",
    "name": "#14"
  },
  {
    "t": 11448421,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 11458139,
    "command": "stop goroutine",
    "name": "#21"
  },
  {
    "t": 11462288,
    "command": "unblock goroutine",
    "name": "#6"
  },
  {
    "t": 11463259,
    "command": "stop goroutine",
    "name": "#6"
  },
  {
    "t": 11464018,
    "command": "unblock goroutine",
    "name": "#15"
  },
  {
    "t": 11464682,
    "command": "stop goroutine",
    "name": "#15"
  },
  {
    "t": 11465369,
    "command": "unblock goroutine",
    "name": "#41"
  },
  {
    "t": 11466341,
    "command": "stop goroutine",
    "name": "#41"
  },
  {
    "t": 11466696,
    "command": "unblock goroutine",
    "name": "#16"
  },
  {
    "t": 11467242,
    "command": "stop goroutine",
    "name": "#16"
  },
  {
    "t": 11467431,
    "command": "unblock goroutine",
    "name": "#17"
  },
  {
    "t": 11468024,
    "command": "stop goroutine",
    "name": "#17"
  },
  {
    "t": 11468356,
    "command": "unblock goroutine",
    "name": "#18"
  },
  {
    "t": 11472907,
    "command": "stop goroutine",
    "name": "#18"
  },
  {
    "t": 11473167,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 11474139,
    "command": "stop goroutine",
    "name": "#19"
  },
  {
    "t": 11474329,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 11474922,
    "command": "stop goroutine",
    "name": "#20"
  },
  {
    "t": 11476036,
    "command": "block goroutine",
    "name": "#49"
  },
  {
    "t": 11476533,
    "command": "unblock goroutine",
    "name": "#34"
  },
  {
    "t": 11476936,
    "command": "stop goroutine",
    "name": "#34"
  },
  {
    "t": 11477458,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 11478027,
    "command": "stop goroutine",
    "name": "#22"
  },
  {
    "t": 11478406,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 11478856,
    "command": "stop goroutine",
    "name": "#23"
  },
  {
    "t": 11479283,
    "command": "unblock goroutine",
    "name": "#24"
  },
  {
    "t": 11479899,
    "command": "stop goroutine",
    "name": "#24"
  },
  {
    "t": 11480326,
    "command": "unblock goroutine",
    "name": "#25"
  },
  {
    "t": 11480800,
    "command": "stop goroutine",
    "name": "#25"
  },
  {
    "t": 11481084,
    "command": "unblock goroutine",
    "name": "#26"
  },
  {
    "t": 11481653,
    "command": "stop goroutine",
    "name": "#26"
  },
  {
    "t": 11481867,
    "command": "unblock goroutine",
    "name": "#27"
  },
  {
    "t": 11488077,
    "command": "stop goroutine",
    "name": "#27"
  },
  {
    "t": 11488480,
    "command": "unblock goroutine",
    "name": "#28"
  },
  {
    "t": 11489238,
    "command": "stop goroutine",
    "name": "#28"
  },
  {
    "t": 11489689,
    "command": "unblock goroutine",
    "name": "#29"
  },
  {
    "t": 11490210,
    "command": "stop goroutine",
    "name": "#29"
  },
  {
    "t": 11490542,
    "command": "unblock goroutine",
    "name": "#30"
  },
  {
    "t": 11491016,
    "command": "stop goroutine",
    "name": "#30"
  },
  {
    "t": 11491324,
    "command": "unblock goroutine",
    "name": "#31"
  },
  {
    "t": 11492012,
    "command": "stop goroutine",
    "name": "#31"
  },
  {
    "t": 11492178,
    "command": "unblock goroutine",
    "name": "#32"
  },
  {
    "t": 11492841,
    "command": "stop goroutine",
    "name": "#32"
  },
  {
    "t": 11493031,
    "command": "unblock goroutine",
    "name": "#33"
  },
  {
    "t": 11493671,
    "command": "stop goroutine",
    "name": "#33"
  },
  {
    "t": 11495022,
    "command": "unblock goroutine",
    "name": "#10"
  },
  {
    "t": 11495899,
    "command": "stop goroutine",
    "name": "#10"
  },
  {
    "t": 11496326,
    "command": "unblock goroutine",
    "name": "#35"
  },
  {
    "t": 11497037,
    "command": "stop goroutine",
    "name": "#35"
  },
  {
    "t": 11498578,
    "command": "unblock goroutine",
    "name": "#36"
  },
  {
    "t": 11499929,
    "command": "stop goroutine",
    "name": "#36"
  },
  {
    "t": 11500569,
    "command": "unblock goroutine",
    "name": "#37"
  },
  {
    "t": 11502489,
    "command": "stop goroutine",
    "name": "#37"
  },
  {
    "t": 11503129,
    "command": "unblock goroutine",
    "name": "#38"
  },
  {
    "t": 11503626,
    "command": "stop goroutine",
    "name": "#38"
  },
  {
    "t": 11503840,
    "command": "unblock goroutine",
    "name": "#39"
  },
  {
    "t": 11504409,
    "command": "stop goroutine",
    "name": "#39"
  },
  {
    "t": 11504646,
    "command": "unblock goroutine",
    "name": "#40"
  },
  {
    "t": 11505380,
    "command": "stop goroutine",
    "name": "#40"
  },
  {
    "t": 11506281,
    "command": "unblock goroutine",
    "name": "#9"
  },
  {
    "t": 11507087,
    "command": "stop goroutine",
    "name": "#9"
  },
  {
    "t": 11507443,
    "command": "unblock goroutine",
    "name": "#7"
  },
  {
    "t": 11507988,
    "command": "stop goroutine",
    "name": "#7"
  },
  {
    "t": 11508177,
    "command": "unblock goroutine",
    "name": "#8"
  },
  {
    "t": 11508817,
    "command": "stop goroutine",
    "name": "#8"
  },
  {
    "t": 11509647,
    "command": "unblock goroutine",
    "name": "#12"
  },
  {
    "t": 11510240,
    "command": "stop goroutine",
    "name": "#12"
  },
  {
    "t": 11511306,
    "command": "unblock goroutine",
    "name": "#13"
  },
  {
    "t": 11511828,
    "command": "stop goroutine",
    "name": "#13"
  },
  {
    "t": 11512420,
    "command": "unblock goroutine",
    "name": "#11"
  },
  {
    "t": 11515478,
    "command": "stop goroutine",
    "name": "#11"
  },
  {
    "t": 11535863,
    "command": "unblock goroutine",
    "name": "#14"
  },
  {
    "t": 11536811,
    "command": "stop goroutine",
    "name": "#14"
  },
  {
    "t": 26353662,
    "command": "unblock goroutine",
    "name": "#49"
  },
  {
    "t": 26356625,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26368074,
    "command": "block goroutine",
    "name": "#49"
  },
  {
    "t": 26414817,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 26462746,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 26462756,
    "command": "stop goroutine",
    "name": "#1"
  }
];

	window.samples.parallelism00 = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				camera: "perspective",
				allCaps: false,
				speed: 1.3,
				angle: 10,
				zoom: 2.0,
				autoAngle: false,
				autoRotate: true,
				distance: 80,
				cameraPos: {x: 110, y: 60, z: 160}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

