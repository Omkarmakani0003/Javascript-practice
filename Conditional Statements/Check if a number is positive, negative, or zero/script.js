function check(){
    let num = document.getElementById('num').value

    if(num > 0){
        document.getElementById('result').innerText = 'number is positive'
    }else if(num < 0){
        document.getElementById('result').innerText = 'number is nagative'
    }else{
         document.getElementById('result').innerText = 'number is zero'
    }
}