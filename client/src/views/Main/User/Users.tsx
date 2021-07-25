import './Users.less'
import customers from 'assets/customers.svg'
import zhihu from 'assets/zhihu.png';
import dong from 'assets/dong.png'
import jue from 'assets/jue.png'
import xd from 'assets/xd.png'
import hua from 'assets/hua.jpg'
import Head from "views/Main/Head/Head";
import {Layout} from "antd";
import React from "react";

const {Header, Footer, Content} = Layout;
export default function Users(props: any) {
    return <>
        <div className="user-wrap">
            <div className="user-container">
                <div className="user">
                    <img className="user-container" src={customers} alt=""/>
                    <div className="text">
                        <h4 className="title">
                            用户
                        </h4>
                        <p className="content">
                            LeanCloud 已成功服务超过 240,000 用户，其中不仅包括创新工场、CCTV、链家等商业机构，也包括知乎、丁香园等热门创业公司。
                        </p>
                    </div>

                </div>
                <ul className="user-card">
                    <li className="card-item">
                        <p className="card-des">
                            『LeanCloud 接口使用非常方便，推送速度也很快，在国内算是很棒的推送服务提供方。除此之外，每次跟 LeanCloud 反馈问题，沟通都很高效、畅通。』
                        </p>
                        <div className="user-detail">
                            <img src={zhihu} alt="" className="user-logo"/>
                            <div className="user-info">
                                <div className="user-name">
                                    李申申
                                </div>
                                <div className="user-nickname">
                                    知乎 CTO
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card-item">
                        <p className="card-des">
                            『LeanCloud 是一家有 Geek
                            精神的公司，他们提供的即时通讯服务高效稳定，懂球帝从创业初期至今一直在使用。他们提供的服务加速了我们开发的效率，使我们能专注于产品和业务。』
                        </p>
                        <div className="user-detail">
                            <img src={dong} alt="" className="user-logo"/>
                            <div className="user-info">
                                <div className="user-name">
                                    欧创坚
                                </div>
                                <div className="user-nickname">
                                    懂球帝技术合伙人
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card-item">
                        <p className="card-des">
                            『LeanCloud
                            作为一个后端服务化的云平台使用起来相当便捷，同时服务稳定速度快，技术支持反应迅速，对开发者来说既节约了开发成本且降低了技术门槛，特别适合像我们这样的独立开发者。』
                        </p>
                        <div className="user-detail">
                            <img src={jue} alt="" className="user-logo"/>
                            <div className="user-info">
                                <div className="user-name">
                                    鲍嵬伟
                                </div>
                                <div className="user-nickname">
                                    椰岛游戏创始人
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="card-item">
                        <p className="card-des">
                            『好的架构应该像乐高积木一样，将优秀健壮的模块组合起来，搭建出成功的项目。LeanCloud
                            在我看来就是这样一个完美的积木，成功支撑了我们「天天打波利」游戏中百万日活用户的聊天和消息系统。』
                        </p>
                        <div className="user-detail">
                            <img src={xd} alt="" className="user-logo"/>
                            <div className="user-info">
                                <div className="user-name">
                                    沈晟
                                </div>
                                <div className="user-nickname">
                                    心动 CTO
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

        <div className="app-wrap">
            <div className="app-container">
                <h4 className="title">240,000+ 用户的选择</h4>
                <p className="des">从个人开发者到大型商业应用，都在使用 LeanCloud 快速迭代开发</p>
                <ul className="app-group">
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                    <img src={hua} alt=""/>
                </ul>
            </div>
        </div>
    </>;
}

