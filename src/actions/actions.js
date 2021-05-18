//Action Type

const ADD_MOVIES ='ADD_MOVIES'
const ADD_FAV_MOVIE='ADD_FAV_MOVIE'
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
            movies : movie
        }
    )
}