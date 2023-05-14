const linea1 = document.querySelector(".linea1");
const linea2 = document.querySelector(".linea2");
const linea3 = document.querySelector(".linea3");

const menuEscondido = document.querySelector(".menu_escondido");

const menu = document.querySelector(".barra_menu");
menu.addEventListener("click", () => {
    //classList nos proporciona add para agregar o hacer, eliminar o quitar, toggle para hacer ambos, de acuerdo a lo que pusiste  le hara a una clase
    linea1.classList.toggle("activarlinea1");
    linea2.classList.toggle("activarlinea2");
    linea3.classList.toggle("activarlinea3");
    
    menuEscondido.classList.toggle("mover_menu");
    

});