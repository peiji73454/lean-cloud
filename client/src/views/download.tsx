import {Layout} from "antd";
import DocHead from "components/DocHead";
import SubHead from "components/SubHead";
import React from "react";
import'./download.less'
import {GithubOutlined,StepForwardOutlined} from '@ant-design/icons'
import { Button } from 'antd';
const {Header, Content, Footer, Sider} = Layout;
export default function Download(){
    return <>
        <Layout className='doc'>
            <Header>
                <DocHead/>
                <SubHead/>
            </Header>
            <Content>
                <div className='doc-content'>
                    <div className='doc-home-title'>
                        <h1 className="title">LeanCloud SDK 下载</h1>
                        <p>SDK 及相关资源下载</p>
                    </div>
                    <ul className="section">
                        <li className="section-item">
                            <h2>iOS</h2>
                            <p>Objective-C SDK 包含数据存储、即时通讯与推送、社交、用户反馈、全文搜索等模块。Swift SDK 包含数据存储、即时通讯与推送等功能。</p>
                            <div className="foot">
                                <Button type="primary">Objective-C SDK</Button>
                                <GithubOutlined />
                                <Button type="primary">Swift SDK</Button>
                                <GithubOutlined />
                                <Button type="link">用户反馈组件</Button>
                                <GithubOutlined />
                            </div>
                        </li>
                        <li className="section-item">
                            <h2>JavaScript</h2>
                            <p>Objective-C SDK 包含数据存储、即时通讯与推送、社交、用户反馈、全文搜索等模块。Swift SDK 包含数据存储、即时通讯与推送等功能。</p>
                            <div className="foot">
                                <Button type="primary">Objective-C SDK</Button>
                                <GithubOutlined />
                                <Button type="primary">Swift SDK</Button>
                                <GithubOutlined />
                                <Button type="link">用户反馈组件</Button>
                                <GithubOutlined />
                            </div>
                        </li>
                        <li className="section-item">
                            <h2>Java</h2>
                            <p>Objective-C SDK 包含数据存储、即时通讯与推送、社交、用户反馈、全文搜索等模块。Swift SDK 包含数据存储、即时通讯与推送等功能。</p>
                            <div className="foot">
                                <Button type="primary">Objective-C SDK</Button>
                                <GithubOutlined />
                                <Button type="primary">Swift SDK</Button>
                                <GithubOutlined />
                                <Button type="link">用户反馈组件</Button>
                                <GithubOutlined />
                            </div>
                        </li>
                        <li className="section-item">
                            <h2>.NET（新版）</h2>
                            <p>Objective-C SDK 包含数据存储、即时通讯与推送、社交、用户反馈、全文搜索等模块。Swift SDK 包含数据存储、即时通讯与推送等功能。</p>
                            <div className="foot">
                                <Button type="primary">Objective-C SDK</Button>
                                <GithubOutlined />
                                <Button type="primary">Swift SDK</Button>
                                <GithubOutlined />
                                <Button type="link">用户反馈组件</Button>
                                <GithubOutlined />
                            </div>
                        </li>
                        <li className="section-item">
                            <h2>Flutter</h2>
                            <p>Objective-C SDK 包含数据存储、即时通讯与推送、社交、用户反馈、全文搜索等模块。Swift SDK 包含数据存储、即时通讯与推送等功能。</p>
                            <div className="foot">
                                <Button type="primary">Objective-C SDK</Button>
                                <GithubOutlined />
                                <Button type="primary">Swift SDK</Button>
                                <GithubOutlined />
                                <Button type="link">用户反馈组件</Button>
                                <GithubOutlined />
                            </div>
                        </li>
                        <li className="section-item">
                            <h2>其他 SDK（开放源码）</h2>
                            <p>Objective-C SDK 包含数据存储、即时通讯与推送、社交、用户反馈、全文搜索等模块。Swift SDK 包含数据存储、即时通讯与推送等功能。</p>
                            <div className="foot">
                                <Button type="primary">Objective-C SDK</Button>
                                <GithubOutlined />
                                <Button type="primary">Swift SDK</Button>
                                <GithubOutlined />
                                <Button type="link">用户反馈组件</Button>
                                <GithubOutlined />
                            </div>
                        </li>
                    </ul>


                </div>
            </Content>
        </Layout>
    </>;
}
