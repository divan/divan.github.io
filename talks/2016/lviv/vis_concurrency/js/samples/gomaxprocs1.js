(function() {
var data = [{"t":0,"command":"create goroutine","name":"main"},
{"t":2129388,"command":"create goroutine","name":"pool #5","parent":"main"},
{"t":2620771,"command":"create goroutine","name":"worker #30","parent":"pool #5"},
{"t":2693033,"command":"create goroutine","name":"worker #7","parent":"pool #5"},
{"t":2756027,"command":"create goroutine","name":"worker #8","parent":"pool #5"},
{"t":2816581,"command":"create goroutine","name":"worker #9","parent":"pool #5"},
{"t":2895352,"command":"create goroutine","name":"worker #10","parent":"pool #5"},
{"t":2963260,"command":"create goroutine","name":"worker #11","parent":"pool #5"},
{"t":3023369,"command":"create goroutine","name":"worker #12","parent":"pool #5"},
{"t":3122432,"command":"create goroutine","name":"worker #13","parent":"pool #5"},
{"t":3184747,"command":"create goroutine","name":"worker #14","parent":"pool #5"},
{"t":3244259,"command":"create goroutine","name":"worker #15","parent":"pool #5"},
{"t":3304809,"command":"create goroutine","name":"worker #16","parent":"pool #5"},
{"t":3364612,"command":"create goroutine","name":"worker #17","parent":"pool #5"},
{"t":3426145,"command":"create goroutine","name":"worker #18","parent":"pool #5"},
{"t":3485509,"command":"create goroutine","name":"worker #19","parent":"pool #5"},
{"t":3545526,"command":"create goroutine","name":"worker #20","parent":"pool #5"},
{"t":3643850,"command":"create goroutine","name":"worker #21","parent":"pool #5"},
{"t":3706600,"command":"create goroutine","name":"worker #22","parent":"pool #5"},
{"t":3766582,"command":"create goroutine","name":"worker #23","parent":"pool #5"},
{"t":3826799,"command":"create goroutine","name":"worker #24","parent":"pool #5"},
{"t":3924461,"command":"create goroutine","name":"worker #25","parent":"pool #5"},
{"t":3987318,"command":"create goroutine","name":"worker #26","parent":"pool #5"},
{"t":4046943,"command":"create goroutine","name":"worker #27","parent":"pool #5"},
{"t":4106973,"command":"create goroutine","name":"worker #28","parent":"pool #5"},
{"t":4203288,"command":"create goroutine","name":"worker #29","parent":"pool #5"},
{"t":104004391,"command":"create goroutine","name":"print #32","parent":"main"},
{"t":104128243,"command":"create goroutine","name":"generate #31","parent":"main"},
{"t":115927529,"command":"send to channel","from":"generate #31","to":"worker #30","ch":"in","value":0,"duration":128523},
{"t":251582841,"command":"send to channel","from":"generate #31","to":"worker #7","ch":"in","value":1,"duration":134998},
{"t":329659784,"command":"send to channel","from":"worker #30","to":"print #32","ch":"out","value":1,"duration":69696},
{"t":329776977,"command":"send to channel","from":"generate #31","to":"worker #8","ch":"in","value":2,"duration":90148},
{"t":465482124,"command":"send to channel","from":"worker #7","to":"print #32","ch":"out","value":2,"duration":122381},
{"t":465786821,"command":"send to channel","from":"generate #31","to":"worker #9","ch":"in","value":3,"duration":154552},
{"t":597277557,"command":"send to channel","from":"worker #8","to":"print #32","ch":"out","value":3,"duration":92493},
{"t":597551153,"command":"send to channel","from":"generate #31","to":"worker #10","ch":"in","value":4,"duration":160408},
{"t":711667374,"command":"send to channel","from":"worker #9","to":"print #32","ch":"out","value":4,"duration":113951},
{"t":711907618,"command":"send to channel","from":"generate #31","to":"worker #11","ch":"in","value":5,"duration":87230},
{"t":824639410,"command":"send to channel","from":"worker #10","to":"print #32","ch":"out","value":5,"duration":76485},
{"t":824868771,"command":"send to channel","from":"generate #31","to":"worker #12","ch":"in","value":6,"duration":126884},
{"t":948093958,"command":"send to channel","from":"worker #11","to":"print #32","ch":"out","value":6,"duration":126317},
{"t":948418345,"command":"send to channel","from":"generate #31","to":"worker #13","ch":"in","value":7,"duration":153081},
{"t":1064794045,"command":"send to channel","from":"worker #12","to":"print #32","ch":"out","value":7,"duration":105534},
{"t":1065029854,"command":"send to channel","from":"generate #31","to":"worker #14","ch":"in","value":8,"duration":124433},
{"t":1190631211,"command":"send to channel","from":"worker #13","to":"print #32","ch":"out","value":8,"duration":114286},
{"t":1190842477,"command":"stop goroutine","name":"main"}];

	window.samples.gomaxprocs1 = {

		initialize: function(canvas, options) {
			var instance = { active: false };
			var params = {
				width: 1200,
				height: 600,
				camera: "perspective",
				allCaps: false,
				speed: 1.3,
				angle: 120,
				angle2: 20,
				zoom: 2.0,
				autoAngle: false,
				distance: 50,
				cameraPos: {x: 110, y: 60, z: 160}
			};
			initScene(canvas, options, instance, data, params);
			return instance;
		}
	};
})();

