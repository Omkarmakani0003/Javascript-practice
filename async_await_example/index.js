function buyTicket(){
    return new Promise((r)=>{
        setTimeout(()=>{ r('ticket booked') },200)
    })
}

async function movieTime(){
    console.log('ticket booking');
    
    const ticket = await buyTicket();
    console.log(ticket);

    console.log('enjoy movie');
}

movieTime()