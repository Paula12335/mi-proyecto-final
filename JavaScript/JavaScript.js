//inicio
 
 function accion(){
   console.log("Está funcionando mi boton")
   let ancla = document.getElementsByClassName('nav-link')
   for (let i = 0; i < ancla.length; i++){
       ancla[i].classList.toggle('desaparece')
   }
 }


//lugares - carousel
const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false
})
