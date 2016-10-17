(function() {

	var data = [
  {
    "t": 18962,
    "command": "create goroutine",
    "name": "#1"
  },
  {
    "t": 18962,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 37072,
    "command": "create goroutine",
    "name": "Player 2",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 42524,
    "command": "create goroutine",
    "name": "Player 1",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 47122,
    "command": "send to channel",
    "from": "#1",
    "to": "Player 1",
    "ch": "#4",
    "value": "0",
    "duration": 6590
  },
  {
    "t": 47359,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 53238,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 60207,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 67128,
    "command": "sleep goroutine",
    "name": "Player 1"
  },
  {
    "t": 68148,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 71964,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 76302,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 77985,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 90998,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 104035,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 111905,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 101185358,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 101187752,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 101206003,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 101217784,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 101227432,
    "command": "send to channel",
    "from": "Player 1",
    "to": "Player 2",
    "ch": "#4",
    "value": "1",
    "duration": 65848
  },
  {
    "t": 101259100,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 101264267,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 101286572,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 101292617,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 101310987,
    "command": "sleep goroutine",
    "name": "Player 2"
  },
  {
    "t": 101317174,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 101318193,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 101328362,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 101331538,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 203568369,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 203570929,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 203588209,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 203600345,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 203609898,
    "command": "send to channel",
    "from": "Player 2",
    "to": "Player 1",
    "ch": "#4",
    "value": "2",
    "duration": 18441
  },
  {
    "t": 203624025,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 203627604,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 203661192,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 203675083,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 203677003,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 203683284,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 203687788,
    "command": "sleep goroutine",
    "name": "Player 1"
  },
  {
    "t": 203693927,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 203695018,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 203700493,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 203707083,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 304951795,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 304954568,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 304972085,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 304998657,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 305005176,
    "command": "send to channel",
    "from": "Player 1",
    "to": "Player 2",
    "ch": "#4",
    "value": "3",
    "duration": 18678
  },
  {
    "t": 305018900,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 305023333,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 305032411,
    "command": "sleep goroutine",
    "name": "Player 2"
  },
  {
    "t": 305038195,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 305043007,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 408252827,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 408255292,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 408263754,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 408278758,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 408280915,
    "command": "send to channel",
    "from": "Player 2",
    "to": "Player 1",
    "ch": "#4",
    "value": "4",
    "duration": 24083
  },
  {
    "t": 408289757,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 408298124,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 408299381,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 408304145,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 408311541,
    "command": "sleep goroutine",
    "name": "Player 1"
  },
  {
    "t": 408321235,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 408327872,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 509486659,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 509489598,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 509497112,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 509511287,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 509513823,
    "command": "send to channel",
    "from": "Player 1",
    "to": "Player 2",
    "ch": "#4",
    "value": "5",
    "duration": 20267
  },
  {
    "t": 509525817,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 509528946,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 509533189,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 509538096,
    "command": "sleep goroutine",
    "name": "Player 2"
  },
  {
    "t": 509543121,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 509549331,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 509576235,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 613155335,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 613158227,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 613173018,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 613174961,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 613184704,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 613201107,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 613203264,
    "command": "send to channel",
    "from": "Player 2",
    "to": "Player 1",
    "ch": "#4",
    "value": "6",
    "duration": 15289
  },
  {
    "t": 613214215,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 613218007,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 613224265,
    "command": "sleep goroutine",
    "name": "Player 1"
  },
  {
    "t": 613232490,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 613239436,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 717018049,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 717020846,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 717039122,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 717060384,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 717062921,
    "command": "send to channel",
    "from": "Player 1",
    "to": "Player 2",
    "ch": "#4",
    "value": "7",
    "duration": 23822
  },
  {
    "t": 717078849,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 717085795,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 717093759,
    "command": "sleep goroutine",
    "name": "Player 2"
  },
  {
    "t": 717099993,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 717105895,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 717111798,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 717115282,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 821585973,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 821588248,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 821601238,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 821611620,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 821614488,
    "command": "send to channel",
    "from": "Player 2",
    "to": "Player 1",
    "ch": "#4",
    "value": "8",
    "duration": 20030
  },
  {
    "t": 821630417,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 821634020,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 821641700,
    "command": "sleep goroutine",
    "name": "Player 1"
  },
  {
    "t": 821647579,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 821648788,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 821655069,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 821656942,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 926815751,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 926817908,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 926834216,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 926853108,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 926855312,
    "command": "send to channel",
    "from": "Player 1",
    "to": "Player 2",
    "ch": "#4",
    "value": "9",
    "duration": 15906
  },
  {
    "t": 926866619,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 926870743,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 926874655,
    "command": "sleep goroutine",
    "name": "Player 2"
  },
  {
    "t": 1001337149,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1001340373,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1001358956,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 1001386547,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1001389724,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1032067005,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1032069351,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 1032081345,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1032082768,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 1032088978,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 1032092676,
    "command": "unblock goroutine",
    "name": "Player 2"
  },
  {
    "t": 1032094548,
    "command": "send to channel",
    "from": "Player 2",
    "to": "Player 1",
    "ch": "#4",
    "value": "10",
    "duration": 11212
  },
  {
    "t": 1032102015,
    "command": "block goroutine",
    "name": "Player 2"
  },
  {
    "t": 1032105357,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 1032109197,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1032113203,
    "command": "sleep goroutine",
    "name": "Player 1"
  },
  {
    "t": 1032115787,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1032118513,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 1137052706,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1137054886,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 1137060552,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 1137074300,
    "command": "unblock goroutine",
    "name": "Player 1"
  },
  {
    "t": 1137077144,
    "command": "send to channel",
    "from": "Player 1",
    "to": "#1",
    "ch": "#4",
    "value": "11",
    "duration": 20717
  },
  {
    "t": 1137093405,
    "command": "block goroutine",
    "name": "Player 1"
  },
  {
    "t": 1137097221,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1137102057,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1137102673,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 1137111752,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1137116469,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 1189470641,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1189472940,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 1189486072,
    "command": "unblock goroutine",
    "name": "#22"
  },
  {
    "t": 1189487826,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1189493491,
    "command": "block goroutine",
    "name": "#22"
  },
  {
    "t": 1189497213,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 1189501835,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 1189501845,
    "command": "stop goroutine",
    "name": "#1"
  }
];

	window.samples.pingpong01 = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				camera: "perspective",
				allCaps: true,
				speed: 1.0,
				angle: 60,
				zoom: 1.0,
				cameraPos: {x: 140, y: 00, z: 140}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

