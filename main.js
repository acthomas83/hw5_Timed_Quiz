var landingPage = document.getElementsByClassName("landing-page");
var timer = document.getElementsByClassName("timer");
var startQuiz = document.getElementById("start-quiz");
var questionCard = document.getElementsByClassName("question-card");

var startClick = false

var timeLeft = 75;
// var elem = document.getElementById('some_div');


// function countdown() {
//     if (timeLeft == -1) {
//         clearTimeout(timerId);
//     } else {
//         timer.innerHTML = timeLeft + ' seconds remaining';
//         timeLeft--;
//         console.log(timeLeft);
//     }
// }


startQuiz.addEventListener("click", function() {
    var timerId = setInterval(countdown, 1000);
     countdown();
        if (timeLeft == -1) {
            clearTimeout(timerId);
        } else {
            timer.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
            console.log(timeLeft);
        }
    }
);