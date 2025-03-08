const pixelArt = document.querySelector('.pixel-art');
const message = document.querySelector(".txt")
const backgroundFrame = document.querySelector(".container")
let frame = 0;
const totalFrames = 4; // ajusta según el número total de frames en tu animación
let x = false;

function animatePixelArt() {
    pixelArt.style.backgroundImage = `url('imgs/pixil-frame-${frame}(2).png')`;

    frame = (frame % totalFrames) + 1;
}

function messageElect() {
    list =["Hola MftNv❤️. Espero que en este dia, la pases increible. Por que eso eres. Para mi eres una mujer(mi mujer) muy especial e increible que alegra todos mis dias cuando te veo. Gracias por aparecer en mi vida🥰❤️🌻"];
    return list[(Math.floor(Math.random() * ((list.length))))];
}



function actionMove(){
    backgroundFrame.style.backgroundImage = `url('imgs/pixil-frame-background-0.png')`;
    if (x) {
        message.textContent = messageElect();
    } else {
        message.textContent = "Hola MftNv❤️. Espero que en este dia, la pases increible. Por que eso eres. Para mi eres una mujer(mi mujer) muy especial e increible que alegra todos mis dias cuando te veo. Gracias por aparecer en mi vida🥰❤️🌻"
        x=true;
    }
    
}

setInterval(animatePixelArt, 100); // ajusta el intervalo según la velocidad deseada
