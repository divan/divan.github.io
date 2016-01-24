(function() {
	
var data = [{"t":0,"command":"create goroutine","name":"main"},
{"t":299609,"command":"create goroutine","name":"producer1 #19","parent":"main"},
{"t":339446,"command":"create goroutine","name":"reader #21","parent":"main"},
{"t":343286,"command":"create goroutine","name":"producer2 #20","parent":"main"},
{"t":101580240,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":0,"duration":143267},
{"t":101772560,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":0,"duration":64114},
{"t":202985275,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":1,"duration":184025},
{"t":203252095,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":1,"duration":140425},
{"t":251667765,"command":"send to channel","from":"producer2 #20","to":"main","ch":"ch","value":0,"duration":109868},
{"t":251830047,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":0,"duration":62349},
{"t":304530187,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":2,"duration":116283},
{"t":304678360,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":2,"duration":60337},
{"t":405005154,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":3,"duration":82516},
{"t":405152417,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":3,"duration":80603},
{"t":502973113,"command":"send to channel","from":"producer2 #20","to":"main","ch":"ch","value":1,"duration":67623},
{"t":503060979,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":1,"duration":49414},
{"t":505495624,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":4,"duration":45014},
{"t":505561544,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":4,"duration":43833},
{"t":606709589,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":5,"duration":50858},
{"t":606772080,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":5,"duration":44447},
{"t":707954694,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":6,"duration":120333},
{"t":708122705,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":6,"duration":50311},
{"t":754325600,"command":"send to channel","from":"producer2 #20","to":"main","ch":"ch","value":2,"duration":138617},
{"t":754494727,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":2,"duration":66033},
{"t":808756254,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":7,"duration":101300},
{"t":808892697,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":7,"duration":66913},
{"t":909300823,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":8,"duration":42381},
{"t":909380514,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":8,"duration":33987},
{"t":1004913840,"command":"send to channel","from":"producer2 #20","to":"main","ch":"ch","value":3,"duration":100449},
{"t":1005042550,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":3,"duration":109666},
{"t":1009869567,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":9,"duration":50786},
{"t":1009939318,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":9,"duration":70990},
{"t":1111117264,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":10,"duration":83580},
{"t":1111226667,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":10,"duration":60877},
{"t":1212438857,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":11,"duration":74499},
{"t":1212534130,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":11,"duration":55544},
{"t":1255526525,"command":"send to channel","from":"producer2 #20","to":"main","ch":"ch","value":4,"duration":59311},
{"t":1255604403,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":4,"duration":47287},
{"t":1313748817,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":12,"duration":134322},
{"t":1313934239,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":12,"duration":72268},
{"t":1414225157,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":13,"duration":117786},
{"t":1414372945,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":13,"duration":41769},
{"t":1506772894,"command":"send to channel","from":"producer2 #20","to":"main","ch":"ch","value":5,"duration":79725},
{"t":1506883179,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":5,"duration":63945},
{"t":1514768950,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":14,"duration":59047},
{"t":1514852289,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":14,"duration":46748},
{"t":1616023469,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":15,"duration":116716},
{"t":1616184903,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":15,"duration":58094},
{"t":1716906955,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":16,"duration":118180},
{"t":1717070286,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":16,"duration":57938},
{"t":1757520165,"command":"send to channel","from":"producer2 #20","to":"main","ch":"ch","value":6,"duration":92941},
{"t":1757637286,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":6,"duration":107138},
{"t":1817557179,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":17,"duration":90337},
{"t":1817678793,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":17,"duration":67190},
{"t":1918946670,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":18,"duration":68136},
{"t":1919084886,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":18,"duration":50120},
{"t":2008645322,"command":"send to channel","from":"producer2 #20","to":"main","ch":"ch","value":7,"duration":43081},
{"t":2008701778,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":7,"duration":29341},
{"t":2020149033,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":19,"duration":48456},
{"t":2020212573,"command":"send to channel","from":"main","to":"reader #21","ch":"out","value":19,"duration":27066},
{"t":2121378076,"command":"send to channel","from":"producer1 #19","to":"main","ch":"ch","value":20,"duration":71574},
{"t":2121492674,"command":"stop goroutine","name":"main"}];

	window.samples.fanin = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				width: 1200,
				height: 600,
				camera: "perspective",
				allCaps: true,
				speed: 1.5,
				angle: 120,
				zoom: 1.5,
				autoAngle: false,
				totalTime: 200,
				distance: 80,
				cameraPos: {x: 120, y: 20, z: 120}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

