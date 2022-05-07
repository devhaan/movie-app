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
      
        <nav class="navbar  navbar-expand-lg bg-dark navbar-dark fixed-top">
  <div class="container-fluid">
  <a class="navbar-brand" href="https://devhaan.github.io/movie-app/"><h1 class="h1">LOGO</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
      
      <form class="d-flex  form-inline my-2 my-lg-0">
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