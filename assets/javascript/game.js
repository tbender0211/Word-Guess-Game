var warcraftWords = ["jaina", 
                    "thrall", 
                    "sylvanas", 
                    "khadgar", 
                    "outland", 
                    "draenor", 
                    "pandaria", 
                    "kalimdor", 
                    "eastern kingdoms", 
                    "northrend", 
                    "broken isles", 
                    "azeroth", 
                    "orgrimmar", 
                    "stormwind", 
                    "dalaran",
                    "ironforge", 
                    "thunderbluff", 
                    "argus"]



var randomWords = [];

var usedLetters = [];

var wrongCount = 0;

document.onkeyup = function (event) {
    var userGuess = userInput(event.key.toLowerCase());
    }


var wordDiv = document.getElementById("random-word");

var computerWord = warcraftWords[Math.floor(Math.random()*warcraftWords.length)];

//Use onkeyup to detect user guess
//Use a for loop and charAt to determine whether user guess matches letter in computer guess, cycling through length of word

for (i = 0; i < computerWord.length; i++){

    if (computerWord[i] === ' ') {
    randomWords.push(' ');
    }

    else {
        randomWords.push('_ ');
    }

    wordDiv.textContent = randomWords.join("");
}

document.getElementById("wrong-count").textContent = "Incorrect Guesses: " + wrongCount;
document.getElementById("letters").textContent = "Letters Used: " + usedLetters.join("");


//Need to figure out how to write userGuess to randomWords array
document.onkeyup = function(event) {

        var userGuess = event.key.toLowerCase();
        console.log(userGuess);

        for (i=0; i < computerWord.length; i++); {

            if (computerWord[i] == userGuess) {
                userGuess == randomWords[i];
                randomWords.push(computerWord[i]);
                wordDiv.textContent = randomWords.join("");
            }
    
            else {
                wrongCount++;
        }
    }
    }

