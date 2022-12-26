const URLactual = window.location.pathname;

if (URLactual == "/todos-los-productos") {
    if (document.querySelector(".ui-search")) {
        const ui_search = document.querySelector(".ui-search");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");

        main.innerHTML = '<div class="texto-superior"><h3 class="titulo">Productos</h3><p><span>Home</span> / Productos</p></div><div class="contenedor-nuestras-acciones"><h3>Nuestros Productos</h3><div class="nuestros-productos-tarjetas"><div class="nuestras-acciones-tarjeta"><a href="/adelnatur"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/adelnatur.jpg"alt="blog-7"/><div class="nuestros-productos-texto"><h2>Adelnatur</h2><p>Tratamiento Anti-kilos</p></div></div></a><div class="nuestras-acciones-tarjeta"><a href="/carbo-blocker"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/carboblockerfb.jpg" alt="blog-8"/><div class="nuestros-productos-texto"><h2>CarboBlocker FB</h2><p>Bloqueador Carbohidratos</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/perfect-belly"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/perfectbelly.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Perfect Belly SOS</h2><p>Quemador de grasas</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="duraplen"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/duraplen.jpg"alt="blog-7"/><div class="nuestros-productos-texto"><h2>Duraplén</h2><p>Prolonga tu rendimiento</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/penilforte"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/penilforte.jpg"alt="blog-8"/><div class="nuestros-productos-texto"><h2>Penilforte</h2><p>Potenciador Sexual Natural</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/prostamax"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/prostamax.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Prostamax</h2><p>La respuesta Natural contra problemas de Próstata</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/juvenatur"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/juvenatur.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Juvenatur</h2><p>Rejuvenecedor Doble Acción: Flash y Duradera</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/lashmax"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/lashmax.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>LashMax</h2><p>Serum Activador de Crecimiento de Pestañas y Cejas</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/natural-volume"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/naturalvolume.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Natural Volume</h2><p>UltraVoluminizador de Senos</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/calvistop"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/calvistop.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Calvistop</h2><p>Sistema Anticaída</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/aliviamax"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/aliviamax.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Aliviamax gel de Masajes</h2><p>Con Andiroba</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/bacticure"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/bacticure.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Bacticure</h2><p>Complejo Probiótico Natural</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/helix"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/helix.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Helix</h2><p>Propiedades reconstituyentes del caracol</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/superthotics"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/superthotics.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>SuperThotics</h2><p>Plantillas ortopédicas personalizables</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/dual-biactive-dtox"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/dualbiactivedtox.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Dual Biactive D-Tox</h2><p>Activa la desintoxicación de tu cuerpo</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/hy-impact"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/hyimpact.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Hy-Impact</h2><p>Masajeador muscular inalámbrico</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/microear"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/microear.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Micro-Ear</h2><p>Amplificador de sonido alta definción</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/one-power-readers"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/onepowerreaders.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>One Power Readers</h2><p>Corrige tu visión de acuerdo a tus necesidades</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/vizmaxx"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/vizmaxx.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Vizmaxx</h2><p>Enfoque automático</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/xtreme-power-belt"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/xtremepowerbelt.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Xtreme Power Belt</h2><p>Reductora de cintura</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/lynses"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/lynses.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Lynses</h2><p>Lente autograduable</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/agefit"><img src="https://iili.io/hp1WCJ.jpg" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Agefit</h2><p>El antiedad de efecto inmediato</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/ear-wizard"><img src="https://iili.io/hp1XEv.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Ear Wizard</h2><p>El limpia oídos anti-cera</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/eagle-eyes"><img src="https://iili.io/hp1h4R.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Eagle Eyes</h2><p>Lentes de sol</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/earzoom"><img src="https://iili.io/QpJLaj.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Ear Zoom</h2><p>Amplificador de sonido</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/kolbex"><img src="https://iili.io/QpJZyQ.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Kolbex</h2><p>La solución natural y efectiva contra las molestias articulares</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/lipboost"><img src="https://iili.io/QpJQ8x.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Lipboost</h2><p>Voluminizador de labios</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/pain-x-it"><img src="https://iili.io/QpJs3b.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Pain X it</h2><p>El dispositivo de Estimulación Nerviosa Eléctrica Transcutánea</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/posture-doctor"><img src="https://iili.io/QpJbwB.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Posture Doctor</h2><p>Corrector de postura instantáneo</p></div></a></div></div></div>';

        throw new Error("Error controlado");
    } else if (document.querySelector(".ui-search--zrp")) {
        const ui_search = document.querySelector(".ui-search--zrp");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");

        main.innerHTML = '<div class="texto-superior"><h3 class="titulo">Productos</h3><p><span>Home</span> / Productos</p></div><div class="contenedor-nuestras-acciones"><h3>Nuestros Productos</h3><div class="nuestros-productos-tarjetas"><div class="nuestras-acciones-tarjeta"><a href="/adelnatur"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/adelnatur.jpg"alt="blog-7"/><div class="nuestros-productos-texto"><h2>Adelnatur</h2><p>Tratamiento Anti-kilos</p></div></div></a><div class="nuestras-acciones-tarjeta"><a href="/carbo-blocker"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/carboblockerfb.jpg" alt="blog-8"/><div class="nuestros-productos-texto"><h2>CarboBlocker FB</h2><p>Bloqueador Carbohidratos</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/perfect-belly"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/perfectbelly.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Perfect Belly SOS</h2><p>Quemador de grasas</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="duraplen"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/duraplen.jpg"alt="blog-7"/><div class="nuestros-productos-texto"><h2>Duraplén</h2><p>Prolonga tu rendimiento</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/penilforte"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/penilforte.jpg"alt="blog-8"/><div class="nuestros-productos-texto"><h2>Penilforte</h2><p>Potenciador Sexual Natural</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/prostamax"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/prostamax.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Prostamax</h2><p>La respuesta Natural contra problemas de Próstata</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/juvenatur"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/juvenatur.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Juvenatur</h2><p>Rejuvenecedor Doble Acción: Flash y Duradera</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/lashmax"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/lashmax.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>LashMax</h2><p>Serum Activador de Crecimiento de Pestañas y Cejas</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/natural-volume"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/naturalvolume.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Natural Volume</h2><p>UltraVoluminizador de Senos</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/calvistop"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/calvistop.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Calvistop</h2><p>Sistema Anticaída</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/aliviamax"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/aliviamax.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Aliviamax gel de Masajes</h2><p>Con Andiroba</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/bacticure"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/bacticure.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Bacticure</h2><p>Complejo Probiótico Natural</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/helix"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/helix.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Helix</h2><p>Propiedades reconstituyentes del caracol</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/superthotics"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/superthotics.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>SuperThotics</h2><p>Plantillas ortopédicas personalizables</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/dual-biactive-dtox"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/dualbiactivedtox.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Dual Biactive D-Tox</h2><p>Activa la desintoxicación de tu cuerpo</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/hy-impact"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/hyimpact.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Hy-Impact</h2><p>Masajeador muscular inalámbrico</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/microear"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/microear.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Micro-Ear</h2><p>Amplificador de sonido alta definción</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/one-power-readers"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/onepowerreaders.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>One Power Readers</h2><p>Corrige tu visión de acuerdo a tus necesidades</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/vizmaxx"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/vizmaxx.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Vizmaxx</h2><p>Enfoque automático</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/xtreme-power-belt"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/xtremepowerbelt.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Xtreme Power Belt</h2><p>Reductora de cintura</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/lynses"><img src="https://www.swissnaturelabs.com/assets/img/portfolio/lynses.jpg"alt="blog-9"/><div class="nuestros-productos-texto"><h2>Lynses</h2><p>Lente autograduable</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/agefit"><img src="https://iili.io/hp1WCJ.jpg" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Agefit</h2><p>El antiedad de efecto inmediato</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/ear-wizard"><img src="https://iili.io/hp1XEv.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Ear Wizard</h2><p>El limpia oídos anti-cera</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/eagle-eyes"><img src="https://iili.io/hp1h4R.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Eagle Eyes</h2><p>Lentes de sol</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/earzoom"><img src="https://iili.io/QpJLaj.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Ear Zoom</h2><p>Amplificador de sonido</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/kolbex"><img src="https://iili.io/QpJZyQ.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Kolbex</h2><p>La solución natural y efectiva contra las molestias articulares</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/lipboost"><img src="https://iili.io/QpJQ8x.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Lipboost</h2><p>Voluminizador de labios</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/pain-x-it"><img src="https://iili.io/QpJs3b.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Pain X it</h2><p>El dispositivo de Estimulación Nerviosa Eléctrica Transcutánea</p></div></a></div><div class="nuestras-acciones-tarjeta"><a href="/posture-doctor"><img src="https://iili.io/QpJbwB.png" alt="blog-9" /><div class="nuestros-productos-texto"><h2>Posture Doctor</h2><p>Corrector de postura instantáneo</p></div></a></div></div></div>';

        throw new Error("Error controlado");
    }
}