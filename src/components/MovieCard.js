import React, { Component } from 'react'
import { addFavorites ,removeFavorites } from '../actions';

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

  render() {
      const {movie ,isFavorite} =this.props;
      //console.log("render is",isFavorite);
    return (
      <div className="movie-card">
          <div className="left">
            <img alt="movie-poster" src={movie.Poster} />
          </div>
          <div className="right">
              <div className="title">{movie.Title}</div>
              <div className="plot">{movie.Plot}</div>
              <div className="footer">
                  <div className="rating">{movie.imdbRating}</div>
                  {
                    isFavorite ? <button className="unfavourite-btn" onClick={this.handleUnFavoriteClick}>UnFavourite</button>
                  : <button className="favourite-btn" onClick={this.handleFavoriteClick}>Favourite</button>
                    
                  }
              </div>
          </div>
      </div>
    )
  }
}

export default MovieCard