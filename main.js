var landingPage = document.getElementById("landing-page");
var timer = document.getElementById("timer");
var startQuiz = document.getElementById("start-quiz");
var questionCard = document.getElementById("question-card");
var userAnswer;
var startClick = false;

var timeLeft = 75;
var timerId;

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
  ];
  

// var elem = document.getElementById('some_div');


function countdown() {
    if (timeLeft === -1) {
        clearTimeout(timerId);
    } else {
        timer.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
        console.log(timeLeft);
    }
}

function nextQuestion() {
    for (const iterator of questions) {
        console.log(iterator.title);
        console.log(iterator.choices);
    }
}

startQuiz.addEventListener("click", function() {
    timerId = setInterval(countdown, 1000);
    // console.log(timer);
    // timer.innerHTML = "TEST ME";
    var timer = document.getElementById("timer");
    timer.innerHTML = timeLeft;
    landingPage.innerHTML = "";
    // landingPage.style.visibility = 'hidden';
    // questionCard.innerHTML = questions[1].title;
    questionCard.innerHTML = nextQuestion();

}

);

if (userAnswer != questions[1].answer) {
     function addTime() {
        timeLeft = timeLeft + 15;
     } else {
         function nextQuestion() 
        //  { for (const iterator of questions) {
        //         console.log(iterator.title);
        //     }
        //     questionCard.innerHTML = questions[1].title;
        //  }
     }
     }
}
