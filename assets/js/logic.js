
$(document).ready(function() {

var playerIcon = factionSelect(icon);
var icon;
var cpuIcon = cpuSelect();
var turnCount = 0;
var turnValid = false;

function factionSelect() {
  

  $("#aa").on("click", function (e) {
  $(".select:not(#aa)").attr("disabled", true);
    $(e.target).css("background-color", "blue").attr("aria-pressed", true);
  $("body").css("background-color", "blue");
  $(".newgame").addClass("ready");
   $(".newgame").css("background-color", "green");
   $(".newgame:hover").css("background-color", "green");
  icon = "<img src='assets/images/aalogo.png' alt='adeptus_astartes_logo' />";

  return icon;
  });

$("#cha").on("click", function (e) {
  $(e.target).css("background-color", "red").attr("aria-pressed", true);
  $(".select:not(#cha)").attr("disabled", true);
  $("body").css("background-color", "red");
  $(".newgame").addClass("ready");
   $(".newgame").css("background-color", "green");
   $(".newgame:hover").css("background-color", "green");
   icon = '<img src="assets/images/aalogo.png" alt="adeptus_astartes_logo" />';
   
   return icon;
});

$("#eld").on("click", function (e) {
  $(e.target).css("background-color", "green").attr("aria-pressed", true);
   $(".select:not(#eld)").attr("disabled", true);
  $("body").css("background-color", "green");
  $(".newgame").addClass("ready");
  $(".newgame").css("background-color", "green");
  $(".newgame:hover").css("background-color", "green");
  icon = '<img src="assets/images/aalogo.png" alt="adeptus_astartes_logo" />';
  
  return icon;
});

$("#nec").on("click", function (e) {
  $(e.target).css("background-color", "silver").attr("aria-pressed", true);
  $(".select:not(#nec)").attr("disabled", true);
  $("body").css("background-color", "silver");
  $(".newgame").addClass("ready");
   $(".newgame").css("background-color", "green");
   $(".newgame:hover").css("background-color", "green");
  icon = '<img src="assets/images/aalogo.png" alt="adeptus_astartes_logo" />';
  
  return icon;
});

$("#tau").on("click", function (e) {
  $(e.target).css("background-color", "orange").attr("aria-pressed", true);
 $(".select:not(#tau)").attr("disabled", true);
  $("body").css("background-color", "orange");
  $(".newgame").addClass("ready");
   $(".newgame").css("background-color", "green");
   $(".newgame:hover").css("background-color", "green");
  icon = '<img src="assets/images/aalogo.png" alt="adeptus_astartes_logo" />';

  return icon;
});
};

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

function validateTurn(box) {
	if ( $(box).hasClass('free') ) {
		turnValid = true;
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

})