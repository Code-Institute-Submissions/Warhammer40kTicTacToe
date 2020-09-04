const p1Turn = 'Player 1'
const p2Turn = 'Player 2'
const victory_conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const boxElements = document.querySelectorAll('[data-box]')
const board = document.getElementById('board')
const infoElement = document.getElementById('info')
const resetButton = document.getElementById('reset')
const scoreTextElement = document.getElementById('score')
let nextTurn

//player selects faction
$('.nav-item').on('click mouseover mouseout', function(e) {
    this.addClass('active');
    
}


startGame()




//player clicks on a box 
$('[data-box]').on('click', function(e) {
  const box = e.target
  const currentTurn = nextTurn ? p2Turn : p1Turn
  placeIcon(box, currentTurn)
  if (checkWin(currentTurn)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    changeTurn()
}
}

//place player icon
function placeIcon(box, currentTurn) {
  box.classList.add(currentTurn)
}

//change turn
function changeTurn() {
  nextTurn = !nextTurn
}
//check for empty boxes
//check for victory conditions
