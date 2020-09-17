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

    
    cpuIconSelect();
  });

  function cpuIconSelect() {
    
    let iconArray = [];

    iconArray.push(`<img src="assets/images/aalogo.png" class ="aa" alt="aa_logo" />`);
    iconArray.push(`<img src="assets/images/chalogo.png" class ="cha" alt="cha_logo" />`);
    iconArray.push(`<img src="assets/images/eldlogo.png" class ="eld" alt="eld_logo" />`);
    iconArray.push(`<img src="assets/images/neclogo.png" class ="nec" alt="nec_logo" />`);
    iconArray.push(`<img src="assets/images/taulogo.png" class ="tau" alt="tau_logo" />`);
    
    let iconIndex = iconArray.indexOf(playerIcon)
    let removeIcon = iconArray.splice(playerIcon, iconIndex);


    let arrayLength = iconArray.length; 

    let randomSelect = Math.floor(Math.random() * arrayLength);
    cpuIcon = iconArray[randomSelect];
    
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
      $(box).css("background-color", "red").fadeTo(110, 0.5, function() { $(this).css("background-color", "#fafafa").fadeTo(100, 1.0); });
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

      checkDraw();
      checkWin();         
      cpuTurn();
         
    } 
  });
}

  function cpuTurn() {
     
    let randomNumber = Math.floor(Math.random() * 8);
    
   let randomBox = document.getElementById(`${randomNumber}`);   

    let $cpuBox = $(randomBox);
    
    validateBox($cpuBox[0]);

    if (boxValid === true) {
      $cpuBox.removeClass("free");
      $cpuBox.addClass("cpuMove");
      $cpuBox.prepend(cpuIcon);
      $("#info").text("Player Turn Is Next");

      checkDraw();
      checkWin();
      
      player1Turn();
    }
}


  function restart() {
    debugger;
    $(box).empty();
    $(box).removeClass("cpuMove");
    $(box).removeClass("playerMove");
    $(box).addClass("free");
    $(selector).removeClass("active");
    $(selector).attr("aria-pressed", false);
    $(selector).attr("disabled", false);
    $(selector).css({"background-color": "#fafafa", "cursor": "pointer"});
    $(startButton).removeClass("ready");
    $(startButton).css("cursor", "pointer");
    $(startButton).attr("disabled", true);
    $("body").css("background-color", "#75757c");
    $("#info").text("Select A Faction And Press Start A New Game");

   }

  $("#restart").on("click", function () {
    restart();
    $(this).attr("disabled", true);
  });

function checkWin() {
    debugger;

    let box0 = $("#0");
    let box1 = $("#1");
    let box2 = $("#2");
    let box3 = $("#3");
    let box4 = $("#4");
    let box5 = $("#5");
    let box6 = $("#6");
    let box7 = $("#7");
    let box8 = $("#8");
    
	if (box0.hasClass("playerMove") && box1.hasClass("playerMove") && box2.hasClass("playerMove")) {
		 $("#info").text("You Have Won! <br> Press Restart To Play Again!");
	} else if (box0.hasClass("cpuMove") && box1.hasClass("cpuMove") && box2.hasClass("cpuMove")) {
		$("#info").text("You Have Lost! <br> Press Restart To Play Again!");
	}

	else if (box3.hasClass("playerMove") && box4.hasClass("playerMove") && box5.hasClass("playerMove")) {
		$("#info").text("You Have Won! <br> Press Restart To Play Again!");
	} else if (box3.hasClass("cpuMove") && box4.hasClass("cpuMove") && box5.hasClass("cpuMove")) {
		$("#info").text("You Have Lost! <br> Press Restart To Play Again!");
	}

	else if (box6.hasClass("playerMove") && box7.hasClass("playerMove") && box8.hasClass("playerMove")) {
		$("#info").text("You Have Won! <br> Press Restart To Play Again!");
	} else if (box6.hasClass("cpuMove") && box7.hasClass("cpuMove") && box8.hasClass("cpuMove")) {
		$("#info").text("You Have Lost! <br> Press Restart To Play Again!");
	}

	else if (box0.hasClass("playerMove") && box3.hasClass("playerMove") && box6.hasClass("playerMove")) {
		$("#info").text("You Have Won! <br> Press Restart To Play Again!");
	} else if (box0.hasClass("cpuMove") && box3.hasClass("cpuMove") && box6.hasClass("cpuMove")) {
		$("#info").text("You Have Lost! <br> Press Restart To Play Again!");
	}

	else if (box4.hasClass("playerMove") && box1.hasClass("playerMove") && box7.hasClass("playerMove")) {
		$("#info").text("You Have Won! <br> Press Restart To Play Again!");
	} else if (box4.hasClass("cpuMove") && box1.hasClass("cpuMove") && box7.hasClass("cpuMove")) {
		$("#info").text("You Have Lost! <br> Press Restart To Play Again!");
	}

	else if (box5.hasClass("playerMove") && box8.hasClass("playerMove") && box2.hasClass("playerMove")) {
		$("#info").text("You Have Won! <br> Press Restart To Play Again!");
	} else if (box5.hasClass("cpuMove") && box8.hasClass("cpuMove") && box2.hasClass("cpuMove")) {
		$("#info").text("You Have Lost! <br> Press Restart To Play Again!");
	}

	else if (box0.hasClass("playerMove") && box4.hasClass("playerMove") && box8.hasClass("playerMove")) {
		$("#info").text("You Have Won! <br> Press Restart To Play Again!");
	} else if (box0.hasClass("cpuMove") && box4.hasClass("cpuMove") && box8.hasClass("cpuMove")) {
		$("#info").text("You Have Lost! <br> Press Restart To Play Again!");
	}
	
	else if (box4.hasClass("playerMove") && box6.hasClass("playerMove") && box2.hasClass("playerMove")) {
		$("#info").text("You Have Won! <br> Press Restart To Play Again!");
	} else if (box4.hasClass("cpuMove") && box6.hasClass("cpuMove") && box2.hasClass("cpuMove")) {
		$("#info").text("You Have Lost! <br> Press Restart To Play Again!");
	}
	}


function checkDraw() {
    debugger;
	if (!($(box).hasClass("free"))) {
		$("#info").text("It's A Draw! <br> Press Restart To Play Again!");
		
	}
}
});
