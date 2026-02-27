const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Tech Modern Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Management Language", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Style System", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Colorful Style Sheets", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector(".quiz-question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextButton = document.querySelector(".next-btn");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    answerButtons.forEach((button, index) => {
        button.innerText = currentQuestion.answers[index].text;
        button.onclick = () => selectAnswer(button, currentQuestion.answers[index].correct);
    });
}

function resetState() {
    answerButtons.forEach(button => {
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });
}

function selectAnswer(button, correct) {
    if (correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    answerButtons.forEach(btn => btn.disabled = true);
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.innerText = "Quiz Completed! Your score: " + score + "/" + questions.length;
        document.querySelector(".answer-buttons").style.display = "none";
        nextButton.style.display = "none";
    }
});

startQuiz();