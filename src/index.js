import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Reducers from './reducers/index'
import thunk from 'redux-thunk';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStore(Reducers,applyMiddleware(thunk))}>
            <App/>
        </Provider>
    </React.StrictMode>,document.getElementById('root')
)