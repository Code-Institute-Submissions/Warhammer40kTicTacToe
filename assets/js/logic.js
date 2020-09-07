document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelectorAll("#board .box")
  const selectBtn = document.querySelector('.select')
  const turnDisplay = document.querySelector("#info")

  let currentPlayer = "Player 1"
  
  selectBtn.forEach(button) => {
      selectBtn.addEventListener("click", selectResult)
  }

  function selectResult(e) {
      const selectArray = Array.from(selectBtn)
      const selectIndex = selectArray.indexOf(e.target)

      if() {

      }
  }

  box.forEach((box) => {
  box.addEventListener("click", clickResult)
})

function clickResult(e) {
  const boxArray = Array.from(box);
  const index = boxArray.indexOf(e.target)
  turnDisplay.innerHTML = currentPlayer + "Plays Next"

  if(currentPlayer === "Player 1") {
      box[index].classList.add("Player1")
      currentPlayer = "Player 2"
  } else {
      box[index].classList.add("Player2")
      currentPlayer = "Player 1"
  }
}
}
