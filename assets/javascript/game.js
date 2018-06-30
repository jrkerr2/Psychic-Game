//first attempt at a stand-alone js file

//variable object declarations
var gameStuff = {
    win: 0,
    loss: 0,
    guess: "",
    guessSofar: "",
    guessLeft: 10,
    gameOver: false,
    gameAnswer: 2,
    
}

//var gUserguesses = gameStuff.guessLeft

function displayprompt() {
    //setTimeout(displayprompt, 5000); 
    gameStuff.guess = prompt("What's your guess?");

}

//need random function to equate to alpha letter

//need function to capture key entered -- document.keyup()?

//need function to iterate over guesses and compare to actual
function rungame() {
    for (i=0; i<10; i++) {
        if (gameStuff.guess == gameStuff.gameAnswer && gameStuff.guessLeft > 0) {
            alert("You win! Refresh the browser to play again.")
            gameStuff.win =+1;
            gameStuff.gameOver = true;
            break;

        } 
        
        else if (gameStuff.guessLeft == 0) {
            
            alert("You lose! Refresh the browser to play again.");
            gameStuff.loss =+1;
            break;


        }

        else if (gameStuff.guessLeft > 0){

            //update guessSofar in a concatenated string("")  
            gameStuff.guessSofar = (gameStuff.guessSofar + gameStuff.guess); //string -- do I need quotes?
            //decrement guesses left to user
            gameStuff.guessLeft =-1;
            //write cumulation of guesses to html
            document.getElementById("uGuess").innerHTML = gameStuff.guessSofar;
            rungame();
        
        }
            

        }

    }


//need function to iterate over guesses and compare to actual



//print gameStuff totals on page (console.log too?)
