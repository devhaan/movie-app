import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore , applyMiddleware } from 'redux';
import './index.css';
import App from './components/App.js';
import rootReducer from './reducers';
//import thunk from 'redux-thunk'

//<--- middleware--->
    //function logger (obj,next,action)<--- curring concept applied below --->
    //logger(obj)(next)(action)
// const logger = function({dispatch,getState}) {
//   return function(next) {
//     return function (action) {
//       //middleware call
//         console.log('ACTION_TYPE',action.type);
//         next(action);
//     }
//   }
// }
//OR

const logger =({dispatch,getState})=>(next)=>(action)=>{
  //middleware call
  if(typeof action !== 'function'){
          console.log('ACTION_TYPE',action.type);
          next(action);
  }
}

const thunk = ({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action === 'function'){
    console.log('ACTION_TYPE',action.type);
    action(dispatch);
    return;
  }
  next(action);
}
// }or we do npm i thunk and import it thunk is same as we declare

const store = createStore(rootReducer,applyMiddleware(thunk,logger));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
