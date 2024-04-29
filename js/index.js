
// conversor de dolar a peso argentino Promt

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
  