//------------------Selectores----------------

//console.log(document);
//console.log(document.getELementById('cabecera')); //Selector por id
//console.log(document.getElementsByClassName("border-grey")); //seleccion por clase
//console.log(document.getElementsByTagName("nav")); //Selecciona por etiqueta
// console.log(document.getElementsByName("border-grey")) //filtra por las etiquetas name
//console.log(document.querySelector("cabecera")); //Permite seleccionar css
// console.log(document.querySelectorAll("li"));
//console.log(document.querySelector("[name=cabecera]"));
//const lista1 = document.getElementsByClassName("border-grey");
//const lista2 = document.querySelectorAll(".border-grey");

//------------------Tipos de datos-----------------

//elemento.children
//document.childen
//document.parentElement //Siempre Nulo
//elemento.parentElement
//const lista1 = document.getElementsByClassName("border-grey");
//const lista2 = document.querySelectorAll(".border-grey");

//------------------Crear elementos-----------

//const titulo2 = document.createElement('h2'); //crea etiqueta h2
// const textoTitulo2 = document.createTextNode("nuevo titulo"); //crea texto
//const comentario = document.createComment("Comentario"); //crea comentarios
// const articulo = document.querySelector('article');
//Consola: articulo.cloneNode() (Sin hijos)
//Consola: articulo.cloneNode(true) (Con hijos)
//articulo2 = articulo.cloneNode(true);
//Consola: articulo2.isConnected
//const section = document.getElementById("section");
/*section.appendChild(articulo2)
section.insertAdjacentElement('beforebegin',articulo2)
section.insertAdjacentElement('beforeend',articulo2)
section.insertAdjacentElement('afterbegin',articulo2)
section.insertAdjacentElement('afterend',articulo2)

section.insertAdjacentText('beforebegin','Texto a insertar')
section.insertAdjacentText('beforeend','Texto a insertar')
section.insertAdjacentText('afterbegin','Texto a insertar')
section.insertAdjacentText('afterend','Texto a insertar')

section.insertAdjacentHTML('beforebegin','<h3>Esto es un título inventado</h3>')
section.insertAdjacentHTML('beforeend','<h3>Esto es un título inventado</h3>')
section.insertAdjacentHTML('afterbegin','<h3>Esto es un título inventado</h3>')
section.insertAdjacentHTML('afterend','<h3>Esto es un título inventado</h3>')
Consola: section.remove()//Quitar
section.innerHTML
section.innerHTML = '<h3>Nuevo título de sección</h3>'
section.outerHTML
section.outerHTML = '<h3>Nuevo título de sección</h3>'
section.children[0].textContent = 'Otro título más'
//Get
section.getAttribute('id')
//Set
section.setAttribute('nombre','otro-valor')
//Lista de clases
section.classList //Como lista
section.className //Como string
section.className += ' nueva-clase'
section.classList.add('nueva-clase')
section.toggle('clase')*/

//-----------------Eventos-----------------
/*
function clickTitulo() {
    console.log("El usuario hizo clic en el título");
}
//Listener
const tituloFormulario = document.getElementById('titulo-formulario');

//tituloFormulario.onclick = clickTitulo;
tituloFormulario.addEventListener("click",clickTitulo);
//tituloFormulario.removeEventListener("click",clickTitulo);

//Handler para examinar evento
//function clickTitulo(event) {console.log(event);}

//Evento que obliga a esperar que el html se cargue completamente
//antes de acceder a sus elementos
document.addEventListener("DOMContentLoaded", () => {
    console.log("El documento se ha cargado");
});*/

//const form = document.querySelector('#formulario');
/*const enviarFormulario = (ev) => {
    ev.preventDefault();
    console.log(ev);
}*/
/*const enviarFormulario = (ev) => {
    ev.preventDefault();
    console.log(ev.target.name, ev.target.email, ev.target.password);
}*//*
const enviarFormulario = (ev) => {
    ev.preventDefault();

    const { name, email, password } = ev.target;

    console.log(
        name.value,
        email.value,
        password.value);
    if (name.value.length === 0) alert("El nombre no es válido");
}
form.addEventListener("submit", enviarFormulario);
*/

//----------------Bubbling--------------
/*
const tituloForm = document.querySelector('#titulo-formulario');
tituloForm.addEventListener("click", (ev) => {
    // console.log(ev.bubbles, ev.cancelBubble);
    // ev.stopPropagation();
    // console.log(ev.bubbles, ev.cancelBubble);
    console.log("CLICK EN EL TÍTULO");
});

const seccionForm = document.querySelector('#seccion-formulario');
seccionForm.addEventListener("click",
    (ev) => {
        console.log("CLICK EN LA SECCIÓN");
        // console.log(ev.target, ev.currentTarget);
    },
    {
        capture: true
    }
);
*/