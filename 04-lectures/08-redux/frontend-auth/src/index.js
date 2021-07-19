import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


// REDUX CODE
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

const initialSnackState = {
  snacks: [
    {id: 1, name: "Cheerios"}
  ],
}

// Return value of reducer is going to become/replaces the new global state
const snackReducer = (state = initialSnackState, action) => {
  
  switch (action.type) {
    case "SET_SNACKS_PLEASE":
      return {
        ...state,
        snacks: action.payload
      }
    default:
      return state
  }

}


const initialUserState = {
  id: 0,
  token: "",
  username: "",
  pantries: [],
}

const userReducer = (state = initialUserState, action) => {
  
  switch (action.type) {
    default:
      return state
  }

}

// CombineReducers take in a POJO as an argument
  // The keys of that POJO become the highest keys of global state
  // The values of that POJO are the state objects being returned by the reducer
let rootReducer = combineReducers({
  snackInfo: snackReducer,
  userInfo: userReducer,
})

let store = createStore(
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
