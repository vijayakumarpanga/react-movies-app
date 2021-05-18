import { bindActionCreators } from "redux"

const initialState= {
    movies : [],
    favouriteMovies : []
}
const movies =(state=initialState,action)=>{

    if(action.type=="ADD_MOVIES"){
        
           return {...state,movies : action.movies}
        }
    else if(action.type=="ADD_FAV_MOVIES"){
        
        return {...state,movies : action.movies}
     }
           
}
export default movies