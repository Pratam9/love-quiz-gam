const questions = [
    {
        question: "What is your ideal date?",
        answers: [
            "A romantic dinner",
            "A fun adventure",
            "A cozy movie night",
            "A walk in the park"
        ],
        score: 1
    },
    {
        question: "How do you express love?",
        answers: [
            "Through words",
            "Through actions",
            "Through gifts",
            "Through quality time"
        ],
        score: 2
    }
];

let currentQuestion = 0;
let totalScore = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer");
    
    questionElement.innerText = questions[currentQuestion].question;
    answerButtons.forEach((button, index) => {
        button.innerText = questions[currentQuestion].answers[index];
    });
}

function selectAnswer(index) {
    totalScore += questions[currentQuestion].score;
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").innerText = totalScore;
}

function restartQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    loadQuestion();
}

// Load the first question
loadQuestion();
