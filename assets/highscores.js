var listEl = document.children[0].children[1].children[1].children[1];
var highscoresArray = JSON.parse(localStorage.getItem('highscores'));
highscoresArray.sort();



//Populate the page with the highscores from local storage
for (var i = 0; i < highscoresArray.length; i++) {
    var newLI = document.createElement('li');
    newLI.textContent = highscoresArray[i];
    listEl.appendChild(newLI);
}
