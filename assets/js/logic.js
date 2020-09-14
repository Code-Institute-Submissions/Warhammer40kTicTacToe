$(document).ready(function () {
  let playerIcon;
  let cpuIcon;
  var turnValid = false;
  var startButton = $(".newgame");
  var box = document.querySelectorAll(".box");
  var selector = document.querySelectorAll(".select");

  $(selector).on("click", function (e) {
    $(`.select:not(#${e.target.id})`).attr("disabled", true).css({"cursor": "not-allowed", "background-color": "lightgray"});
    startButton.addClass("ready");
    startButton.css("background-color", "green");
    $(".newgame:hover").css("background-color", "green");

    let factionColor = e.target.dataset.color;

    $(this).css("background-color", factionColor).attr("aria-pressed", true);
    $("body").css("background-color", factionColor);
    playerIcon = `<img src="assets/images/${e.target.id}logo.png" class ="${e.target.id}" alt="${e.target.id}_logo" />`;

    cpuIconSelect();
  });

  function cpuIconSelect() {
    let iconArray = [
      `<img src="assets/images/aalogo.png" class ="aa" alt="aa_logo" />`,
      `<img src="assets/images/chalogo.png" class ="cha" alt="cha_logo" />`,
      `<img src="assets/images/eldlogo.png" class ="eld" alt="eld_logo" />`,
      `<img src="assets/images/neclogo.png" class ="nec" alt="nec_logo" />`,
      `<img src="assets/images/taulogo.png" class ="tau" alt="tau_logo" />`
    ];
    let arrayLength = iconArray.pop(playerIcon);

    randomSelect = Math.floor(Math.random() * arrayLength);
    cpuIcon = randomSelect;
    return cpuIcon;
  };

  $(startButton).on("click", function () {
    if ($(this).hasClass("ready")) {
      $(box).remove("img");
      $(box).addClass("free");
      $(box).css("cursor", "pointer");
      $(this).attr("disabled", true).css("cursor", "not-allowed");
      $("#info").text("Player Turn");

      player1Turn();
    } else {
      return false;
    }
  });

  function validateTurn(box) {
    if ($(box).hasClass("free")) {
      turnValid = true;
    } else {
      turnValid = false;
      return false;
    }
  }

  function player1Turn() {
      $(box).on("click", function (e) {

    validateTurn(e.target);

    if (turnValid === true, $(startButton).hasClass("ready")) {
      $(this).removeClass("free");
      $(this).addClass("playerMove");
      $(this).css("padding", "0");
      $(this).prepend(playerIcon);
      $("#info").text("Cpu Turn Next");
      cpuTurn();
      //checkDraw();
	  //checkWin();
    } else {
      $(this).css({ "background-color": "red", opacity: "0.2" });
      $(this).fadeOut(800);
      $("#info").text("Invalid Move");
    }

    $("#restart", "#restart:hover").css("background-color", "red").attr("disabled", false);
  });
};

  function cpuTurn() {
    
    for (i = 0; i < 9; i++) {
    
    let randomNumber = Math.floor((Math.random() * 9) + 1);
    let boxId = $(box.hasId(Number));
    var randomBox = boxId.eq(randomNumber);

    validateTurn(randomBox);

     if (turnValid === true) {
      randomBox.removeClass("free");
      randomBox.addClass("cpuMove");
      randomBox.css("padding", "0");
      randomBox.prepend(cpuIcon);
      $("#info").text("Player Turn Next");

       //checkDraw();
	  //checkWin();
      player1Turn()
    } else {
      return false;
  };
};
};

  function restart() {
    $(box).removeClass("cpuMove");
    $(box).removeClass("playerMove");
    $(box).remove("img");
    $(box).addClass("free");
    $(selector).remove("background-color", factionColor).ramoveAttr("disabled");
    $("body").remove("background-color", factionColor);
    $("#info").text("Select A Faction And Press Start A New Game");
   }

  $("#restart").on("click", function () {
    restart();
    $(this).attr("disabled", true);
  });

//function checkDraw(){}
//function checkWin(){}
});
