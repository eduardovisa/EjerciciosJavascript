// Ejercicio #3
// Escribir una función que permita saber si un número se repite dentro de un arreglo.

// Casos de prueba:

// Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]

// Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]

// Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]

const numRepetido = (array) => {
    array.sort(function(a,b) {
        return a - b;
    });

    let numRep = new Array();
    let numRep_verify = new Array();
    for (let index = 0; index < array.length - 1; index++) {
        if (array[index] == array[index + 1]) {
            if (numRep_verify.indexOf(array[index]) == -1) {1, 22, 5, 14, 24, 31, 27, 15, 105
                numRep_verify.push(`${array[index]}`);
                numRep.push(` ${array[index]}`);
                index += 1;
            }
        } 
    }
    
    // console.log(array);
    console.log(numRep_verify);

    if (numRep_verify.length != 0) {
        return alert(`Los números que se repiten son: ${numRep}`);
    } else {
        return alert(`No se repite ningún número.`);
    }
};

function datos() {
    let numeros = document.getElementById("numeros").value.split(", ");

    if (numeros != "") {
        numRepetido(numeros);
    } else {
        console.log(numeros);
        alert("Ingresa los números.");
    }
}