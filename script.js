const startButton = document.getElementById('start-btn')
const  = nextButton = document.getElementById('question-container')
const questionContainerElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)



function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random( - .5))
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion (){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    setNextQuestion.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
        }
    }

}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children)

}

const questions = [
    {
    question: 'What is 2 +2',
    answer: [
       { text: '4', correct: true },
       { text: '22', correct: false} 
    ]   
    }
]