import React ,{Component} from 'react'
import Navbar from './Navbar';
import {data} from '../data'
import MovieCard from './MovieCard';
import {addMovies} from '../actions/actions'
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

  render(){
    const {store} = this.props
   const  {movies,favouriteMovies}=store.getState()
   console.log(store.getState())
    return (
    <div >
     <Navbar></Navbar>
     <div className="main ">
      <div className ="tabs">
        <div className= "tab">Movies</div>
        <div className= "tab">Favourites</div>
      </div>
        <div className ="list">
        {movies.map((movie,index)=> {
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
