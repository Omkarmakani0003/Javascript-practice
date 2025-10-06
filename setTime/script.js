let count = document.querySelectorAll('#count')

count.forEach((e)=>{
    let end = e.dataset.end 
    let speed = 0
    setInterval(()=>{
      if(speed < end){
        speed += end/200
        e.innerText = speed
      }
    },0.5)
  
})


