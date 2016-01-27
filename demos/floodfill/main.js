var scene, camera, renderer;

init();
animate();

function init() {
	scene = new THREE.Scene();

	// CAMERA
	width = window.innerWidth;	
	height = window.innerHeight;
	var center = new THREE.Vector3(60, -50, -10);
	//camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, -1000, 2000 );
	camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000 );
	camera.position.x = 120;
	camera.position.y = 90;
	camera.position.z = 170;
	camera.updateProjectionMatrix();

	mat1 = new THREE.LineBasicMaterial( { color: 0x0000ff, linewidth: 4, } );
	trace = new GoThree.Trace();
	trace.init(scene, data, {
		allCaps: false,
		zoom: 1.2,
		speed: 1.3,
		angle: 30,
		autoGrow: false,
		autoAngle: false,
		totalTime: 200,
		distance: 50
	});

	// RENDERER
	renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setSize( width, height );

	// CONTROLS
	var orbit = new THREE.OrbitControls( camera, renderer.domElement );
	orbit.addEventListener( 'change', function() {
		trace.onControlsChanged(orbit.object);
	});

	// ADD CUSTOM KEY HANDLERS
	document.addEventListener("keydown", function(event) {trace.Keydown(event)}, false);

	var div = document.getElementById('render');
	div.appendChild( renderer.domElement );
}

function animate() {
	trace.animate();

	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
function restart() {
	trace.resetTime();
}

function speedup() {
	trace.speedup();
}

function slowdown() {
	trace.slowdown();
}
