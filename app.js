document.addEventListener("DOMContentLoaded", function(){



// DATA ENTRY

const quizData = [
    {
        question:"Q1) What is the full form of ISS?",
        a:"International Swimming Station",
        b:"Internetional Space Station",
        c:"Internaitonal Supply System",
        d:"Interspacial Super Speed",
        correct:"b",
    },

    {
        question:"Q2) Jupiter has how many moons?",
        a:"94",
        b:"50",
        c:"92",
        d:"90",
        correct:"c",
    },

    {
        question:"Q3) Which is the biggest planet?",
        a:"Uranus",
        b:"Jupiter",
        c:"Neptune",
        d:"pluto",
        correct:"b",
    },

    {
        question:"Q4) Which is the smallest planet?",
        a:"Neptune",
        b:"Mercury",
        c:"Earth",
        d:"venus",
        correct:"b",
    }
];

// CONSTANTS

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// INITIAL SCORE

let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

// SCORE COUNTER

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You Scored ${score}/${quizData.length}</h2>
           <button onclick="location.reload()">try again?</button>
           `
       }
    }
})



})

// const quizData= [
//     {
//         question:"What is the full form of ISS?",
//         a:"International Swimming Station",
//         b:"Internetional Space Station",
//         c:"Internaitonal Supply System",
//         correct:"b",
//     },

//     {
//         question:"Jupiter has how many moons?",
//         a:"94",
//         b:"50",
//         c:"92",
//         correct:"c",
//     },

//     {
//         question:"Which is the biggest planet?",
//         a:"Uranus",
//         b:"Jupiter",
//         c:"Neptune",
//         correct:"b",
//     },

//     {
//         question:"Which is the smallest planet?",
//         a:"Neptune",
//         b:"Mercury",
//         c:"Earth",
//         correct:"b",
//     }
// ];

// const quiz= document.getElementById("quiz")
// const answerEls = document.querySelectorAll(".answer")
// const questionEl = document.getElementById("question")
// const a_text = document.getElementById("a_text")
// const b_text = document.getElementById("b_text")
// const c_text = document.getElementById("c_text")
// const submitBtn= document.getElementById("submit")

// let currentQuiz = 0
// let score = 0

// loadQuiz()

// function loadQuiz(){

//     deselectAnswers()

//     const currentQuizData = quizData[currentQuiz]

//     questionEl.innerText = currentQuizData.question
//     a_text.innerText = currentQuizData.a
//     b_text.innerText = currentQuizData.b
//     c_text.innerText = currentQuizData.c

// }

// function deselectAnswers() {
//     answerEls.forEach(answerEls => answerEls.checked = false)
// }

// function getSelected() {
//     let ansEls
//     answerEls.forEach(answerEl => {
//         if(answerEl.checked){
//             answer=answerEls.id
//         }
//     })
//     return answer
// }


// submitBtn.addEventListener('click', () =>{
//     const answer = getSelected()
//     if(answer) {
//         if (answer === quizData[currentQuiz].correct) {
//             score++
//         }

//         currentQuiz++

//         if(currentQuiz < quizData.length) {
//             loadQuiz()
//         } else{
//             quiz.innerHTML =`
//             <h2>You Scored ${score}/${quizData.length}.<h2/>
            
//             <button onclick="location.reload()">Try again?</button>
//             `
            
//         }
//     }
// })