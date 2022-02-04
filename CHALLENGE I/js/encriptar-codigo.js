var botonEncriptador = document.querySelector("#btn-encriptar");

function codificar (letra){
    if(letra == "a"){
        return "ai";
    }else if (letra == "e"){
        return "enter";
    }else if (letra == "i"){
        return "imes";
    }else if (letra == "o"){
        return "ober";
    }else if (letra == "u"){
        return "ufat";
    }    
}

function encriptar (texto){
    var  msgEncriptado = texto.replace(/a|e|i|o|u/g, codificar)
    return msgEncriptado;
}

botonEncriptador.addEventListener("click",function(event){
    event.preventDefault();
    var texto = mensajeASerEncriptado.value
    var textoOk = validarTexto(texto);
    if (textoOk == "1"){
        var msgfinal = encriptar (texto);
        mensajeEncriptado.value = msgfinal;
    }else{
        mensajeEncriptado.value = "No se permiten mayusculas ni caracteres especiales"
    }
});