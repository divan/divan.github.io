function initScene(canvas, options, instance, data, params) {
	var width = params.width;
	var height = params.height;

	var scene = new THREE.Scene();

	var camera = {};
	var cameraPos = {x: 0, y: 0, z: 150};
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

	var renderer = new THREE.WebGLRenderer({"canvas": canvas, alpha: true});
	renderer.setSize( width, height );

	var orbit = new THREE.OrbitControls( camera, renderer.domElement );

	trace = new GoThree.Trace();
	trace.init(scene, data, params);

	orbit.addEventListener('change', function() {
		trace.onControlsChanged(orbit.object);
	});

	document.addEventListener("keydown", function(event) {trace.Keydown(event)}, false);

	function animate() {
		requestAnimationFrame( animate, canvas );
		if(!instance.active || sample_defaults.paused) return;

		trace.animate();

		renderer.render( scene, camera );
	}

	animate();
};

