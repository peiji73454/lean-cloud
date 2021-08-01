import {Layout, Menu, Avatar, Dropdown} from 'antd';
import {
    DownOutlined,
} from '@ant-design/icons';
import {connect} from "react-redux";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Profile from "./Profiles";
import Email from "./Email";
import Tokens from "./Tokens";
import Security from "./Security";
import Verify from "./Verify/Verify";
import Beian from "./Beian";
import Ips from "./Ips";
import Teams from "./Teams";
import DeleteAccount from "./Delete-Account";
import Finance from "./Finance/Finance";
import Alert from "./Alert";
import Billing from "./Billing";
import Invoice from "./Invoice";
import React, {useCallback, useState} from "react";
import './Account.less'
import Error from "../../Error/Error";
import DocHead from "../../Docments/DocHead/DocHead";
import ConsoleHead from "../ConsoleHead/ConsoleHead";
import Head from "../../Main/Head/Head";
const RedirectAs404 = ({location}:any) => <Redirect to={Object.assign({}, location, { state: { is404: true } })} />
const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;
const menuLang = (
    <Menu>
        <Menu.Item key="0">
            中文
        </Menu.Item>
        <Menu.Item key="1">
            英文
        </Menu.Item>
        <Menu.Divider/>
    </Menu>
);
const menuHelp = (
    <Menu>
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="https://leanticket.cn/">
                帮助中心<i className="iconfont iconfont-external"/>
            </a>
        </Menu.Item>
        <Menu.Divider/>

        <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="https://leanticket.cn/">
                文档<i className="iconfont iconfont-external"/>
            </a>
        </Menu.Item>
        <Menu.Item key="2">
            <a target="_blank" rel="noopener noreferrer" href="https://leanticket.cn/">
                论坛<i className="iconfont iconfont-external"/>
            </a>
        </Menu.Item>
        <Menu.Item key="3">
            <a target="_blank" rel="noopener noreferrer" href="https://leanticket.cn/">
                工单<i className="iconfont iconfont-external"/>
            </a>
        </Menu.Item>
    </Menu>
);



function Account(props: any) {
    const handleClick = (e:any) => {
        props.history.push(e.key)
    };
    const [menuName, setMenuName] = useState<string>('华北');
    const toggleMenu = useCallback(
        (item: any) => setMenuName(prevIsOpen => item.key),
        [],
    );
    const menu = (
        <Menu onClick={toggleMenu}>
            <Menu.Item key="华北">
                华北
            </Menu.Item>
            <Menu.Item key="华东">
                华东
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="国际版">国际版</Menu.Item>
        </Menu>
    );
    const {collapsed, ownProps, onCollapse} = props;
    return (
        <div className={"AccountHead"}>
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" onClick={()=>props.history.push('/')}>
                        LeanCloud
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['/console/account/profile']} mode="inline"  onClick={handleClick}>
                        <Menu.ItemGroup title="账号设置">
                            <Menu.Item key="/console/account/profile">
                                开发者信息
                            </Menu.Item>
                            <Menu.Item key="/console/account/email">
                                Email
                            </Menu.Item>
                            <Menu.Item key="/console/account/tokens">
                                Access Token
                            </Menu.Item>
                            <Menu.Item key="/console/account/security">
                                账号安全
                            </Menu.Item>
                            <Menu.Item key="/console/account/verify">
                                实名认证
                            </Menu.Item>
                            <Menu.Item key="/console/account/beian">
                                备案
                            </Menu.Item>
                            <Menu.Item key="/console/account/ips">
                                独立IP
                            </Menu.Item>
                            <Menu.Item key="/console/account/teams">
                                团队管理
                            </Menu.Item>
                            <Menu.Item key="/console/account/delete-account">
                                注销账号
                            </Menu.Item>
                        </Menu.ItemGroup>

                        <Menu.ItemGroup title="财务">
                            <Menu.Item key="/console/account/finance">
                                概览
                            </Menu.Item>
                            <Menu.Item key="/console/account/alert">
                                告警
                            </Menu.Item>
                            <Menu.Item key="/console/account/billing">
                                账号
                            </Menu.Item>
                            <Menu.Item key="/console/account/invoice">
                                发票
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background">
                        <div className="accountHeadLeft">
                            <div className="site-dropdown">
                                <Dropdown arrow={true} overlay={menu} trigger={['click']}>
                                    <a className="ant-dropdown-link">
                                        {menuName} <DownOutlined/>
                                    </a>
                                </Dropdown>
                            </div>
                            <div className="site-dropdown">

                                <Dropdown arrow={true} overlay={menu} trigger={['click']}>
                                    <a className="ant-dropdown-link">
                                        {menuName} <DownOutlined/>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="accountHeadRight">
                            <div className="lang-dropdown">
                                <Dropdown overlay={menuLang} trigger={['click']}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        <i className="iconfont iconfont-lang"></i>
                                        <DownOutlined/>
                                    </a>
                                </Dropdown>
                            </div>
                            <div className="help-dropdown">
                                <Dropdown overlay={menuHelp} trigger={['click']}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        帮助 <DownOutlined/>
                                    </a>
                                </Dropdown>
                            </div>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        </div>
                    </Header>
                    <Content style={{margin: '0 16px'}}>

                        <Route render={({location}:any) => (
                            location.state && location.state.is404
                                ? <Error {...props}/>
                                :   <Switch>
                                    <Route path={"/console/Account/profile"} component={Profile}/>
                                    <Route path={"/console/Account/email"} component={Email}/>
                                    <Route path={"/console/Account/tokens"} component={Tokens}/>
                                    <Route path={"/console/Account/security"} component={Security}/>
                                    <Route path={"/console/Account/verify"} component={Verify}/>
                                    <Route path={"/console/Account/beian"} component={Beian}/>
                                    <Route path={"/console/Account/ips"} component={Ips}/>
                                    <Route path={"/console/Account/teams"} component={Teams}/>
                                    <Route path={"/console/Account/delete-account"} component={DeleteAccount}/>
                                    <Route path={"/console/Account/finance"} component={Finance}/>
                                    <Route path={"/console/Account/alert"} component={Alert}/>
                                    <Route path={"/console/Account/billing"} component={Billing}/>
                                    <Route path={"/console/Account/invoice"} component={Invoice}/>
                                    <Route component={RedirectAs404} />
                                </Switch>
                        )}/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

function mapStateToProps(state: any, ownProps: any) {
    const {collapsed} = state
    return {
        collapsed,
        ownProps
    }
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        onCollapse: (collapsed: any) => dispatch({type: 'onCollapse', value: collapsed})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
