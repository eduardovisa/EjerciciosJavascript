// Ejercicio #2
// María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema: Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.

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