import React ,{Component} from 'react'
import Navbar from './Navbar';
import {data} from '../data'
import MovieCard from './MovieCard';
import {addMovies,tabChange} from '../actions/actions'
import { connect } from 'react-redux';
import { movies } from '../reducers/movies';
class App extends Component {
  componentDidMount(){
    // const {store} = this.props
    // store.subscribe((state)=>{
    //   this.forceUpdate()
    //   console.log('updated')})
   
    this.props.dispatch(addMovies(data))
    console.log("Inside component update of App Comp ",this.props)
    
  }
 isFavourite=(movie)=>{
  //const {movies,search} = this.props.store.getState()
 
    const {favouriteMovies} =this.props.movies
   
    const index = favouriteMovies.indexOf(movie) 
    console.log(index)
    if(index !== -1){
      return true
    }
    return false
    
  }
  tabChangeHandler=(tabName)=>{
    console.log("tabChange")
    this.props.dispatch(tabChange(tabName))
  }

  render(){
    console.log("inside app",this.props.movies)
    const {movies} = this.props
    
   // console.log(store.getState());
   // const {movies,search} = store.getState()
   const {moviesList,favouriteMovies,showFavouriteTab}=movies
   const displayMovies = showFavouriteTab ? favouriteMovies : moviesList
   console.log("inside app render",movies)

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
         dispatch={this.props.dispatch}
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
function mapStateToProps(state){
  console.log("connectedAppComp :",state)
 return {movies : state.movies}
}
const connectedAppComp = connect(mapStateToProps)(App)
export default connectedAppComp;
