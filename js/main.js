const fichas = ["X", "O"];
let incio = confirm("Desea empezar el juego?");
let estadoDeLaPartida = true
let puntuacion = () => {
    if(estadoDeLaPartida === true) {
        for (let i = 0; i < 100; i +=5) {
            let score = i;
            console.log(score);
        }
    }
};
puntuacion()