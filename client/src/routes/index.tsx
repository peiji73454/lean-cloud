import React,{Component} from "react";
import {HashRouter,Switch,Route} from 'react-router-dom';
import Home from '../views/home'
import Storage from '../views/storage'
import Pricing from '../views/pricing'
import Customers from '../views/customers'

export default class RouteConfig extends Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={Home}></Route>
                    <Route path="/storage" component={Storage}></Route>
                    <Route path="/pricing" component={Pricing}></Route>
                    <Route path="/customers" component={Customers}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
