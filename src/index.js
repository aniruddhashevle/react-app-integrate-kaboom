import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createReduxStore from './redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './utils/libraries/canvasjs.min';
import './index.scss';

ReactDOM.render(
    <Provider store={createReduxStore()}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
