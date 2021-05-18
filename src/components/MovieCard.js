import React from 'react'

const MovieCard =(props)=>{
    const {title,imdbRating,posterurl,storyline} = props.movie
    return(
        <div className="movie-card">
            <div className="left">
             <img  src= {posterurl} alt = "Movie Poster"></img>
             </div>
            <div className = "right">
                <div className="title">{title}</div>
                <div className="plot">{storyline}</div>
                <div className="footer" >
                    <div>{imdbRating}</div>
                    <button className="favourite-btn">Favourite</button>
              
                 </div> 
            </div>
            <div></div></div>
    )
}
export default MovieCard