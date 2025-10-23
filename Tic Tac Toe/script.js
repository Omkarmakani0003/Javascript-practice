let button = document.querySelectorAll(".btn")

let xTurn = 1
let count = 0

let winning = [     
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
   
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    [0, 4, 8],
    [2, 4, 6]
 ]

function check(){
   
    for(let i of winning){

      let [ e1 ,e2 ,e3 ] = [
        button[i[0]].innerText,
        button[i[1]].innerText,
        button[i[2]].innerText,
      ]

      if((e1 != "") && (e2 != "") && (e3 != "")){
         if(e1 == e2 && e2 == e3){
            displayWin(e3)
         }
      }
     
    }

}
      
button.forEach((e)=>{
   e.addEventListener('click',function(){
      if(xTurn == 1){
         xTurn = 0
         e.innerText = "X" 
         e.disabled = true 
      }else{
         xTurn = 1
         e.innerText = "O"
         e.disabled = true
      }
      count++
      if(count == 9){
         drawgame()
      }
      check()
   }) 
})

function displayWin(player){
    if(player != undefined){
      document.getElementById('winning-title').innerText = `${player} is win`
      document.getElementById('winning-title').style.color = 'rgb(0, 255, 0)'
    }else{
      document.getElementById('winning-title').innerText = 'Match draw'   
      document.getElementById('winning-title').style.color = 'red'
    }
    
    button.forEach((e)=>{
        e.disabled = true
    })
   document.getElementById('restart').style.display = 'block'
}

function restart(){
    button.forEach((e)=>{
        e.innerText = ''
        e.disabled = false
    })
    count = 0
    document.getElementById('restart').style.display = 'none'
    document.getElementById('winning-title').innerText = ''
}

function  drawgame(){ 
   displayWin()
  // document.getElementById('restart').style.display = 'block'
}

