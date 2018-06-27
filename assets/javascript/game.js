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

function displayprompt() {
    gameStuff.guess = prompt("What's your guess?");

}

//need random function to equate to alpha letter

//need function to capture key entered -- document.keyup()?
for (i=0; i<10; i++) {
    if (gameStuff.guess == game.Stuff.gameAnswer && game.Stuff.guessLeft > 0) {
        alert("You win!")
        gameStuff.win =+1;
        gameStuff.gameOver = true;
        break;

    } 
    
    else if (gameStuff.guessLeft == 0){
        
        alert("You lose!");
        gameStuff.loss =+1;

    }

    else if (gameStuff.guessLeft > 0){
            
        gameStuff.guessSofar = (gameStuff.guessSofar + gameStuff.guess); //string -- do I need quotes?
        gameStuff.guessLeft =-1;

    }

}




//update guessSofar in a concatenated string("")


//need function to iterate over guesses and compare to actual

//need function to increment wins or losses, decrement guesses; else reset guesses guessLeft = 0

//print gameStuff totals on page (console.log too?)
console.log(gameStuff.win)
console.log(gamestuff.loss)