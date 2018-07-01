var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins and losses
var wins = 0;
var losses = 0;
var guesses = 10;
var strGuesses = "";

    var ranChoice = alpha[Math.floor(Math.random() * alpha.length)];
    console.log(ranChoice)



// When user presses a key, run a function to capture the key press
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === ranChoice) {
        wins++;
        strGuesses = "";
        document.getElementById("uMessage").innerHTML = "You win!";
    }
    
    else {
        guesses--;
        strGuesses = strGuesses + userGuess;
        document.getElementById("uMessage").innerHTML = "Try again.";
        document.getElementById("rGuesses").innerHTML = "Guesses so far:  " + strGuesses;
    }

    if(guesses === 0) {
        losses++;
        document.getElementById("uMessage").innerHTML = "Sorry - you lose.";
        guesses = 10;
        strGuesses = "";
    }
   
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("loss").innerHTML = "losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;

}