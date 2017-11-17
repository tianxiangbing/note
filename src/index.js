import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Routes from './Routes.js';
import store from './Store.js';
let location = window.location;
let ishostname = location.hostname.indexOf('localhost') > -1 || location.hostname.indexOf('192.168') > -1 || location.hostname.indexOf('lovewebgames') > -1
if (!ishostname) {
    location.href = "http://note.lovewebgames.com/";
}

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
);
