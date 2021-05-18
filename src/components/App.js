import React ,{Component} from 'react'
import Navbar from './Navbar';
import {data} from '../data'
import MovieCard from './MovieCard';
import {addMovies,tabChange} from '../actions/actions'
class App extends Component {
  componentDidMount(){
    const {store} = this.props
    store.subscribe((state)=>{
      this.forceUpdate()
      console.log('updated')})
   
    store.dispatch(addMovies(data))
    console.log(store.getState())
    
  }
 isFavourite=(movie)=>{
  const {movies,search} = this.props.store.getState()
 
    const {favouriteMovies} = movies
   
    const index = favouriteMovies.indexOf(movie) 
    console.log(index)
    if(index !== -1){
      return true
    }
    return false
    
  }
  tabChangeHandler=(tabName)=>{
    console.log("tabChange")
    this.props.store.dispatch(tabChange(tabName))
  }

  render(){
    const {store} = this.props
    
   // console.log(store.getState());
    const {movies,search} = store.getState()
   const {moviesList,favouriteMovies,showFavouriteTab}=movies
   const displayMovies = showFavouriteTab ? favouriteMovies : moviesList
   console.log(movies)
    return (
    <div >
     <Navbar></Navbar>
     <div className="main ">
      <div className ="tabs">
        <div className= {`tab ${showFavouriteTab ? "": `active-tabs`} `} onClick={()=>this.tabChangeHandler("Movies")}>Movies</div>
        <div className= {`tab ${showFavouriteTab ? `active-tabs`:""} `} onClick={()=>this.tabChangeHandler("Favourites")}>Favourites</div>
      </div>
        <div className ="list">
        {displayMovies.map((movie,index)=> {
          return(
          <MovieCard
         isFavourite = {this.isFavourite(movie)}
         dispatch={store.dispatch}
         key={index} movie={movie}
         >
         </MovieCard>
         )})}
      </div>
     </div>
    </div>
  );
  }
}

export default App;
