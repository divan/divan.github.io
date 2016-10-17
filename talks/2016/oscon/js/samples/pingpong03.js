(function() {
var data = [
  {
    "t": 18109,
    "command": "create goroutine",
    "name": "#1"
  },
  {
    "t": 18110,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 35579,
    "command": "create goroutine",
    "name": "Player 2",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 39158,
    "command": "create goroutine",
    "name": "Player 3",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 40367,
    "command": "create goroutine",
    "name": "Player 1",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 43709,
    "command": "send to channel",
    "from": "#1",
    "to": "Player 1",
    "ch": "#4",
    "value": "0",
    "duration": 9600
  },
  {
    "t": 43970,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 52859,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 59851,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 76397,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 77463,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 81991,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 86684,
    "command": "sleep goroutine",
    "name": "Player 1"
  },
  {
    "t": 89552,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 91638,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 93914,
    "command": "block goroutine",
    "name": "Player 3"
  },
  {
    "t": 96213,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 109653,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 114441,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 105238003,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 105240018,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 105257440,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 105290981,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 105310252,
    "command": "send to channel",
    "from": "Player 1",
    "to": "Player 2",
    "ch": "#4",
    "value": "1",
    "duration": 35508
  },
  {
    "t": 105311555,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 105331656,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 105341327,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 105345262,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 105355170,
    "command": "sleep goroutine",
    "name": "Player 2"
  },
  {
    "t": 105374821,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 105375816,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 105379798,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 105382240,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 210512960,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 210515117,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 210530572,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 210548018,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 210550720,
    "command": "send to channel",
    "from": "Player 2",
    "to": "Player 3",
    "ch": "#4",
    "value": "2",
    "duration": 22661
  },
  {
    "t": 210568285,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 210572717,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 210581250,
    "command": "sleep goroutine",
    "name": "Player 3"
  },
  {
    "t": 210588599,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 210597227,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 314644641,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 314647058,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 314655378,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 314692167,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 314694964,
    "command": "block goroutine",
    "name": "Player 3"
  },
  {
    "t": 314702359,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 314706223,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 314720303,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 314721820,
    "command": "send to channel",
    "from": "Player 3",
    "to": "Player 1",
    "ch": "#4",
    "value": "3",
    "duration": 19366
  },
  {
    "t": 314734407,
    "command": "block goroutine",
    "name": "Player 3"
  },
  {
    "t": 314740498,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 314747278,
    "command": "sleep goroutine",
    "name": "Player 1"
  },
  {
    "t": 314754365,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 314763562,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 419178051,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 419180090,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 419194170,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 419211450,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 419213702,
    "command": "send to channel",
    "from": "Player 1",
    "to": "Player 2",
    "ch": "#4",
    "value": "4",
    "duration": 26311
  },
  {
    "t": 419234419,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 419239515,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 419246271,
    "command": "sleep goroutine",
    "name": "Player 2"
  },
  {
    "t": 419258597,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 419259758,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 419264333,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 419266134,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 524413898,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 524415912,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 524432126,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 524449975,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 524453246,
    "command": "send to channel",
    "from": "Player 2",
    "to": "Player 3",
    "ch": "#4",
    "value": "5",
    "duration": 16995
  },
  {
    "t": 524465690,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 524469672,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 524477969,
    "command": "sleep goroutine",
    "name": "Player 3"
  },
  {
    "t": 524486123,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 524491267,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 626499380,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 626502627,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 626521496,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 626536097,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 626538017,
    "command": "send to channel",
    "from": "Player 3",
    "to": "Player 1",
    "ch": "#4",
    "value": "6",
    "duration": 19129
  },
  {
    "t": 626551504,
    "command": "block goroutine",
    "name": "Player 3"
  },
  {
    "t": 626556601,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 626563214,
    "command": "sleep goroutine",
    "name": "Player 1"
  },
  {
    "t": 626582201,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 626583528,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 626587439,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 626589359,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 731679143,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 731681277,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 731696637,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 731714011,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 731716477,
    "command": "send to channel",
    "from": "Player 1",
    "to": "Player 2",
    "ch": "#4",
    "value": "7",
    "duration": 21072
  },
  {
    "t": 731732524,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 731737099,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 731744708,
    "command": "sleep goroutine",
    "name": "Player 2"
  },
  {
    "t": 731759167,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 731768127,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 836914847,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 836916981,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 836932578,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 836950118,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 836952702,
    "command": "send to channel",
    "from": "Player 2",
    "to": "Player 3",
    "ch": "#4",
    "value": "8",
    "duration": 23088
  },
  {
    "t": 836969508,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 836975268,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 836983991,
    "command": "sleep goroutine",
    "name": "Player 3"
  },
  {
    "t": 836994444,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 837003618,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 942150741,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 942152922,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 942167902,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 942182054,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 942184068,
    "command": "send to channel",
    "from": "Player 3",
    "to": "Player 1",
    "ch": "#4",
    "value": "9",
    "duration": 13203
  },
  {
    "t": 942193763,
    "command": "block goroutine",
    "name": "Player 3"
  },
  {
    "t": 942196608,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 942200922,
    "command": "sleep goroutine",
    "name": "Player 1"
  },
  {
    "t": 942207843,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 942218368,
    "command": "block goroutine",
    "name": "Player 3"
  },
  {
    "t": 1003846043,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1003848793,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1003857421,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 1003871525,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1003878209,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1003878802,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1003889611,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 1043408016,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1043410220,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 1043417616,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 1043430203,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 1043432217,
    "command": "send to channel",
    "from": "Player 1",
    "to": "Player 2",
    "ch": "#4",
    "value": "10",
    "duration": 14009
  },
  {
    "t": 1043441652,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 1043445776,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 1043449687,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1043450351,
    "command": "sleep goroutine",
    "name": "Player 2"
  },
  {
    "t": 1043453148,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1043456206,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 1144574032,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1144575976,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 1144581736,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 1144594109,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 1144596053,
    "command": "send to channel",
    "from": "Player 2",
    "to": "Player 3",
    "ch": "#4",
    "value": "11",
    "duration": 16711
  },
  {
    "t": 1144608710,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 1144612195,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 1144614281,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1144614731,
    "command": "sleep goroutine",
    "name": "Player 3"
  },
  {
    "t": 1144617315,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1144620538,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 1244799603,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1244801974,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 1244810246,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 1244833073,
    "command": "unblock goroutine",
    "name": "Player 3"
  },
  {
    "t": 1244835135,
    "command": "send to channel",
    "from": "Player 3",
    "to": "#1",
    "ch": "#4",
    "value": "12",
    "duration": 18750
  },
  {
    "t": 1244848030,
    "command": "block goroutine",
    "name": "Player 3"
  },
  {
    "t": 1244853292,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1244858815,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1244864243,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1244867467,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1244868060,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 1244872800,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1244876332,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 1294931885,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1294961799,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 1294989201,
    "command": "unblock goroutine",
    "name": "#23"
  },
  {
    "t": 1294990860,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1294995459,
    "command": "block goroutine",
    "name": "#23"
  },
  {
    "t": 1294998588,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1295014659,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1295014669,
    "command": "stop goroutine",
    "name": "#1"
  }
];

	window.samples.pingpong03 = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				camera: "perspective",
				allCaps: true,
				speed: 3.0,
				angle: -120,
				zoom: 1.2,
				autoRotate: true,
				cameraPos: {x: 120, y: 60, z: 120}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();
