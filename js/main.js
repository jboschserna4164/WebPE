let btns;
let btn1, btn2, btn3, btn4, btn5;
let paginas = ["pagina2.html","http://www.upb.edu.co"];
window.onload = init; //cargar la funcion init en la ventana

function init(){ 
	btns = document.querySelectorAll(".btn"); //Traer todas las referencias de lo que tenga la clase btn
	btn1 = document.getElementById("seccion_0"); //devuelve la referencia por el id especificado
	btn2 = document.getElementById("seccion_1");
	btn3 = document.getElementById("seccion_2");
	btn4 = document.getElementById("seccion_3");
	btn5 = document.getElementById("seccion_4");
	btn1.addEventListener("click",procesarEvento); //al hacer click invoca a la funcion procesorEvento(no se coloca la funcion, sino el nombre de la funcion como referencia)
	btn2.addEventListener("click",procesarEvento);
	btn3.addEventListener("click",procesarEvento);
	btn4.addEventListener("click",procesarEvento);
	btn5.addEventListener("click",procesarEvento);
	//alert("Bienvenido"); //cargar mensaje en una ventanita al entrar a la pagina
}

function procesarEvento(evento) {
	//alert(evento.target.id.split("_")[1]); //.target me dice quien le esta dando click, .id me el id del que le esta dando click
	//evento.preventDefault();  //cancela el funcionamiento por defecto
	seleccionar(evento.target.id.split("_")[1]);
}

function seleccionar(indice) {
	for (var i = 0; i < btns.length; i++) {
		btns[i].classList.remove("seleccion");		//quitarle la clase seleccion a todos los btn
	}
	btns[indice].classList.add("seleccion");	//agrega la clase seleccion unicamente al btn especificado	
}


function cambiarSesion(indice_pagina) {
	seleccionar(indice_pagina);
	//location.href = pagina[indice_pagina];

}