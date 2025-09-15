function check(){
     let num1 = document.getElementById('num1').value
     let num2 = document.getElementById('num2').value
     let show = document.getElementById('show')
     if(num1 > num2){
       show.innerText = `${num1} is largest then ${num2}`    
     }else{
        show.innerText = `${num2} is largest then ${num1}` 
     }    
}