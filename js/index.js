


const valorPeso = 1220; // Tipo de cambio fijo (1 USD = 90.9091 ARS)

const valorDolar = prompt('Ingrese la cantidad en dólares estadounidenses:');

if (valorDolar) {
    const resultado = valorDolar * valorPeso;
    console.log(`Equivalentes a ${resultado} pesos argentinos`);
} else {
    console.log('Ingreso cancelado o valor inválido.');
}

