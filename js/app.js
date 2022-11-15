/*
Título: Validacion de CURP
Descripcion: Pagina web para conocer si una curp es valida o no
Fecha: 07 de Noviembre del 2022
Versión: 1.2
Autores: REEMY Solutions
*/


//Función para aignar la expresion para validar si una curp es valida o no
function curpValida(curp) {
    // Expresion
    var expresion = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|1\d|2\d|3[01])[HM](?:AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NE|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/; // \d representa los numeros arabigos
    var validado = curp.match(expresion);
	
    // Validar si se cumple la expresion
    if (!validado)
    return false;
    
    // CURP Validado
    return true; 
}

// Funcion para validar la CURP
function validarInput() {
    // Creacion de objeto curp para obtener el valor del input
    var curp = document.getElementById('curp_input').value.toUpperCase();
    var resultado = document.getElementById("resultado");
    var validar = "No válido";

    // Alerta en caso que no se introduzcan los datos
    alerta();

    // Validar CURP
    if (curpValida(curp)) {
        validar = "Válido";
        resultado.classList.add("ok");
        resultado.style.background = "rgb(74, 214, 74)";
        resultado.style.color = "black";
    } else {
        if(curp==""){
            return null;
        }

        resultado.classList.remove("ok");
        resultado.style.background = "rgb(255, 73, 73)";
    }
    resultado.innerText = "CURP: " + curp + "\nFormato: " + validar;

}

// Funcion para limpiar el input y el mensaje
function limpiar(){
    curp = document.getElementById('curp_input');
    res = document.getElementById('resultado');

    curp.value = "";
    res.innerHTML = "";
    res.style.background = "rgb(226, 187, 139)";

}

// Funcion de alerta
function alerta(){
    curp = document.getElementById('curp_input').value;
    resultado = document.getElementById("resultado");

    if(curp==""){

        alert("Introduzca su CURP");
        resultado.innerText = "";
        res.style.background = "rgb(226, 187, 139)";
    }
    
}

