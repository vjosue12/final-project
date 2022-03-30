// ============ Variables ============ //
const chooseP = document.getElementById('chooseP');
const toggle = document.querySelector('.toggle');
const box = document.querySelector('.box');
const cells = Array.from(document.querySelectorAll('.boton'));
const empty = ["", "", "", "", "", "", "", "", ""]
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let currentPlayer = 'O';
let computerPlayer = 'X';
let win;

// ============ FUNCTIONS ============ //


// ====== LocalStorage ====== //
const nickI = document.getElementById('nick');
const submitN = document.getElementById('submit');
const newNick = document.getElementById('newNick');
const nickName = document.getElementById('nickName');
const main = document.querySelector('main');

submitN.addEventListener('click', (e) => {
  e.preventDefault()

  localStorage.setItem('user', nickI.value)

  nickName.style.display = 'none';
  main.style.display = 'flex';
})

if(localStorage.getItem('user') !== null) {
  nickI.style.display = 'none';
  newNick.style.display = 'block';

}

newNick.addEventListener('click', (e) => {
  localStorage.removeItem('user')
})


// ====== Game ======//

function initG() {

  function draw() {
    cells.forEach(cell => {
      cell.addEventListener('click', handleClick)

  
      function handleClick(e) {
        const target = e.target;
        const index = cells.indexOf(target);

        toggle.classList.toggle('on')

        target.innerText === '' && (target.innerText = currentPlayer);

        target.innerText !== '' && (target.style.cursor = 'not-allowed');

        checkWin(index)
      }
    })
  }
  draw()

  function checkWin(index) {
    currentPlayer = toggle.classList.contains('on') ? 'X' : 'O';
    empty[index] = currentPlayer

    for(let i = 0; i < winningCombos.length; i++) {

      const winI = winningCombos[i];
      if(empty[winI[0]] === currentPlayer && empty[winI[1]] === currentPlayer && empty[winI[2]] === currentPlayer) {

        box.style.filter = 'blur(5px)';
        chooseP.style.opacity = 0;
        let playerWin;
        playerWin = currentPlayer === 'X' ? 'O' : 'X'; 
        //si uso el currentPlayer para el mesanje de win estaria mostrando el siguiente turno como ganador y no el que gano en si. Esto ya que al momento de hacer click en cada celda el currentPlayer se modifica y se cambia de valor.

        Swal.fire({
          title: `${playerWin} wins!`,
          icon: 'success',
          confirmButtonText: "Restart",
          background: '#0d1b2a',
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then((result) => {
          if (result.isConfirmed) {
            eliminar()
          }
        })
      } 
  }

  

  if(!empty.includes('')) {
    box.style.filter = 'blur(5px)';
    chooseP.style.opacity = 0;

    Swal.fire({
      title: `Its a Tie`,
      icon: 'info',
      confirmButtonText: "Restart",
      background: '#0d1b2a',
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then((result) => {
      if (result.isConfirmed) {
        eliminar()
      }
    })
    

  }
    

    function eliminar() {
      box.style.filter = 'blur(0px)';
      chooseP.style.opacity = 1;
      for(let i = 0; i < empty.length; i++) {
        empty[i] !== '' && (empty[i] = '');
        cells[i].innerText = '';
        cells[i].style.cursor = 'pointer';
      }
    }
    
  }

}
initG()