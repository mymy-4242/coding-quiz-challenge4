var quizContainter = document.getElementById('quiz');
var startBtn = document.getElementById('start');
var submitBtn = document.getElementById('submit');
var resultsContainer = document.getElementById('results');
var timerEl = document.getElementById('timer');
var body = document.body;

function opener() {
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

function timer() {
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



//display opener
opener();


//startBtn.addEventListener('click', quiz);



//on submit, go to results
//submitBtn.addEventListener('click', question);