import React ,{Component} from 'react'
import Navbar from './Navbar';
import {data} from '../data'
import MovieCard from './MovieCard';
import {addMovies} from '../actions/actions'
class App extends Component {
  componentDidMount(){
    const {store} = this.props
    store.subscribe(()=>{console.log('updated')})
    console.log(store.getState())
    store.dispatch(addMovies(data))
    console.log(store.getState())
    this.forceUpdate()
    console.log(store.getState())
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
        {movies.map((data,index)=> {return(<MovieCard  key={index} movie={data}></MovieCard>)})}
      </div>
     </div>
    </div>
  );
  }
}

export default App;
