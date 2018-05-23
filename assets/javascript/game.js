var warcraftWords = ["Jaina", "Thrall", "Sylvanas", "Khadgar", "Outland", "Draenor", "Pandaria", "Kalimdor", "Eastern Kingdoms", "Northrend", "Broken Isles", "Azeroth", "Orgrimmar", "Stormwind", "Dalaran", "Ironforge", "Thunderbluff", "Argus"];

var computerWord = warcraftWords[Math.floor(Math.random()*warcraftWords.length)];

//Use onkeyup to detect user guess
//Use a for loop and charAt to determine whether user guess matches letter in computer guess, cycling through length of word
document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
}

