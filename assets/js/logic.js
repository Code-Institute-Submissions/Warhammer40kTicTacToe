$(document).ready(function () {
  let playerIcon;
  let cpuIcon;
  var boxValid;
  var startButton = $(".newgame");
  var selector = document.querySelectorAll(".select");
  const box = document.querySelectorAll(".box");
 

  $(selector).on("click", function (e) {
    $(`.select:not(#${e.target.id})`).attr("disabled", true).css({"cursor": "not-allowed", "background-color": "lightgray"});
    startButton.addClass("ready");
    startButton.css("background-color", "green");
    $(".newgame:hover").css("background-color", "green");

    let factionColor = e.target.dataset.color;

    $(this).css("background-color", factionColor).attr("aria-pressed", true);
    $("body").css("background-color", factionColor);
    playerIcon = `<img src="assets/images/${e.target.id}logo.png" class ="${e.target.id}" alt="${e.target.id}_logo" />`;
    return playerIcon;
    
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

    let randomSelect = Math.floor(Math.random() * arrayLength);
    cpuIcon = randomSelect;
    return cpuIcon;
}

  $(startButton).on("click", function () {
    if ($(this).hasClass("ready")) {
      $(box).remove("img");
      $(box).removeClass("cpuMove");
      $(box).removeClass("playerMove");
      $(box).addClass("free");
      $(box).css("cursor", "pointer");
      $("#restart").attr("disabled", false);
      $(this).attr("disabled", true).css("cursor", "not-allowed");
      $("#info").text("Player Turn");

      player1Turn();
    } else {
      return false;
    }
  });

  function validateBox(box) {
    if ($(box).hasClass("free")) {
      boxValid = true;
    } else {
      boxValid = false;
      $(this).css("background-color", "red").fadeTo(100, 0.5, function() { $(this).css("background-color", "#fafafa").fadeTo(100, 1.0); });
      $("#info").text("Invalid Move");
      return false;
    }
  }

  function player1Turn() {
      $(box).on("click", function (e) {

    validateBox(e.target);

    if (boxValid === true) {
      $(this).removeClass("free");
      $(this).addClass("playerMove");
      $(this).prepend(playerIcon);
           
      cpuTurn();
      //checkDraw();
      //checkWin();      
    } 
  });
}

  function cpuTurn() {
        
    let randomNumber = Math.floor((Math.random() * 9) + 1);

    let randomBox = document.getElementById(`${randomNumber}`);   

    let $boxSelect = $(randomBox);
    
    validateBox($boxSelect);

    if (boxValid === true) {
      $boxSelect.removeClass("free");
      $boxSelect.addClass("cpuMove");
      $boxSelect.prepend(cpuIcon);
      $("#info").text("Player Turn Is Next");

       //checkDraw();
	  //checkWin();
      player1Turn();
    }
}


  function restart() {
    $(box).removeClass("cpuMove");
    $(box).removeClass("playerMove");
    $(box).remove("img");
    $(box).addClass("free");
    $(selector).remove("background-color").removeAttr("disabled");
    $("body").remove("background-color");
    $("#info").text("Select A Faction And Press Start A New Game");
   }

  $("#restart").on("click", function () {
    restart();
    $(this).attr("disabled", true);
  });

//function checkDraw(){}
//function checkWin(){}
});
