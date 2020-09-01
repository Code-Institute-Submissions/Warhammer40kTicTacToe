//Global variables
var playerIcon; 
var victoryConditions;
var win; //True if a player wins the game
var turn; //Defines consecutive turns 

$(document).ready(function() {
  // Faction Selector
  $(".aa").on("click", function() {
    playerIcon = "assets/images/aalogo.png";
    }  
  });

  $(".cha").on("click", function() {
    playerIcon = "assets/images/chaoslogo.png";
    }  
  });

  $(".eld").on("click", function() {
    playerIcon = "assets/images/eldarlogo.png";
      
  });

  $(".nec").on("click", function() {
    playerIcon = "assets/images/necronslogo.png";
      
  });

  $(".tau").on("click", function() {
    playerIcon = "assets/images/taulogo.png";
 });