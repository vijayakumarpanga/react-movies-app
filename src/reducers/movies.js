import {ADD_MOVIES,ADD_FAV_MOVIE} from '../actions/actions.js'

const initialState= {
    movies : [],
    favouriteMovies : []
}
const movies =(state=initialState,action)=>{

    // if(action.type=="ADD_MOVIES"){
        
    //        return {...state,movies : action.movies}
    //     }
    // else if(action.type=="ADD_FAV_MOVIES"){
        
    //     return {...state,favouriteMovies :[...state.favouriteMovies,action.movie]}
    //  }
    //  return state
    switch(action.type){
        case ADD_MOVIES :
            return   {...state,movies : action.movies}
        case ADD_FAV_MOVIE : 
            return { ...state, favouriteMovies : [...state.favouriteMovies,action.movie]}
        default  : 
            return state
    }
           
}
export default movies