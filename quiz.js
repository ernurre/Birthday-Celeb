const questions = [
    {
        question: "What is a fun game for a birthday party?",
        answers: [
            { text: "Musical Chairs", correct: true },
            { text: "Chess", correct: false },
            { text: "Sudoku", correct: false },
            { text: "Hide and Seek", correct: false }
        ]
    },
    {
        question: "Which decoration adds a festive touch to a birthday celebration?",
        answers: [
            { text: "Black and White Balloons", correct: false },
            { text: "Glow-in-the-Dark Streamers", correct: true },
            { text: "Monochrome Tablecloth", correct: false },
            { text: "Plain White Plates", correct: false }
        ]
    },
    {
        question: "What is a popular birthday cake flavor?",
        answers: [
            { text: "Vanilla", correct: true },
            { text: "Lemon", correct: false },
            { text: "Chocolate", correct: false },
            { text: "Carrot", correct: false }
        ]
    },
    {
        question: "Which activity is commonly done during a birthday party?",
        answers: [
            { text: "Reading Books", correct: false },
            { text: "Watching Movies", correct: false },
            { text: "Dancing", correct: true },
            { text: "Doing Puzzles", correct: false }
        ]
    },
    {
        question: "What is a common birthday party favor?",
        answers: [
            { text: "Miniature Plants", correct: false },
            { text: "Stickers", correct: true },
            { text: "Keychains", correct: false },
            { text: "Bookmarks", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hide");
    resultContainer.classList.add("hide");
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    resetAnswerButtons();
    
    if (currentQuestionIndex < questions.length) {
        question.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerText = answer.text;
            button.classList.add("btn");
            button.addEventListener("click", () => selectAnswer(answer));
            answerButtons.appendChild(button);
        });
    } else {
        answerButtons.classList.add("hide");
    }
}

function resetAnswerButtons() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.innerText = "Quiz Completed!";
    answerButtons.classList.add("hide");
    nextButton.classList.add("hide");

    resultText.innerText = `Your score: ${score} out of ${questions.length}`;
    resultContainer.classList.remove("hide");
}
startQuiz();
