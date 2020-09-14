
$(document).ready(function() {

  let playerIcon;
  let cpuIcon;
  let turnCount;
  var turnValid = false;
  var box = document.querySelectorAll(".box");
  var selector = document.querySelectorAll(".select");
  
  $(selector).on("click", function (e) {
    $(`.select:not(#${e.target.id})`).attr("disabled", true).css({"cursor": "not-allowed", "background-color": "lightblue"});
    let startButton = $(".newgame")
    startButton.addClass("ready");
    startButton.css("background-color", "green");
    $(".newgame:hover").css("background-color", "green");

    let factionColor = e.target.dataset.color;

    $(this).css("background-color", factionColor).attr("aria-pressed", true);
    $("body").css("background-color", factionColor);
    playerIcon = `<img src="assets/images/${e.target.id}logo.png" class ="playerIcon ${e.target.id}" alt="${e.target.id}_logo" />`;

    cpuIconSelect(!this);
  });

function cpuIconSelect() {
    var randomNumber = Math.floor((Math.random()*))
}

$(".newgame").on("click", function (e) {
 if  ($(e.target).hasClass("ready"), turnCount) {
  $(".box").remove("img");
  $(".box").removeClass("played");
  $(".box").addClass("free");
  $(".box").css("cursor", "pointer");
  $("#info").text("Player 1 Plays");
  turnCount = 1;
 } else {
     return false;
 }
    });

function validateTurn(box) {
	if ( $(box).hasClass('free'), $(box).empty()) {
        turnValid = true;
        
	} else {
		turnValid = false;
		return false;
	}
};
  
$(box).on("click", function () { 
    if(turnCount === 1, $(".newgame").hasClass("ready")) { 
    $("#info").text("Player 2 Plays Next"); 
    turnCount = 2;             
    } else {     
        $("#info").text("Player 1 Plays Next"); 
        turnCount = 1; 
    } 
}); 

$(box).on('click', function player1Turn(e) {
   
	validateTurn(this);

	if (turnValid, $(".newgame").hasClass("ready"),(this).hasClass("free")) {
		$(this).removeClass("free");
		$(this).addClass("played");
        $(this).addClass("player1Move");
        $(this).css("padding", "0");
        $(this).prepend(playerIcon);
       turnCount++
		/*checkDraw();
		checkWin();
		cpuTurn();*/

	} else {
		$(this).css({"background-color": "red",
                     "opacity": "0.2"});
	};
    $("#restart", "#restart:hover").css("backgrond-color", "red").attr("aria-pressed", false);
    setTimeout(() => { 
            $(this).css("background-color", "white"); 
        }, 800);         
})


function restart() {
	$(box).removeClass("played");
	$(box).removeClass("Player2Move");
	$(box).removeClass("Player1Move");
	$(box).remove("img");
    $(box).addClass("free");
    $(selector).remove("background-color", factionColor).attr("aria-pressed", false);
    $("body").remove("background-color", factionColor);
    turnCount = 0; 
};

$("#restart").on("click", function() {
    restart();
    $(this).remove("background-color");
});

/*function checkDraw(){}
function checkWin(){}
function cpuTurn(){}*/

});
