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


var currQuestion = 0;
var secondsLeft = 0;
var questionsCorrect = 0;
var questionEl = document.getElementById('question');
var containerEl = document.getElementById('container');
var timeEl = document.getElementById('timer');

function init() {
    var msgEl = document.createElement('p');
    msgEl.setAttribute('id', 'msg');
    msgEl.textContent = initMessage;
    containerEl.appendChild(msgEl);

    questionEl.textContent = 'Coding Quiz Challenge';
    questionEl.setAttribute('style', 'font-size: larger; font-weight: bolder; text-align: center;');

    var startButton = document.createElement('button');
    startButton.setAttribute('id', 'start-button');
    startButton.textContent = 'Start Quiz';
    containerEl.appendChild(startButton);
    document.getElementById('start-button').addEventListener('click', startQuiz);
    questionsCorrect = 0;
}


function startQuiz() {
    document.getElementById('start-button').remove();
    document.getElementById('msg').remove();

    populateQuestion();
    secondsLeft = 90;
    setTime();
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = 'Time: ' + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        endQuiz();
      }
  
    }, 1000);
  }

function answerClick(event) {
    if (currQuestion === questData.length) {
        console.log('REACHED INSIDE OF IF');
        endQuiz(event); 
        return 0;
    }

    if (event.target.getAttribute('data-corr') == 'true') {
        questionsCorrect++;
        populateQuestion();
    } else {
        secondsLeft = secondsLeft - 10;
        populateQuestion();
    }

    event.target.parentNode.remove();
}

function populateQuestion() {

    questionEl.setAttribute('style', 'font-size: 20px; font-weight: bolder; text-align: left;');
    questionEl.textContent = questData[currQuestion].question;
    var choiceList = document.createElement('ul');
    choiceList.setAttribute('id', 'choices');
    containerEl.appendChild(choiceList);

    for (var i = 0; i < questData[currQuestion].answers.length; i++) {
        var answerButton = document.createElement('button')
        answerButton.setAttribute('class', 'answer-button');

        if (questData[currQuestion].correctAns === i) 
        {answerButton.setAttribute('data-corr', 'true');} 
        else {answerButton.setAttribute('data-corr', 'false');}

        answerButton.textContent = questData[currQuestion].answers[i];
        choiceList.appendChild(answerButton);
        answerButton.addEventListener('click', answerClick);
    }
    currQuestion++;
}

function endQuiz(event) {
    currQuestion = 0;
    event.target.parentNode.remove();

    questionEl.textContent = 'All done!';
    var endMsg = document.createElement('p');
    endMsg.setAttribute('id', 'end-msg');
    endMsg.textContent = 'Your final score is ' + questionsCorrect + '/6';
    containerEl.appendChild(endMsg);

    var inputMsg = document.createElement('p');
    inputMsg.setAttribute('class', 'msg');
    inputMsg.textContent = 'Input Initials: ';
    containerEl.appendChild(inputMsg);

    var inputForm = document.createElement('input');
    inputForm.setAttribute('id', 'initial-input');
    inputMsg.appendChild(inputForm);

    var inputButton = document.createElement('button');
    inputButton.textContent = 'Submit';
    inputMsg.appendChild(inputButton);

    inputButton.addEventListener('click', saveScore)
    document.getElementById('timer').remove();
}

function saveScore(event) {
    var initials = document.getElementById('initial-input').value;

    if (!localStorage.getItem('highscores')) {
        var highScoresArr = new Array();
        highScoresArr.push(initials + ' ' + questionsCorrect + '/6');
    }else {
        if (localStorage.getItem('highscores').includes(initials + ' ' + questionsCorrect + '/6')){

        } else {
            var highScoresArr = new Array(localStorage.getItem('highscores'));
            highScoresArr.push(initials + ' ' + questionsCorrect + '/6');
        }
    }

    localStorage.setItem('highscores', highScoresArr);
    document.getElementById('end-msg').remove();
    event.target.parentNode.remove();
    init();
}

init();
var test = ['6'];