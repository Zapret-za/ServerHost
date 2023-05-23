var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 60,
    freeMode: true,   
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    loopedSlides: 8
  });