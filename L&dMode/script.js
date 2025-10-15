let mode = localStorage.getItem('mode') || 0
let header = document.querySelector(".light-mode")

    if(mode == 1){
        header.classList.add('dark-mode')  
    }else{
        header.classList.toggle('light-mode')
    }

function toggleMode(){
    header.classList.toggle('dark-mode')
     if(mode == 1){
        localStorage.setItem('mode',0)
     }else{
        localStorage.setItem('mode',1)
     }
}