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
var number = 30;
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#runningTimer").html("<h2>" + number + " seconds remaining...</h2>");

  //  Once number hits zero...
  if (number === 0) {
    stop();
    alert("Your time is up!");
    checkAnswers();

  }
}

  //  The stop function
  function stop() {
    clearInterval(intervalId);
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
      $("#questionsList").append("<input type='radio' class='clsanswers' value='" + triviaQuestions[i].answerList[j] + "' name='myRadio"+(i+1)+" '>");
      $("#questionsList").append(triviaQuestions[i].answerList[j]);
      $("#questionsList").append("&nbsp;")
      }
  }


}

function checkAnswers(){
  var arrAnswers = document.getElementsByClassName("clsanswers");
  var Q1,Q2,Q3,Q4,Q5;

  //Hide submit button
  $("#submitDiv").hide();

  //kill timer
  stop();
  $("#runningTimer").hide();

  if (arrAnswers[2].checked){
    Q1="Question 1: Correct";
  }else{
    Q1="Question 1: Incorrect, the correct answer is 'Bride of Frankenstein'";
  }
  if (arrAnswers[7].checked) {
    Q2 = "Question 2: Correct";
  }else {
    Q2="Question 2: Incorrect, the correct answer is 'Psycho";
  } 
  if (arrAnswers[8].checked) {
    Q3 = "Question 3: Correct";
  } else {
    Q3="Question 3: Incorrect, the correct answer is 'Loelia Ponsonby";
  }
  if (arrAnswers[15].checked) {
    Q4 = "Question 4: Correct";
  } else {
    Q4="Question 4: Incorrect, the correct answer is 'Palpatine";
  }
  if (arrAnswers[16].checked) {
    Q5 = "Question 5: Correct";
  } else {
    Q5="Question 5: Incorrect, the correct answer is 'Silence of the lambs";
  }


  $("#questionsList").html("<p>" + Q1 + "<p>" + Q2 + "<p>" + Q3 + "<p>"+ Q4 + "<p>" + Q5 + "<p>" + "</p>");

}

function startTriviaGame(){

    //Show Submit Button
    $("#submitDiv").show();

    //Hide Start Button
    $("#btnTrivia").hide();

    //Show Timer
    run();

    //Show Questions
    showQuestions();
}

$("#submitDiv").hide();

//Start Trivia
document.getElementById("btnTrivia").addEventListener("click", startTriviaGame);
document.getElementById("btnSubmit").addEventListener("click", checkAnswers);

