// función que coje los cliccs 
document.addEventListener("DOMContentLoaded", function () {
    let interruptor = document.getElementById("interruptor");
    interruptor?.addEventListener("click", cambiarInterruptor);
});


function cambiarInterruptor(event: MouseEvent) {
    let cambiar = event.target as HTMLImageElement;
    let src = cambiar.src.split("/").pop(); 
    let bombilla  = document.getElementById("Bombilla") as HTMLImageElement;


    if (src === "boff.jpg") {
        cambiar.src = "./img/bon.jpg";
        bombilla.src  = "./img/on.jpg";
        console.log(cambiar.src);
        console.log("entra on");
    } else {
        cambiar.src = "./img/boff.jpg";
        bombilla.src  = "./img/off.jpg";
        console.log(cambiar.src);
        console.log("entra off");
    }
}