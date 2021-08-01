import React, {Component} from "react";
import {Switch, Route, BrowserRouter, HashRouter, Redirect} from 'react-router-dom';
import Head from "views/Main/Head/Head";
import ConsoleHead from "views/Console/ConsoleHead/ConsoleHead";
import DocHead from "views/Docments/DocHead/DocHead";
import Account from "views/Console/Account/Account";
import Forum from "views/Forum";

// const requireAuth = (nextState, replace) => {
//     if (!getToken('accessToken')) {
//         // Redirect to Home page if not an Admin
//         replace({ pathname: '/' })
//     }
// }
export default class RouteConfig extends Component {
    render() {
        console.log(this.props, 'RouteConfig')
        const {isLogin}: any = this.props;
        return (
            <BrowserRouter basename={'/lean-cloud'}>
                <Switch>
                    {/*<Route exact path="/" render={() => (*/}
                    {/*    isLogin ? (*/}
                    {/*        <Redirect to="/lean-cloud/console/Account/"/>*/}
                    {/*    ) : (*/}
                    {/*        <Head />*/}
                    {/*    )*/}
                    {/*)}/>*/}
                    <Route path="/docs/" component={DocHead}/>
                    <Route path="/console/Account/" component={Account}/>
                    <Route  path="/console" component={ConsoleHead}/>
                    <Route  path="/forum" component={Forum}/>
                    <Route  path="/" component={Head}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

// class PrivateRoute extends Component<any,any> {
//
//     render() {
//         const {path, component }:any = this.props;
//         if (getToken('accessToken')){                                              //是已经登录的情况
//             return <Route path={path} component={component}/>
//         } else {                                                  //没有登录的情况，提醒用户登录
//             return <Redirect to={{pathname:"/Console", state:{redirect:path}}}/>;
//         }
//     }
// }
