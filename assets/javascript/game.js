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

var userGuess;

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
}

var wordDiv = document.getElementById("random-word");

var computerWord = warcraftWords[Math.floor(Math.random()*warcraftWords.length)];

//Use onkeyup to detect user guess
//Use a for loop and charAt to determine whether user guess matches letter in computer guess, cycling through length of word

for (var i = 0; i < computerWord.length; i++){

    if (computerWord[i] === ' ') {
    randomWords.push(' ');
    }

    else {
        randomWords.push('_ ');
    }

    wordDiv.textContent = randomWords.join("");
}

document.getElementById("wrong-count").textContent = "Incorrect Guesses: " + wrongCount;
document.getElementById("letters").textContent = "Letters Used:" + usedLetters.join("");

function userGuess(letter){
}
//In this if function, need to figure out what to put where "onkeyup" is
if (computerWord.indexOf(userGuess >= 0)) {
    for (var i=0; i < computerWord.length; i++) {

        if (computerWord[i] === onkeyup() ) {
          randomWords[i] === computerWord[i];
    }
}
    wordDiv.textContent = randomWords.join("");
}
