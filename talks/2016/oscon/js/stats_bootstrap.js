head.js("lib/js/stats.js", function() {
  var stats = new Stats();
  stats.setMode(0); // 0: fps, 1: ms

  // Align top-left
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.zIndex = 100;

  stats.domElement.children[ 0 ].children[ 0 ].style.color = "#aaa";
  stats.domElement.children[ 0 ].style.background = "transparent";
  stats.domElement.children[ 0 ].children[ 1 ].style.display = "none";

  document.body.appendChild( stats.domElement );
  window.stats = stats;

  setInterval( function () {
    stats.update();
  }, 1000 / 60 );
});
