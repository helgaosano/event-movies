 const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=edfd7aa4792af952873ca60f7f05e6a8&page=1'
 const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
 
 const form = document.querySelector('.form')
 const main = document.querySelector('.main')
 const movieHeader = document.getElementById('movie__header')

 //getting movies
 getMovies(API_URL)
 
 async function getMovies(url){
     
     const response = await axios.get(url)
     const data = await response.data
     showMovies(data.results)
     
 }
/**
 * banner function
 */

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    // every refresh the movie will be change
    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log(setMovie);
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");
    banner.style.backgroundImage =  "url(" + IMG_PATH + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 400);
    banner_title.innerText = setMovie.original_title;
  });

/**
 * Render movie function
 */
  function showMovies(movies){
    main.innerHTML = ''

    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview, release_date} =  movie
        const date = release_date.slice(0,4)
        const movieTitle = title.slice(0,35)
        const movieOverview = overview.slice(0,400) 
        const movieElement = document.createElement('div')
        movieElement.classList.add('movie')

    });
}