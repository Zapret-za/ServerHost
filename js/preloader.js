document.addEventListener("DOMContentLoaded", function() {
  var preloader = document.getElementsByClassName("preloader");
  if (preloader.length > 0) {
    preloader[0].style.display = "flex";
  }

  var images = document.getElementsByTagName("img");
  var svgs = document.getElementsByTagName("svg");
  var totalFiles = images.length + svgs.length;
  var filesLoaded = 0;

  var onFileLoad = function() {
    filesLoaded++;

    if (filesLoaded === totalFiles) {
      preloader[0].style.display = "none";
      document.body.style.visibility = "visible";
    }
  };

  for (var i = 0; i < images.length; i++) {
    var image = new Image();
    image.onload = onFileLoad;
    image.src = images[i].src;
  }

  for (var j = 0; j < svgs.length; j++) {
    svgs[j].addEventListener("load", onFileLoad);
  }
});
