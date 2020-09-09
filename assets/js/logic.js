
$(document).ready(function() {

var playerIcon = $();
var cpuIcon = $();
var turnCount = 0;
var turnValid = false;

$("#aa").on("click", function () {
  $("li .select", !this).css("background-color", "#fafafa");
  $(this).css("background-color", "blue").attr("aria-pressed", true);
  $("body").css("background-color", "blue");
  $(".newgame").addClass("ready");
   $(".newgame").css("background-color", "green");
   $(".newgame:hover").css("background-color", "green");
  playerIcon.addClass("aa")
});

$("#cha").on("click", function () {
  $("li .select", !this).css("background-color", "#fafafa");
  $(this).css("background-color", "red").attr("aria-pressed", true);
  $("body").css("background-color", "red");
  $(".newgame").addClass("ready");
   $(".newgame").css("background-color", "green");
   $(".newgame:hover").css("background-color", "green");
  playerIcon.addClass("cha");  
});

$("#eld").on("click", function () {
  $("li .select", !this).css("background-color", "#fafafa");
  $(this).css("background-color", "green").attr("aria-pressed", true);
  $("body").css("background-color", "green");
  $(".newgame").addClass("ready");
  $(".newgame").css("background-color", "green");
  $(".newgame:hover").css("background-color", "green");
  playerIcon.addClass("eld");
});

$("#nec").on("click", function () {
  $("li .select", !this).css("background-color", "#fafafa");
  $(this).css("background-color", "silver").attr("aria-pressed", true);
  $("body").css("background-color", "silver");
  $(".newgame").addClass("ready");
   $(".newgame").css("background-color", "green");
   $(".newgame:hover").css("background-color", "green");
  playerIcon.addClass("nec");
});

$("#tau").on("click", function () {
  $("li .select", !this).css("background-color", "#fafafa");
  $(this).css("background-color", "orange").attr("aria-pressed", true);
  $("body").css("background-color", "orange");
  $(".newgame").addClass("ready");
   $(".newgame").css("background-color", "green");
   $(".newgame:hover").css("background-color", "green");
  playerIcon.addClass("tau");
});

$(".newgame").on("click", function () {
  $(".box").removeClass("aa");
  $(".box").removeClass("cha");
  $(".box").removeClass("eld");
  $(".box").removeClass("nec");
  $(".box").removeClass("tau");
  $(".box").addClass("free");
  $("#info").text("Player 1 Plays")
  turnCount = turnCount + 1;
});

function validateTurn(boxplayed) {
	if ( $(boxplayed).hasClass('free') ) {
		turnValid = true;
	} else {
		turnValid = false;
		return false;
	}
};
  
$(".box").on("click", function () { 
    if(turnCount == 1, $(".newgame").hasClass("ready")) { 
    $("#info").text("Player 2 Plays Next"); 
    $(this).prepend(playerIcon);  
    turnCount = 2;             
    } else {     
        $("#info").text("Player 1 Plays Next"); 
        $(this).prepend(cpuIcon);  
        turnCount = 1; 
    } 
}); 

$(".box").on('click', function player1Turn() {

	validateTurn(this);

	if (turnValid, $(".newgame").hasClass("ready")) {
		$(this).removeClass("free");
		$(this).addClass("played");
		$(this).addClass("player1Move");
		$(this).html(playerIcon);

		/*checkDraw();
		checkWin();
		cpuTurn();*/

	} else {
		$(this).css({"background-color": "red",
                     "opacity": "0.2"});
	};
	
})

})