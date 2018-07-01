document.addEventListener("DOMContentLoaded", function() {
    
    // game variables
    
    var answer = 5;
    var userGuess = 0;

    // set input & output variables           
    var output = document.querySelector("#output");
    var input = document.querySelector("#input");

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
        userGuess = parseInt(input.value);

        if(userGuess > answer) {
            output.innerHTML = "Too high.";
        }

        else if(userGuess < answer) {
            output.innerHTML = "Too low.";
        }

        else {
            output.innerHTML = "You win!";
        }
    }
});