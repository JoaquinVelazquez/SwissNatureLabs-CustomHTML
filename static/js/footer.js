var URLactual = window.location.pathname;
var pautas = document.querySelector(".contenedor-tarjeta-filosofia");
var newsletter = document.querySelector(".contenedor-newsletter");

console.log(URLactual);

if (URLactual == "/") {
    pautas.classList.toggle("invisible");
    newsletter.classList.toggle("invisible");
}