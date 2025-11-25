let log = document.getElementById('mood-log')
let date = new Date();
let time = date.toLocaleTimeString('en-US', { hour12: true });
let arr = []

function check(mood){
    
  if(mood == 'Happy'){
    arr.push({
       "mood":"Happy",
       "emoji": '😊',
       "time" : time
    })
  }else if(mood == 'Sad'){
    arr.push({
       "mood":"Sad",
       "emoji": '😞',
       "time" : time
       
    })
  }else if(mood == 'Angry'){
    arr.push({
       "mood":"Angry",
       "emoji": '😡',
       "time" : time
    })
  }else if(mood == 'Smart'){
    arr.push({
       "mood":"Smart",
       "emoji": '😎',
       "time" : time
    })
  }else{
    arr.push({
       "mood":"Lazzy",
       "emoji": '😴',
       "time" : time
    })
  }

  document.getElementById('mood-log').innerHTML =  ''
  arr.forEach(element => {
       document.getElementById('mood-log').innerHTML += `<p>${element.time} ${element.emoji} - ${element.mood}</p>`
  });
  document.getElementById('te').innerText = arr.length
  
}


function remove(){
     arr = []
     document.getElementById('mood-log').innerHTML = ''
     document.getElementById('te').innerText = 0
}



