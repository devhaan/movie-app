import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies ,setFavorites} from '../actions';
import {storeContext} from '../index';


class App extends React.Component {
  componentDidMount(){
//make api call
// dispatch action
const {store} = this.props;

store.subscribe(() => {
  //console.log('UPDATED');
  this.forceUpdate();
})

store.dispatch(addMovies(data));
//console.log("STATE",this.props.store.getState());
  }

  isMovieFavorite = (movie) =>{
  const {movies} = this.props.store.getState();
  const index = movies.favorites.indexOf(movie);
  if(index !== -1){
    return true; // found movie fav
  }
  return false;
}

onChangeTab =(value)=>{

  this.props.store.dispatch(setFavorites(value));
}


  render() {
  

    const {movies ,search } = this.props.store.getState();
    const {list ,favorites ,showFavorite} = movies;
    const displayMovies= showFavorite? favorites :list;
    
    console.log("STATE",this.props.store.getState());
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs justify-content-center">
            <div  className={`m-4 ${showFavorite ? 'btn btn-dark' : 'btn btn-danger'}`} onClick={() =>this.onChangeTab(false)}>Movies</div>
            <div className={` m-4 ${showFavorite ? 'btn btn-danger' : 'btn btn-dark'}`} onClick={() => this.onChangeTab(true)}>Favorites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie,index) => (
              <MovieCard movie={movie}
                         key ={`movies-${index}`}
                          dispatch={this.props.store.dispatch}
                          isFavorite={this.isMovieFavorite(movie)} />
            ))}
          </div>
          {displayMovies.length  === 0 ? <div class="alert alert-danger">
                                          <strong>Wait !!!   </strong>  No Movies Added to Favorites
                                        </div> : null}
        </div>
      </div>
    )
  }
}

class AppWrapper extends React.Component {
  render() {
    return (
  <storeContext.Consumer>
    {(store) =><App store={store}></App>}
  </storeContext.Consumer>
    );
  }
}
// function callback(state){
//   return{
//     movies: state.movies,
//     search:state.movies
//   }
// };

// const connectedAppComponent = connect(callback)(App);

export default AppWrapper