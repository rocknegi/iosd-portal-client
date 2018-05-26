import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import {Provider} from 'react-redux' ;
import {createStore , applyMiddleware} from 'redux' ;

import rootReducer from './reducers' ;

import App from './components/App';

let createStoreWithMiddleware = applyMiddleware()(createStore) ;


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App />
    </Provider>

    , document.getElementById('root'));
