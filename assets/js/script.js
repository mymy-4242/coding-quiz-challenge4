

var opener = function(btnId) {
    var openerEl = document.createElement("div");
    openerEl.className = "main";
    body.appendChild(openerEl);

    //title
    var h1El = document.createElement("h1");
    h1El.textContent = 'Coding Quiz Challenge'
    h1El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
    openerEl.appendChild(h1El);

    //instructions
    var h2El = document.createElement("h2");
    h2El.textContent = 'Try to answer the following code-related questions before the time runs out. Keep in mind that wrong answers will result in a penalize your time by 10 seconds!';
    h2El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
    openerEl.appendChild(h2El);

    //create start button
    var startBtnEl = document.createElement("button");
    startBtnEl.textContent = "Start Quiz";
    startBtnEl.className = "btn";
    startBtnEl.setAttribute("data-btn-id", btnId);
    openerEl.appendChild(startBtnEl);

    //on start, begin quiz
    startBtnEl.onclick = timer;
    startBtnEl.addEventListener("click", function() {

        questions.forEach(
            (currentQuestion, questionNumber) => {
                var choices = [];
    
                for(number in currentQuestion.choices){
                    choices.push(
                        `<label>
                            <input type="button" name="question${questionNumber}" value="${number}">
                            ${number}:
                            ${currentQuestion.choices[number]}
                        </label>`
                    );
                }
    
            }
        );
    
    });
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

var showResults = function() {
    var score = 0;
    for(var i =0; i < questions.length; i++) {
        var answer = click(questions[i].question);

        if (
            (answer === 1 && questions[i].answer === '1') ||
            (answer === 2 && questions[i].answer === '2') ||
            (answer === 3 && questions[i].answer === '3') ||
            (answer === 4 && questions[i].answer === '4') 
        ) {
            score++;
        }
    }
    console.log(score);

}

var pageContentEl = document.querySelector("#page-content");
var quizContainter = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var timerEl = document.getElementById('timer');
var body = document.body;
var questions = [
    {
        question: "The DOM is _____",
        choices: {
            1: "built into the JavaScript language",
            2: "the object representation of the webpage",
            3: "just HTML",
            4: "all of the above"
        },
        answer: "2"
    },
    {
        question: "How do you make hidden comments in JavaScript?",
        choices: {
            1: "/* */",
            2: "<!-- -->",
            3: "//",
            4: "both a and c"
        },
        answer: "4"
    },
    {
        question: "What is event.preventDefault() used for?",
        choices: {
            1: "To stop the browser from submitting a form",
            2: "To stop the browser from reloading the page after a form is submitted",
            3: "To stop the browser from loading the page with CSS",
            4: "To stop the browser from deleting a stored property"
        },
        answer: "2"
    },
    {
        question: "Arrays can be used to store___",
        choices: {
            1: "booleans",
            2: "strings",
            3: "numbers",
            4: "all of the above"
        },
        answer: "5"
    },
    {
        question: "Commonly used data types do not include:",
        choices: {
            1: "string",
            2: "boolean",
            3: "number",
            4: "loops"
        },
        answer: "4",
    },
    {
        question: "What method converts a string value to lower case?",
        choices: {
            1: ".toLowerCase()",
            2: ".lowerCase()",
            3: ".toCaseLower",
            4: ".toLower"
        },
        answer: "1"
    }
];


//display opener
opener();

