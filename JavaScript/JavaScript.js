//todas las paginas
 
 function accion(){
   console.log("Está funcionando mi boton")
   let ancla = document.getElementsByClassName('nav-link')
   for (let i = 0; i < ancla.length; i++){
       ancla[i].classList.toggle('desaparece')
   }
 }

/*
let Edad;
Edad = prompt('Ingrese su Edad')
if(Edad >= 18){
  alert('Puedes entrar, eres mayor de edad.')
}else{
  alert('Eres menor, no puedes ingresar')
}
*/






