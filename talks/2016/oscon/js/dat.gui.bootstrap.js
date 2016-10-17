$(function() {

  var gui = new dat.GUI();
  var pauseController = gui.add(sample_defaults, "paused");
  var wireframeController = gui.add(sample_defaults, "wireframe");

  gui.closed = true;
});
