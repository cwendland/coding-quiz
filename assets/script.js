var initMessage = 'Try to answer the following code-related questions within the time limit.\nKeep in mind that incorrect answers will penalize your score/time\nby ten seconds!';


var currentQuestion = 0;
var questionEl = document.getElementById('question');
var containerEl = document.getElementById('container');
var choiceList = document.getElementById('choices');

function init() {
    var msgEl = document.createElement('p');
    msgEl.setAttribute('id', 'msg');
    msgEl.textContent = initMessage;
    containerEl.appendChild(msgEl);

    questionEl.textContent = 'Coding Quiz Challenge';

    var startButton = document.createElement('button');
    startButton.setAttribute('id', 'start-button');
    startButton.textContent = 'Start Quiz';
    containerEl.appendChild(startButton);
}

function answerClick() {

}

function startQuiz() {
    containerEl.getElementById('start-button').remove();
    containerEl.getElementById('msg').remove();
}

function populateQuestion() {

}

function resetPage() {

}


init();
document.getElementById('start-button').addEventListener('click', startQuiz);