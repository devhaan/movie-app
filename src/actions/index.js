

//action type
export const ADD_MOVIES ='ADD_MOVIES';
export const ADD_FAVORITES ='ADD_FAVORITES';
export const REMOVE_FAVORITES ='REMOVE_FAVORITES';
export const SET_SHOW_FAVORITES ='SET_SHOW_FAVORITES';
export const ADD_MOVIE_TO_LIST ='ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT ='ADD_SEARCH_RESULT';






//action creator
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
         movies
    }
}
export function addFavorites(movie){
    return {
        type:ADD_FAVORITES,
         movie
    }
}
export function removeFavorites(movie){
    return {
        type:REMOVE_FAVORITES,
         movie
    }
}
export function setFavorites(value){
    return {
        type:SET_SHOW_FAVORITES,
        value
    }
}
export function addMoviesToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMoviesSearch(movie){
const url =`https://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
return function(dispatch){
console.log("handleSearch",url);
fetch(url)
.then(response => response.json())
.then(movie =>{
    console.log('movie',movie);
    //dispatch action
   dispatch(addMoviesSearchResult(movie));
})

}
}
export const addMoviesSearchResult = (movie)=>{
    console.log("handleSearch");
    return {
        type:ADD_SEARCH_RESULT,
        movie
    }
}
