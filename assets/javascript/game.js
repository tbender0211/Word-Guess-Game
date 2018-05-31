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



var randomWords = [""];

var usedLetters = [""];

var wrongCount = 0;

var wordDiv = document.getElementById("random-word");

var computerWord = warcraftWords[Math.floor(Math.random()*warcraftWords.length)];

//Use onkeyup to detect user guess
//Use a for loop and charAt to determine whether user guess matches letter in computer guess, cycling through length of word

for (i = 0; i < computerWord.length; i++){
    randomWords[i] = "_ ";

    wordDiv.textContent = randomWords.join("");
}

document.onkeyup = function (event) {
    userGuess(event.key);
    }

userGuess();

function userGuess(letter) { 
    
    for (j=0; j < computerWord.length; j++); {
        
        console.log(computerWord);
            
        if (computerWord[j] == letter) {
                randomWords[j] = computerWord[j];
                usedLetters.push(letter);
                document.getElementById("letters").innerHTML = "Letters Used: " + usedLetters.join(" ");
                document.getElementById("wrong-count").innerHTML = "Incorrect Guesses: " + wrongCount;
                wordDiv.textContent = randomWords.join("");
        }

        else {
                usedLetters.push(letter);
                document.getElementById("letters").innerHTML = "Letters Used: " + usedLetters.join(" ");
                wrongCount++;
                console.log(wrongCount);
                document.getElementById("wrong-count").innerHTML = "Incorrect Guesses: " + wrongCount;
                

        
        }
    }
    
}

