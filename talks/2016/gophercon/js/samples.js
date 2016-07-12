(function() {
  var eventEmitter = new EventEmitter();

  window.sample_defaults = {
    addListener: function(event, listener) {
      eventEmitter.addListener(event, listener);
    },
    width: 320,
    height: 240,
    paused: false,
    wireframe: false
  };

  window.samples = {};
  function createSample($el) {
	  console.log("Create sample")
    var index = $el.data("sample");
    var instance = window.samples[index].initialize($el[0]);
    $el.data("instance", instance);
    return instance;
  };

  function runCurrentSample(currentSlide) {
    $(currentSlide).find("[data-sample]").each(function() {
      var instance = createSample($(this));
      if (instance) instance.active = true;
    });
  };

  function initializeOnLoad() {
    runCurrentSample($("section.present"));

    // Activate appropriate sample on slide change.
    Reveal.addEventListener('slidechanged', function(event) {
      // Clear all slides
      $("[data-sample]").each(function() {
        var instance = $(this).data("instance");
        if (instance) instance.active = false;
      });

      var currentSlide = event.currentSlide;
	  runCurrentSample(currentSlide);
    });

    eventEmitter.emitEvent("initialized");
  }
  Reveal.addEventListener('fragmentshown', function(event) {
	  // Clear all slides
	  $("[data-sample]").each(function() {
		  var instance = $(this).data("instance");
		  if (instance) instance.active = false;
	  });
	  var currentSlide = Reveal.getCurrentSlide();
	  runCurrentSample(currentSlide);
  });

  head.js(
    "js/samples/hello01.js",
    "js/samples/pingpong01.js",
    "js/samples/pingpong03.js",
    "js/samples/pingpong36.js",
    "js/samples/primesieve.js",
    "js/samples/timer01.js",
    "js/samples/server01.js",
    "js/samples/server02.js",
    "js/samples/workers01.js",
    "js/samples/workers02.js",
    "js/samples/server03.js",
    "js/samples/gomaxprocs1.js",
    "js/samples/gomaxprocs24.js",
    "js/samples/floodfill.js",
    "js/samples/parallelism00.js",
    "js/samples/parallelism01.js",
    "js/samples/parallelism02.js",
    "js/samples/leakage.js",
    "js/samples/fanin.js",
    initializeOnLoad);
})();
