// Ejercicio #4
// Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

const desordenado = (array) => {

    let numRep = new Array();
    let numRandom;
    let tmp_var;
    
    for (let index = array.length; index > 0; index--) {
        numRandom = parseInt(Math.random() * (array.length));
        tmp_var = array.splice(numRandom, 1);
        numRep.push(` ${tmp_var}`);
    } // for
    
    numRep[0] = numRep[0].trim();
    document.getElementById("numeros").value=numRep;

}; // desordenado

function datos() {
    let numeros = document.getElementById("numeros").value.split(", ");

    if (numeros != "") {
        desordenado(numeros);
    } else {
        console.log(numeros);
        alert("Ingresa los números.");
    } // if
} // datos