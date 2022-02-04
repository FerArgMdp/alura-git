var mensajeASerEncriptado = document.querySelector("#input-texto");
var mensajeEncriptado = document.querySelector("#msg");
var botonCopiador = document.querySelector("#btn-copy");

botonCopiador.addEventListener("click", function(event){
    event.preventDefault();
    mensajeEncriptado.select();
    navigator.clipboard.writeText(mensajeEncriptado.value);

})

function validarTexto (texto){
    var out = /[^a-zñ\s]/g;
    if (out.test(texto)){
        return "0";
    }else{
        return "1";
    }
}