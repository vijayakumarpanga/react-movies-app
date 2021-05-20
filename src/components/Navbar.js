import React,{Component} from 'react'
import { searchMovie } from '../actions/searchActions'
import {addMovie} from '../actions/actions'
import '../css/styles.css'
import { connect } from 'react-redux'

class Navbar extends Component{
    constructor (){
        super()
        this.state = {
            searchText : ''
        }
    }

    handleSearch=(event)=>{
        this.props.dispatch(searchMovie( this.state.searchText))
    }
    handleChange=(event)=>{
        this.setState({searchText : event.target.value},()=>{console.log(this.state.searchText)})
    }
    handleAddToMovies=()=>{
        this.props.dispatch(addMovie( this.props.search.result))
    }
    render(){
       const  {Title,Poster} = this.props.search.result
       const {showSearchResult}=this.props.search
        return(
            <div className="nav">
            <div className ="search-container">
                 <input type ="text" onChange ={ this.handleChange} ></input>
                 <button id="search-btn" onClick = {this.handleSearch}> Search</button>
                 {showSearchResult && ( <div className ="search-results">
                    <div className="movie-card">
                    <div className="left">
                         <img  src={Poster}alt = "Movie Poster"></img>
                     </div>
                    <div className = "right">
                         <div className="title">{Title}</div>
                         <div className="footer" >
                                <div>{}</div>
                                 <button className="favourite-btn"
                                  onClick = {this.handleAddToMovies}>Add To Movies</button>
                                  
                   
                         </div> 
                     </div>
                    </div>  
                    </div>
                     )
                }       
             </div>
             
             </div>
) 

}

}
function mapStateToProps({search}){
    console.log("connectedAppComp :",search)
   return {search}
  }
const connectedNavbarComp =connect(mapStateToProps)(Navbar)
export default connectedNavbarComp