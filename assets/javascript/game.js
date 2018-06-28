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
    setTimeout(displayprompt, 5000); 
    gameStuff.guess = prompt("What's your guess?");

}

//need random function to equate to alpha letter

//need function to capture key entered -- document.keyup()?
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
                
            gameStuff.guessSofar = (gameStuff.guessSofar + gameStuff.guess); //string -- do I need quotes?
            gameStuff.guessLeft =-1;
            rungame();

        }

    }

}


//update guessSofar in a concatenated string("")


//need function to iterate over guesses and compare to actual

//need function to increment wins or losses, decrement guesses; else reset guesses guessLeft = 0

//print gameStuff totals on page (console.log too?)
//console.log(gameStuff.win)
//console.log(gamestuff.loss)