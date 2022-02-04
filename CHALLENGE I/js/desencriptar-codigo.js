var botonDesencriptador = document.querySelector("#btn-desencriptar");

function decodificar (letra){
    if(letra == "ai"){
        return "a";
    }else if (letra == "enter"){
        return "e";
    }else if (letra == "imes"){
        return "i";
    }else if (letra == "ober"){
        return "o";
    }else if (letra == "ufat"){
        return "u";
    }    
}

function desencriptar (texto){
    var  msgDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, decodificar)
    return msgDesencriptado;
}


botonDesencriptador.addEventListener("click",function(event){
    event.preventDefault();
    var texto = mensajeASerEncriptado.value
    var msgfinal = desencriptar (texto);
    mensajeEncriptado.value = msgfinal;

})