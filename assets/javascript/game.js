
var cp = document.getElementById("computer-choices");
var uP = document.getElementById("user");
var plus = document.getElementById("winner");
var minus = document.getElementById("loser");
var letter = document.getElementById("guesses");
var timer = document.getElementById("attempts");
var end = document.getElementById("results");


var losses = 0;
var wins = 0;
var tries = 10;

var userGuesses = [""];
var comChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var reset = function () {
    tries = 10;
    userGuesses = [""];
    comChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    end.textContent = "";
    uP.textContent = "";
    cP.textContent = "";
    letter.textContent = '';
  };

  document.onkeyup = function(event) {
    var userPick = event.key.toLowerCase();

    
      comGuess = comChoices[Math.floor(Math.random() * comChoices.length)];
    
        if (userPick === comGuess) {
          cp.textContent = "The computer chose: " + comGuess + ", you win!";
          plus.textContent = "Wins: " + wins;
          wins++;
          reset ();
        }
        else if  (userPick !== comGuess) {
          letter.textContent = "Your Guesses so far: " + userPick;
          timer.textContent = "Remaining Tries: " + tries;

          if(tries > 0){
            tries--;
          }
          else if (tries === 0) {
            losses++;
            reset ();
          }
        }
   
    end.appendChild(document.createTextNode(userPick));
    uP.textContent = "You chose: " + userPick;
    plus.textContent = "Wins: " + wins;
    minus.textContent = "Losses: " + losses;
  };



