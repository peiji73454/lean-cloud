import {Layout} from "antd";
import DocHead from "components/DocHead";
import SubHead from "components/SubHead";
import React from "react";
import'./Demo.less'
import {GithubOutlined,StepForwardOutlined} from '@ant-design/icons'
import { Button } from 'antd';
const {Header, Content, Footer, Sider} = Layout;
export default function Demo(){
    return <>
        <Layout className='doc'>
            <Header>
                <DocHead/>
                <SubHead/>
            </Header>
            <Content>
                <div className='doc-content'>
                    <div className='doc-home-title'>
                        <h1 className="title">LeanCloud Demos</h1>
                        <p>使用 LeanCloud 搭建的各类应用演示</p>
                    </div>
                    <div className="demo-button-group">
                        <Button>所有平台</Button>
                        <Button>ios</Button>
                        <Button>Android</Button>
                        <Button>Python</Button>
                        <Button>Web</Button>
                        <Button>Nodejs</Button>
                        <Button>PHP</Button>
                        <Button>微信小程序</Button>
                        <Button>React Native</Button>
                        <Button>Flutter</Button>
                        <Button>TypeScript</Button>
                    </div>
                    <ul className="section-demo">
                        <li className="section-item">
                            <div className="title">
                                <h2>Chat</h2>
                                <span>iOS</span>
                            </div>
                            <p className="description">一个用 Swift 搭建的聊天应用。</p>
                            <div className="foot">
                                <Button>详细</Button>
                            </div>
                        </li>
                        <li className="section-item">
                            <div className="title">
                                <h2>数据存储入门</h2>
                                <span>iOS</span>
                            </div>
                            <p className="description">本教程模拟商品发布的场景，讲解 LeanCloud 数据存储的核心用法。</p>
                            <div className="foot">
                                <Button>详细</Button>
                            </div>
                        </li>
                        <li className="section-item">
                            <div className="title">
                                <h2>LeanStorage Demo</h2>
                                <span>iOS</span>
                            </div>
                            <p className="description">展示了 LeanCloud 数据存储 SDK 的各种基础和高级用法，帮助开发者尽快上手 SDK。</p>
                            <div className="foot">
                                <Button>详细</Button>
                            </div>
                        </li>
                        <li className="section-item">
                            <div className="title">
                                <h2>SNS 第三方登录</h2>
                                <span>iOS</span>
                            </div>
                            <p className="description">iOS 第三方登录示例 Demo</p>
                            <div className="foot">
                                <Button>详细</Button>
                            </div>
                        </li>
                        <li className="section-item">
                            <div className="title">
                                <h2>LeanCloud 短信</h2>
                                <span>iOS</span>
                            </div>
                            <p className="description">LeanCloud 开源的短信演示程序，功能包括发送简单的文本验证码、按照自定义模版发送复杂的文本短信、发送语音验证码、使用手机号进行账号注册登录和重置密码等。</p>
                            <div className="foot">
                                <Button>详细</Button>
                            </div>
                        </li>
                        <li className="section-item">
                            <div className="title">
                                <h2>数据存储入门</h2>
                                <span>iOS</span>
                            </div>
                            <p className="description">本教程模拟商品发布的场景，讲解 LeanCloud 数据存储的核心用法。</p>
                            <div className="foot">
                                <Button>详细</Button>
                            </div>
                        </li>
                    </ul>
                </div>
            </Content>
        </Layout>
    </>;
}
