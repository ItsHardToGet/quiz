// const questions=[
//     {
//         question:"which is largest animal in the world ?",
//         answers: [{text:"shark",correct:false},{ text:"blue whale",correct:true},{ text:"elephant",correct:false},{ text:"giraffe",correct:false}],
//     },
//     {
//         question:"which is largest bird in the world ?",
//         answers: [{text:"crow",correct:false},{ text:"great Indian Busterd",correct:false},{ text:"ostrich",correct:true},{ text:"peacock",correct:false}],
   

//     },
//     {
//         question:"which is the fastest in the world ?",
//         answers: [{text:"elephant",correct:false},{ text:"lion",correct:false},{ text:"tiger",correct:false},{ text:"cheeta",correct:true}],

//     },
//     {question:"which is the tallest animal in the world ?",
//         answers: [{text:"giraffe",correct:true},{ text:"great Indian Busterd",correct:false},{ text:"ostrich",correct:false},{ text:"peacock",correct:false}],

//     }];
//     let buttons=document.querySelectorAll("button");
//     const questionElement=document.getElementById("question");
//     const answerButtons=document.getElementById("answer-buttons");
//     const nextButton=document.getElementById("next-btn");
//     let currentQuestionIndex=0;
//     let score=0;
//     function StartaQuiz(){
//         currentQuestionIndex=0;
//         score=0;
//         nextButton.innerHTML="Next";
//         showQuestion();
//     }
//     function showQuestion(){
//         resetState();
//         let currentQuestion = questions[currentQuestionIndex];
//         let questionNo=currentQuestionIndex  + 1;
//         questionElement.innerHTML=questionNo +". "+ currentQuestion.question;
        
       
    
//         currentQuestion.answers.forEach(answer=>{
//         const button=document.createElement("button");
//         button.innerHTML=answer.text;
//         button.classList.add("btn");
//         document.answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct=answer.correct;
//         }
//         button.addEventListner("click",selectAnswer);
//     });
// }
    
// function resetState(){
// nextButton.style.display="none";

// while(answerButtons.firstChild){
//     answerButtons.removeChild(answerButtons.firstChild);
// }
// }
// function selectAnswer(e){
//     const selectedBtn=e.target;
//     const isCorrect=selectedBtn.dataset.correct ==='true';
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect")
//     }
//     Array.from(answerButtons.children).forEach(button=>{
//         if(button.datatset.correct==="true"){
//             button.classList.add("correct");
//         }
//         button.disabled=true;

//     });
//     nextButton.style.display="block";
// }

// function showScore(){
//     resetState();
//     questionElement.innerHTML=`You scored ${score} out of ${questions.length}! `;
//     nextButton.innerHTML="Play Again";
//     nextButton.style.display="block";
// }
// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
// }

//     nextButton.addEventListner("click",()=>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();

//     }else{
//         StartaQuiz();
//     }
// });
//     StartaQuiz();
    
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the largest bird in the world?",
        answers: [
            { text: "Crow", correct: false },
            { text: "Great Indian Bustard", correct: false },
            { text: "Ostrich", correct: true },
            { text: "Peacock", correct: false }
        ]
    },
    {
        question: "Which is the fastest animal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Lion", correct: false },
            { text: "Tiger", correct: false },
            { text: "Cheetah", correct: true }
        ]
    },
    {
        question: "Which is the tallest animal in the world?",
        answers: [
            { text: "Giraffe", correct: true },
            { text: "Great Indian Bustard", correct: false },
            { text: "Ostrich", correct: false },
            { text: "Peacock", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.textContent = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
    nextButton.textContent = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
