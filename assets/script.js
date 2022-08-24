const questData = [
    {
        'question': 'What tag defines the body of the HTML document, and usually includes all the contents such as the text, hyperlinks, images, tables, lists, and more?',
        'answers':  ['<head>','<body>','<article>','<main>'],
        'correctAns':   1
    },
    {
        'question': 'What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?',
        'answers':  ['<embed>','<header>','<META>','<!DOCTYPE>'],
        'correctAns':   3
    },
    {
        'question': 'What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?',
        'answers':  ['Scope','Range','Restriction','Accessible'],
        'correctAns':   0
    },
    {
        'question': 'What is the element called that forms a search pattern out of a sequence of characters?',
        'answers':  ['Event','Variable','Regular Expression','For Loop'],
        'correctAns':   2
    },
    {
        'question': 'What is the CSS property that offers extra information about something when you hover over an element?',
        'answers':  ['Tooltip','Hint','Alt Text','Href'],
        'correctAns':   0
    },
    {
        'question': 'In CSS and HTML colors are displayed by combining these three shades of light.',
        'answers':  ['Yellow, Blue, and Green','Violet, Red, and Orange','Red, Green, and Blue','Fuschia, Salmon, Coral'],
        'correctAns':   2
    }
];
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

    populateQuestion()
}

function populateQuestion() {

}

function resetPage() {

}


init();
document.getElementById('start-button').addEventListener('click', startQuiz);