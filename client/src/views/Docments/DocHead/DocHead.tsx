import {connect} from "react-redux";
import React, {Component} from "react";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {Layout, Menu, Breadcrumb} from 'antd';
import './DocHead.less'
import Head from "views/Main/Head/Head";
import Storage from "../../storage";
import Pricing from "../../Price/pricing";
import Users from "../../Main/User/Users";
import Play from "../../play";
import {IntlProvider} from "react-intl";
import {AutoComplete, Tabs, Row, Col, Button, Divider} from 'antd';
import {StickyContainer, Sticky} from 'react-sticky';
import Doc from 'views/Docments/Doc'

import Download from '../download'
import Demo from 'views/Docments/Demo'
import Verify from "../../Console/Account/Verify/Verify";
import Alert from "../../Console/Account/Alert";

const {Option} = AutoComplete;

const {Header, Content, Footer, Sider} = Layout;
const {TabPane} = Tabs;

function mapStateToProps(state: any) {
    const {docQueryList, docResults} = state
    return {docQueryList, docResults}
}

function mapDispatchToProps(dispatch: any) {
    return {
        setDocList: () => dispatch({type: 'DOCLIST'}),
    }
}


@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class DocHead extends Component<any, any> {

    tabRef: any

    callback = (key: string) => {
        console.log(key);
    }
    toRouter = (islink: string, e: any) => {
        if (!islink) e.preventDefault()
    }

    onTabClick = (key: string, event: any) => {
        window.scrollTo(0, this.tabRef.querySelectorAll('.ant-tabs-tabpane')[key].getBoundingClientRect().top)
    }

    renderTabBar = (props: any, DefaultTabBar: React.ComponentType) => (
        <Sticky bottomOffset={80}>
            {({style}) => (
                <DefaultTabBar {...props} className="site-custom-tab-bar" style={{...style}}/>
            )}
        </Sticky>
    )

    render() {
        const {docQueryList, docResults, handleSearch} = this.props
        console.log(docQueryList)

        // @ts-ignore
        return <>
            <Layout className='doc'>
                <Header>
                    <ul className='head_ul'>
                        <div className='head_left'>
                            <NavLink to='/' className='LeanCloud'>LeanCloud</NavLink>

                            {
                                docQueryList.map((item: any, key: number) => <NavLink onClick={(e) => {
                                    this.toRouter(item.islink, e)
                                }} to={item.url} key={key}>{item.name}</NavLink>)
                            }
                            <div className='log'>
                                <NavLink to='/login' className='login'>登录</NavLink>
                                <NavLink to='/logout' className='logout'>注册</NavLink>
                            </div>
                        </div>

                    </ul>
                </Header>

                <Content>
                    <Route exact path="/docs" component={Doc}/>
                    <Route path="/docs/download" component={Download}/>
                    <Route path="/docs/demo" component={Demo}/>
                </Content>
                <Footer>footer</Footer>
            </Layout>

        </>
    }

}
