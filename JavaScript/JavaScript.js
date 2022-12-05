//inicio
 
 function accion(){
   console.log("Está funcionando mi boton")
   let ancla = document.getElementsByClassName('nav-link')
   for (let i = 0; i < ancla.length; i++){
       ancla[i].classList.toggle('desaparece')
   }
 }
