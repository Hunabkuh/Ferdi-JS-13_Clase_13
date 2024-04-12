// 1 - ADIVINA EL NUMERO
// Se genera un número aleatorio del 1 al 10(o del 1 al 20 si prefieres).
// En un bucle do...while:
// Te pregunta(puede ser un prompt) ‘qué número es’ ?.
// Y te sigue preguntando hasta que lo adivines.
// Cuando lo adivines, mensaje de “Felicidades, has acertado!”.

// let rangoMin = parseInt(prompt("Ingrese el valor mínimo del rango:"));
// let rangoMax = parseInt(prompt("Ingrese el valor máximo del rango:"));

function numeroAleatorioRango(min, max) {
    min = parseInt(prompt("Ingrese el valor mínimo del rango:"));
    max = parseInt(prompt("Ingrese el valor máximo del rango:"));
    resultado = Math.floor(Math.random() * (max - min + 1) + min);
    return resultado;
}

let rangoMin = 0;
let rangoMax = 0;

var numeroGenerado = numeroAleatorioRango(rangoMin, rangoMax);

console.log("El número Generado es: " + numeroGenerado);

let intentos = 0;

do {
    let adivinar = parseInt(prompt("Ahora adivina el número que aparecerá en pantalla... (Entre el rango que escogiste anteriormente.)"));

    if (numeroGenerado == adivinar) {
        alert("¡Felicidades, acertaste!")
        intentos = 10;
    } else {
        intentos++;
    }

} while (intentos <= 10);




