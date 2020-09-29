$(document).ready(function () {
  let playerIcon;
  let cpuIcon;
  let win;
  let score = 0;
  let turn = 0;
  let boxValid;
  let scoreCounter = document.getElementById("score");
  let freeBoxes = document.querySelectorAll(".free");
  let startButton = $(".newgame");
  let selector = document.querySelectorAll(".select");
  const box = document.querySelectorAll(".box");
 
function dropDown() {
  document.getElementById("dropdown-content").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsById("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}

  $(selector).on("click", function (e) {
    $(`.select:not(#${e.target.id})`).attr("disabled", true).css({"cursor": "not-allowed", "background-color": "lightgray"});
    startButton.addClass("ready");
    startButton.css("cursor","pointer");
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

  $(startButton).on("click", function () {
    if ($(this).hasClass("ready")) {
      $(box).css("cursor", "pointer");    
      $(this).attr("disabled", true).css("cursor", "not-allowed");
      $("#restart").attr("disabled", false);
      $("#info").text("Player Turn");
      turn = 1;
      checkTurn();
    } 
  });


  function validateBox(box) {
      
    if ($(box).hasClass("free")) {
      boxValid = true;
       
    } else {
      boxValid = false;

      $(this).css("background-color", "red"); 
        setTimeout(function() { 
            $(this).css("background-color", "white"); 
        }, 800);
       
      
      } 
}
  
  function checkTurn() {
      if (turn === 1) {
        playerTurn();
     } else if (turn === 2) {
        cpuTurn();
      }
  }

  function playerTurn() {
        
    $(box).on("click", function () {
    
    validateBox(this);

    if (boxValid === true) {
      $(this).removeClass("free");
      $(this).addClass("playerMove");
      $(this).prepend(playerIcon);
      turn = 2;
      checkWin();
          
    } else {
       return false;
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
      
      turn = 1;
      checkWin();
          
     
    } else if (boxValid === false) { 
        
        cpuTurn();
    }
    
}


  function restart() {
    
    $(box).empty();
    $(box).css("background-color", "#fafafa");
    $(box).removeClass("cpuMove");
    $(box).removeClass("playerMove");
    $(box).addClass("free");
    $(selector).removeClass("active");
    $(selector).attr("aria-pressed", false);
    $(selector).attr("disabled", false);
    $(selector).css({"background-color": "#fafafa", "cursor": "pointer"});
    $(startButton).removeClass("ready");
    $(startButton).attr("disabled", false);
    $(startButton).css("cursor", "arrow");
    $("body").css("background-color", "#75757c");
    $("#info").text("Select A Faction And Press Start A New Game");
    turn = 0;

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

    } else {
        checkDraw();
    }
    }

function checkDraw() {
      
    let boxesArray = Array.from(freeBoxes);
    let boxesArrayLength = parseInt(boxesArray.length);

    if (boxesArrayLength === 0) {

        $("#info").text("It's A Draw. Press Restart To Play Again!");
        win = false;
        gameEnd();
    } else {
        checkTurn();
    }
}

function gameEnd() {
    if (win === true || win === false) {
        $(box).removeClass("free");
        $(box).css("cursor", "not-allowed");
        turn = 0;
    }
}

function winCount() {
    
    if (win === true) {
       
        score++;
        scoreCounter.innerHTML = score;
        
    }
}


})

