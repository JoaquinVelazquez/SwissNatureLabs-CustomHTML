const URLactual = window.location.pathname;

if (URLactual == "/beneficios") {
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
        let nuestras_acciones_tarjetas_2 = document.createElement("div");
    
        let nuestras_acciones_tarjeta = document.createElement("div");
        let nuestras_acciones_tarjeta_2 = document.createElement("div");
        let nuestras_acciones_tarjeta_3 = document.createElement("div");
        let nuestras_acciones_tarjeta_4 = document.createElement("div");
        let nuestras_acciones_tarjeta_5 = document.createElement("div");
        let nuestras_acciones_tarjeta_6 = document.createElement("div");
    
        let nuestras_acciones_tarjeta_img = document.createElement("img");
        let nuestras_acciones_tarjeta_img_2 = document.createElement("img");
        let nuestras_acciones_tarjeta_img_3 = document.createElement("img");
        let nuestras_acciones_tarjeta_img_4 = document.createElement("img");
        let nuestras_acciones_tarjeta_img_5 = document.createElement("img");
        let nuestras_acciones_tarjeta_img_6 = document.createElement("img");
    
        let nuestras_acciones_texto = document.createElement("div");
        let nuestras_acciones_texto_2 = document.createElement("div");
        let nuestras_acciones_texto_3 = document.createElement("div");
        let nuestras_acciones_texto_4 = document.createElement("div");
        let nuestras_acciones_texto_5 = document.createElement("div");
        let nuestras_acciones_texto_6 = document.createElement("div");
    
        let nuestras_acciones_texto_h2 = document.createElement("h2");
        let nuestras_acciones_texto_p = document.createElement("p");
        let nuestras_acciones_texto_h2_2 = document.createElement("h2");
        let nuestras_acciones_texto_p_2 = document.createElement("p");
        let nuestras_acciones_texto_h2_3 = document.createElement("h2");
        let nuestras_acciones_texto_p_3 = document.createElement("p");
        let nuestras_acciones_texto_h2_4 = document.createElement("h2");
        let nuestras_acciones_texto_p_4 = document.createElement("p");
        let nuestras_acciones_texto_h2_5 = document.createElement("h2");
        let nuestras_acciones_texto_p_5 = document.createElement("p");
        let nuestras_acciones_texto_h2_6 = document.createElement("h2");
        let nuestras_acciones_texto_p_6 = document.createElement("p");
    
        texto_superior_h3.textContent = "Beneficios para ti";
        texto_superior_p.innerHTML = "<span>Home</span> / Beneficios para ti"
    
        tarjeta_principal_texto_h3.textContent = "Compromiso con nuestros clientes";
        tarjeta_principal_texto_p.textContent = "Nuestro servicio, tu bienestar.";
        contenedor_tarjeta_principal_img.src = 'https://www.swissnaturelabs.com/assets/img/xl_2.jpg';
    
        contenedor_nuestras_acciones_h3.textContent = "Nuestros Beneficios"
    
        nuestras_acciones_tarjeta_img.src = 'https://www.swissnaturelabs.com/assets/img/blog-7.jpg';
        nuestras_acciones_texto_h2.textContent = "Programa Acompañamiento Especializado";
        nuestras_acciones_texto_p.textContent = "Por cada compra que realices, SNL te ofrece asesoramiento gratuito con un equipo de asesores especializados, que te guiarán a lo largo de todo tu tratamiento.";
    
        nuestras_acciones_tarjeta_img_2.src = 'https://www.swissnaturelabs.com/assets/img/blog-8.jpg';
        nuestras_acciones_texto_h2_2.textContent = "100% COMPROMETIDOS";
        nuestras_acciones_texto_p_2.textContent = "Creemos que el mejor negocio es que nuestros clientes estén satisfechos, por eso asumimos un compromiso total en cada uno de nuestros proyectos, en todas las áreas de la empresa.";
    
        nuestras_acciones_tarjeta_img_3.src = 'https://www.swissnaturelabs.com/assets/img/blog-9.jpg';
        nuestras_acciones_texto_h2_3.textContent = "COMPRA SEGURA ONLINE";
        nuestras_acciones_texto_p_3.textContent = "Tu seguridad es lo más importante, por eso puedes comprar nuestros productos estés donde estés. En la forma segura y confiable.";
    
        nuestras_acciones_tarjeta_img_4.src = 'https://www.swissnaturelabs.com/assets/img/blog-10.jpg';
        nuestras_acciones_texto_h2_4.textContent = "ENTREGA A DOMICILIO";
        nuestras_acciones_texto_p_4.textContent = "No necesitas moverte de tu casa. Lo llevamos adonde tú indiques.";
    
        nuestras_acciones_tarjeta_img_5.src = 'https://www.swissnaturelabs.com/assets/img/blog-11.jpg';
        nuestras_acciones_texto_h2_5.textContent = "GARANTÍA 30 DÍAS";
        nuestras_acciones_texto_p_5.textContent = "Si el producto no te satisface, tienes 30 días de garantía y te devolvemos el dinero.";
    
        nuestras_acciones_tarjeta_img_6.src = 'https://www.swissnaturelabs.com/assets/img/blog-12.jpg';
        nuestras_acciones_texto_h2_6.textContent = "SATISFACCIÓN ASEGURADA";
        nuestras_acciones_texto_p_6.textContent = "Nuestros clientes lo certifican: 99 % de SATISFACCIÓN ASEGURADA.";
    
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
        contenedor_nuestras_acciones.appendChild(nuestras_acciones_tarjetas_2);
    
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta);
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta_2);
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta_3);
    
        nuestras_acciones_tarjetas_2.appendChild(nuestras_acciones_tarjeta_4);
        nuestras_acciones_tarjetas_2.appendChild(nuestras_acciones_tarjeta_5);
        nuestras_acciones_tarjetas_2.appendChild(nuestras_acciones_tarjeta_6);
    
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
    
        nuestras_acciones_tarjeta_4.appendChild(nuestras_acciones_tarjeta_img_4);
        nuestras_acciones_tarjeta_4.appendChild(nuestras_acciones_texto_4);
        nuestras_acciones_texto_4.appendChild(nuestras_acciones_texto_h2_4);
        nuestras_acciones_texto_4.appendChild(nuestras_acciones_texto_p_4);
    
        nuestras_acciones_tarjeta_5.appendChild(nuestras_acciones_tarjeta_img_5);
        nuestras_acciones_tarjeta_5.appendChild(nuestras_acciones_texto_5);
        nuestras_acciones_texto_5.appendChild(nuestras_acciones_texto_h2_5);
        nuestras_acciones_texto_5.appendChild(nuestras_acciones_texto_p_5);
    
        nuestras_acciones_tarjeta_6.appendChild(nuestras_acciones_tarjeta_img_6);
        nuestras_acciones_tarjeta_6.appendChild(nuestras_acciones_texto_6);
        nuestras_acciones_texto_6.appendChild(nuestras_acciones_texto_h2_6);
        nuestras_acciones_texto_6.appendChild(nuestras_acciones_texto_p_6);
    
        texto_superior.classList.add("texto-superior");
    
        contenedor_tarjeta_principal.classList.add("contenedor-tarjeta-principal")
        tarjeta_principal_texto.classList.add("tarjeta-principal-texto")
    
        contenedor_nuestras_acciones.classList.add("contenedor-nuestras-acciones");
        nuestras_acciones_tarjetas.classList.add("nuestras-acciones-tarjetas")
        nuestras_acciones_tarjetas_2.classList.add("nuestras-acciones-tarjetas")
    
        nuestras_acciones_tarjeta.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_2.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_3.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_4.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_5.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_6.classList.add("nuestras-acciones-tarjeta");
    
        nuestras_acciones_texto.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_2.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_3.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_4.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_5.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_6.classList.add("nuestras-acciones-texto")
    
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
        let nuestras_acciones_tarjetas_2 = document.createElement("div");
    
        let nuestras_acciones_tarjeta = document.createElement("div");
        let nuestras_acciones_tarjeta_2 = document.createElement("div");
        let nuestras_acciones_tarjeta_3 = document.createElement("div");
        let nuestras_acciones_tarjeta_4 = document.createElement("div");
        let nuestras_acciones_tarjeta_5 = document.createElement("div");
        let nuestras_acciones_tarjeta_6 = document.createElement("div");
    
        let nuestras_acciones_tarjeta_img = document.createElement("img");
        let nuestras_acciones_tarjeta_img_2 = document.createElement("img");
        let nuestras_acciones_tarjeta_img_3 = document.createElement("img");
        let nuestras_acciones_tarjeta_img_4 = document.createElement("img");
        let nuestras_acciones_tarjeta_img_5 = document.createElement("img");
        let nuestras_acciones_tarjeta_img_6 = document.createElement("img");
    
        let nuestras_acciones_texto = document.createElement("div");
        let nuestras_acciones_texto_2 = document.createElement("div");
        let nuestras_acciones_texto_3 = document.createElement("div");
        let nuestras_acciones_texto_4 = document.createElement("div");
        let nuestras_acciones_texto_5 = document.createElement("div");
        let nuestras_acciones_texto_6 = document.createElement("div");
    
        let nuestras_acciones_texto_h2 = document.createElement("h2");
        let nuestras_acciones_texto_p = document.createElement("p");
        let nuestras_acciones_texto_h2_2 = document.createElement("h2");
        let nuestras_acciones_texto_p_2 = document.createElement("p");
        let nuestras_acciones_texto_h2_3 = document.createElement("h2");
        let nuestras_acciones_texto_p_3 = document.createElement("p");
        let nuestras_acciones_texto_h2_4 = document.createElement("h2");
        let nuestras_acciones_texto_p_4 = document.createElement("p");
        let nuestras_acciones_texto_h2_5 = document.createElement("h2");
        let nuestras_acciones_texto_p_5 = document.createElement("p");
        let nuestras_acciones_texto_h2_6 = document.createElement("h2");
        let nuestras_acciones_texto_p_6 = document.createElement("p");
    
        texto_superior_h3.textContent = "Beneficios para ti";
        texto_superior_p.innerHTML = "<span>Home</span> / Beneficios para ti"
    
        tarjeta_principal_texto_h3.textContent = "Compromiso con nuestros clientes";
        tarjeta_principal_texto_p.textContent = "Nuestro servicio, tu bienestar.";
        contenedor_tarjeta_principal_img.src = 'https://www.swissnaturelabs.com/assets/img/xl_2.jpg';
    
        contenedor_nuestras_acciones_h3.textContent = "Nuestros Beneficios"
    
        nuestras_acciones_tarjeta_img.src = 'https://www.swissnaturelabs.com/assets/img/blog-7.jpg';
        nuestras_acciones_texto_h2.textContent = "Programa Acompañamiento Especializado";
        nuestras_acciones_texto_p.textContent = "Por cada compra que realices, SNL te ofrece asesoramiento gratuito con un equipo de asesores especializados, que te guiarán a lo largo de todo tu tratamiento.";
    
        nuestras_acciones_tarjeta_img_2.src = 'https://www.swissnaturelabs.com/assets/img/blog-8.jpg';
        nuestras_acciones_texto_h2_2.textContent = "100% COMPROMETIDOS";
        nuestras_acciones_texto_p_2.textContent = "Creemos que el mejor negocio es que nuestros clientes estén satisfechos, por eso asumimos un compromiso total en cada uno de nuestros proyectos, en todas las áreas de la empresa.";
    
        nuestras_acciones_tarjeta_img_3.src = 'https://www.swissnaturelabs.com/assets/img/blog-9.jpg';
        nuestras_acciones_texto_h2_3.textContent = "COMPRA SEGURA ONLINE";
        nuestras_acciones_texto_p_3.textContent = "Tu seguridad es lo más importante, por eso puedes comprar nuestros productos estés donde estés. En la forma segura y confiable.";
    
        nuestras_acciones_tarjeta_img_4.src = 'https://www.swissnaturelabs.com/assets/img/blog-10.jpg';
        nuestras_acciones_texto_h2_4.textContent = "ENTREGA A DOMICILIO";
        nuestras_acciones_texto_p_4.textContent = "No necesitas moverte de tu casa. Lo llevamos adonde tú indiques.";
    
        nuestras_acciones_tarjeta_img_5.src = 'https://www.swissnaturelabs.com/assets/img/blog-11.jpg';
        nuestras_acciones_texto_h2_5.textContent = "GARANTÍA 30 DÍAS";
        nuestras_acciones_texto_p_5.textContent = "Si el producto no te satisface, tienes 30 días de garantía y te devolvemos el dinero.";
    
        nuestras_acciones_tarjeta_img_6.src = 'https://www.swissnaturelabs.com/assets/img/blog-12.jpg';
        nuestras_acciones_texto_h2_6.textContent = "SATISFACCIÓN ASEGURADA";
        nuestras_acciones_texto_p_6.textContent = "Nuestros clientes lo certifican: 99 % de SATISFACCIÓN ASEGURADA.";
    
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
        contenedor_nuestras_acciones.appendChild(nuestras_acciones_tarjetas_2);
    
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta);
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta_2);
        nuestras_acciones_tarjetas.appendChild(nuestras_acciones_tarjeta_3);
    
        nuestras_acciones_tarjetas_2.appendChild(nuestras_acciones_tarjeta_4);
        nuestras_acciones_tarjetas_2.appendChild(nuestras_acciones_tarjeta_5);
        nuestras_acciones_tarjetas_2.appendChild(nuestras_acciones_tarjeta_6);
    
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
    
        nuestras_acciones_tarjeta_4.appendChild(nuestras_acciones_tarjeta_img_4);
        nuestras_acciones_tarjeta_4.appendChild(nuestras_acciones_texto_4);
        nuestras_acciones_texto_4.appendChild(nuestras_acciones_texto_h2_4);
        nuestras_acciones_texto_4.appendChild(nuestras_acciones_texto_p_4);
    
        nuestras_acciones_tarjeta_5.appendChild(nuestras_acciones_tarjeta_img_5);
        nuestras_acciones_tarjeta_5.appendChild(nuestras_acciones_texto_5);
        nuestras_acciones_texto_5.appendChild(nuestras_acciones_texto_h2_5);
        nuestras_acciones_texto_5.appendChild(nuestras_acciones_texto_p_5);
    
        nuestras_acciones_tarjeta_6.appendChild(nuestras_acciones_tarjeta_img_6);
        nuestras_acciones_tarjeta_6.appendChild(nuestras_acciones_texto_6);
        nuestras_acciones_texto_6.appendChild(nuestras_acciones_texto_h2_6);
        nuestras_acciones_texto_6.appendChild(nuestras_acciones_texto_p_6);
    
        texto_superior.classList.add("texto-superior");
    
        contenedor_tarjeta_principal.classList.add("contenedor-tarjeta-principal")
        tarjeta_principal_texto.classList.add("tarjeta-principal-texto")
    
        contenedor_nuestras_acciones.classList.add("contenedor-nuestras-acciones");
        nuestras_acciones_tarjetas.classList.add("nuestras-acciones-tarjetas")
        nuestras_acciones_tarjetas_2.classList.add("nuestras-acciones-tarjetas")
    
        nuestras_acciones_tarjeta.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_2.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_3.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_4.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_5.classList.add("nuestras-acciones-tarjeta");
        nuestras_acciones_tarjeta_6.classList.add("nuestras-acciones-tarjeta");
    
        nuestras_acciones_texto.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_2.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_3.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_4.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_5.classList.add("nuestras-acciones-texto")
        nuestras_acciones_texto_6.classList.add("nuestras-acciones-texto")
    
        throw new Error("Error controlado");
    } else {
        
    }
}



