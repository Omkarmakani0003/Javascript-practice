let log = document.getElementById('mood-log')
let date = new Date();
let time = date.toLocaleTimeString('en-US', { hour12: true });
let current_date =  date.toLocaleDateString('en-US', { hour12: true });

let arr = JSON.parse(localStorage.getItem('mood')) || []

function DisplayData(){
  if(arr.length > 0){
      document.getElementById('mood-log').innerHTML =  ''
      arr.forEach(element => {
       document.getElementById('mood-log').innerHTML += `<p>${element.date} - ${element.time} ${element.emoji} - ${element.mood}</p>`
      });
      document.getElementById('total-entries').innerText = arr.length
  }
  
}

DisplayData()

function check(mood){
    
  if(mood == 'Happy'){
    arr.push({
       "mood":"Happy",
       "emoji": '😊',
       "time" : time,
       "date" : current_date,
    })
  }else if(mood == 'Sad'){
    arr.push({
       "mood":"Sad",
       "emoji": '😞',
       "time" : time,
       "date" : current_date
       
    })
  }else if(mood == 'Angry'){
    arr.push({
       "mood":"Angry",
       "emoji": '😡',
       "time" : time,
       "date" : current_date
    })
  }else if(mood == 'Smart'){
    arr.push({
       "mood":"Smart",
       "emoji": '😎',
       "time" : time,
       "date" : current_date
    })
  }else{
    arr.push({
       "mood":"Lazzy",
       "emoji": '😴',
       "time" : time,
       "date" : current_date
    })
  }  
  
  localStorage.setItem('mood',JSON.stringify(arr))
  DisplayData()
  CheckMostFrequentMood()
}

function CheckMostFrequentMood(){
  
   let happy = arr.filter(e => e.mood == 'Happy')
   let sad = arr.filter(e => e.mood == 'Sed')
   let smart = arr.filter(e => e.mood == 'Smart')
   let angry = arr.filter(e => e.mood == 'Angry')
   let lazzy = arr.filter(e => e.mood == 'Lazzy')

  let count = [ happy, sad, smart, angry, lazzy]

  let maxArray = null;
  let maxLength = 0;

for (const key in count) {

  const element = count[key]

  if (element.length > maxLength) {
    maxLength = element.length;
    maxArray = element;
  }
}

// console.log("Greatest array:", maxArray);
// console.log("Length:", maxLength);
 
document.getElementById('most-frequent-mood').innerText = maxArray[0].mood
 
}
CheckMostFrequentMood()

function remove(){
     localStorage.clear();
     arr = []
     document.getElementById('mood-log').innerHTML = ''
     document.getElementById('total-entries').innerText = 0
     document.getElementById('most-frequent-mood').innerText = '--'
}



