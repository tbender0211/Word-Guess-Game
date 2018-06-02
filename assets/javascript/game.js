//Array for randomly generated word
var warcraftWords = ["jaina", 
                    "thrall", 
                    "sylvanas", 
                    "khadgar", 
                    "outland", 
                    "draenor", 
                    "pandaria", 
                    "kalimdor", 
                    "northrend",  
                    "azeroth", 
                    "orgrimmar", 
                    "stormwind", 
                    "dalaran",
                    "ironforge", 
                    "thunderbluff", 
                    "argus"];

//Variables
var randomWords = [];

var usedLetters = [];

var wrongCount = 0;

var wordDiv = document.getElementById("random-word");

var number = Math.floor(Math.random()*warcraftWords.length);

var computerWord = warcraftWords[number];

//for loop to show all characters as spaces
for (var i = 0; i < computerWord.length; i++){
    randomWords[i] = "_ ";

    wordDiv.textContent = randomWords.join("");
}


//Function to detect user input of letter keys only
document.onkeyup = function (event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log(event.key);
    
        userGuess(event.key, randomWords);
    }
}


//Call function to fill in hangman blanks
function userGuess(letter, randomWords) { 

    //console.log(computerWord.length);
    //console.log(randomWords.length);
    usedLetters.push(letter);
    document.getElementById("letters").innerHTML = "Letters Used: " + usedLetters.join(" ");
    
    if (computerWord.indexOf(letter) != -1) {

        var index = computerWord.indexOf(letter);
        randomWords[index] = letter;

        wordDiv.textContent = randomWords.join("");
    }

    else {

        wrongCount++;
        console.log(wrongCount);
                
    }

    document.getElementById("wrong-count").innerHTML = "Incorrect Guesses: " + wrongCount;

}

