var mySwiper = new Swiper('.swiper-container', {
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
    // autoplay:true,
    pagination:{
        el:".swiper-pagination",
        clicable: true,
        type: 'bullets'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        550:{
            slidesPerView: 1,
            spaceBetween: 20
        },
        600:{
            slidesPerView: 2,
            spaceBetween: 20
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        700: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        800: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20
          },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
})