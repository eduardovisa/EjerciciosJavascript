// Ejercicio #1
// Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]

const numMayor = (array) => {
    array.sort(function(a,b) {
        return b - a;
    });

    console.log(array);
    let index = array.length - 1;
    let mensaje = `El número mayor es el ${array[index]}`;
    
    return alert(mensaje);
};

function datos() {
    let numeros = document.getElementById("numeros").value.split(", ");
    let regExpNums = /[^A-Za-z]$/;

    if (numeros != "") {
        numMayor(numeros);
    } else {
        console.log(numeros);
        alert("Ingresa los números.");
    }

}