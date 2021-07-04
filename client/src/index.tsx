import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './reducers'
import './utils/api'

import {AppContainer} from 'react-hot-loader';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Doc from "./views/doc";
//todo:react-hot-loader

const render = (Component: any) => {
    ReactDOM.render(
        <Provider store={store}>
            {/*<AppContainer>*/}
            <React.StrictMode>
                <Component/>
            </React.StrictMode>
            {/*</AppContainer>*/}
        </Provider>,
        document.getElementById('root')
    )
}
render(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
