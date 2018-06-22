
//Start Trivia
document.getElementById("btnTrivia").addEventListener("click", startTriviaGame);


function startTriviaGame(){

    //show Trivia Page 2
    var y = document.getElementById("h2")
    y.style.visibility = "visible";

}

function loadQuestions(){
  var triviaQuestions[] = 
}

//30 second timer for trivia

function countdown() {
var timeLeft = 30;
var elem = document.getElementById('runningTimer');
var timerId = setInterval(countdown, 1000);

  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining to answer all questions below';
    timeLeft--;
  }
}