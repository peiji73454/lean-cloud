
import React, {Component, Fragment, useCallback, useState,useEffect} from 'react'
import './console.less'
import { Menu, Dropdown,Form, Input, Button, Radio } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
import {pwdLogin} from '../../utils/api'
import {connect} from "react-redux";
type LayoutType = Parameters<typeof Form>[0]['layout'];
const menuLang = (
    <Menu>
        <Menu.Item key="0">
            中文
        </Menu.Item>
        <Menu.Item key="1">
            英文
        </Menu.Item>
        <Menu.Divider />
    </Menu>
);
const menuHelp = (
    <Menu>
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="https://leanticket.cn/">
                帮助中心<i className="iconfont iconfont-external"/>
            </a>
        </Menu.Item>
        <Menu.Divider />

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
const email:any=<FormattedMessage id="email"/>
const emailMessage:any=<FormattedMessage id="emailMessage"/>
const password:any=<FormattedMessage id="password"/>
const passwordMessage:any=<FormattedMessage id="passwordMessage"/>
const $submit=<FormattedMessage id="submit"/>

 function Console (props:any){
    const {user,setUserInfo}=props
    const [menuName, setMenuName] = useState<string>('华北');
    const toggleMenu = useCallback(
        (item:any) => setMenuName(prevIsOpen => item.key),
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
            <Menu.Divider />
            <Menu.Item key="国际版">国际版</Menu.Item>
        </Menu>
    );

    const onFinish = async (values: any) => {
        const res:any=await pwdLogin(values)
        setUserInfo(res.data.userInfo)
        props.history.push({pathname:'/console/account/verify',query:{name:'jack',age:12}})
    };
    return     (
<div className="console">
    <header>
        <div className="site-dropdown">
            <Dropdown arrow={true} overlay={menu} trigger={['click']} >
                <a className="ant-dropdown-link">
                    {menuName} <DownOutlined />
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
                        <i className="iconfont iconfont-lang"></i>
                        <DownOutlined />
                    </a>
                </Dropdown>
            </div>
            <div className="help-dropdown">
                <Dropdown overlay={menuHelp} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        帮助 <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        </div>
    </header>
    <div className="console-container">
        <Form
            layout='vertical'
            onFinish={onFinish}
        >
            <Form.Item name='email'  label={email} rules={[{ required: true,message:emailMessage }]}>
                <Input/>
            </Form.Item>
            <Form.Item label={password} name='password' rules={[{ required: true,message:passwordMessage }]}>
                <Input.Password/>
            </Form.Item>
            <Form.Item>
                忘记密码，可以选择<Button type="link" onClick={()=>props.history.push('/console/reset-password')}>重置密码</Button>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" >{$submit}</Button>
            </Form.Item>
        </Form>
    </div>
</div>
    )
}
function mapStateToProps(state: any, ownProps: any) {
    const {user} = state
    return {
        user
    }
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        setUserInfo: (value:any) => dispatch({type: 'user',value})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Console);
