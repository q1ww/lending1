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


let btn = document.querySelector('.burger'),
    navigator = document.querySelector('.navigator'),
    header = document.querySelector('.header'),
    signButton  = document.querySelector('.sign__button'),
    singUserModal = document.querySelector('.singUserModal')
    


btn.addEventListener('click', function(){
    navigator.classList.toggle("active")
    btn.classList.toggle('active')

})


window.addEventListener('scroll', function() {
   if(window.pageYOffset > 200){
       header.classList.add('headerActive')
   }else{
       header.classList.remove('headerActive')
   }
  });

  signButton.addEventListener('click', function(){
    singUserModal.style.display = "flex"
  })
  
  singUserModal.addEventListener('click', function(e){
     const target = e.target 
     if(target.classList.contains('modal__exit') || target.classList.contains('singUserModal')){
        singUserModal.style.display = "none"
     }
   
  })







