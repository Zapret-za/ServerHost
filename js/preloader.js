window.addEventListener("load", function() {
  var preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.display = "flex";
  }

  var images = document.getElementsByTagName("img");
  var svgs = document.getElementsByTagName("svg");
  var totalFiles = images.length + svgs.length;
  var filesLoaded = 0;

  var onFileLoad = function() {
    filesLoaded++;

    if (filesLoaded === totalFiles) {
      preloader.style.display = "none";
      document.body.style.visibility = "visible";
    }
  };

  for (var i = 0; i < images.length; i++) {
    var image = new Image();
    image.onload = onFileLoad;
    image.src = images[i].src;
  }

  for (var j = 0; j < svgs.length; j++) {
    var svg = svgs[j];
    var svgUrl = svg.getAttribute("data-src");

    if (svgUrl) {
      var xhr = new XMLHttpRequest();
      xhr.onload = onFileLoad;
      xhr.open("GET", svgUrl, true);
      xhr.send();
    } else {
      onFileLoad();
    }
  }
});
