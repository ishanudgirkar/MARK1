var readlineSync = require("readline-sync");

var score = 0;

const chalk = require('chalk'); //standard used in node rather than import

//data of high score 
var highScores = [
  {
    name: "Ishan",
    score: 3,
  },

  {
    name: "Ambarish",
    score: 2,

  }]

var questions = [{

  question: chalk.redBright("Where do I live ? "),
  answer: "Nanded"
},

{
  question: chalk.cyanBright("Who is my favourite football player ? "),
  answer: "Messi"
},

{
  question: chalk.magentaBright("Who is my favourite cricketer ? "),
  answer: "Rohit Sharma"
},

{
  question: chalk.greenBright("Which is my favourite PC game ? "),
  answer: "FIFA"
},

{
  question: chalk.yellowBright("Which is the all time favourite food dish of mine ? "),
  answer: "Dahi Vada"
},

{
  question: chalk.blueBright("In which year  my graduation will complete  ? "),
  answer: "2023"
}




];

function welcome() {

  var userName = readlineSync.question("What is your name ? ");
  console.log(" ")
  console.log(chalk.yellow("Welcome ") + userName + chalk.green(" to Explore Ishan !"));
  console.log(" ")

}

function initiate() {

  options = ['YES', 'NO'];
  console.log('Are you ready to play the game ?');
  index = readlineSync.keyInSelect(options, '');

  if (options[index] === options[0]) {
    console.log(" ")
    readlineSync.keyInPause('HERE WE GOOOOO ! ')
    console.log(" ");
    game();
    displayScore();
  }

  if (options[index] === options[1]) {

    console.log(" ")
    console.log("OK you can play the game whenever you want !")
    console.log(" ")


  }




}


function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen("RIGHT !"));
    score = score + 1;
  }
  else {
    console.log(chalk.bgRed("WRONG !"));
  }
  console.log("current score: ", score);
  console.log(" ")

}

function game() {

  for (var i = 0; i < questions.length; i++) {

    var currentQuestion = questions[i];

    play(currentQuestion.question, currentQuestion.answer)
  }



}

function displayScore() {

  console.log(chalk.inverse("Congratulations ! Your SCORE is : ", score + " "));
  console.log(" ")

  console.log("Check out the high scores, if you should be there then ping me and I'll update it");


  highScores.map(score => console.log(score.name, " : ", score.score))


}







welcome();
initiate();




