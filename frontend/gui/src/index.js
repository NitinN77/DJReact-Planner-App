import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducers/auth';
import { Provider } from 'react-redux';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducer, composeEnhances(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
document.getElementById('root')
);