document.addEventListener("DOMContentLoaded", function() {
  var preloaders = document.getElementsByClassName("preloader");
  if (preloaders.length > 0) {
    var preloader = preloaders[0];
    preloader.style.display = "flex";
  }

  var images = document.getElementsByTagName("img");
  var imagesLoaded = 0;
  var totalImages = images.length;

  for (var i = 0; i < totalImages; i++) {
    var image = new Image();
    image.onload = function() {
      imagesLoaded++;

      if (imagesLoaded === totalImages) {
        preloader.style.display = "none";
        document.body.style.visibility = "visible";
      }
    };

    image.src = images[i].src;
  }
});



