$(document).ready(function() {
    const opciones = ["Piedra", "Papel", "Tijeras"];
    let modoJuego = "";
    let eleccionJugador1 = "";

    function getResultado(eleccionUsuario, eleccionComputadora) {
        if (eleccionUsuario === eleccionComputadora) {
            return "Es un empate.";
        }
        if (
            (eleccionUsuario === "Piedra" && eleccionComputadora === "Tijeras") ||
            (eleccionUsuario === "Papel" && eleccionComputadora === "Piedra") ||
            (eleccionUsuario === "Tijeras" && eleccionComputadora === "Papel")
        ) {
            return "¡Ganaste!";
        }
        return "Perdiste.";
    }

    $("#vsMachine").click(function() {
        modoJuego = "machine";
        $("#mode-selection").hide();
        $("#game").removeClass("hidden");
        $("#player-prompt").text("Jugador 1, elige tu opción:");
    });

    $("#vsPlayer").click(function() {
        modoJuego = "player";
        $("#mode-selection").hide();
        $("#game").removeClass("hidden");
        $("#player-prompt").text("Jugador 1, elige tu opción:");
    });

    $(".button").click(function() {
        if (modoJuego === "machine") {
            const eleccionUsuario = $(this).text();
            const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
            const resultado = getResultado(eleccionUsuario, eleccionComputadora);

            $("#resultado").html(
                `Elegiste: ${eleccionUsuario}<br>La computadora eligió: ${eleccionComputadora}<br>${resultado}`
            );
        } else if (modoJuego === "player") {
            if (!eleccionJugador1) {
                eleccionJugador1 = $(this).text();
                $("#player-prompt").text("Jugador 2, elige tu opción:");
                $("#resultado").text("Jugador 2, haz tu elección.");
            } else {
                const eleccionJugador2 = $(this).text();
                const resultado = getResultado(eleccionJugador1, eleccionJugador2);

                $("#resultado").html(
                    `Jugador 1 eligió: ${eleccionJugador1}<br>Jugador 2 eligió: ${eleccionJugador2}<br>${resultado}`
                );
                eleccionJugador1 = "";  // Reset para la próxima ronda
                $("#player-prompt").text("Jugador 1, elige tu opción:");
            }
        }
    });
});
