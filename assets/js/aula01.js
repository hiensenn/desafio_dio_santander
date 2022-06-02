
var numeroContador = document.getElementById('numero');

var numero  = 0;


function somar(){
    
    numero = numero + 1
    numeroContador.innerHTML = numero;

    if(numero > 0)
    {
        numeroContador.style.color="green"
    }
    else
    numeroContador.style.color="white"
}

function subt(){
    

    numero = numero - 1
    numeroContador.innerHTML = numero; 
    if(numero < 0)
    {
        numeroContador.style.color="red"
    }
    
}

