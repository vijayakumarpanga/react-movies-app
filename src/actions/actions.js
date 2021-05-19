//Action Type

export const  ADD_MOVIES ='ADD_MOVIES'
export const ADD_FAV_MOVIE='ADD_FAV_MOVIE'
export const UN_FAV_MOVIE ='UN_FAV_MOVIE'
export const TAB_CHANGE = 'TAB_CHANGE'
export const ADD_MOVIE='ADD_MOVIE'
export const addMovies=(movie)=>{
    return (
        {
            type : ADD_MOVIES,
            movies : movie
        }
    )
}
export const addFavMovies=(movie)=>{
    return (
        {
            type : ADD_FAV_MOVIE,
            movie : movie
        }
    )
}
export const unFavouriteMovie=(movie)=>{
    return (
        {
            type : UN_FAV_MOVIE,
            movie : movie
        }
    )
}
export const tabChange=(tabName)=>{
    return (
        {
            type : TAB_CHANGE,
            tabName : tabName
        }
    )
}
export const addMovie =(movie)=>{
    return(
        {
            type : ADD_MOVIE,
            movie :movie
        }
    )
}