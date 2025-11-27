function mostrar(infoId) {
    let secciones = document.querySelectorAll('.info');
    secciones.forEach(sec => sec.style.display = "none");

    document.getElementById(infoId).style.display = "block";

    window.scrollTo({
        top: document.getElementById(infoId).offsetTop - 20,
        behavior: 'smooth'
    });
}
