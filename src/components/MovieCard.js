import React from 'react'
import { addFavMovies,unFavouriteMovie } from '../actions/actions'

const MovieCard =(props)=>{
    const addFavourite=()=>{
        props.dispatch(addFavMovies(props.movie))
      
    }
 const unFavourite=()=>{
     props.dispatch(unFavouriteMovie(props.movie))
      
    }
    const {Title,imdbRating,Poster,Plot} = props.movie
    console.log(props.isFavourite)
    return(
        <div className="movie-card">
            <div className="left">
             <img  src= {Poster} alt = "Movie Poster"></img>
             </div>
            <div className = "right">
                <div className="title">{Title}</div>
                <div className="plot">{Plot}</div>
                <div className="footer" >
                    <div>{imdbRating}</div>
                    {props.isFavourite ?  <button className="favourite-btn"
                        onClick = {unFavourite}>Unfavourite</button> : 
                        <button className="favourite-btn"
                        onClick = {addFavourite}>Favourite</button>
                         }
                    {/* <button className="favourite-btn"
                        onClick = {addFavourite}>Favourite</button>
                    <button className="favourite-btn"
                        onClick = {removeFavourite}>Unfavourite</button> */}
                 </div> 
            </div>
            <div></div></div>
    )
}
export default MovieCard