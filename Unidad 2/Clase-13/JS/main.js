function add1 (a , b){
    return a + b;
}
// Comentario de una linea 

const add2 = (a , b) =>  a + b;
/* comentario de mas lineas
linea 2
cerrar comentario */ 

const add3 = (a, b) => {
    return a + b;
}


// RESULT DEL ID del DIV
function addReturnDiv  (a , b){
    document.getElementById('result').innerHTML = a + b; 
}

function addReturnDivFormat1(a , b){
    document.getElementById('result').innerHTML ='El resultado es:' + (a + b);
}


function addReturnDivFormat2  (a , b){
    document.getElementById('result').innerHTML =`
    El 
    Resultado
    de la suma
    es: ${a + b}`; // el uso de ` ` sirve para hacer los enter sin tener que concatenar y permite el paso de las variables con ${VARIABLE} 
}
