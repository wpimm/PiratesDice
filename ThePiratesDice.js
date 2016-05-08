function rollTheDice() {
  //variables for player
  var dieOne = document.getElementById("playerDieOne");
  var dieTwo = document.getElementById("playerDieTwo");
  var dieThree = document.getElementById("opponentDieOne");
  var dieFour = document.getElementById("opponentDieTwo");
  var dOne = Math.floor(Math.random() * 6) + 1; //set dice to display a number between 1 and 6 (1 and 6 included)
  var dTwo = Math.floor(Math.random() * 6) + 1;
  var dThree = Math.floor(Math.random() * 6) + 1;
  var dFour = Math.floor(Math.random() * 6) + 1;
  var opponentGuesses = document.getElementById("opponentGuesses");
  var opponentGuessOne = Math.floor(Math.random() * 6) + 1; //set opponent guesses to an immediate random values between 1 and 6 (1 and 6 included)
  var opponentGuessTwo = Math.floor(Math.random() * 6) + 1;
  var opponentDiceTotal = 0;
  var playerCountOne = 0;
  var playerCountTwo = 0;
  var playerDiceTotal = 0;
  var playerFate = document.getElementById("playerFate");
  var playerGuessOne = "";
  var playerGuessTwo = "";
  var playerGuesses = document.getElementById("playerGuesses");
  var statusOpponent = document.getElementById("statusOpponent");
  var statusPlayer = document.getElementById("statusPlayer");


  //input player guess
  //loops assure that player enters a number between 1 and 6 for both guesses
  while(playerCountOne < 1) {
    playerGuessOne = prompt("Enter Ye first guess ye salty swab!");
    if (isNaN(playerGuessOne) || playerGuessOne < 1 || playerGuessOne > 6){
      alert("Try Again!!");
      } else {
        playerGuessOne = Number(playerGuessOne);
        playerCountOne++;
        }
  }

  while(playerCountTwo < 1) {
    playerGuessTwo = prompt("Enter Ye second guess ye salty swab!");
    if (isNaN(playerGuessTwo) || playerGuessTwo < 1 || playerGuessTwo > 6){
      alert("Try Again!!");
      } else {
        playerGuessTwo = Number(playerGuessTwo);
        playerCountTwo++;
        }
  }

  //display the dice value in html
  dieOne.innerHTML = dOne;
  dieTwo.innerHTML = dTwo;
  dieThree.innerHTML = dThree;
  dieFour.innerHTML = dFour;

  //calculate if player guesses match dice actual value and display to HTML
  if(playerGuessOne === dOne && playerGuessTwo === dTwo) {
    playerGuesses.innerHTML = "Lucky guess ye parrot loving scoundrel!! (Both guesses correct)";
    dOne *= 2;
    dTwo *= 2;
  } else if(playerGuessOne === dOne) {
    playerGuesses.innerHTML = "Lucky guess ye parrot loving scoundrel!! (first guess correct)";
    dOne *= 2;
    } else if(playerGuessTwo === dTwo) {
      playerGuesses.innerHTML = "Lucky guess ye parrot loving scoundrel!! (second guess correct)";
      dTwo *= 2;
    } else {
        playerGuesses.innerHTML = "ARGH HAR HAR HAR Nice guesses ye sorry sea dog!";
        }

  //determine if opponent guesses match dice value and display to HTML
  if(opponentGuessOne === dThree && opponentGuessTwo === dFour) {
    opponentGuesses.innerHTML = "Your opponent guessed correctly for both of his dice";
    dThree *= 2;
    dFour *= 2;
  } else if(opponentGuessOne === dThree) {
    opponentGuesses.innerHTML = "You opponent guessed correct on his first die!";
    dThree *= 2;
    } else if(opponentGuessTwo === dFour) {
      opponentGuesses.innerHTML = "You opponent guessed correct on his second die!";
      dFour *= 2;
    } else {
        opponentGuesses.innerHTML = "Your opponent had no correct guesses!!";
        }

  //calculate value of dice for both player and opponent
  playerDiceTotal = dOne + dTwo;
  opponentDiceTotal = dThree + dFour;

  //display totals for dice rolls to HTML page
  statusPlayer.innerHTML = "You rolled " + playerDiceTotal + ".";
  statusOpponent.innerHTML = "Opponent rolled " + opponentDiceTotal + ".";

  //determine if player wins or loses and display result to HTML page
  if (playerDiceTotal < opponentDiceTotal) {
    playerFate.innerHTML = "You lost... I hope you're a good swimmer.";
  } else {
      playerFate.innerHTML = "You get to live another day!!!";
    }

  //End rollTheDice
  }
