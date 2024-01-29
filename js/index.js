
// conversor de dolar a peso argentino

const valorPeso = 1220; // Tipo de cambio fijo (1 USD = 90.9091 ARS)

const valorDolar = prompt('Ingrese la cantidad en dólares estadounidenses:');

if (valorDolar) {
    const resultado = valorDolar * valorPeso;
    console.log(`Equivalentes a ${resultado} pesos argentinos`);
} else {
    console.log('Ingreso cancelado o valor inválido.');
}


//A modo de en un futuro poner esto como un limite de tiempo que puede estar inactivo en el sitio

var contador = 0;

while (contador < 120) {
    console.log("Contador: " + contador);

    if (contador === 100) {
        console.log("¡El contador llegó a 100 ");
        break; 
    }

    contador++;
}
