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
    const {favouriteMovies} = this.props.store.getState()
   
    const index = favouriteMovies.indexOf(movie) 
    console.log(index)
    if(index !== -1){
      return true
    }
    return false
    
  }
  tabChange=(tabName)=>{
    console.log("tabChange")
    this.props.store.dispatch(tabChange(tabName))
  }

  render(){
    const {store} = this.props
   const  {movies,favouriteMovies,showFavouriteTab}=store.getState()
   const displayMovies = showFavouriteTab ? favouriteMovies : movies
   console.log(store.getState())
    return (
    <div >
     <Navbar></Navbar>
     <div className="main ">
      <div className ="tabs">
        <div className= {`tab ${showFavouriteTab ? "": `active-tabs`} `} onClick={()=>this.tabChange("Movies")}>Movies</div>
        <div className= {`tab ${showFavouriteTab ? `active-tabs`:""} `} onClick={()=>this.tabChange("Favourites")}>Favourites</div>
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
