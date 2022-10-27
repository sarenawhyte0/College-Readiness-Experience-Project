/*Add your JavaScript here*/

var preparedScore = 0;
var unpreparedScore = 0; //Store the unprepared score

var questionCount = 0; //Store the number of answers clicked on

//Store HTML elements using the DOM
var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1q1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

//Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", prepared);
q1a2.addEventListener("click", unprepared);

q2a1.addEventListener("click", prepared);
q2a2.addEventListener("click", unprepared);

q3a1.addEventListener("click", prepared);
q3a2.addEventListener("click", unprepared);

restart.addEventListener("click", restartQuiz);

//Track prepared score and check if quiz is complete
function prepared() {
  preparedScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " preparedScore = " + preparedScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
}

if (questionCount == 3) {
  console.log("The quiz is done!")
}

// Track unprepared score and check if quiz is complete
function unprepared() {
  unpreparedScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " unpreparedScore = " + unpreparedScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
}

//Update Quiz results
if (preparedScore >= 2) {
  console.log("You are ready for college! Woohoo!");
} else if (unpreparedScore >= 2) {
  console.log("You are not ready yet.");
}

function updateResult() {
  if (preparedScore >= 2) {
    result.innerHTML = "You are ready for college! Woohoo!";
    console.log("You are prepared!");
  } else if (unpreparedScore >= 2) {
    result.innerHTML = "You still have a bit more to think about before starting college. That's fine! No one has to be completely ready for a new experience.";
    console.log("You are not ready yet.");
  } 
}

//Restart Quiz
function restartQuiz() {
  result.innerHTML = "It seems that ...";
  questionCount = 0;
  preparedScore = 0;
  unpreparedScore = 0;
  console.log("questionCount = " + questionCount + "preparedScore = " + preparedScore + "unpreparedScore = " + unpreparedScore);
}