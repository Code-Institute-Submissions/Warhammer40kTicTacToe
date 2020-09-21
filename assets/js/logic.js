$(document).ready(function () {
  let playerIcon;
  let cpuIcon;
  let win = false;
  let score = $("#score");
  var turnCount = 0 ;
  var boxValid;
  var startButton = $(".newgame");
  var selector = document.querySelectorAll(".select");
  const box = document.querySelectorAll(".box");
 

  $(selector).on("click", function (e) {
    $(`.select:not(#${e.target.id})`).attr("disabled", true).css({"cursor": "not-allowed", "background-color": "lightgray"});
    startButton.addClass("ready");
   
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
      
    iconArray.shift(playerIcon);
    
    let newArrayLength = iconArray.length;
       
    let randomSelect = Math.floor(Math.random() * newArrayLength); 
  
    cpuIcon = iconArray[randomSelect];
    
}

  $(startButton).on("click", function () {
    if ($(this).hasClass("ready")) {
      $(box).css("cursor", "pointer");    
      $(this).attr("disabled", true).css("cursor", "not-allowed");
      $("#restart").attr("disabled", false);
      $("#info").text("Player Turn");
      turnCount++;
      turnCount;
      playerTurn();
    } 
  });

  function validateBox(box) {
    if ($(box).hasClass("free")) {
      boxValid = true;
       
    } else {
      boxValid = false;
      $(box).css("background-color", "red").fadeTo(110, 0.5, function() { $(this).css("background-color", "#fafafa").fadeTo(100, 1.0); });
      $("#info").text("Invalid Move");
    }
  }

  function playerTurn() {
     
      $(box).on("click", function () {
    
    validateBox(this);

    if (boxValid === true) {
      $(this).removeClass("free");
      $(this).addClass("playerMove");
      $(this).prepend(playerIcon);
           
      checkWin(); 

      if (win === false) {        
      turnCount++;
      turnCount;
      cpuTurn();
      };     
      
         
    } 
  });
}

  function cpuTurn() {
    
    let randomNumber = Math.floor(Math.random() * 8);
    
   let randomBox = document.getElementById(`${randomNumber}`);   

    let $cpuBox = $(randomBox);
    
    validateBox($cpuBox[0]);

    if (boxValid === true && win === false) {
      $cpuBox.removeClass("free");
      $cpuBox.addClass("cpuMove");
      $cpuBox.prepend(cpuIcon);
      $("#info").text("Player Turn Is Next");    

      checkWin();
      if (win === false) {        
      turnCount++;
      turnCount;
      playerTurn();
      };     
    } else {
       randomNumber = Math.floor(Math.random() * 8);
       randomBox = document.getElementById(`${randomNumber}`);
       $cpuBox = $(randomBox);  


    }
    
}


  function restart() {
    
    $(box).empty();
    $(box).removeClass("cpuMove");
    $(box).removeClass("playerMove");
    $(selector).removeClass("active");
    $(selector).attr("aria-pressed", false);
    $(selector).attr("disabled", false);
    $(selector).css({"background-color": "#fafafa", "cursor": "pointer"});
    $(startButton).removeClass("ready");
    $("body").css("background-color", "#75757c");
    $("#info").text("Select A Faction And Press Start A New Game");
    turnCount = 0;

   }

  $("#restart").on("click", function () {
    restart();
    $(this).attr("disabled", true);
  });

function checkWin() {
    
    let box0 = $("#0");
    let box1 = $("#1");
    let box2 = $("#2");
    let box3 = $("#3");
    let box4 = $("#4");
    let box5 = $("#5");
    let box6 = $("#6");
    let box7 = $("#7");
    let box8 = $("#8");
    
    for (turnCount > 0; turnCount <= 8;) {
    
	if (box0.hasClass("playerMove") && box1.hasClass("playerMove") && box2.hasClass("playerMove")) {
         $("#info").text("You Have Won! Press Restart To Play Again!");
         win = true; 
         winCount();
         
	} else if (box0.hasClass("cpuMove") && box1.hasClass("cpuMove") && box2.hasClass("cpuMove")) {
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
	}

	else if (box3.hasClass("playerMove") && box4.hasClass("playerMove") && box5.hasClass("playerMove")) {
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
         winCount();
	} else if (box3.hasClass("cpuMove") && box4.hasClass("cpuMove") && box5.hasClass("cpuMove")) {
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
	}

	else if (box6.hasClass("playerMove") && box7.hasClass("playerMove") && box8.hasClass("playerMove")) {
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
        winCount();
	} else if (box6.hasClass("cpuMove") && box7.hasClass("cpuMove") && box8.hasClass("cpuMove")) {
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
	}

	else if (box0.hasClass("playerMove") && box3.hasClass("playerMove") && box6.hasClass("playerMove")) {
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
         winCount();
	} else if (box0.hasClass("cpuMove") && box3.hasClass("cpuMove") && box6.hasClass("cpuMove")) {
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
	}

	else if (box4.hasClass("playerMove") && box1.hasClass("playerMove") && box7.hasClass("playerMove")) {
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
         winCount();
	} else if (box4.hasClass("cpuMove") && box1.hasClass("cpuMove") && box7.hasClass("cpuMove")) {
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
	}

	else if (box5.hasClass("playerMove") && box8.hasClass("playerMove") && box2.hasClass("playerMove")) {
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
         winCount();
	} else if (box5.hasClass("cpuMove") && box8.hasClass("cpuMove") && box2.hasClass("cpuMove")) {
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
	}

	else if (box0.hasClass("playerMove") && box4.hasClass("playerMove") && box8.hasClass("playerMove")) {
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
         winCount();
	} else if (box0.hasClass("cpuMove") && box4.hasClass("cpuMove") && box8.hasClass("cpuMove")) {
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
	}
	
	else if (box4.hasClass("playerMove") && box6.hasClass("playerMove") && box2.hasClass("playerMove")) {
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
         winCount();
	} else if (box4.hasClass("cpuMove") && box6.hasClass("cpuMove") && box2.hasClass("cpuMove")) {
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
	} else if (turnCount === 1 || turnCount === 3 || turnCount === 5 || turnCount === 7) {
        win = false; 
        continue;
    }  else if (turnCount === 2 || turnCount === 4 || turnCount === 6 ) {
        win = false; 
        continue;
    }  else if ( turnCount > 8) {
        $("#info").text("It's A Draw! Press Restart To Play Again!");
    }   
      
    }

function winCount() {
    
    if (win === true) {
        score++;
        score;
    }
}

}
})

