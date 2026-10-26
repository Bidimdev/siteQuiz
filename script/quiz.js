const question1 = document.querySelector("#question-1")
const question2 = document.querySelector("#question-2")
const question3 = document.querySelector("#question-3")
const iniciarQuiz = document.querySelector("#start-Quiz")

console.log('questão 1', question1)
console.log('questão 1: classes CSS ', question1.classList)


iniciarQuiz.addEventListener("click", () => {
    question1.removeAttribute('hidden')
})