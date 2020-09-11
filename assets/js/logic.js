
$(document).ready(function() {

  let playerIcon;
  var turnCount = 0;
  var turnValid = false;
  var selector = document.querySelectorAll(".select");
  
  $(selector).on("click", function (e) {
    $(`.select:not(#${e.target.id})`).attr("disabled", true).css("cursor", "not-allowed");
    $(`.select:not(#${e.target.id})`).removeClass(":hover");
    let startButton = $(".newgame")
    startButton.addClass("ready");
    startButton.css("background-color", "green");
    $(".newgame:hover").css("background-color", "green");

    let factionColor = e.target.dataset.color;

    $(this).css("background-color", factionColor).attr("aria-pressed", true);
    $("body").css("background-color", factionColor);
    playerIcon = `<img src="assets/images/${e.target.id}logo.png" class ="playerIcon" alt="${e.target.id}_logo" />`;
  });

$(".newgame").on("click", function () {
  $(".box").removeClass("player1Move");
  $(".box").removeClass("player2Move");
  $(".box").removeClass("played");
  $(".box").addClass("free");
  $(".box").css("cursor", "pointer");
  $("#info").text("Player 1 Plays")
  
});

function validateTurn(box) {
	if ( $(box).hasClass('free') ) {
        turnValid = true;
        turnCount = turnCount++;
	} else {
		turnValid = false;
		return false;
	}
};
  
$(".box").on("click", function () { 
    if(turnCount === 1, $(".newgame").hasClass("ready")) { 
    $("#info").text("Player 2 Plays Next"); 
    turnCount = 2;             
    } else {     
        $("#info").text("Player 1 Plays Next"); 
        turnCount = 1; 
    } 
}); 

$(".box").on('click', function player1Turn() {

	validateTurn(this);

	if (turnValid, $(".newgame").hasClass("ready")) {
		$(this).removeClass("free");
		$(this).addClass("played");
		$(this).addClass("player1Move");
		$(this).prepend(playerIcon);

		/*checkDraw();
		checkWin();
		cpuTurn();*/

	} else {
		$(this).css({"background-color": "red",
                     "opacity": "0.2"});
	};
	
})


/*function checkDraw(){}
function checkWin(){}
function cpuTurn(){}*/

})
