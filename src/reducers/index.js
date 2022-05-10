import { combineReducers } from 'redux';
import {ADD_MOVIES ,
        ADD_FAVORITES ,
        REMOVE_FAVORITES ,
        SET_SHOW_FAVORITES,
        ADD_SEARCH_RESULT,
        ADD_MOVIE_TO_LIST
} from '../actions';

const initialMOviesState={
    list:[],
    favorites:[],
    showFavorite:false
}
export  function movies (state = initialMOviesState ,action){
    // if (action.type === ADD_MOVIES){
    // return {
    //     ...state,
    //     list:action.movies
    // }
    // }

    switch(action.type)
    {
        case ADD_MOVIES:
        return {
                ...state,
                list:action.movies
            }
            case REMOVE_FAVORITES:
            const filteredArray =state.favorites.filter(
                            movie => movie.Title !== action.movie.Title
                                                       );
            return {
                ...state,
                favorites:filteredArray
                
            }
            case ADD_FAVORITES:
            return {
                ...state,
                favorites:[action.movie,...state.favorites]
                
            }
            case SET_SHOW_FAVORITES:
            return {
                ...state,
                showFavorite:action.value
                
            }
            case ADD_MOVIE_TO_LIST:
            //prevent from duplicate movies with sam data
            const filteredArray2 =state.list.filter(
                movie => movie.Title !== action.movie.Title
                                           );
                //console.log("filtered array",filteredArray2);
            return{
                ...state,
                list:[action.movie,...filteredArray2]
            }

            default:
               return state;


    }
}

const initialSearchState={
    results:{},
    showSearchResults : false,
}

export  function search(state = initialSearchState, action){
    switch(action.type)
    {
        case ADD_SEARCH_RESULT:
        return{
            ...state,
            results: action.movie,
            showSearchResults : true,
        }
        case ADD_MOVIE_TO_LIST:
        return{
            ...state,
            showSearchResults : false
        }

            default:
               return state;


    }
}

const initialRootReducerState={
    movies:initialMOviesState,
    search:initialSearchState
}

// export default function rootReducer(state = initialRootReducerState, action)
// {
//         return {
//             movies:movies(state.movies, action),
//             search:search(state.search, action),
//         }
// }

export default  combineReducers({
    // movies:movies,
    // search:search
    movies,
    search
})