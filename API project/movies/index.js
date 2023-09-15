

// const movieSeacrhBox = document.getElementById('movie-search-box')
// const searchList = document.getElementById('search-list')
// const resultGrid = document.getElementById('result-grid')


// async function loadMovie(searchItem) {
//     const URl = `http://www.omdbapi.com/?s=${searchItem}&apikey=21bb7d12`;

//     const res = await fetch(`${URl}`);
//     const result = await res.json()
//     if (result.Response = "true") displayMovieList(result.Search)
//     // console.log(result)
// }



// function findMovie() {
//     let searchItem = (movieSeacrhBox.value)
//     if (searchItem.length > 0) {
//         searchList.classList.remove('hide-search-list')
//         loadMovie(searchItem)
//     } else {
//         searchList.classList.add('hide-search-list')
//     }
// }

// function displayMovieList(movies) {
//     searchList.innerHTML = ""
//     if(movies === undefined){
//         return
//     }

//     // console.log(movies)
//     for (let idx = 0; idx < movies.length ; idx++) {

//         let movieListTerm = document.createElement('div')

//         movieListTerm.dataset.id = movies[idx].imdbID

//         movieListTerm.classList.add('search-list-item')
//         if(movies[idx].Poster != "N/A")
//         moviePoster = movies[idx].Poster
//         else
//         moviePoster = "image not found"

//         movieListTerm.innerHTML = `  
//         <div class="search-item-thumbnail">
//     <img src="${moviePoster}">
// </div>
//   <div class="search-item-info">
//    <h3>${movies[idx].Title}</h3>
//   <p>${movies[idx].Year}</p>
//  </div>
//      `
//         searchList.appendChild(movieListTerm)
//     }
//     loadMovieDetails()                     
//  }


// function loadMovieDetails() {
//     const searchListMovie = document.querySelectorAll('.search-list-item')
//     searchListMovie.forEach(movie => {
//         movie.addEventListener('click', async () => {
//             searchList.classList.add('hide-search-list')
//             movieSeacrhBox.value = ""
//             const data = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=21bb7d12`)
//             const movieDetail = await data.json()
//             displayMovieListDetails(movieDetail)
//         })
//     })
// }


// function displayMovieListDetails(detail) {
//     resultGrid.innerHTML = `
//     <div class="movie-poster">
//     <img src="${(detail.Poster != "N/A") ? detail.Poster : "image -not-found.png"}" alt = "movie Poster">
//   </div>
//   <div class="movie-info">
//     <h3 class="movie-title"> ${detail.Title}</h3>
//     <ul class="movie-music-info">
//       <li class="year">Year: ${detail.Year}</li>
//       <li class="rated">Rating</li>
//       <li class="released">Released : ${detail.Released}7</li>
//     </ul>
//     <p class="genure"><b>Genure:</b>${detail.Genure}</p>
//     <p class="writer"><b>Writer:</b>${detail.Writer}</p>
//     <p class="actors"><b>Actors:</b>${detail.Actors}</p>
//   </div>
// </div>`
// }

// window.addEventListener('click', function (e) {
//     if (e.target.className != "form-control") {
//         searchList.classList.add('hide-search-list');
//     }
// })




 const searchList = document.getElementById('search-list')
const movieSearchBox = document.getElementById('movie-search-box')
const resultGrid = document.getElementById('result-grid')

async function loadMovie(searchItem){
      const URL = `http://www.omdbapi.com/?s=${searchItem}&apikey=21bb7d12`;

      const resp = await fetch(`${URL}`)
      const result = await resp.json();

      if ( result.Response == "true") displayMovies(result.Search)
   
}
 function findmovie()
{
    let searchItem = movieSearchBox.value
    if(movies.length >  0){
        searchItem.classlist.remove('hide-search-list')
        loadMovie(searchItem)
    }else{
        searchItem.classlist.add('hide-search-list')
    }
}

 function displayMovies(movies){
          searchList.innerHTML = ""
    
    for( let idx = 0; idx < movies.length; idx++ ){
       let movieterm = document.createElement('div')
       movieterm.dataset.id = movies[ idx ].idmb
        movieterm.classList.add('class-list-item')
       if(movies[idx].Poster != "N/A"){
         moviesPoster = movies[ idx ].Poster 
       }else{
        moviesPoster = 'imagenot found'
       }
        movieterm.iinerHTML = `<div class="search-item-thumbnail">
    <img src="${moviePoster}">
</div>
  <div class="search-item-info">
   <h3>${movies[idx].Title}</h3>
  <p>${movies[idx].Year}</p>
 </div> `
    }
    searchItem.appendChild(movieterm)
    
    displayMovie()
 }

