//Our global variables
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const timeDisplay = document.querySelector('#timeDisplay')
//starts the countdown timer at 40
let time = 40

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

//Stores questions and answers
let questions = [
    {
      question: "In JavaScript, which of the following variables takes precedence over the other if the names are the same?",
      choice1: "Global variable",
      choice2: "The local element",
      choice3: "Universal variable",
      choice4: "Super-ultra-mega variable",
      answer: 2,
    },
    {
        question: "How do you call the JavaScript code to carry out an instruction?",
        choice1: "Preprocessor",
        choice2: "Triggering event",
        choice3: "Psspsspsspss...",
        choice4: "Function",
        answer: 4,
      },
      {
        question: "What does a 'while' loop do?",
        choice1: "Loops through a block of code a number of times",
        choice2: "Loops through a block of code forever",
        choice3: "Loops through a block of code while a specified condition is true",
        choice4: "Loops through the properties of an object",
        answer: 3,
      },
      {
        question: "What is a primitive data type?",
        choice1: "A data type that stores only a single type of data, such as numbers, strings and booleans",
        choice2: "An unordered collection of disparate forms of data in key:value pairs",
        choice3: "A data type that only consists of numbers",
        choice4: "A type of data that has not learned how to forge iron tools",
        answer: 1,
      }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    
      // Starts the countdown timer and redirects the user to the end page if it reaches zero
    setInterval(
        ()=>{
          if (time >0){
          time --;
          timeDisplay.textContent= time}
        else{
          return window.location.assign('end.html')
        }}, 
        1000)
        
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        //adds the score to local storage 
        localStorage.setItem('mostRecentScore', score)

        /*Takes user to the end page */
        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
      const number = choice.dataset['number']
      choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if(classToApply === 'correct') {
      incrementScore(SCORE_POINTS)
    } else {time -= 5}

      selectedChoice.parentElement.classList.add(classToApply)

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()

      }, 1000)
  })
})

//changes the 
incrementScore = num => {
  score +=num
  scoreText.innerText = score
}

function timing(){
  
}

//calls the start game function
startGame()

