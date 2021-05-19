import { movies } from "../reducers/movies";

const SEARCH_MOVIE ='SEARCH_MOVIE'

export function  searchMovie(movie){
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    return function(dispatch){ 
        fetch(url)
            .then(response=>response.json())
            .then(movieName=>{
                console.log( "inside fetch"+ movieName)
                dispatch({
                    type : SEARCH_MOVIE,
                    movie : movieName
                    })
                return
                
                 
             }
          )
    
         }
    
}