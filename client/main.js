import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducer_root.js';
import  App from './components/app.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <App />
    </ Provider>,
    document.getElementById('root')
  );
});