//https://cn.redux.js.org/docs/basics/UsageWithReact.html

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import todoApp from "./reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/App";

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
