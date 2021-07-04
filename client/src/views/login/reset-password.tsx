
import React, {Component, Fragment, useCallback, useState,useEffect} from 'react'
import './console.less'
import { Menu, Dropdown,Form, Input, Button, Image } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
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
const $resetPassword:any=<FormattedMessage id="resetPassword"/>
const backToLogin:any=<FormattedMessage id="backToLogin"/>
const captcha:any=<FormattedMessage id="captcha"/>
const submit=<FormattedMessage id="submit"/>



export default function RestPassword (props:any){
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
    const [form] = Form.useForm();
    const resetPassword=()=>{
        form.resetFields()
    }
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
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
                    form={form}
                    onFinish={onFinish}
                >
                    <Form.Item name='email'  label={email} rules={[{ required: true,message:emailMessage }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={captcha} name='captcha'>
                        <Input style={{width:'70%',paddingTop:0,marginRight:'20px'}}/>
                        <div style={{verticalAlign:'middle',display:'inline-block'}}>
                            <Image  src="https://cn-n1-console-api.leancloud.cn/1.1/captcha"/>
                        </div>

                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" onClick={()=>resetPassword()}>{$resetPassword}</Button>
                        <Button type="link" onClick={()=>props.history.push('/console')}>{backToLogin}</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
