function check(){
    let input = document.getElementById('input').value;
    let show = document.getElementById('show');
    if(input % 2 == 0){
        show.innerText = `${input} is even number`
    }else{
        show.innerText = `${input} is odd number`
    }
}