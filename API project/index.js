
let searchList  = document.getElementById("movie-search-box");
let searchMovie = document.getElementById("search-list");


let searchId  = document.getElementById("movies-search-id");
let searchMovieID = document.getElementById("movie-search-id");



async function loadMovie(searchItem){
    const url = `http://www.omdbapi.com/?s=${searchItem}&apikey=21bb7d12`;

    const res = await fetch(`${url}`);
    const result = await res.json()
    console.log(result)
}


function findMovie() {
let searchItem = (searchList.value)
    loadMovie(searchItem)
}


//ideshow

async function load(searchID){
    const url = `http://www.omdbapi.com/?i=${searchID}&apikey=21bb7d12`;

    const res = await fetch(`${url}`);
    const data = await res.json()
    console.log(data)
}


function findId() {
let searchID = (searchId.value)
    load(searchID)
    loadMovie(searchID)
}











const movieSeacrhBox = document.getElementById('movie-search-box')
// const searchList =   document.getElementById('search-list')


async function loadMovie(searchItem){
    const URl = `http://www.omdbapi.com/?s=${searchItem}&apikey=21bb7d12`;

    const res = await fetch(`${URl}`);
    const result = await res.json()
    if(result.Response = "true") displayMovieList(result.Search)
    // console.log(result)
}



function findMovie(){
    let searchItem = (movieSeacrhBox.value)
    if(searchItem.length > 0){
        searchList.classList.remove('hide-search-list')
        loadMovie(searchItem)
    }else{
        searchList.classList.add('hide-search-list')
    }
}

function displayMovieList(movies){
    searchList.innerHTML = movies
  for(let idx = 0; idx < movies.length; idx++){

    let movieListTerm = document.createElement('div')
    
    movieListTerm.dataset.id = movies[idx].imbdbID
    
    movieListTerm.classList.add('search-list-item')
    movieListTerm.innerHTML = `
    </div>
  <div class="search-item-info">
   <h3>${movies[idx].Title}</h3>
  <p>${movies[idx].Year}</p>
 </div>
     `
     searchList.appendChild(movieListTerm)
    }
}