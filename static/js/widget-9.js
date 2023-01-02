const URLactual = window.location.pathname;

if (URLactual == "/responsabilidad") {

    if (document.querySelector(".ui-search")) {
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

        texto_superior_h3.textContent = "Responsabilidad Social";
        texto_superior_p.innerHTML = "<span>Home</span> / Responsabilidad Social"

        tarjeta_principal_texto_h3.textContent = "Socios por un mundo mejor";
        tarjeta_principal_texto_p.textContent = "Nuestra filosofia es brindar soluciones: Ya sea a través de nuestras soluciones de salud, bienestar y belleza, como a partir de nuestras acciones.";
        contenedor_tarjeta_principal_img.src = 'https://www.swissnaturelabs.com/assets/img/xl_2.jpg';

        contenedor_nuestras_acciones_h3.textContent = "Nuestras Acciones"

        nuestras_acciones_tarjeta_img.src = 'https://www.swissnaturelabs.com/assets/img/blog-4.jpg';
        nuestras_acciones_texto_h2.textContent = "ONG Raices";
        nuestras_acciones_texto_p.textContent = "Hemos establecido una alianza con ONG Raices, dedicada a la promocion y restitucion de los derechos de los niños y adolescentes.";

        nuestras_acciones_tarjeta_img_2.src = 'https://www.swissnaturelabs.com/assets/img/blog-5.jpg';
        nuestras_acciones_texto_h2_2.textContent = "Ciclo Danza";
        nuestras_acciones_texto_p_2.textContent = "Hemos realizado una donacion de sillas de ruedas y seguiremos colaborando, a través de donaciones durante todo el año, a find e que personas con discapacidad puedan integrarse.";

        nuestras_acciones_tarjeta_img_3.src = 'https://www.swissnaturelabs.com/assets/img/blog-6.jpg';
        nuestras_acciones_texto_h2_3.textContent = "Unidos es mejor";
        nuestras_acciones_texto_p_3.textContent = "Cada vez que realizas una compra en SNL, estarás colaborando en la donación a una de estas organizaciones sin fines de lucro. Súmate al desafío! MEJOREMOS EL MUNDO JUNTOS.";

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

        texto_superior_h3.textContent = "Responsabilidad Social";
        texto_superior_p.innerHTML = "<span>Home</span> / Responsabilidad Social"

        tarjeta_principal_texto_h3.textContent = "Socios por un mundo mejor";
        tarjeta_principal_texto_p.textContent = "Nuestra filosofia es brindar soluciones: Ya sea a través de nuestras soluciones de salud, bienestar y belleza, como a partir de nuestras acciones.";
        contenedor_tarjeta_principal_img.src = 'https://www.swissnaturelabs.com/assets/img/xl_2.jpg';

        contenedor_nuestras_acciones_h3.textContent = "Nuestras Acciones"

        nuestras_acciones_tarjeta_img.src = 'https://www.swissnaturelabs.com/assets/img/blog-4.jpg';
        nuestras_acciones_texto_h2.textContent = "ONG Raices";
        nuestras_acciones_texto_p.textContent = "Hemos establecido una alianza con ONG Raices, dedicada a la promocion y restitucion de los derechos de los niños y adolescentes.";

        nuestras_acciones_tarjeta_img_2.src = 'https://www.swissnaturelabs.com/assets/img/blog-5.jpg';
        nuestras_acciones_texto_h2_2.textContent = "Ciclo Danza";
        nuestras_acciones_texto_p_2.textContent = "Hemos realizado una donacion de sillas de ruedas y seguiremos colaborando, a través de donaciones durante todo el año, a find e que personas con discapacidad puedan integrarse.";

        nuestras_acciones_tarjeta_img_3.src = 'https://www.swissnaturelabs.com/assets/img/blog-6.jpg';
        nuestras_acciones_texto_h2_3.textContent = "Unidos es mejor";
        nuestras_acciones_texto_p_3.textContent = "Cada vez que realizas una compra en SNL, estarás colaborando en la donación a una de estas organizaciones sin fines de lucro. Súmate al desafío! MEJOREMOS EL MUNDO JUNTOS.";

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