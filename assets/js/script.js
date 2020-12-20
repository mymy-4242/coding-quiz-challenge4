var quizContainter = document.getElementById('quiz');
var startBtn = document.getElementById('start');
var submitBtn = document.getElementById('submit');
var resultsContainer = document.getElementById('results');
var timerEl = document.getElementById('timer');


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

//function opener() {

//}


//on start, begin quiz
startBtn.onclick = timer;
//startBtn.addEventListener('click', quiz);

//display opener
//opener();

//on submit, go to results
//submitBtn.addEventListener('click', question);