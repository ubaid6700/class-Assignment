const question = [{
    'que': 'which of the following is a markup language..?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'Javascript',
    'd': 'PHP',
    'correct': 'a'
},

{
    'que': 'what year was javascript launched..?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct': 'b'
},

{
    'que': 'what does CSS stand for..?',
    'a': 'hyper text markup language',
    'b': 'extensible markup language',
    'c': 'cascading style sheet',
    'd': 'none of the above',
    'correct': 'c'
}]

let index = 0;
let total = question.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const questionInput = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = question[index];
    console.log(data)
    quesBox.innerText = `${index + 1})  ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
}

    const submitQuiz = () => {
    const data = question[index];
        const ans = getAnswer()
        if(ans === data.correct){
            right++;
        }
        else
        {
            wrong++;
        }
        index++;
        loadQuestion(); 
        return;
}

const getAnswer = () =>  {
    let answer;
    optionInputs.forEach(
        (input)=> {
            if(input.checked){
                answer = input.value;
                // console.log(input.value);
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align: center">
        <h3> thank you for playing the quiz </h3>
        <h2> ${right} / ${total} are correct </h2>
    </div>
    `
}

loadQuestion();