document.addEventListener("DOMContentLoaded", function(){
    abrirApp();
}) 

function abrirApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector(".productos-imagenes");
    
    for(let i = 1; i <=6; i++) {
        const imagenes = document.createElement("picture");
        imagenes.innerHTML = `
        <source srcset="build/img/grande/${i}.avif" type="image/avif">
        <source srcset="build/img/grande/${i}.webp" type="image/webp">
        <img loading="Lazy" width="200" height="300" src="build/img/grande/${i}.jpg" alt="Imagenes Productos">
        `;

        //Creando donde se colocaran las imagenes.
        imagenes.onclick = function() {
            mostrarImagenes(i)
        }

        //Mostrar imagen en HTML
        galeria.appendChild(imagenes)
    }
}

function mostrarImagenes(id) {
    const imagenes = document.createElement("picture");
    imagenes.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="Lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagenes Productos">
    `;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagenes);
    overlay.classList.add('overlay');
    overlay.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body')
        overlay.remove()

    }

    // Boton para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = "X";
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);



    const body = document.querySelector('body');
    body.appendChild(overlay)
    body.classList.add('fijar-body')

}

