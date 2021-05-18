import {combineReducers} from 'redux'
import {ADD_MOVIES,ADD_FAV_MOVIE,UN_FAV_MOVIE, TAB_CHANGE} from '../actions/actions.js'
const initialMovieState= {
    moviesList : [],
    favouriteMovies : [],
    showFavouriteTab : false
}
export function movies(state=initialMovieState,action){

    // if(action.type=="ADD_MOVIES"){
        
    //        return {...state,movies : action.movies}
    //     }
    // else if(action.type=="ADD_FAV_MOVIES"){
        
    //     return {...state,favouriteMovies :[...state.favouriteMovies,action.movie]}
    //  }
    //  return state
    switch(action.type){
        case ADD_MOVIES :
            return   {...state,moviesList : action.movies}
        case ADD_FAV_MOVIE : 
            return { ...state, favouriteMovies : [action.movie,...state.favouriteMovies,]}
        case UN_FAV_MOVIE :{
            const updateFavouriteMovies = state.favouriteMovies.filter((movie)=> {
                console.log(`${movie.title} and ${action.movie.title}`)
                if(movie.title != action.movie.title)
                return movie

                } )
                console.log("updateFavouriteMovies:",updateFavouriteMovies)
            return{...state, favouriteMovies : updateFavouriteMovies
            }
            }
        case TAB_CHANGE : {
            if(action.tabName === 'Favourites' && state.showFavouriteTab === false){
                        
                            return {...state,showFavouriteTab : true}
            }
            else if(action.tabName === 'Movies' && state.showFavouriteTab === true){
                        
                return {...state,showFavouriteTab : false}
            }
            return {...state}
        }

        default  : 
            return state
    }
           
}
const intialSearchState = {
  result : {}
}
export function search (state=intialSearchState,action){
switch(action.type){
case 'SEARCH_MOVIE' : 
    return {...state}
 default : 
    return state
}
}
const rootInitialState ={
    moviesState : initialMovieState,
    searchState : intialSearchState
}
// const rootReducer=(state=rootInitialState ,action)=>{
// return {
//     moviesState : movies(state.moviesState,action),
//     searchState : search(state.searchState,action)
// }

// }

export default combineReducers({movies,search})