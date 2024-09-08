let questions = [
{
        "question" : "Wer hat HTML erfunden?",
        "answer_1" : "Weihnachtsmann",
        "answer_2" : "Chuck Norris",
        "answer_3" : "Tim Burton",
        "answer_4" : "Tim Berners-Lee",
        "right_answer" : 4
},
{
        "question" : "Wofür steht HTML?",
        "answer_1" : "Hypertext Markup Language",
        "answer_2" : "Hyper Trex mit Licht",
        "answer_3" : "Hyperbeam Tackle MachPunch Leech Life",
        "answer_4" : "Hypertext Mug Language",
        "right_answer" : 1
},
{
        "question" : "Was versteht man unter CSS?",
        "answer_1" : "Counter Strike Source",
        "answer_2" : "Cascading Style Sheets",
        "answer_3" : "Cascading Sheets Style",
        "answer_4" : "Cascading Shit Storm",
        "right_answer" :  2   
},
{
        "question" : "Was ist ein Array?",
        "answer_1" : "eine speziale Variable, welche mehr als ein value beinhalten kann",
        "answer_2" : "einfach eine andere Form einer Schleife",
        "answer_3" : "etwas zu essen",
        "answer_4" : "eine speziale Variable, die null und nichtig ist",
        "right_answer" :  1   
},
{
        "question" : "Was ist ein String?",
        "answer_1" : "Strings sind einfach nur kleine Stätze",
        "answer_2" : "Strings sind speizielle Functions",
        "answer_3" : "Strings stehen für storing text",
        "answer_4" : "Strings sind sind Nudeln",
        "right_answer" :  3   
},
];

let currentQuestion = 0;

function init(){
        document.getElementById('all-questions').innerHTML = questions.length;

        showQuestion();
}

function showQuestion(){
        let question = questions[currentQuestion];

        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];     
}