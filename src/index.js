import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
//1. Import react-context-global-store (https://github.com/eleme/react-context-global-store)
import { createStore, StoreProvider } from 'react-context-global-store';
import * as serviceWorker from './serviceWorker';


//2. create and initialize your store, has to be an object, can also be empty if you don't need initial values
const store = createStore({
  counter: { // The first level of the sub-store must be an object
    value:0
  }
});

//3. Wrap your app in the Store provider
ReactDOM.render(<StoreProvider store={store}>
                  <App />
                </StoreProvider>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
