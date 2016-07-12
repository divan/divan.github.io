(function() {
	var data = [
  {
    "t": 19199,
    "command": "create goroutine",
    "name": "#1"
  },
  {
    "t": 19199,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 37238,
    "command": "create goroutine",
    "name": "#20",
    "parent": "#1",
    "depth": 1
  },
  {
    "t": 40936,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 47217,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 55537,
    "command": "sleep goroutine",
    "name": "#20"
  },
  {
    "t": 58713,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 61676,
    "command": "unblock goroutine",
    "name": "#19"
  },
  {
    "t": 63881,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 91780,
    "command": "block goroutine",
    "name": "#19"
  },
  {
    "t": 10183838,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 10186255,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 10192466,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 10207802,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 10209817,
    "command": "send to channel",
    "from": "#20",
    "to": "#1",
    "ch": "#4",
    "value": "42",
    "duration": 55514
  },
  {
    "t": 10241722,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 10242646,
    "command": "sleep goroutine",
    "name": "#20"
  },
  {
    "t": 10247837,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 10252365,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 10264098,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 10306670,
    "command": "sleep goroutine",
    "name": "#1"
  },
  {
    "t": 21732459,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 21734972,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 21751019,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 21752868,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 21763440,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 21798758,
    "command": "unblock goroutine",
    "name": "#20"
  },
  {
    "t": 21800062,
    "command": "stop goroutine",
    "name": "#20"
  },
  {
    "t": 24550981,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 24553826,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24562549,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 24577079,
    "command": "unblock goroutine",
    "name": "#1"
  },
  {
    "t": 24604409,
    "command": "unblock goroutine",
    "name": "#21"
  },
  {
    "t": 24605760,
    "command": "block goroutine",
    "name": "#21"
  },
  {
    "t": 24621002,
    "command": "block goroutine",
    "name": "#1"
  },
  {
    "t": 24621012,
    "command": "stop goroutine",
    "name": "#1"
  }];


	window.samples.hello01 = {
		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				camera: "perspective",
				allCaps: true,
				speed: 1.4,
				zoom: 1,
				cameraPos: {x: 0, y: -20, z: 100}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

