import {connect} from "react-redux";
import React, {Component} from "react";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {Layout, Menu, Breadcrumb} from 'antd';
// import './DocHead.less'
import Head from "views/Main/Head/Head";
import Storage from "../storage";
import Pricing from "../Price/pricing";
import Users from "../Main/User/Users";
import Play from "../play";
import {IntlProvider} from "react-intl";
import {AutoComplete, Tabs, Row, Col, Button, Divider} from 'antd';
import {StickyContainer, Sticky} from 'react-sticky';
import DocHead from 'views/Docments/DocHead/DocHead'

import Download from './download'

const {Option} = AutoComplete;

const {Header, Content, Footer, Sider} = Layout;
const {TabPane} = Tabs;

function mapStateToProps(state: any) {
    const {docResults} = state
    return {docResults}
}


@(connect(mapStateToProps) as any)
export default class Doc extends Component<any, any> {

    tabRef: any

    callback = (key: string) => {
        console.log(key);
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
        const {docResults, handleSearch} = this.props
        // @ts-ignore
        return <>
            <div className="algolia-autocomplete">
                <AutoComplete style={{width: 200}} onSearch={handleSearch} placeholder="输入错误代码、关键字来搜索…">
                    {docResults.map((email: string) => (
                        <Option key={email} value={email}>
                            {email}
                        </Option>
                    ))}
                </AutoComplete>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="技术文档" key="1">
                        {/*<StickyContainer>*/}
                        <div ref={tabRef => this.tabRef = tabRef}>
                            <Tabs className='secTabs' defaultActiveKey="1" onTabClick={this.onTabClick}>
                                <TabPane tab="数据存储" key="1">
                                    <Divider>数据存储</Divider>
                                    <Row>
                                        <Col span={12}>
                                            <ul className='list-unstyled'>
                                                <li>
                                                    <span>开发指南</span>
                                                    <div>
                                                        <Button type="primary">SDK 安装</Button>
                                                        <Button type="primary">域名绑定指南</Button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>快速入门</span>
                                                    <div>
                                                        <Button type="primary">Objective-C</Button>
                                                        <Button type="primary">JavaScript</Button>
                                                    </div>
                                                    <Button type="link">存储服务总览</Button>
                                                </li>
                                                <li>
                                                    <span>数据存储开发指南</span>
                                                    <div>
                                                        <Button type="primary">Objective-C</Button>
                                                        <Button type="primary">JavaScript</Button>
                                                        <Button type="primary">Python</Button>
                                                        <Button type="primary">PHP</Button>
                                                        <Button type="primary">.NET</Button>
                                                        <Button type="primary">Java</Button>
                                                        <Button type="primary">Swift</Button>
                                                        <Button type="primary">Flutter</Button>
                                                        <Button type="primary">Go</Button>
                                                    </div>
                                                    <div><Button type="link">好友关系开发指南</Button></div>
                                                    <div><Button type="link">数据模型设计指南</Button></div>
                                                    <div><Button type="link">数据安全详解</Button></div>
                                                    <div><Button type="link">ACL 权限管理指南</Button></div>
                                                    <div><Button type="link">全文搜索开发指南</Button></div>
                                                </li>
                                                <li>
                                                    <span>REST</span>
                                                    <div><Button type="link">数据存储 REST API</Button></div>
                                                    <div><Button type="link">全文搜索 REST API</Button></div>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <ul className='list-unstyled'>
                                                <li>
                                                    <span>最佳实践</span>
                                                    <div><Button type="link">仅通过 appId 初始化 Android
                                                        应用</Button></div>
                                                    <div><Button type="link">在微信小程序与小游戏中使用
                                                        LeanCloud</Button></div>
                                                    <div><Button type="link">在 LeanCloud 中使用
                                                        GraphQL</Button></div>
                                                    <div><Button type="link">应用之间数据共享（Class 绑定）</Button>
                                                    </div>
                                                    <div><Button type="link">使用 LeanCloud 与 React Native
                                                        构建原生应用</Button></div>
                                                    <div><Button type="link">在 Unity 中使用 LeanCloud</Button>
                                                    </div>
                                                    <div><Button type="link">自定义邮件验证和重设密码页面</Button></div>
                                                    <div><Button type="link">查询对象、设置属性时如何使用点号（`.`）</Button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>相关阅读</span>

                                                    <div><Button type="link">常见问题</Button></div>
                                                    <div><Button type="link">错误码详解</Button></div>
                                                    <div><Button type="link">离线数据分析使用指南</Button></div>
                                                    <div><Button type="link">网络连通性诊断流程</Button></div>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="云引擎 + 数据库" key="2">
                                    <Divider>云引擎 + 数据库</Divider>
                                    <Row>
                                        <Col span={12}>
                                            <ul className='list-unstyled'>
                                                <li>
                                                    <span>开发指南</span>
                                                    <div><Button type="link">云引擎总览</Button></div>
                                                    <div><Button type="link">快速入门</Button></div>
                                                    <div><Button type="link">云引擎运行方案</Button></div>
                                                </li>
                                                <li>
                                                    <span>网站托管开发指南</span>
                                                    <div>
                                                        <Button type="primary">Python</Button>
                                                        <Button type="primary">Node.js</Button>
                                                        <Button type="primary">PHP</Button>
                                                        <Button type="primary">Java</Button>
                                                        <Button type="primary">.NET</Button>
                                                        <Button type="primary">Go</Button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>云函数开发指南</span>
                                                    <div>
                                                        <Button type="primary">Python</Button>
                                                        <Button type="primary">Node.js</Button>
                                                        <Button type="primary">PHP</Button>
                                                        <Button type="primary">Java</Button>
                                                        <Button type="primary">.NET</Button>
                                                        <Button type="primary">Go</Button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>REST</span>
                                                    <div><Button type="link">数据存储 REST API</Button></div>
                                                    <div><Button type="link">全文搜索 REST API</Button></div>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <ul className='list-unstyled'>
                                                <li>
                                                    <span>最佳实践</span>
                                                    <div><Button type="link">仅通过 appId 初始化 Android
                                                        应用</Button></div>
                                                    <div><Button type="link">在微信小程序与小游戏中使用
                                                        LeanCloud</Button></div>
                                                    <div><Button type="link">在 LeanCloud 中使用
                                                        GraphQL</Button></div>
                                                    <div><Button type="link">应用之间数据共享（Class 绑定）</Button>
                                                    </div>
                                                    <div><Button type="link">使用 LeanCloud 与 React Native
                                                        构建原生应用</Button></div>
                                                    <div><Button type="link">在 Unity 中使用 LeanCloud</Button>
                                                    </div>
                                                    <div><Button type="link">自定义邮件验证和重设密码页面</Button></div>
                                                    <div><Button type="link">查询对象、设置属性时如何使用点号（`.`）</Button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>相关阅读</span>

                                                    <div><Button type="link">常见问题</Button></div>
                                                    <div><Button type="link">错误码详解</Button></div>
                                                    <div><Button type="link">离线数据分析使用指南</Button></div>
                                                    <div><Button type="link">网络连通性诊断流程</Button></div>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="即时通讯" key="3">
                                    Content of Tab Pane 3
                                </TabPane>
                                <TabPane tab="消息推送" key="4">
                                    Content of Tab Pane 3
                                </TabPane>
                                <TabPane tab="短信" key="5">
                                    Content of Tab Pane 3
                                </TabPane>
                                <TabPane tab="游戏解决方案" key="6">
                                    Content of Tab Pane 3
                                </TabPane>
                                <TabPane tab="REST API" key="7">
                                    Content of Tab Pane 3
                                </TabPane>
                                <TabPane tab="其他" key="8">
                                    Content of Tab Pane 3
                                </TabPane>
                            </Tabs>
                        </div>

                        {/*</StickyContainer>*/}
                    </TabPane>
                    <TabPane tab="知识库" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="视频公开课" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
        </>
    }

}
