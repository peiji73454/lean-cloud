import RouteConfig from "./routes";
import {useEffect} from "react";
import Head from './components/Head'
//todo: src路径不对
import React, {Component} from 'react'
import I18n from 'i18n/i18n';
import {AppContainer} from 'react-hot-loader';
import {IntlProvider} from "react-intl";
import Main from "./components/Main";
import Play from "./views/play";
import './App.less';
import {Layout, Button} from 'antd';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Home from "./views/home";
import Storage from "./views/storage";
import Pricing from "./views/pricing";
import Customers from "./views/customers";
import Console from "./views/login/console";
import Doc from "./views/doc";
import {connect} from "react-redux";
import {log} from "util";
import Download from "./views/download";
import Demo from "./views/Demo";
import messages from './i18n/i18n'


const mapStateToProps = (state: any) => ({
    lang:state.lang
});

@(connect(mapStateToProps) as any)
class App extends Component<any, any> {

    render() {
        const {lang}=this.props
        return (
            <IntlProvider locale={lang} messages={(messages as any)[lang]}>
               <RouteConfig/>
            </IntlProvider>
        )
    }
}

export default App;
