const questions = [
    {
        question: "The largest sugar mill in Asia is located _____.",
        answers: [
            { text: "Karnataka", correct: false},
            { text: "Uttar Pradesh", correct: true},
            { text: "West Bengal", correct: false},
            { text: "Maharastra", correct: false},
        ]
    },
    {
        question: "SEBI was set up in _____.",
        answers: [
            { text: "1992", correct: true},
            { text: "1980", correct: false},
            { text: "1984", correct: false},
            { text: "1988", correct: false},
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {
                text: "Shark",
                correct: false
            },
            {
                text: "Elephant",
                correct: false
            },
            {
                text: "Giraffe",
                correct: false
            },
            {
                text: "Blue Whale",
                correct: true
            },
        ]
    },
    {
        question: "Which state produced largest wheat in India?",
        answers: [
            {
                text: "Madhya Pradesh",
                correct: false
            },
            {
                text: "Kerela",
                correct: false
            },
            {
                text: "Uttar Pradesh",
                correct: true
            },
            {
                text: "Punjab",
                correct: false
            },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    answerButton.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(event){
    const selectedBtn = event.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    nextButton.style.display = "block";

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        handleScore();
    }
}
function handleScore(){
    resetState(); // To remove the options from the display 
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
     if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();    // When the quiz is end and we want to start the quiz again 
    }
});


startQuiz();

