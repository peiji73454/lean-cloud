import React, {useState, useRef, useEffect} from 'react'
import {Layout, Button} from 'antd';
import './pricing.less';
import {Tabs, Slider, InputNumber, Row, Col} from 'antd';
import Head from "views/Main/Head/Head";

const {Header, Footer, Content} = Layout;
const {TabPane} = Tabs;
let flag = false

export default function Pricing(props: any) {
    const [key, setKey] = useState('1');
    const [isHiddenPanel1, hidePanel1] = useState(false);
    const [isHiddenPanel2, hidePanel2] = useState(false);
    const [isHiddenPanel3, hidePanel3] = useState(false);
    const [isHiddenPanel4, hidePanel4] = useState(false);
    const [isHiddenPanel5, hidePanel5] = useState(false);
    const [isHiddenPanel6, hidePanel6] = useState(false);
    const [isHiddenPanel7, hidePanel7] = useState(false);
    const [isHiddenPanel8, hidePanel8] = useState(false);
    const [inputValue, changeInputValue] = useState(0)
    const couterRef: any = useRef();


    function setInputValue(e: any) {
        e.stopPropagation()
        if (flag) {
            let val = e.pageX - couterRef.current.offsetLeft - 10
            if (e.pageX - couterRef.current.offsetLeft < 0) {
                val = 0
            }
            if (e.pageX - couterRef.current.offsetLeft > couterRef.current.clientWidth) {
                val = couterRef.current.clientWidth - 10
            }
            changeInputValue(val)
        }
    }

    function setMouseDown() {
        flag = true
        console.log(flag, 'down')
    }

    function setMouseUp() {
        flag = false
        console.log(flag, '[up]')
    }

    function setBarMouseDown(e: any) {
        e.stopPropagation()
        let val = e.pageX - couterRef.current.offsetLeft - 10
        if (e.pageX - couterRef.current.offsetLeft < 0) {
            val = 0
        }
        if (e.pageX - couterRef.current.offsetLeft > couterRef.current.clientWidth) {
            val = couterRef.current.clientWidth - 10
        }
        changeInputValue(val)
    }

    function setBarMouseUp() {
        flag = false
    }


    return <>
            <div style={{background:"#ffffff"}}>
                <section className="price">
                    <div className="price__describe">
                        <h2 className="title">价格</h2>
                        <p>无论是个人项目还是大型商业应用，您都可以找到理想的价格方案。</p>
                        <Button className="trial" size='large' type="primary">立即试用</Button>
                    </div>
                    <div className="price__content">
                        <Tabs defaultActiveKey={key} type="card" centered onChange={setKey}>
                            <TabPane tab="价格方案" key="1">
                                <div>
                                    <p className='global-site'>* 国际版独立运营，价格请访问 <a href="#">国际版网站</a>。</p>
                                    <p className='global-site'>* 商用版应用最低消费 30 元 / 天。</p>
                                </div>
                                <ul className='price-panel'>
                                    <li className={`${isHiddenPanel1 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel1(previous => !previous)
                                        }}>数据存储 </h4>
                                        <div className="accordion-content">
                                            <h5 className="accordion-title">结构化数据存储</h5>
                                            <table className="table-view">
                                                <thead>
                                                <tr>
                                                    <th></th>
                                                    <th><p className="title">开发版</p></th>
                                                    <th>
                                                        <p className="title">商用版</p>
                                                        <p className="description">按使用量计费</p>
                                                    </th>
                                                    <th>
                                                        <p className="title">企业版</p>
                                                        <p className="description">固定价格，需商务洽谈</p>
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th><p className="title">API 请求</p></th>
                                                    <th>3 万次 / 天</th>
                                                    <th>1.0 元 / 万次</th>
                                                    <th>商务洽谈</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">并发线程</p></th>
                                                    <th>3 个</th>
                                                    <th>最大 200 个</th>
                                                    <th>商务洽谈</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">自动备份</p></th>
                                                    <th>不支持</th>
                                                    <th>支持</th>
                                                    <th>支持</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">大数据分析</p></th>
                                                    <th>不支持</th>
                                                    <th>支持</th>
                                                    <th>支持</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">全文搜索</p></th>
                                                    <th>1 万次搜索查询请求 / 天</th>
                                                    <th>
                                                        <p>2.5 元 / 万次请求</p>
                                                        <p>索引空间 0.8 元 / GB / 天</p>
                                                    </th>
                                                    <th>商务洽谈</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">LiveQuery</p></th>
                                                    <th>
                                                        <p>最大订阅数 100 次 / 天</p>
                                                        <p>最大下发消息 5000 条 / 天</p>
                                                    </th>
                                                    <th>
                                                        <p>每千次订阅 4.0 元 / 天</p>
                                                        <p>每万条消息 2.0 元 / 天</p>
                                                    </th>
                                                    <th>商务洽谈</th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">数据存储空间</p></th>
                                                    <th>
                                                        <p>免费 1 GB</p>
                                                        <p className='description'>超出部分 0.10 元 / GB / 天</p>
                                                    </th>
                                                    <th>0.10 元 / GB / 天</th>
                                                    <th>商务洽谈</th>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="accordion-content">
                                            <h4 className='accordion-title'>文件存储（空间） </h4>
                                            <p>免费赠送 10 GB 存储空间，超出部分每月 0.16 元 / GB （文件存储空间和流量均不计入商用版最低消费）</p>
                                        </div>
                                        <div className="accordion-content">
                                            <h4 className='accordion-title'>文件存储（流量） </h4>
                                            <p>上传流量不计费</p>
                                            <table className="table-view">
                                                <thead>
                                                <tr>
                                                    <th></th>
                                                    <th><p className="title">国内访问</p></th>
                                                    <th><p className="title">海外访问</p></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th><p className="title">HTTP 流量</p></th>
                                                    <th>
                                                        <p className="title">免费 500 MB / 天</p>
                                                        <p className="description">超出部分 0.30 元 / GB</p>
                                                    </th>
                                                    <th>
                                                        <p className="title">无免费流量</p>
                                                        <p className="description">0.40 元 / GB</p>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th><p className="title">HTTP 流量</p></th>
                                                    <th>
                                                        <p className="title">无免费流量</p>
                                                        <p className="description">0.36 元 / GB</p>
                                                    </th>
                                                    <th>
                                                        <p className="title">无免费流量</p>
                                                        <p className="description">0.60 元 / GB</p>
                                                    </th>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>

                                    <li className={`${isHiddenPanel2 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel2(previous => !previous)
                                        }}>云引擎 + 数据库 </h4>
                                        <div className="accordion-content">
                                            <h5 className="accordion-title">云引擎实例</h5>
                                            <table className="table-view card-view">
                                                <thead>
                                                <tr>
                                                    <th>
                                                        <p className="text-muted">512 MB 1 CPU</p>
                                                        <p>
                                                            <span className="font-logo">2</span>
                                                            <span className="unit">元 / 天</span>
                                                        </p>
                                                    </th>
                                                    <td>
                                                        <p className="text-muted">512 MB 1 CPU</p>
                                                        <p>
                                                            <span className="font-logo">2</span>
                                                            <span className="unit">元 / 天</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="text-muted">512 MB 1 CPU</p>
                                                        <p>
                                                            <span className="font-logo">2</span>
                                                            <span className="unit">元 / 天</span>
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="text-muted">512 MB 1 CPU</p>
                                                        <p>
                                                            <span className="font-logo">2</span>
                                                            <span className="unit">元 / 天</span>
                                                        </p>
                                                    </td>
                                                </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </li>

                                    <li className={`${isHiddenPanel3 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel3(previous => !previous)
                                        }}>云引擎流量</h4>
                                        <div className="accordion-content">
                                            <p>每个云引擎付费实例每天有 1 GB 免费额度，超出部分按照 0.8 元 / GB 的标准收费。</p>
                                        </div>
                                    </li>

                                    <li className={`${isHiddenPanel4 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel4(previous => !previous)
                                        }}>云引擎加速流量</h4>
                                        <div className="accordion-content">
                                            <p>0.36 元 / GB，不抵扣商用版最低消费，每个开发版应用享有每天 1 GB 免费额度。 回源流量按照云引擎流量收费。</p>
                                        </div>
                                    </li>

                                    <li className={`${isHiddenPanel5 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel5(previous => !previous)
                                        }}>数据库 - LeanCache（Redis） </h4>
                                        <div className="accordion-content">
                                            <table className="table-view  card-view">
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                            </table>
                                        </div>
                                    </li>
                                    <li className={`${isHiddenPanel6 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel6(previous => !previous)
                                        }}>数据库 - MySQL（内存） </h4>
                                        <div className="accordion-content">
                                            <table className="table-view  card-view">
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                            </table>
                                        </div>
                                    </li>

                                    <li className={`${isHiddenPanel7 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel7(previous => !previous)
                                        }}>数据库 - MySQL（存储空间）</h4>
                                        <div className="accordion-content">
                                            <table className="table-view  card-view">
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p className="text-muted">128 MB</p>
                                                    <p>
                                                        <span className="font-logo">1</span>
                                                        <span className="unit">元 / 天</span>
                                                    </p>
                                                </th>
                                            </table>
                                        </div>
                                    </li>

                                </ul>
                            </TabPane>
                            <TabPane tab="计算器" key="2">
                                <div>
                                    <p className='global-site'>* 国际版独立运营，价格请访问 <a href="#">国际版网站</a>。</p>
                                    <p className='global-site'>* 商用版应用最低消费 30 元 / 天。</p>
                                </div>
                                <div className="price-calc-group">
                                    <div className="price-calc-title">
                                        数据存储
                                    </div>
                                    <div className="price-calc-group-body">
                                        <div className="price-calc">
                                            <div className="price-calc-heading">
                                                <div className="title">对象存储请求</div>
                                                <div className="desc"><span className="currency">¥</span> <span
                                                    className="price-tag font-logo">1.00</span>／万次
                                                </div>
                                            </div>
                                            <div className="price-calc-slider">
                                                <div className="custom-slider" ref={couterRef}
                                                     onMouseDown={setBarMouseDown} onMouseUp={setBarMouseUp}
                                                     onMouseOut={setBarMouseUp}>
                                                    <div className="bar" style={{width: `${inputValue}px`}}>

                                                    </div>
                                                    <div className="handle" onMouseDown={setMouseDown}
                                                         onMouseUp={setMouseUp} style={{left: `${inputValue}px`}}
                                                         onMouseMove={setInputValue}>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="price-calc-result">
                                                <div className="price-calc-input">
                                                    <input type="number" min='0'/>
                                                    <span>万次／天</span>
                                                </div>
                                                <div className="price-calc-currency">
                                                    <span>RMB</span>
                                                    <span className="price-result">万次／天</span>
                                                    <span>／天</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="price-storage">
                                            <div className="price-calc-heading">
                                                <div className="title">对象存储空间</div>
                                                <div className="desc"><span className="currency">¥</span> <span
                                                    className="price-tag font-logo">1.00</span>／万次
                                                </div>
                                            </div>
                                            <div className="price-calc-slider">
                                                <div className="custom-slider" ref={couterRef}
                                                     onMouseDown={setBarMouseDown} onMouseUp={setBarMouseUp}
                                                     onMouseOut={setBarMouseUp}>
                                                    <div className="bar" style={{width: `${inputValue}px`}}>

                                                    </div>
                                                    <div className="handle" onMouseDown={setMouseDown}
                                                         onMouseUp={setMouseUp} style={{left: `${inputValue}px`}}
                                                         onMouseMove={setInputValue}>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="price-calc-result">
                                                <div className="price-calc-input">
                                                    <input type="number" min='0'/>
                                                    <span>万次／天</span>
                                                </div>
                                                <div className="price-calc-currency">
                                                    <span>RMB</span>
                                                    <span className="price-result">万次／天</span>
                                                    <span>／天</span>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="常见问题" key="3">
                                <div>
                                    <p className='global-site'>* 国际版独立运营，价格请访问 <a href="#">国际版网站</a>。</p>
                                    <p className='global-site'>* 商用版应用最低消费 30 元 / 天。</p>
                                </div>
                                <ul className='price-panel'>
                                    <li className={`${isHiddenPanel8 ? 'openPanel' : ''}`}>
                                        <h4 className='price-title' onClick={() => {
                                            hidePanel8(previous => !previous)
                                        }}>我应当选择哪种计价方案？</h4>
                                        <div className="accordion-content">
                                            <p><strong>开发版</strong>：开发版让用户可以在开发阶段和个人项目中免费使用 LeanCloud
                                                的大部分功能。大部分商业应用在发布给外部用户后会超过开发版的用量限制，将会需要升级到商用版</p>
                                            <p><strong>商用版</strong>：商用版是高性能、高可用的商业应用解决方案，可以满足大部分线上产品的需求。商用版集群统一进行容量规划和扩容，服务目标是流量相对比较稳定，逐渐增长的应用。为了避免因个别应用流量突增或受到攻击而影响所在集群的稳定性，商用版应用仍然有并发请求数的软限制。在合理使用的情况下，这个限制可以通过提交工单提高。但如果您的应用如果因为推广或业务性质等原因会经常出现流量的大幅波动，建议您选择企业版来预留充足的资源
                                            </p>
                                            <p><strong>企业版</strong>：企业版是可以灵活应对多样化需求的企业级解决方案，主要有两种部署方式：独立集群和私有集群。独立集群是指把部分或全部服务部署在
                                                LeanCloud
                                                提供的服务器集群上，使用体验和商用版一致，但由客户确定集群容量。独立集群特别适用于预期产品发布后在短期内会快速增长，需要根据自己的判断保证充足资源的客户。私有集群指把
                                                LeanCloud 的服务部署在客户自己的服务器集群上，LeanCloud 的软件系统仍然由 LeanCloud
                                                提供运维服务。这种方式主要适用于需要与在自己机房的其它系统进行集成，或对数据存储地有特定需求的客户</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabPane>
                        </Tabs>
                    </div>
                </section>
            </div>
    </>;

}

