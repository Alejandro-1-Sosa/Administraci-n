let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función para el Cierre de Sección
function logout() {
    localStorage.clear();
    sessionStorage.clear();

    // Redirige al index.html
    window.location.href = '#';

}

// Función para la pagina 1 - administration.html
 document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('zoomed');
    });
});

// Función para la página 2 - payroll.html

// Mostrar/ocultar campos según el tipo de liquidación seleccionado
    const select = document.getElementById('pay');
    const mensual = document.getElementById('mensual');
    const jornal = document.getElementById('jornal');

    select.addEventListener('change', () => {
      mensual.style.display = select.value === 'mensual' ? 'block' : 'none';
      jornal.style.display = select.value === 'jornal' ? 'block' : 'none';
    });