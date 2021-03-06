import React, { Component } from 'react'
import { addFavorites ,removeFavorites,deleteMovie } from '../actions';

export class MovieCard extends Component {
handleFavoriteClick =() => {
  const {movie } = this.props;
  this.props.dispatch(addFavorites(movie));
 // console.log("click fav",(movie));
}

handleUnFavoriteClick =() => {
  const {movie } = this.props;
  this.props.dispatch(removeFavorites(movie));
  //console.log(" removed click fav",(movie));
 
}
handleDeleteClick = () =>{
  const {movie } = this.props;
  this.props.dispatch(deleteMovie(movie));
}

  render() {
      const {movie ,isFavorite} =this.props;
      //console.log("render is",isFavorite);
    return (
      <div className="movie-card">
          <div className="left">
            <img className="rounded" alt="movie-poster" src={movie.Poster} />
          </div>
          <div className="right">
              <div className="title">{movie.Title}</div>
              <div className="plot">{movie.Plot}</div>
              <div className="footer">
                  <div className="rating">{movie.imdbRating}</div>
                  {
                    isFavorite 
                    ? <button className="btn btn-danger" onClick={this.handleUnFavoriteClick}>UnFavourite</button>
                    : <button className="btn btn-primary" onClick={this.handleFavoriteClick}>Favourite</button>
                    
                  }
              </div>
              
          </div>
          <button className="btn btn-dark" onClick={this.handleDeleteClick}>X</button>
      </div>
    )
  }
}

export default MovieCard