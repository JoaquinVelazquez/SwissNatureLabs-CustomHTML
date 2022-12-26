const URLactual = window.location.pathname;

if (URLactual == "/quienes-somos") {
    if(document.querySelector(".ui-search")) {
        const ui_search = document.querySelector(".ui-search");

        ui_search.classList.toggle("invisible");
    
        let main = document.querySelector("#root-app");
    
        let texto_superior = document.createElement("div");
        let texto_superior_h3 = document.createElement("h3");
        let texto_superior_p = document.createElement("p");
    
        let contenedor_tarjeta_principal = document.createElement("div");
        let tarjeta_principal_texto = document.createElement("div");
        let tarjeta_principal_texto_h3 = document.createElement("h3");
        let tarjeta_principal_texto_p = document.createElement("p");
        let contenedor_tarjeta_principal_img = document.createElement("img");
    
        let contenedor_nuestras_acciones = document.createElement("div");
        let contenedor_nuestras_acciones_h3 = document.createElement("h3");
    
        let nuestras_acciones_tarjetas = document.createElement("div");
    
        let nuestras_acciones_tarjeta = document.createElement("div");
        let nuestras_acciones_tarjeta_2 = document.createElement("div");
        let nuestras_acciones_tarjeta_3 = document.createElement("div");
    
        let nuestras_acciones_tarjeta_img = document.createElement("img");
        let nuestras_acciones_tarjeta_img_2 = document.createElement("img");
        let nuestras_acciones_tarjeta_img_3 = document.createElement("img");
    
        let nuestras_acciones_texto = document.createElement("div");
        let nuestras_acciones_texto_2 = document.createElement("div");
        let nuestras_acciones_texto_3 = document.createElement("div");
    
        let nuestras_acciones_texto_h2 = document.createElement("h2");
        let nuestras_acciones_texto_p = document.createElement("p");
        let nuestras_acciones_texto_h2_2 = document.createElement("h2");
        let nuestras_acciones_texto_p_2 = document.createElement("p");
        let nuestras_acciones_texto_h2_3 = document.createElement("h2");
        let nuestras_acciones_texto_p_3 = document.createElement("p");
    
        texto_superior_h3.textContent = "Quienes Somos";
        texto_superior_p.innerHTML = "<span>Home</span> / Quienes Somos"
    
        tarjeta_principal_texto_h3.textContent = "Quienes Somos";
        tarjeta_principal_texto_p.textContent = "Somos una empresa de origen europeo que desarrolla soluciones de salud, belleza y bienestar, en laboratorios internacionales de primer nivel, con ingredientes naturales, respetando el medio ambiente.";
        contenedor_tarjeta_principal_img.src = 'https://www.swissnaturelabs.com/assets/img/xl.jpg';
    
        contenedor_nuestras_acciones_h3.textContent = "Nuestra Filosofía"
    
        nuestras_acciones_tarjeta_img.src = 'https://www.swissnaturelabs.com/assets/img/blog-1.jpg';
        nuestras_acciones_texto_h2.textContent = "Cuidado del medioambiente";
        nuestras_acciones_texto_p.textContent = "Contamos con certificación PEFC para nuestro packaging.";
    
        nuestras_acciones_tarjeta_img_2.src = 'https://www.swissnaturelabs.com/assets/img/blog-2.jpg';
        nuestras_acciones_texto_h2_2.textContent = "Reciclaje por un mundo mejor";
        nuestras_acciones_texto_p_2.textContent = "Te invitamos a cuidar nuestro planeta. Súmate al reciclaje.";
    
        nuestras_acciones_tarjeta_img_3.src = 'https://www.swissnaturelabs.com/assets/img/blog-1.jpg';
        nuestras_acciones_texto_h2_3.textContent = "Ingredientes origen natural";
        nuestras_acciones_texto_p_3.textContent = "La naturaleza es nuestra fuente de inspiración y la base de nuestros productos.";
    
        main.appendChild(texto_superior);
        texto_superior.appendChild(texto_superior_h3);
        texto_superior.appendChild(texto_superior_p);
    
        main.appendChild(contenedor_tarjeta_principal);
        contenedor_tarjeta_principal.appendChild(tarjeta_principal_texto);
        tarjeta_principal_texto.appendChild(tarjeta_principal_texto_h3);
        tarjeta_principal_texto.appendChild(tarjeta_principal_texto_p);
        contenedor_tarjeta_principal.appendChild(contenedor_tarjeta_principal_img);
    
        main.appendChild(contenedor_nuestras_acciones);
        contenedor_nuestras_acciones.appendChild(contenedor_nuestras_acciones_h3);
    
        contenedor_nuestras_acciones.appendChild(nuestras_acciones_tarjetas);
    
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta);
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta_2);
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta_3);
    
        nuestras_acciones_tarjeta.appendChild(nuestras_acciones_tarjeta_img);
        nuestras_acciones_tarjeta.appendChild(nuestras_acciones_texto);
        nuestras_acciones_texto.appendChild(nuestras_acciones_texto_h2);
        nuestras_acciones_texto.appendChild(nuestras_acciones_texto_p);
    
        nuestras_acciones_tarjeta_2.appendChild(nuestras_acciones_tarjeta_img_2);
        nuestras_acciones_tarjeta_2.appendChild(nuestras_acciones_texto_2);
        nuestras_acciones_texto_2.appendChild(nuestras_acciones_texto_h2_2);
        nuestras_acciones_texto_2.appendChild(nuestras_acciones_texto_p_2);
    
        nuestras_acciones_tarjeta_3.appendChild(nuestras_acciones_tarjeta_img_3);
        nuestras_acciones_tarjeta_3.appendChild(nuestras_acciones_texto_3);
        nuestras_acciones_texto_3.appendChild(nuestras_acciones_texto_h2_3);
        nuestras_acciones_texto_3.appendChild(nuestras_acciones_texto_p_3);
    
        texto_superior.classList.add("texto-superior");
    
        contenedor_tarjeta_principal.classList.add("contenedor-tarjeta-principal")
        tarjeta_principal_texto.classList.add("tarjeta-principal-texto")
    
        contenedor_nuestras_acciones.classList.add("contenedor-nuestras-acciones");
        nuestras_acciones_tarjetas.classList.add("nuestras-acciones-tarjetas")
    
        nuestras_acciones_tarjeta.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_2.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_3.classList.add("nuestras-acciones-tarjeta");
    
        nuestras_acciones_texto.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_2.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_3.classList.add("nuestras-acciones-texto")
    
        throw new Error("Error controlado");
    } else if (document.querySelector(".ui-search--zrp")){
        const ui_search = document.querySelector(".ui-search--zrp");

        ui_search.classList.toggle("invisible");
    
        let main = document.querySelector("#root-app");
    
        let texto_superior = document.createElement("div");
        let texto_superior_h3 = document.createElement("h3");
        let texto_superior_p = document.createElement("p");
    
        let contenedor_tarjeta_principal = document.createElement("div");
        let tarjeta_principal_texto = document.createElement("div");
        let tarjeta_principal_texto_h3 = document.createElement("h3");
        let tarjeta_principal_texto_p = document.createElement("p");
        let contenedor_tarjeta_principal_img = document.createElement("img");
    
        let contenedor_nuestras_acciones = document.createElement("div");
        let contenedor_nuestras_acciones_h3 = document.createElement("h3");
    
        let nuestras_acciones_tarjetas = document.createElement("div");
    
        let nuestras_acciones_tarjeta = document.createElement("div");
        let nuestras_acciones_tarjeta_2 = document.createElement("div");
        let nuestras_acciones_tarjeta_3 = document.createElement("div");
    
        let nuestras_acciones_tarjeta_img = document.createElement("img");
        let nuestras_acciones_tarjeta_img_2 = document.createElement("img");
        let nuestras_acciones_tarjeta_img_3 = document.createElement("img");
    
        let nuestras_acciones_texto = document.createElement("div");
        let nuestras_acciones_texto_2 = document.createElement("div");
        let nuestras_acciones_texto_3 = document.createElement("div");
    
        let nuestras_acciones_texto_h2 = document.createElement("h2");
        let nuestras_acciones_texto_p = document.createElement("p");
        let nuestras_acciones_texto_h2_2 = document.createElement("h2");
        let nuestras_acciones_texto_p_2 = document.createElement("p");
        let nuestras_acciones_texto_h2_3 = document.createElement("h2");
        let nuestras_acciones_texto_p_3 = document.createElement("p");
    
        texto_superior_h3.textContent = "Quienes Somos";
        texto_superior_p.innerHTML = "<span>Home</span> / Quienes Somos"
    
        tarjeta_principal_texto_h3.textContent = "Quienes Somos";
        tarjeta_principal_texto_p.textContent = "Somos una empresa de origen europeo que desarrolla soluciones de salud, belleza y bienestar, en laboratorios internacionales de primer nivel, con ingredientes naturales, respetando el medio ambiente.";
        contenedor_tarjeta_principal_img.src = 'https://www.swissnaturelabs.com/assets/img/xl.jpg';
    
        contenedor_nuestras_acciones_h3.textContent = "Nuestra Filosofía"
    
        nuestras_acciones_tarjeta_img.src = 'https://www.swissnaturelabs.com/assets/img/blog-1.jpg';
        nuestras_acciones_texto_h2.textContent = "Cuidado del medioambiente";
        nuestras_acciones_texto_p.textContent = "Contamos con certificación PEFC para nuestro packaging.";
    
        nuestras_acciones_tarjeta_img_2.src = 'https://www.swissnaturelabs.com/assets/img/blog-2.jpg';
        nuestras_acciones_texto_h2_2.textContent = "Reciclaje por un mundo mejor";
        nuestras_acciones_texto_p_2.textContent = "Te invitamos a cuidar nuestro planeta. Súmate al reciclaje.";
    
        nuestras_acciones_tarjeta_img_3.src = 'https://www.swissnaturelabs.com/assets/img/blog-1.jpg';
        nuestras_acciones_texto_h2_3.textContent = "Ingredientes origen natural";
        nuestras_acciones_texto_p_3.textContent = "La naturaleza es nuestra fuente de inspiración y la base de nuestros productos.";
    
        main.appendChild(texto_superior);
        texto_superior.appendChild(texto_superior_h3);
        texto_superior.appendChild(texto_superior_p);
    
        main.appendChild(contenedor_tarjeta_principal);
        contenedor_tarjeta_principal.appendChild(tarjeta_principal_texto);
        tarjeta_principal_texto.appendChild(tarjeta_principal_texto_h3);
        tarjeta_principal_texto.appendChild(tarjeta_principal_texto_p);
        contenedor_tarjeta_principal.appendChild(contenedor_tarjeta_principal_img);
    
        main.appendChild(contenedor_nuestras_acciones);
        contenedor_nuestras_acciones.appendChild(contenedor_nuestras_acciones_h3);
    
        contenedor_nuestras_acciones.appendChild(nuestras_acciones_tarjetas);
    
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta);
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta_2);
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta_3);
    
        nuestras_acciones_tarjeta.appendChild(nuestras_acciones_tarjeta_img);
        nuestras_acciones_tarjeta.appendChild(nuestras_acciones_texto);
        nuestras_acciones_texto.appendChild(nuestras_acciones_texto_h2);
        nuestras_acciones_texto.appendChild(nuestras_acciones_texto_p);
    
        nuestras_acciones_tarjeta_2.appendChild(nuestras_acciones_tarjeta_img_2);
        nuestras_acciones_tarjeta_2.appendChild(nuestras_acciones_texto_2);
        nuestras_acciones_texto_2.appendChild(nuestras_acciones_texto_h2_2);
        nuestras_acciones_texto_2.appendChild(nuestras_acciones_texto_p_2);
    
        nuestras_acciones_tarjeta_3.appendChild(nuestras_acciones_tarjeta_img_3);
        nuestras_acciones_tarjeta_3.appendChild(nuestras_acciones_texto_3);
        nuestras_acciones_texto_3.appendChild(nuestras_acciones_texto_h2_3);
        nuestras_acciones_texto_3.appendChild(nuestras_acciones_texto_p_3);
    
        texto_superior.classList.add("texto-superior");
    
        contenedor_tarjeta_principal.classList.add("contenedor-tarjeta-principal")
        tarjeta_principal_texto.classList.add("tarjeta-principal-texto")
    
        contenedor_nuestras_acciones.classList.add("contenedor-nuestras-acciones");
        nuestras_acciones_tarjetas.classList.add("nuestras-acciones-tarjetas")
    
        nuestras_acciones_tarjeta.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_2.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_3.classList.add("nuestras-acciones-tarjeta");
    
        nuestras_acciones_texto.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_2.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_3.classList.add("nuestras-acciones-texto")
    
        throw new Error("Error controlado");
    }

}