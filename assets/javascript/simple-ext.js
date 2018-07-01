document.addEventListener("DOMContentLoaded", function() {
   
    // game variables
    var eAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var cAnswer = eAlphabet[Math.floor(Math.random() * eAlphabet.length)];
    var userGuess = 0;
    var noGuess = 10;
    var stGuess = "";
    console.log(cAnswer);


    // set input & output variables           
    var uInput = document.querySelector("fInput");
    var uMessage = document.querySelector("#uMessage");
    var stGuess = document.querySelector("#tGuesses");
    var noGuess = document.querySelector("#rGuesses");
    var uWin = document.querySelector("#wins");
    var uLoss = document.querySelector("#loss");
    

    // button stuff
    //var button = 
    document.querySelector("#myButton").addEventListener("click", clickHandler); 
    //button.addEventListener("click", clickHandler); 

    // button function
    function clickHandler() {    
        playGame();

    }

    // game function
    function playGame() {
        userGuess = uInput.value;

        if(userGuess === cAnswer) {
            uMessage.innerHTML = "You win!";
            uWin++;
            uWin.innerHTML = "Your wins:" + uWin;    
                        
        }

        else if(userGuess != answer && noGuess > 0) {
            uMessage.innerHTML = "Nope. Try again.";
            noGuess--;

        }

        else if(userGuess != answer && noGuess === 0) {
            uMessage.innerHTML = "You lost.";
            uLoss++;
            
        }

        document.getElementById("rGuesses").innerHTML = "Guesses left: " + noGuess;
        document.getElementById("tGuesses").innerHTML = "Guesses so far: " + stGuess;
        document.getElementById("wins").innerHTML = "Wins: " + uWin;
        document.getElementById("loss").innerHTML = "Losses: " + uLoss;
        

        
    }
});