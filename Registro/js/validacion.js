(() => {

    let password1 = document.getElementById("password1")
    let password2 = document.getElementById("password2")
    let terminos = document.getElementById("invalidCheck3")
let alert = document.getElementById("alert")


    password2.addEventListener("input", ()=>{
        if(password1.value===password2.value)

        password2.setCustomValidity("");
        
        else
        
        password2.setCustomValidity("ERROR");
}
    )

    terminos.addEventListener("click", ()=>{ {
        if (!terminos.checked){
            alert.classList.add("visible")
            btn_terminos.classList.add("text-danger")
            terminos.classList.add("is-invalid")
            terminos.classList.remove("is-valid")
        } else {
            alert.classList.remove("visible")
            btn_terminos.classList.remove("text-danger")
            terminos.classList.remove("is-invalid")
            terminos.classList.add("is-valid")
        }
        }
    })
        
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        
      form.addEventListener('submit', event => {
        
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          alert.classList.add("visible")
            btn_terminos.classList.add("text-danger")
            terminos.classList.add("btn-outline-danger")

        }
        form.classList.add('was-validated')
      }, false)
    })
  })()

  document.querySelector("form").addEventListener("submit",function (e) {
    e.preventDefault(); //Evita el envío del formulario por defecto

    const form = e.target;

    if(!form.checkValidity()) {
      form.classList.add("was-validated"); //Muestra error si hay
      return; 
    }

    // Mostrar la alerta verde
    const alerta = document.getElementById("alertaExito");
    alerta.classList.remove("d-none");

    // Redirigir después de 2.5 segundos
    setTimeout(() => {
      window.location.href = "http://127.0.0.1:5500/index.html";
    }, 2500);

  });


 


