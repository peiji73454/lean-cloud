import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './reducers'
import {AppContainer} from 'react-hot-loader';
//todo:react-hot-loader
ReactDOM.render(
    <Provider store={store}>

        {/*<AppContainer>*/}
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        {/*</AppContainer>*/}
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
