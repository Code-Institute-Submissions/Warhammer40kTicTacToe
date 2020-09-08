let playerIcon = $();
let cpuIcon = $();
const box = document.querySelectorAll("#board .box");
const turnDisplay = document.querySelector("#info");
let turnCount = 0;

let currentPlayer = "Player 1";

$("#aa").on("click", function () {
  $("li .select", !this).css("background-color", "#fafafa");
  $(this).css("background-color", "blue").attr("aria-pressed", true);
  $("body").css("background-color", "blue");
  $(".newgame").css("background-color", "green");
  playerIcon.addClass(".aa");
});

$("#cha").on("click", function () {
  $("li .select", !this).css("background-color", "#fafafa");
  $(this).css("background-color", "red").attr("aria-pressed", true);
  $("body").css("background-color", "red");
  $(".newgame").css("background-color", "green");
  playerIcon.addClass(".cha");
});

$("#eld").on("click", function () {
  $("li .select", !this).css("background-color", "#fafafa");
  $(this).css("background-color", "green").attr("aria-pressed", true);
  $("body").css("background-color", "green");
  $(".newgame").css("background-color", "green");
  playerIcon.addClass(".eld");
});

$("#nec").on("click", function () {
  $("li .select", !this).css("background-color", "#fafafa");
  $(this).css("background-color", "silver").attr("aria-pressed", true);
  $("body").css("background-color", "silver");
  $(".newgame").css("background-color", "green");
  playerIcon.addClass(".nec");
});

$("#tau").on("click", function () {
  $("li .select", !this).css("background-color", "#fafafa");
  $(this).css("background-color", "orange").attr("aria-pressed", true);
  $("body").css("background-color", "orange");
  $(".newgame").css("background-color", "green");
  playerIcon.addClass(".tau");
});

$(".ng").on("click", startGame);

function startGame() {
  $("#board input").removeClass(".playerIcon", ".cpuIcon");
}

box.forEach((box) => {
  box.addEventListener("click", clickResult);
});

function clickResult(e) {
  const boxArray = Array.from(box);
  const index = boxArray.indexOf(e.target);
  turnDisplay.innerHTML = currentPlayer + " Plays Next";
  turnCount = turnCount + 1 < 9;

  if (currentPlayer === "Player 1") {
    box[index].innerHTML = playerIcon;
    currentPlayer = "Player 2";
  } else {
    box[index].innerHTML = cpuIcon;
    currentPlayer = "Player 1";
  }
}
