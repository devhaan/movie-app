import React, { Component } from 'react';
import { addMoviesToList ,handleMoviesSearch } from '../actions';

export class Navbar extends Component {
constructor(props){
super(props);
this.state = {
searchText :''
}
}
handleAddToMovies =(movie) => {
  this.props.dispatch(addMoviesToList(movie));
  this.setState({
    showSearchResults:false
  })
}
handleSearch = ()=>{
const {searchText} = this.state;
this.props.dispatch(handleMoviesSearch(searchText));
}
handleChange = (e)=>{
this.setState({
  searchText:e.target.value
})
}


  render() {

    const {results:movie,showSearchResults} = this.props.search;
    return (
      <div className="nav">
          <div className="search-container">
              <input onChange={this.handleChange}/>
              <button id="search-btn" onClick={this.handleSearch}>Search</button>

              {showSearchResults && <div className="search-results">
                <div className="search-result">
                  <img src={movie.Poster} alt="search-pic" />
                  <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={()=>this.handleAddToMovies(movie)}>
                  Add to Movies
                  </button>
                  </div>
                </div>
              </div>
              }
          </div>
      </div>
    );
  }
}

export default Navbar