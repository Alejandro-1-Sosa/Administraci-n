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

document.addEventListener('DOMContentLoaded', () =>{ 
   // Mostrar/ocultar campos según el tipo de liquidación seleccionado
    const select = document.getElementById('pay');
    const modalMensual = document.getElementById('mensual');
    const modalJornal = document.getElementById('jornal');
    const closeBtn = document.querySelector('.close');

    // Mostrar modal según la opción elegida
    select.addEventListener('change', () => {
        modalMensual.style.display = 'none';
        modalJornal.style.display = 'none';

        if (select.value === 'mensual') {
            modalMensual.style.display = 'block';
        } else if (select.value === ' jornal') {
            modalJornal.style.display = 'block';
        }

    });

    // Cerrar modal al hacer clic en la X
  closeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      modalMensual.style.display = 'none';
      modalJornal.style.display = 'none';
      select.value = '';
    });
  }); 

});
