//  PLAYABLE LINK = https://repl.it/@ApurvChimralwar/markOne-CLI-APP-Do-you-know-me?​embed=1&output=1

// To use readline-sync package
var readlineSync = require('readline-sync');

// to use chalk package
const chalk = require('chalk');

// initializing score as zero
var score = 0;

// 1 Take Input
var userName = readlineSync.question(chalk.dim.bold("Hey there!,\nWhat should we call you?\n"))

// 2 Give Output
console.log(chalk.yellowBright.bold("\nGreetings!"), chalk.bold.magentaBright(userName), '\n')
console.log(chalk.inverse.cyanBright.bold("  LETS PLAY: HOW MUCH DO YOU KNOW ME(Apurv)  \n\n"))

// 3 Data for High Scores
var highScores = [
    {
        name: "Apurv",
        score: 10
    },
    {
        name: "Anjali",
        score: 9
    }
]


// #4 play function to give reward points on each correct answer
function play(que, ans) {
    var userAnswer = readlineSync.question(chalk.blue.bold(que));
    // conditional branching
    if (userAnswer === ans | userAnswer === ans.toLowerCase()) {
        console.log(chalk.green.bold('Correct Answer\n'));
        score++;
    } else {
        console.log(chalk.red.bold('Wrong Answer\n'))
    }
    console.log(chalk.yellow('----------------------\n') + chalk.yellowBright.bold('   Current Score:', score), '    \n' + chalk.yellow('----------------------\n'))
}

// #5 function to show user Score and highScores
function showScores() {
  console.log(chalk.whiteBright.bold(" YAY!"),`${chalk.magentaBright.bold(userName)}`, chalk.whiteBright.bold("You have Scored:"), `${chalk.green.bold(score)}`, '\n');

  console.log(chalk.yellowBright.bold.inverse(" Check out these HIGH SCORES: "));

  for (let i in highScores) {
      console.log(highScores[i].name, " : ", highScores[i].score)
  }
}

// #6 question objects
var que1 = {
    question: "Que1: Where do i live?\nOPTIONS = titan, venus or Earth\nHint: The planet where you live :P\nANSWER:" ,
    answer: 'Earth'
}
var que2 = {
    question: "Que2: What's my Favourite Color?\nANSWER:",
    answer: 'red'
}
var que3 = {
    question: "Que3: What's my Favourite Movie?\nANSWER:",
    answer: 'Pursuit of Happiness'
}
var que4 = {
    question: "Que4: My First coding Language ?\nHint: Harry Potter Knows it...\nANSWER:" ,
    answer: 'Python'
}
var que5 = {
    question: "Que5: What do my friends call me?\nANSWER:",
    answer: 'apps'
}
var que6 = {
    question: "Que6: What's my Favourite Anime?\nHint: Involves Luffy\nANSWER:",
    answer: 'One Piece'
}
var que7 = {
    question: "Que7: Book Close to my Heart?\nHint: Author is Viktor E Frankl\nANSWER:" ,
    answer: "Man's Search for Meaning"
}
var que8 = {
    question: "Que8: What do i do in free time?\nANSWER:",
    answer: 'Coding'
}
var que9 = {
    question: "Que9: Am i a Robot?\nANSWER:",
    answer: 'no'
}
var que10 = {
    question: "Que10: Am i Introvert/Extrovert?\nHint: Both\nAnswer: ",
    answer: 'Ambivert'
}

// #7 Array of question objects
var questions = [que1, que2, que3, que4, que5, que6, que7, que8, que9, que10];

// for testing
// var questions = [que9];

// #8 looping function calls to ask continuous questions
for (let i in questions) {
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
}

// // #9 function call to show scores
showScores()
