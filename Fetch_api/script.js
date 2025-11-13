let container = document.querySelector('.container')
document.getElementById("search").addEventListener('keyup',function(){
    let search = document.getElementById("search").value
    fetch(`http://www.omdbapi.com/?apikey=8223efce&s='${search}'&page=1`)
    .then((res)=>{
     return res.json()
     })
    .then((data)=>{

       if(data['Search']){

        data['Search'].forEach(element => {
        container.innerHTML += `
          <div class="card">
             <img src="${element.Poster}">
             <p>${element.Title}</p>
             <h2>${element.Year}</h2>
          </div>
        `
       });

       }else{
          container.innerHTML = ``
       }

    })
})
// function search(){
//    console.log();
   
//     const search = document.getElementById("search")
//     fetch(`http://www.omdbapi.com/?apikey=8223efce&s=${search.value}&page=1`)
//     .then((res)=>{
//      return res.json()
//      })
//     .then((data)=>{
//        if(data['Search']){

//         data['Search'].forEach(element => {
//         container.innerHTML += `
//           <div class="card">
//              <img src="${element.Poster}">
//              <p>${element.Title}</p>
//              <h2>${element.Year}</h2>
//           </div>
//         `
//        });

//        }else{
//           container.innerHTML = "<h1>Movie Not Found</h1>"
//        }

//     })
// }
