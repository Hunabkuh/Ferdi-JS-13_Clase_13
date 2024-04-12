// 2 - LANZAR LOS DADOS:
// Dos jugadores, PLAYER1 y PLAYER2, se enfrentan a tirar los dados.
//PLAYER1: Se genera un número del 1 al 6 cuando el usuario aprieta el botón "lanzar dado".Se muestra el resultado en pantalla con innerHTML.
//PLAYER2: juega su turno
// Al final se dice quién de los dos ha ganado(o si ha empatado).
// Crear una página con presentación CSS, según tu tiempo e imaginación.


function numeroAleatorioRango(min, max) {

    resultado = Math.floor(Math.random() * (max - min + 1) + min);
    return resultado;
}

function turnoJugador1() {

    resultado1 = numeroAleatorioRango(1, 6);
    console.log("Resultado del jugador 1: " + resultado1);
    document.getElementById("resultado1").innerHTML = resultado1;
    return resultado1;
}

function turnoJugador2() {

    resultado2 = numeroAleatorioRango(1, 6);
    console.log("Resultado del jugador 2: " + resultado2);
    document.getElementById("resultado2").innerHTML = resultado2;
    return resultado2;
}

function ganadorPartida() {

    resultadoPlayer1 = turnoJugador1();
    resultadoPlayer2 = turnoJugador2();

    if (resultadoPlayer1 > resultadoPlayer2) {
        alert("¡Felicidades Jugador 1!");
        document.getElementById("resultado3").innerHTML = ("¡Felicidades Jugador 1! Has ganado con: " + resultadoPlayer1);
        document.getElementById("resultado3")

    } else if (resultadoPlayer1 == resultadoPlayer2) {
        alert("¡Ha habido un empate!");
        document.getElementById("resultado3").innerHTML = "¡EMPATE!";

    } else {
        alert("¡Felicidades Jugador 2!");
        document.getElementById("resultado3").innerHTML = resultadoPlayer2;
    }
}




