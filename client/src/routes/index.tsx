import React,{Component} from "react";
import {Switch,Route,BrowserRouter,HashRouter,Redirect} from 'react-router-dom';
import Storage from 'views/storage'
import Pricing from 'views/pricing'
import Customers from 'views/customers'
import Play from 'views/play'
import Main from "components/Main";
import Console from "views/login/console";
import Doc from "views/doc";
import Download from "views/download";
import Demo from "views/Demo";
import RestPassword from "views/login/reset-password";
import Account from "views/login/Account";
import {getToken,setToken,removeToken} from "utils/cookie";

// const requireAuth = (nextState, replace) => {
//     if (!getToken('accessToken')) {
//         // Redirect to Home page if not an Admin
//         replace({ pathname: '/' })
//     }
// }

export default class RouteConfig extends Component{
    render(){
        console.log(this.props)
        const { isLogin}:any = this.props;
        return (
            <BrowserRouter basename={'/lean-cloud'}>
                <Switch>
                    <Route  exact path="/" component={Main}/>
                    <Route path="/Storage" component={Storage}/>
                    <Route path="/pricing" component={Pricing}/>
                    <Route path="/customers" component={Customers}/>
                    <Route exact path="/console" component={Console}/>
                    <Route path="/console/reset-password" component={RestPassword}/>
                    {/*<PrivateRoute  path="/console/account/verify" component={Account}/>*/}

                    <Route path={"/console/account/verify"} component={Account} />
                    <Route exact path="/docs" component={Doc}/>
                    <Route exact path="/download" component={Download}/>
                    <Route path="/docs/demo" component={Demo}/>
                    <Route path="/pricing" component={Pricing}/>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/play" component={Play}/>
                </Switch>

            </BrowserRouter>
        )
    }
}

// class PrivateRoute extends Component<any,any> {
//
//     render() {
//         const {path, component }:any = this.props;
//         if (getToken('accessToken')){                                              //是已经登录的情况
//             return <Route path={path} component={component}/>
//         } else {                                                  //没有登录的情况，提醒用户登录
//             return <Redirect to={{pathname:"/login", state:{redirect:path}}}/>;
//         }
//     }
// }
