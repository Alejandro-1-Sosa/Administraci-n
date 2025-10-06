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
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    select.addEventListener('change', () => {
        if (select.value === '') return;
    
        //Título dinámico
        modalTitle.textContent = select.value === 'mensual' ? 'Liquidación Mensual' : 'Liquidación por jornal ';
        
        // Contenido dinámico
        modalBody.innerHTML = select.value === 'mensual'
           ? `
              <p>Salario Mensual: <input type="text" placeholder="Ingrese el salario mensual"></p>
              <p>Días Trabajados: <input type="number" placeholder="30"></p>
              <p>Valor Jornal : <input type="text" ></p>
              <p>Valor Hora : <input type="text" ></p>
              <p>Valor Hora Extra Especial : <input type="text" ></p>
              <br>
              <table>
              
              
              </table>
            `
            : `
              <p>Salario por Jornal: <input type="text" placeholder="Ingrese el salario por jornal"></p>
              <p>Jornales Trabajados: <input type="number" placeholder="20"></p>
            `;

        // Mostrar modal
        modal.style.display = 'block';  
    });

    // Cerrar modal al hacer clic en la X
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        select.value = ''; // Reinicia el select
    });

    // Cerrar el modal al hacer click fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.select.display = 'none';
            select.value = '';

    });
  
});
