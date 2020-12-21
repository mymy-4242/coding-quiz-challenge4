var quizContainter = document.getElementById('quiz');
var startBtn = document.getElementById('start');
var submitBtn = document.getElementById('submit');
var resultsContainer = document.getElementById('results');
var timerEl = document.getElementById('timer');
var body = document.body;

var opener = function() {
    //title
    var h1El = document.createElement("h1");
    h1El.textContent = 'Coding Quiz Challenge'
    h1El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
    body.appendChild(h1El);

    //instructions
    var h2El = document.createElement("h2");
    h2El.textContent = 'Try to answer the following code-related questions before the time runs out. Keep in mind that wrong answers will result in a penalize your time by 10 seconds!';
    h2El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
    body.appendChild(h2El);

    //on start, begin quiz
    startBtn.onclick = timer;
}

var timer = function() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}


var questions = [
    {
        question: "The DOM is _____",
        answers: {
            1: "built into the JavaScript language",
            2: "the object representation of the webpage",
            3: "just HTML",
            4: "all of the above"
        },
        correctAnswer: "2"
    },
    {
        question: "How do you make hidden comments in JavaScript?",
        answers: {
            1: "/* */",
            2: "<!-- -->",
            3: "//",
            4: "both a and c"
        },
        correctAnswer: "4"
    },
    {
        question: "What is the purpose or an alt attribute for images?",
        answers: {
            1: "To provide context for the image",
            2: "To style the image",
            3: "To provide an alternative image if the original image does not appear",
            4: "To delete the image"
        },
        correctAnswer: "2"
    },
    {
        question: "How do you create a flexbox?",
        answers: {
            1: "display: box;",
            2: "flex: display;",
            3: "display: flex;",
            4: "flexbox: display;"
        },
        correctAnswer: "3"
    },
    {
        question: "What are types of media we can apply CSS to?",
        answers: {
            1: "screen",
            2: "speech",
            3: "print",
            4: "all of the above"
        },
        correctAnswer: "4",
    },
    {
        question: "What method converts a string value to lower case in JavaScript?",
        answers: {
            1: ".toLowerCase()",
            2: ".lowerCase()",
            3: ".toCaseLower",
            4: ".toLower"
        },
        correctAnswer: "1"
    }
];
var quizQuestions = function() {
   
}

var showResults = function() {}

//display opener
opener();

//on start, go to quiz

startBtn.addEventListener('click', quizQuestions);

//on submit, go to results
submitBtn.addEventListener('click', showResults);




//startBtn.addEventListener('click', quiz);



