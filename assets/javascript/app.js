//Global Variables Declaration
var triviaQuestions = [{
  question: "Who was the first female monster to appear in a movie?",
  answerList: ["Frankenstein", "Tremors", "Bride of Frankenstein", "The Beast"],
  answer: 2
},{
  question: "What classic film was called production 9401 during filming?",
  answerList: ["American Psycho","High Tension", "Inside", "Psycho"],
  answer: 3
},{
  question: "What was the name of James Bond secretary?",
  answerList: ["Loelia Ponsonby", "Gail Fisher", "Barbara Streisand", "Babe Neuwirth"],
  answer: 0
},{
  question: "In the movie Star Wars, what is the Emperors last name?",
  answerList: ["Agustus", "Ottoman", "Byzantine", "Palpatine"],
  answer: 3
},{
  question: "What film was the last sequel to win the best picture?",
  answerList: ["Silence of the lambs", "Lord of the Rings", "Fifty Shades Darker", "Resident Evil"],
  answer: 0
}];


//30 second timer for trivia
function countdown() {
  var timeLeft = 30;
  var elem = document.getElementById('runningTimer');
  var timerId = setInterval(countdown, 1000);

  if (timeLeft == 0) {
    clearTimeout(timerId);
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining to answer all questions below:';
    timeLeft--;
  }

  //Hide Start Button
  $("#btnTrivia").hide();
}

function showQuestions(){
  //Increase height of main jumbotron
  $("#mainJumbotron").height = "900px";

  
  for (i = 0; i < 5; i++){
    //console.log(triviaQuestions[i].question);
    $("#questionsList").append("<p>");
    $("#questionsList").append((i + 1)+ ". " + triviaQuestions[i].question);
    $("#questionsList").append("<p>");

      //Add answers
      for (j = 0; j < 4; j++){
      $("#questionsList").append("<input type='radio' name='myRadio"+(i+1)+"'>");
      $("#questionsList").append(triviaQuestions[i].answerList[j]);
      $("#questionsList").append("&nbsp;")
      }
  }


}

function checkAnswers(){

  $("#questionsList").html($("input:checked" ).val() + " is checked!" );



  
}

function startTriviaGame(){

    //show Trivia Page 2
    $("#h2Caption").visibility = "visible";

    //Show Submit Button

    //Show Timer
    countdown();

    //Show Questions
    showQuestions();
}

//Start Trivia
document.getElementById("btnTrivia").addEventListener("click", startTriviaGame);
document.getElementById("btnSubmit").addEventListener("click", checkAnswers);

