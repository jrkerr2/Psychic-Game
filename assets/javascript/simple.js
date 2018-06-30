document.addEventListener("DOMContentLoaded", function() {
    // code...
  

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
            output.innerHTML = "That's too high.";
        }

        else if(userGuess < answer) {
            output.innerHTML = "That's too low.";
        }

        else {
            output.innerHTML = "You win!";
        }
    }
});