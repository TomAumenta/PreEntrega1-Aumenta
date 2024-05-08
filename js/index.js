
const valorPeso = 1055;



const valorDolar = prompt('Ingrese la cantidad en dólares:');

if (valorDolar) {
    const resultado = valorDolar * valorPeso;
    alert(`Equivalentes a ${resultado} pesos argentinos`);
} else {
    console.log('Ingreso cancelado o valor inválido.');
}

// Contador hasta 10 consola
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Función para convertir de pesos argentinos a dólares
function convertirAPesos(dolares) {
    return dolares * valorPeso;
}

//Ejemplo

const cantidadDolares = 10;
const equivalentePesos = convertirAPesos(cantidadDolares);
console.log(`${cantidadDolares} dólares son equivalentes a ${equivalentePesos} pesos argentinos`);
