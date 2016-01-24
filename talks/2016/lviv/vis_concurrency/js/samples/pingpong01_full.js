(function() {

	var data = [{"t":0,"command":"create goroutine","name":"main"},
	{"t":366373,"command":"create goroutine","name":"player #6","parent":"main"},
	{"t":371740,"command":"create goroutine","name":"player #5","parent":"main"},
	{"t":370863,"command":"send to channel","from":"main","to":"player #6","ch":"table","value":0,"duration":129375},
	{"t":103392050,"command":"send to channel","from":"player #6","to":"player #5","ch":"table","value":1,"duration":156819},
	{"t":208157409,"command":"send to channel","from":"player #5","to":"player #6","ch":"table","value":2,"duration":77332},
	{"t":308773610,"command":"send to channel","from":"player #6","to":"player #5","ch":"table","value":3,"duration":79224},
	{"t":411394203,"command":"send to channel","from":"player #5","to":"player #6","ch":"table","value":4,"duration":256520},
	{"t":514243284,"command":"send to channel","from":"player #6","to":"player #5","ch":"table","value":5,"duration":97748},
	{"t":615114852,"command":"send to channel","from":"player #5","to":"player #6","ch":"table","value":6,"duration":51251},
	{"t":719583790,"command":"send to channel","from":"player #6","to":"player #5","ch":"table","value":7,"duration":66268},
	{"t":820400761,"command":"send to channel","from":"player #5","to":"player #6","ch":"table","value":8,"duration":77021},
	{"t":921399942,"command":"send to channel","from":"player #6","to":"player #5","ch":"table","value":9,"duration":151695},
	{"t":1025310918,"command":"send to channel","from":"player #5","to":"player #6","ch":"table","value":10,"duration":189569},
	{"t":1129911549,"command":"send to channel","from":"player #6","to":"main","ch":"table","value":11,"duration":88950},
	{"t":1140028062,"command":"stop goroutine","name":"main"}];

	window.samples.pingpong01_full = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				width: 900,
				height: 600,
				camera: "perspective",
				allCaps: true,
				speed: 1.0,
				angle: 60,
				zoom: 1.1,
				cameraPos: {x: 120, y: 60, z: 120}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

