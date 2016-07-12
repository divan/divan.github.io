function initScene(canvas, options, instance, data, params) {
	var width = window.innerWidth;
	var height = window.innerHeight;
	var autoRotate = false;
	if (params.autoRotate !== undefined) {
		autoRotate = params.autoRotate;
	}

	var scene = new THREE.Scene();

	var camera = {};
	var cameraPos = {x: 0, y: 50, z: 100};
	if (params.cameraPos != undefined) {
		cameraPos.x = params.cameraPos.x;
		cameraPos.y = params.cameraPos.y;
		cameraPos.z = params.cameraPos.z;
	}
	var cameraZoom = 1;
	if (params.zoom != undefined) {
		cameraZoom = params.zoom;
	}
	if (params.camera == "ortho") {
		camera = new THREE.OrthographicCamera( width/-2, width/2, height/2, height/-2, -1000, 2000 );
	} else {
		camera = new THREE.PerspectiveCamera( 75, width/height, 1, 1000 );
	}
	camera.position.x = cameraPos.x;
	camera.position.y = cameraPos.y;
	camera.position.z = cameraPos.z;
	camera.zoom = cameraZoom;
	camera.updateProjectionMatrix();

	var renderer = new THREE.WebGLRenderer({"canvas": canvas, alpha: true, antialias: true});
	renderer.setSize( width, height );

	var orbit = new THREE.OrbitControls( camera, renderer.domElement );
	orbit.autoRotate = autoRotate;

	var trace = new GoThree.Trace();
	trace.init(scene, data, params, 1);

	orbit.addEventListener('change', function() {
		trace.onControlsChanged(orbit.object);
	});

	document.addEventListener("keydown", function(event) {keydown(event)}, false);

	function animate() {
		if (autoRotate) {
			orbit.update();
		};
		trace.animate();

		requestAnimationFrame( animate, canvas );
		if(!instance.active || sample_defaults.paused) return;

		stats.begin();
		renderer.render( scene, camera );
		stats.end();
	}

	animate();

	function toggleAutoRotate() {
		autoRotate = !autoRotate;
		orbit.autoRotate = autoRotate;
	}

	function keydown(event) {
		switch (event.which) {
			case 80: // 'P' - (Un)Pause autoRotate
				toggleAutoRotate();
				break;
			case 82: // 'R' - Reset
				trace.resetTime();
				break;
			case 83: // 'S' - Slower
				trace.slowdown();
				break;
			case 70: // 'F' - Faster
				trace.speedup();
				break;
			case 187: // '+' - IncWidth
				trace.incWidth();
				break;
			case 189: // '-' - DecWidth
				trace.decWidth();
				break;
			case 48: // '0' - HighlighMode Default
				trace.highlight("default");
				break;
			case 49: // '1' - HighlighMode 1
				trace.highlight("mode1");
				break;
			case 50: // '2' - HighlighMode 2
				trace.highlight("mode2");
				break;
			case 51: // '2' - HighlighMode 3
				trace.highlight("mode3");
				break;
			case 52: // '2' - HighlighMode 4
				trace.highlight("mode4");
				break;
		}
	}
};

