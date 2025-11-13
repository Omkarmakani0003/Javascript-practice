function search(){
   let search = document.getElementById("search").value 
   fetch(`http://api.weatherapi.com/v1/current.json?key=9d24502a7c1944aaa78111228251311&q=${search}&aqi=no`)
   .then((res)=>{
      return res.json()
   })
   .then((data)=>{
       
       if(data){
         if(data.current.temp_c < 28){
           document.getElementById('body').style.background = 'linear-gradient(135deg, #89f7fe, #66a6ff)'
           document.getElementById('searchBtn').style.background = 'linear-gradient(135deg, #89f7fe, #66a6ff)'
         }else{
         document.getElementById('body').style.background = 'linear-gradient(135deg, #f89271, #ffa866)'
         document.getElementById('searchBtn').style.background = 'linear-gradient(135deg, #ff6666, #fcfe89)'
        }
        document.getElementById('icon').src = data.current.condition.icon
        document.getElementById('temp').innerText = `${data.current.temp_c} °`
        document.getElementById('feels').innerText = `Feels: ${data.current.feelslike_c}`
        document.getElementById('hum').innerText = `Hum: ${data.current.humidity} %`
        document.getElementById('wind').innerText = `Wind: ${data.current.wind_mph} m/s`
        document.getElementById('location').innerText = `${data.location.name}`
        document.getElementById('card').style.display = 'block'
        document.getElementById('msg').style.display = 'none'
       }
   })
}