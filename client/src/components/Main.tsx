import React, {Component} from 'react'
import {Carousel, Layout} from 'antd';
import banner1 from 'banner1.svg'
import banner2 from 'banner2.svg'
import './Main.less'
import {Button, Radio, Form, Card, Tabs} from 'antd';
import {RightOutlined, SettingOutlined} from '@ant-design/icons';
import {BrowserRouter as Router, Route, Link, BrowserRouter} from "react-router-dom"
import Play from '../views/play'
import {connect} from 'react-redux';
import price from "assets/price.svg";
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql'; // sql模式的包
import 'ace-builds/src-noconflict/mode-mysql';// mysql模式的包
import 'ace-builds/src-noconflict/theme-eclipse';// eclipse的主题样式
import 'ace-builds/src-noconflict/ext-language_tools';
import Head from "./Head";
const {Header, Footer, Content} = Layout;
const {TabPane} = Tabs;
const contentStyle = {
    height: '100%',
    // background: '#364d79',
};
const width11 = {width: '2px'}

interface Props {
    program: string,
    getProgramState: () => any,
    setHomeList: () => any,
}

const mapStateToProps = (state: any) => ({...state});

const mapDispatchToProps = (dispatch: any) => {
    return ({
        setProgramDetail: (lang: string) => dispatch({type: 'PROGRAMDETAIL', lang: lang}),
        setHomeList:()=>dispatch({type: 'HOMELIST'})
    })
};

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class Main extends Component<Props, any> {
    // componentDidMount() {
    //
    // }
    constructor(props:any) {
        super(props);
        props.setHomeList()
    }

    onChange = (currentSlide: number) => {
        console.log(currentSlide);
    }

    useForFree = () => {
        window.location.href = 'https://console.leancloud.cn/register'
    }

    findMore = () => {

    }
    private index = 0;


    render() {
        // @ts-ignore
        const {program, setProgramDetail, programDetail}: any[] = this.props
        return <>
            <Layout  className='layouts'>
                <Header>
                    <Head/>
                </Header>
                <Content>
                    <Carousel afterChange={this.onChange}>
                        <div className='banner1'>
                            <h3 style={contentStyle}>
                                <div className="banner-content">
                                    <h1><span className="font-logo">LeanCloud</span></h1>
                                    <p
                                        className="h3">领先的 Serverless 云服务</p><p className="h3">为产品开发提供强有力的后端支持</p>

                                    {/*<a*/}
                                    {/*href="https://console.leancloud.cn/register"*/}
                                    {/*className="button button-primary button-more h4"><i className="uk-icon-angle-right"></i></a>*/}
                                    <Button type="primary" shape="round" size='large'
                                            onClick={this.useForFree}>
                                        免费试用
                                        <RightOutlined/>
                                    </Button>

                                </div>
                            </h3>
                        </div>
                        <div className='banner2'>
                            <h3 style={contentStyle}>
                                <div className="banner-content">
                                    <h1><span className="font-logo">通用游戏解决方案（Beta）</span></h1>


                                    <p className="h3">实时对战，智能组队，玩家排行榜</p><p
                                    className="h3">轻松开发大型多人游戏</p>
                                    {/*<a href="/play/"*/}
                                    {/*                                className="button button-primary button-more h4">了解更多<i*/}
                                    {/*className="uk-icon-angle-right"></i></a>*/}
                                    {/*<Button type="primary" shape="round" icon={<RightOutlined />} size='large' onClick={this.findMore}>*/}
                                    {/*    了解更多*/}
                                    {/*</Button>*/}

                                    <Button type="primary" shape="round" icon={<RightOutlined/>} size='large'
                                            onClick={this.useForFree}>
                                        <Link to="/play">了解更多</Link>
                                    </Button>
                                    {/*<Route path='/play' component={Play}/>*/}
                                </div>
                            </h3>
                        </div>
                    </Carousel>
                    <section className='section-wrapper'>
                        <div className='section-contain'>
                            <div className="text">
                                <h3 className="title">只差程序员，如何把想法实现？</h3>
                                <p>后端系统的开发和维护不是一件简单的事。搭建团队、开发联调、迭代升级以及线上运维等工作，都需要长期投入。</p>
                                <p>让专业的团队来处理这些棘手的问题，用成熟的云服务来加速产品迭代过程，省时、省钱、省力。</p></div>
                            <div className='serverImg'>
                            </div>
                        </div>
                    </section>

                    <section className='server'>
                        <h3 className="title">一站式后端服务</h3>
                        <div className='server-item'>
                            <div>
                                <SettingOutlined />
                                <h4 className='title'>数据存储</h4>
                                <p>将业务数据直接存储到云端，真正按需使用。基础架构的运维与自动的弹性缩放，完全由服务提供者管理。让开发者专注产品体验，支撑业务快速启动和成长。</p>
                            </div>
                            <div>
                                <SettingOutlined/>
                                <h4 className='title'>数据存储</h4>
                                <p>将业务数据直接存储到云端，真正按需使用。基础架构的运维与自动的弹性缩放，完全由服务提供者管理。让开发者专注产品体验，支撑业务快速启动和成长。</p>
                            </div>
                            <div>
                                <SettingOutlined/>
                                <h4 className='title'>数据存储</h4>
                                <p>将业务数据直接存储到云端，真正按需使用。基础架构的运维与自动的弹性缩放，完全由服务提供者管理。让开发者专注产品体验，支撑业务快速启动和成长。</p>
                            </div>
                            <div>
                                <SettingOutlined/>
                                <h4 className='title'>数据存储</h4>
                                <p>将业务数据直接存储到云端，真正按需使用。基础架构的运维与自动的弹性缩放，完全由服务提供者管理。让开发者专注产品体验，支撑业务快速启动和成长。</p>
                            </div>
                        </div>
                    </section>
                    <section className='section-container'>
                        <div className='platformImg'></div>
                        <div className="text">
                            <h3 className='title'>全平台支持，上手简单</h3>
                            <p>全平台 SDK 支持，帮助各平台开发者快速集成，研发与业务高效联动，让产品迅速到达市场。</p>
                            <div className="iconGroup">
                                <i className="icon js"></i>
                                <i className="icon java"></i>
                                <i className="icon swift"></i>
                                <i className="icon python"></i>
                                <i className="icon objc"></i>
                                <i className="icon net"></i>
                            </div>
                        </div>
                    </section>
                    <section className='section'>
                        <section className='Aceditor'>

                            <div className="editor">
                                <ul className='program'>
                                    {/*{program}*/}
                                    {Object.keys(program).map((item: any, index: number) => (<li onClick={() => {
                                        setProgramDetail(item);
                                        this.index = index
                                    }} className={this.index === index ? 'active' : ''} key={index}>{item}</li>))}
                                </ul>
                                <AceEditor
                                    mode='mysql'
                                    theme="eclipse"
                                    name="app_code_editor"
                                    fontSize={14}
                                    showPrintMargin
                                    showGutter
                                    onChange={value => {
                                        console.log(value); // 输出代码编辑器内值改变后的值
                                    }}
                                    value={programDetail}
                                    wrapEnabled
                                    highlightActiveLine  //突出活动线
                                    enableSnippets  //启用代码段
                                    style={{width: '100%', height: 200}}
                                    setOptions={{
                                        enableBasicAutocompletion: true,   //启用基本自动完成功能
                                        enableLiveAutocompletion: true,   //启用实时自动完成功能 （比如：智能代码提示）
                                        enableSnippets: true,  //启用代码段
                                        showLineNumbers: true,
                                        tabSize: 2,
                                    }}
                                />
                            </div>
                            <ul className="editor-doc">
                                <li>数据模型与存储</li>
                                <li>查询</li>
                                <li>云引擎（Hook）</li>
                                <li>即时通讯</li>
                                <li>游戏对战</li>
                                <Button type="link">查看更多开发文档</Button>
                            </ul>
                        </section>
                    </section>
                    <section className="store">
                        <div className="storeImg"></div>
                        <div className="text"><h3 className="title">多节点覆盖，跨区域访问加速</h3>
                            <p>一套服务部署到多个节点，给不同地域用户带来同样迅捷的产品使用体验。</p></div>
                    </section>
                    <section className='global-section-contain'>
                        <div className="global-section">
                            <div>
                                <i className="icon map"></i>
                                <p className="small">支持企业客户按需部署需求，保证苹果终端设备推送的高到达率。</p>
                            </div>
                            <div><i className="icon shield"></i><p className="small">为企业客户提供跨区域备份、异地多活等更高层级的数据安全和服务可用性保障。</p>
                            </div>
                        </div>
                    </section>
                    <section className="price">
                        <div className="price-section">
                            <img className="price-img" src={price} />
                            <section className="text"><h3 className="title">灵活的价格与部署方案</h3>
                                <p>针对不同阶段和用途的产品，我们提供了灵活的计费方案，帮你在成本和服务之间达到平衡。</p></section>
                        </div>
                    </section>
                    <section className="versions">
                        <section className="versions-container">
                            <section><h3 className="title"><i className="icon dev"></i> <span>开发版</span></h3>
                                <p>针对开发阶段和个人项目的解决方案，功能丰富，可免费使用。</p></section>
                            <section><h3 className="title"><i className="icon pro"></i> <span>商用版</span></h3>
                                <p>高性能、高可用的商业应用解决方案，可以满足线上产品的要求。</p></section>
                            <section><h3 className="title"><i className="icon ent"></i> <span>企业版</span></h3>
                                <p>支持独立、私有、混合云等多种部署方案，提供定制化开发服务，满足多样化的产品需求。</p></section>
                        </section>
                    </section>
                </Content>
                <Footer>Footer</Footer>
            </Layout>

        </>;

    }
}
