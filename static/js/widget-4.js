var categoriaFlecha = document.querySelector(".categorias-flecha");
var categoriaMenu = document.querySelector(".categorias_menu");
var nosotrosFlecha = document.querySelector(".nosotros-flecha");
var nosotrosMenu = document.querySelector(".nosotros_menu");
var categoriasSub = document.querySelector(".categorias_sub");
var nosotrosSub = document.querySelector(".nosotros_sub");

categoriaFlecha.addEventListener('click', function(){
    console.log("Hiciste click en Categorias");
    categoriaFlecha.classList.toggle("rotacion");
    categoriasSub.classList.toggle("visible");
    categoriasSub.classList.toggle("invisible");
})

categoriaMenu.addEventListener('click', function(){
    console.log("Hiciste click en Categorias");
    categoriaFlecha.classList.toggle("rotacion");
    categoriasSub.classList.toggle("visible");
    categoriasSub.classList.toggle("invisible");
})

nosotrosFlecha.addEventListener('click', function(){
    console.log("Hiciste click en Sobre Nosotros")
    nosotrosFlecha.classList.toggle("rotacion");
    nosotrosSub.classList.toggle("visible");
    nosotrosSub.classList.toggle("invisible");
})

nosotrosMenu.addEventListener('click', function(){
    console.log("Hiciste click en Sobre Nosotros")
    nosotrosFlecha.classList.toggle("rotacion");
    nosotrosSub.classList.toggle("visible");
    nosotrosSub.classList.toggle("invisible");
})

/////////////////////////////////////////////////////////

var categoriaFlecha_mobile = document.querySelector(".categorias-flecha-mobile");
var categoriaMenu_mobile = document.querySelector(".categorias_menu-mobile");
var nosotrosFlecha_mobile = document.querySelector(".nosotros-flecha-mobile");
var nosotrosMenu_mobile = document.querySelector(".nosotros_menu-mobile");
var categoriasSub_mobile = document.querySelector(".categorias_sub-mobile");
var nosotrosSub_mobile = document.querySelector(".nosotros_sub-mobile");

categoriaFlecha_mobile.addEventListener('click', function(){
    console.log("Hiciste click en Categorias");
    categoriaFlecha_mobile.classList.toggle("rotacion");
    categoriasSub_mobile.classList.toggle("visible");
    categoriasSub_mobile.classList.toggle("invisible");
})

categoriaMenu_mobile.addEventListener('click', function(){
    console.log("Hiciste click en Categorias");
    categoriaFlecha_mobile.classList.toggle("rotacion");
    categoriasSub_mobile.classList.toggle("visible");
    categoriasSub_mobile.classList.toggle("invisible");
})

nosotrosMenu_mobile.addEventListener('click', function(){
    console.log("Hiciste click en Sobre Nosotros")
    nosotrosFlecha_mobile.classList.toggle("rotacion");
    nosotrosSub_mobile.classList.toggle("visible");
    nosotrosSub_mobile.classList.toggle("invisible");
})

nosotrosFlecha_mobile.addEventListener('click', function(){
    console.log("Hiciste click en Sobre Nosotros")
    nosotrosFlecha_mobile.classList.toggle("rotacion");
    nosotrosSub_mobile.classList.toggle("visible");
    nosotrosSub_mobile.classList.toggle("invisible");
})