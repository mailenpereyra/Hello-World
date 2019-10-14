// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function(){

    let formulario = document.formulario_registro;
    let elementos = formulario.elements;
    
    // Funcion que se ejecuta cuando el evento click es activado
    let validarInputs = function() {
        for (let i = 0; i < elementos.length; i++) {
            // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
            if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
                // Si es tipo texto, email o password vamos a comprobar que esten completados los input
                if (elementos[i].value == 0){
                    console.log("el campo" + elementos[i].name + "esta incompleto");
                   elementos[i].className = elementos[i].className + " error";
                    return false;
                } else {
                    elementos[i].className = elementos[i].className.replace(" error", " ");
                }
    
            }
            
        }
         // Comprobando que las contraseñas coincidan
        if(elementos.pass.value !== elementos.pass2.value) {
            elementos.pass.value = " ";
            elementos.pass2.value = " ";
            elementos.pass.className = elementos.pass.className + " error";
            elementos.pass2.className = elementos.pass2.className + " error";
        } else {
            elementos.pass.className = elementos.pass.className.replace(" error", " ");
            elementos.pass2.className = elementos.pass2.className.replace(" error", " ");
        }
        return true;
    };
    
    let validarRadios = function(){
        let opciones = document.getElementsByName("sexo");
        let resultado = false;
    
        for (let i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "radio" && elementos[i].name == "sexo") {
                for (let o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked) {
                        resultado = true;
                        break;
                    }
                }
    
                if (resultado == false) {
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    console.log("el campo sexo esta incompleto");
                    return false;
                } else {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true;
                }
            }
        }
    };
    
    let validarCheckbox = function() {
        let opciones = document.getElementsByName("terminos");
        let resultado = false;
    
        for (let i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "checkbox") {
                for (let o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked) {
                        resultado = true;
                        break;
                    }
                }
    
                if (resultado == false) {
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    console.log("el campo terminos y condiciones esta incompleto");
                    return false;
                } else {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true;
                }
            }
        }
    };
    
    let enviar = function(e){
        if(!validarInputs()) {
            console.log("falto validar los input");
            e.preventDefault();
        } else if (!validarRadios()){
            console.log("falto validar los radios");
            e.preventDefault();
        } else if (!validarCheckbox()) {
            console.log("falto validar los checkbox");
            e.preventDefault();
        } else {
            console.log("envia correctamente");
          // comentar linea cuando tengamos el formulario listo
           // e.preventDefault();
        }
    };
    
    //funciones blur y focus
    let focusInput = function(){
        this.parentElement.children[1].className = "label active";
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace(" error", "");
    };
    
    let blurInput = function(){
        if (this.value <= 0){
            this.parentElement.children[1].className = "label";
            this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
        }
    };
    
    
    //eventos
    formulario.addEventListener("submit", enviar);
    
    
    for ( let i=0; i < elementos.length; i++) {
        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
            elementos[i].addEventListener("focus", focusInput);
            elementos[i].addEventListener("blur", blurInput);
        }
    }
    
    }());