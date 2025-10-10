 let questions = [
            {
                "id": 1,
                "question": "What is the capital of France?",
                "options": ["Paris", "London", "Berlin", "Rome"],
                "answer": "Paris"
            },
            {
                "id": 2,
                "question": "Which planet is known as the Red Planet?",
                "options": ["Earth", "Mars", "Jupiter", "Venus"],
                "answer": "Mars"
            },
            {
                "id": 3,
                "question": "Who wrote the play 'Romeo and Juliet'?",
                "options": ["William Wordsworth", "Leo Tolstoy", "William Shakespeare", "Charles Dickens"],
                "answer": "William Shakespeare"
            },
            {
                "id": 4,
                "question": "What is the largest ocean on Earth?",
                "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                "answer": "Pacific Ocean"
            },
            {
                "id": 5,
                "question": "Which element has the chemical symbol 'O'?",
                "options": ["Oxygen", "Osmium", "Gold", "Oxide"],
                "answer": "Oxygen"
            },
            {
                "id": 6,
                "question": "What is 9 x 7?",
                "options": ["56", "63", "72", "81"],
                "answer": "63"
            },
            {
                "id": 7,
                "question": "In which continent is the Amazon Rainforest located?",
                "options": ["Africa", "Asia", "South America", "Australia"],
                "answer": "South America"
            },
            {
                "id": 8,
                "question": "Who painted the Mona Lisa?",
                "options": ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
                "answer": "Leonardo da Vinci"
            },
            {
                "id": 9,
                "question": "Which gas do plants absorb from the atmosphere?",
                "options": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
                "answer": "Carbon Dioxide"
            },
            {
                "id": 10,
                "question": "What is the main language spoken in Brazil?",
                "options": ["Spanish", "Portuguese", "French", "English"],
                "answer": "Portuguese"
            }
        ]
let = questionCount = document.getElementById('question-count')
var index = 0; 
let time = 30
var marks = 0
let timeLeft = setInterval(() => {
        
    if(time > 0){
        let timer = document.querySelector(".timer")
        if(time <= 10){
            timer.style.color = 'red'
        }else{
            timer.style.color = 'white'
        }
        time--
        timer.innerHTML = `Time  :  ${time} seconds`
    }else{
        time = 30
         let correctAns = document.getElementById(questions[index-1].answer)
        correctAns.classList.add('correct')
        
        setTimeout(()=>{
             next()
        },1000)
    }
    }, 1000);


function next(){
    
    let ele = document.getElementsByClassName("box")[0]
    time = 30
    questionCount.innerText = `${questions[index].id} of ${questions.length}`
    ele.innerHTML = `
        <h1>${questions[index].id} . ${questions[index].question}</h1>
        <div class="options">
            <div class=""><span onclick="check('${questions[index].options[0]}')" id="${questions[index].options[0]}">${questions[index].options[0]}</span></div>
            <div class=""><span onclick="check('${questions[index].options[1]}')" id="${questions[index].options[1]}">${questions[index].options[1]}</span></div>
            <div class=""><span onclick="check('${questions[index].options[2]}')" id="${questions[index].options[2]}">${questions[index].options[2]}</span></div>
            <div class=""><span onclick="check('${questions[index].options[3]}')" id="${questions[index].options[3]}">${questions[index].options[3]}</span></div>
        </div>
        <button id="nextBtn" onclick='next()'>Next</button>   
        <button id="result" onclick='result()'>Result</button>   
    `
    index++

    if(index >= 10){
      document.getElementById('nextBtn').style.display = 'none'
      document.getElementById('result').style.display = 'block'
    }
}

next() 
function check(ans){
    
    if(ans == questions[index-1].answer){
        let options = document.getElementById(ans)
        options.classList.add('correct')
        marks++
       // clearInterval(Timer)
       // setTimeout(()=>{next()},2000)
    }else{
        let options = document.getElementById(ans)
        options.classList.add('incorrect')
        let correctAns = document.getElementById(questions[index-1].answer)
        correctAns.classList.add('correct')
       // clearInterval(Timer)
        //setTimeout(()=>{next()},2000)
    }
        
}

function result(){
    clearInterval(timeLeft)
    document.querySelector('.main').innerHTML = `Result : ${marks} / ${questions.length}`
}
