const SEARCH_MOVIE ='SEARCH_MOVIE'

export const searchMovie=(movie)=>{
    return{
        type : SEARCH_MOVIE,
        movie : movie
    }
}
