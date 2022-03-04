function winCase() {
    const div = document.querySelector('main > div');
    div.className = "end-match";

    const span = document.createElement('span');
    span.innerText = "You Win";

    const button = document.createElement('button');
    button.innerText = "Restart";

    div.prepend(span)
    div.appendChild(button)
}

function lostCase() {
    const div = document.querySelector('main > div');
    div.className = "end-match";

    const span = document.createElement('span');
    span.innerText = "You Lost";

    const button = document.createElement('button');
    button.innerText = "Restart";

    div.prepend(span)
    div.appendChild(button)
}


const funcion = (a) => {
    a = Math.round(Math.random() * 10);
    if (a % 2 === 0) {
        winCase()

        const box = document.querySelector('.box');
        box.className = "blur";

    } else {
        lostCase()
        
        const box = document.querySelector('.box');
        box.className = "blur";
    }
}
funcion()