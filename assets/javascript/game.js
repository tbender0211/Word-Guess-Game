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
var randomWords = [""];

var usedLetters = [""];

var wrongCount = 0;

var wordDiv = document.getElementById("random-word");

var computerWord = warcraftWords[Math.floor(Math.random()*warcraftWords.length)];

//for loop to show all characters as spaces
for (i = 0; i < computerWord.length; i++){
    randomWords[i] = "_ ";

    wordDiv.textContent = randomWords.join("");
}

//Function to detect user input of letter keys only
document.onkeyup = function (event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {
    
        userGuess(event.key);
    }
}

userGuess();

//Attempt at a function to fill in hangman blanks
function userGuess(letter) { 
    
    for (j=0; j < computerWord.length; j++); {
        
        console.log(computerWord);
        usedLetters.push(letter);
        document.getElementById("letters").innerHTML = "Letters Used: " + usedLetters.join(" ");
        document.getElementById("wrong-count").innerHTML = "Incorrect Guesses: " + wrongCount;    

        //This is where things don't work *shrug*
        if (computerWord[j] == letter) {

            randomWords[j] = computerWord[j];
            wordDiv.textContent = randomWords.join("");
        }

        else {

            wrongCount++;
            console.log(wrongCount);
            
                

        
        }
    }
    
}

