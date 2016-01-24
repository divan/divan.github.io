(function() {
	var data = [{"t":100000,"command":"create goroutine","name":"main"},
		{"t":284866,"command":"create goroutine","name":"go #19","parent":"main"},
	{"t":311718,"command":"send to channel","from":"go #19","to":"main","ch":"ch","value":42,"duration":46750},
	{"t":337988,"command":"stop goroutine","name":"go #19"},
	{"t":365967,"command":"stop goroutine","name":"main"}];

	window.samples.hello01 = {
		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				width: 600,
				height: 400,
				camera: "ortho",
				allCaps: true,
				speed: 1.0,
				zoom: 3,
				cameraPos: {x: 0, y: 0, z: 100}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

