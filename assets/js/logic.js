$(document).ready(function () {

// Global variables anc constants
  let playerIcon;
  let cpuIcon;
  let win;
  let turn;
  let score = 0;
  let scoreCounter = document.getElementById("score");
  let startButton = $(".newgame");
  let selector = $(".select");
  const box = $(".box");

// Faction select event listener and randomized function for selecting the cpu icon
  $(selector).on("click", function(e) {
    $(`.select:not(#${e.target.id})`).attr("disabled", true).css({"cursor": "not-allowed", "background-color": "lightgray"});
    startButton.addClass("ready");
    startButton.attr("disabled", false);
    startButton.attr("aria-pressed", false);
    startButton.css({"cursor":"pointer", "background-color":"green"});
    
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
    
    let iconIndex = iconArray.indexOf(playerIcon);

    iconArray.splice(iconIndex, 1);
    
    let newArrayLength = parseInt(iconArray.length);
       
    let randomSelect = Math.floor(Math.random() * newArrayLength); 
  
    cpuIcon = iconArray[randomSelect];
    
}

// Start button event listener
  $(startButton).on("click", function () {

    if ($(this).hasClass("ready")) {
      
      $(box).addClass("free");      
      $(box).css({"cursor": "pointer", "pointer-events":"initial"});
      $(this).attr("disabled", true);
      $(this).css("cursor", "not-allowed");
      $("#restart").attr("disabled", false);
      $("#restart").attr("aria-pressed", false);
      $("#navbar").removeClass("show");
      $("#info").text("Player Turn");
      turn = 1;
      checkTurn();
    } 
  });

// Player turn on click event listener
function playerTurn() {
        
    $(box).off().on("click", function (e) {
         
      if ($(e.target).hasClass("free")) {
      $(this).removeClass("free");
      $(this).addClass("playerMove");
      $(this).prepend(playerIcon);

      turn = 2;

      checkDraw();
      checkWin();
      checkTurn();
          
    } else {

        flashBox(this);
        checkTurn();
    }  
});
}

// Randomized cpu turn
function cpuTurn() {
    
    let randomNumber = Math.floor(Math.random() * 8);
    
    let randomBox = document.getElementById(`${randomNumber}`);   

    if ($(randomBox).hasClass("free")) {
     $(randomBox).removeClass("free");
      $(randomBox).addClass("cpuMove");
      $(randomBox).prepend(cpuIcon);
      $("#info").text("Player Turn");    
      
      turn = 1;

      checkDraw();
      checkWin();
      checkTurn();
          
     
    } else { 
        
        checkTurn();
    }    
}

// Restart event listener and function
function restart() {
    
    $(box).empty();
    $(box).css("background-color", "#fafafa");
    $(box).removeClass("cpuMove");
    $(box).removeClass("playerMove");

    $(selector).removeClass("active");
    $(selector).attr("aria-pressed", false);
    $(selector).attr("disabled", false);
    $(selector).css({"background-color": "#fafafa", "cursor": "pointer"});

    $(startButton).removeClass("ready");
    $(startButton).attr("disabled", true);
    $(startButton).css("cursor", "arrow");

    $("#navbar").addClass("show");

    $("body").css("background-color", "#75757c");

    $("#info").text("Select A Faction And Press Start A New Game");
    
    turn = 0; 
   }

  $("#restart").on("click", function () {
    restart();
    $(this).attr("disabled", true);
  });

// Function for changing turns
  function checkTurn() {
      if (turn === 1) {

        playerTurn();

     } else if (turn === 2) {

        cpuTurn();

      };
  }

// Function to check if player or cpu has a winning 
// combination of boxes
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
    
       
	if (box0.hasClass("playerMove") && box1.hasClass("playerMove") && box2.hasClass("playerMove")) {
         box0.css("background-color", "green");
         box1.css("background-color", "green");
         box2.css("background-color", "green");
         $("#info").text("You Have Won! Press Restart To Play Again!");
         win = true; 
         
         gameEnd();

         winCount();
         
	} else if (box0.hasClass("cpuMove") && box1.hasClass("cpuMove") && box2.hasClass("cpuMove")) {
        box0.css("background-color", "red");
        box1.css("background-color", "red");
        box2.css("background-color", "red");
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
        gameEnd();

	} else if (box3.hasClass("playerMove") && box4.hasClass("playerMove") && box5.hasClass("playerMove")) {
        box3.css("background-color", "green");
        box4.css("background-color", "green");
        box5.css("background-color", "green");
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
        
        gameEnd();

        winCount();

	} else if (box3.hasClass("cpuMove") && box4.hasClass("cpuMove") && box5.hasClass("cpuMove")) {
        box3.css("background-color", "red");
        box4.css("background-color", "red");
        box5.css("background-color", "red");
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
        gameEnd();
    
    } else if (box6.hasClass("playerMove") && box7.hasClass("playerMove") && box8.hasClass("playerMove")) {
        box6.css("background-color", "green");
        box7.css("background-color", "green");
        box8.css("background-color", "green");
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
        
        gameEnd();

        winCount();

	} else if (box6.hasClass("cpuMove") && box7.hasClass("cpuMove") && box8.hasClass("cpuMove")) {
        box6.css("background-color", "red");
        box7.css("background-color", "red");
        box8.css("background-color", "red");
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
        gameEnd();
    
    } else if (box0.hasClass("playerMove") && box3.hasClass("playerMove") && box6.hasClass("playerMove")) {
        box0.css("background-color", "green");
        box3.css("background-color", "green");
        box6.css("background-color", "green");
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
       
        gameEnd();

        winCount();

	} else if (box0.hasClass("cpuMove") && box3.hasClass("cpuMove") && box6.hasClass("cpuMove")) {
        box0.css("background-color", "red");
        box3.css("background-color", "red");
        box6.css("background-color", "red");
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
        gameEnd();
    
    } else if (box4.hasClass("playerMove") && box1.hasClass("playerMove") && box7.hasClass("playerMove")) {
        box4.css("background-color", "green");
        box1.css("background-color", "green");
        box7.css("background-color", "green");
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
        
        gameEnd();

        winCount();

	} else if (box4.hasClass("cpuMove") && box1.hasClass("cpuMove") && box7.hasClass("cpuMove")) {
        box4.css("background-color", "red");
        box1.css("background-color", "red");
        box7.css("background-color", "red");
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
        gameEnd();
    
    } else if (box5.hasClass("playerMove") && box8.hasClass("playerMove") && box2.hasClass("playerMove")) {
        box5.css("background-color", "green");
        box8.css("background-color", "green");
        box2.css("background-color", "green");
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
       
        gameEnd();

        winCount();

	} else if (box5.hasClass("cpuMove") && box8.hasClass("cpuMove") && box2.hasClass("cpuMove")) {
        box5.css("background-color", "red");
        box8.css("background-color", "red");
        box2.css("background-color", "red");
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
        gameEnd();

	} else if (box0.hasClass("playerMove") && box4.hasClass("playerMove") && box8.hasClass("playerMove")) {
        box0.css("background-color", "green");
        box4.css("background-color", "green");
        box8.css("background-color", "green");
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
        
        gameEnd();

        winCount();

	} else if (box0.hasClass("cpuMove") && box4.hasClass("cpuMove") && box8.hasClass("cpuMove")) {
        box0.css("background-color", "red");
        box4.css("background-color", "red");
        box8.css("background-color", "red");
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
        gameEnd();

	} else if (box4.hasClass("playerMove") && box6.hasClass("playerMove") && box2.hasClass("playerMove")) {
        box4.css("background-color", "green");
        box6.css("background-color", "green");
        box2.css("background-color", "green");
        $("#info").text("You Have Won! Press Restart To Play Again!");
        win = true; 
        
        gameEnd();

        winCount();

	} else if (box4.hasClass("cpuMove") && box6.hasClass("cpuMove") && box2.hasClass("cpuMove")) {
        box4.css("background-color", "red");
        box6.css("background-color", "red");
        box2.css("background-color", "red");
        $("#info").text("You Have Lost! Press Restart To Play Again!");
        win = false;
        gameEnd();

    } 
    }

// Functions that checks for draw by comparison to the total available free boxes.
function checkDraw() {

    let freeBoxes = document.querySelectorAll(".free");  
    let boxesTotal = parseInt(freeBoxes.length);
    

    if (boxesTotal === 0) {

        $("#info").text("It's A Draw. Press Restart To Play Again!");
        $(box).css("background-color", "lightgray");
        win = false;
        gameEnd();
    } 
}

// Auxiliary functions
function flashBox(box) {
        
      $(box).css("background-color", "red");
        setTimeout(function(){
            $(box).css("background-color", "white");
        }, 500);

       $("#info").text("Invalid Move!");
       setTimeout(function(){
           $("#info").text("Player Turn")
       }, 500);      
     
}

function gameEnd() {
    
        $(box).removeClass("free");
        $(box).css({"cursor": "not-allowed", "pointer-events": "none"});
        
}

function winCount() {
    
    if (win === true) {
       
        score++;
        scoreCounter.innerHTML = score;
        
    }
}


  
})
