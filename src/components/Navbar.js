import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import { addMoviesToList ,handleMoviesSearch } from '../actions';
import {storeContext} from '../index';

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
// isme mene bootstrap 5 use ki hai
    const {results:movie,showSearchResults} = this.props.search;
    return (
      
        <nav class="navbar  navbar-expand-sm bg-dark navbar-dark fixed-top">
  <div class="container-fluid">
  <a class="navbar-brand" href="http://localhost:3000/movie-app"><h1 class="h1">LOGO</h1></a>

    <div class="collapse navbar-collapse justify-content-center" >
      
      <form class="d-flex ">
        <input onChange={this.handleChange} class="form-control me-2" type="text" placeholder="Search" />
        <button onClick={this.handleSearch} class="btn btn-primary" type="button">Search</button>
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
      </form>
    </div>
  </div>
</nav>
     
    );
  }
}
  class NavbarWrapper extends React.Component  {
    render() {
      return (
        <storeContext.Consumer>
          {(store) =><Navbar dispatch={store.dispatch} search={this.props.search}></Navbar>}
        </storeContext.Consumer>
      )
    }
  }

export default NavbarWrapper;