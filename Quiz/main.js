
const questionContainer = document.getElementById("question");
const answerButton = document.getElementById("answerBtn");
const nextButton = document.getElementById("next");
const startOver = document.getElementById("startOver");


const questions = [
    {
        question: "Which is the  tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false},
            { text: "Lhotse", correct: false},
            { text: "Makalu", correct: false},
            { text: "Everest", correct: true}
            
        ]

    },
    {
        question: "Which is the most spoken language in the world?",
        answers: [
            { text: "Mandarin Chinese", correct: false},
            { text: "Hindi", correct: false},
            { text: "English", correct: true},
            { text: "Spanish", correct: false}
            
        ]

    },
    {
        question: "Which is the  tallest mountain in the world?",
        answers: [
            { text: "Speckled cape tortoise", correct: false},
            { text: "Etruscan shrew", correct: true},
            { text: "Marmoset", correct: false},
            { text: "Pygmy marmosets", correct: false}
            
        ]

    },
    {
        question: "Which is the smallest planet in the Solar System?",
        answers: [
            { text: "Mercury", correct: true},
            { text: "Mars", correct: false},
            { text: "Venus", correct: false},
            { text: "Earth", correct: false}
            
        ]

    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Nile", correct: true},
            { text: "Amazon", correct: false},
            { text: "Yellow", correct: false},
            { text: "Congo", correct: false}
            
        ]

    },
]



let currentQuestionIndex = 0;
let score = 0;



function beginQuiz(){
    currentQuestionIndex = 0;
    score: 0;
    nextButton.innerHTML = "Next";
    startOver.innerHTML = "Start Over";
    showQuestion();
}


function showQuestion(){
    hideQuestion();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionContainer.innerHTML = questionNumber + ". " + currentQuestion.question;


currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", pickAnswer);
   
    
});
}

function hideQuestion(){
    nextButton.style.display = "none";
    startOver.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function pickAnswer(pick){
    const selectAnswer = pick.target;
    const correctAnswer = selectAnswer.dataset.correct === "true";
    if(correctAnswer){
        selectAnswer.classList.add("correct");
        score++;
    }else{
        selectAnswer.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=> {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    startOver.style.display = "block";
}

function showScore(){
    hideQuestion();
    questionContainer.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        beginQuiz();
    }

    startOver.addEventListener("click", () =>{
        beginQuiz();
    })
});

beginQuiz();


















