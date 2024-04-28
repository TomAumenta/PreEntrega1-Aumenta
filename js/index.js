
// conversor de dolar a peso argentino

const valorPeso = 1220; 

const valorDolar = prompt('Ingrese la cantidad en dólares:');

if (valorDolar) {
    const resultado = valorDolar * valorPeso;
    alert(`Equivalentes a ${resultado} pesos argentinos`);
} else {
    console.log('Ingreso cancelado o valor inválido.');
}