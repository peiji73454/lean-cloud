import React, {useCallback, useState} from 'react'
import './ConsoleHead.less'
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {Route} from "react-router-dom";
import Console from "views/Console/Console";
import RestPassword from "views/Console/reset-password";
import Register from "views/Console/Register/Register";


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

function ConsoleHead() {
    const [menuName, setMenuName] = useState<string>('华北');
    const toggleMenu = useCallback(
        (item: any) => setMenuName(item.key),
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

    return (
        <div className="console">
            <header>
                <div className="site-dropdown">
                    <Dropdown arrow={true} overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link">
                            {menuName} <DownOutlined/>
                        </a>
                    </Dropdown>
                </div>
                <div className="main">
                    LeanCloud
                </div>
                <div className="right">
                    <div className="lang-dropdown">
                        <Dropdown overlay={menuLang} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <i className="iconfont iconfont-lang"/>
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
                </div>
            </header>
            <div className="console-container">
                <Route exact path="/Console" component={Console}/>
                <Route path="/console/reset-password" component={RestPassword}/>
                <Route path="/console/register" component={Register}/>
            </div>
        </div>
    )
}

export default ConsoleHead;
