import React from 'react';
import ReactDom from 'react-dom';
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import {reducers} from './reducers';
import App from './components/App';
import './styles/styles.css';
import './vanilla'

// const store = createStore(reducers, applyMiddleware(thunk));


ReactDom.render(
    <App/>

, document.querySelector('#root'));