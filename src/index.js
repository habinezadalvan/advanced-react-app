import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducers} from './reducers';
import App from './components/App';
import './styles/styles.css';
import './vanillajs/index';

const store = createStore(reducers);


ReactDom.render(
<Provider store={store}>
    <App/>
</Provider>
, document.querySelector('#root'));