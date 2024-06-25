// let paragElement = document.getElementById("parag") as HTMLInputElement;
// let paragValue = paragElement!.textContent;
// console.log(paragValue);

document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll<HTMLImageElement>(".cartas");

    images.forEach(function (image) {
        image.addEventListener("mouseover", imageMouseOver);
        image.addEventListener("mouseout", imageMouseOut);
    });
});

function imageMouseOver(event: MouseEvent) {
    let encima = event.target as HTMLImageElement;
    encima.src = "./img/card-front.png"; 
}

function imageMouseOut(event: MouseEvent) {
    let encima = event.target as HTMLImageElement;
    encima.src = "./img/card-back.png"; 
}

