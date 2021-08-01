import './Support.less'
import {Link} from "react-router-dom"
import React, {useEffect, useState} from 'react'
import {log} from "util";

export default function Support(this: any, props: any) {
    const [problem, setProblem]: any = useState(new Map());
    useEffect(() => {
        const map = new Map()
        map.set(1, ['了解更多', '开发版、商用版和企业版有什么区别？', 'LeanCloud 是否能支撑我的服务量级？', '其他售前问题'])
        map.set(2, ['发票相关问题', '其他财务问题'])
        map.set(3, ['如何实现某个功能？', '开发调试时，某个接口或功能没有按照预期的方式工作', '自定义域名相关问题', '我发现了一个 Bug', '其他技术问题'])
        map.set(4, ['无法登录账号', '无法收到验证或重置密码的邮件', '其他账号问题'])
        map.set(5, ['投诉及建议', '其他问题'])
        map.set(6, ['当前是否有服务存在故障？'])
        setProblem(map)
    }, [])
    const content = () => {
        if (props.location.search) {
            return (
                <ul className="section-contain ">
                    <div onClick={()=>props.history.push('/support')} className={'section-back'}>
                        <i className="iconfont iconfont-uk-icon-angle-left"/>
                        <span className="title"> 显示全部分类</span>
                    </div>
                    <h1 className={'calc'}>如何计算费用？</h1>
                    <div className="question">
                        <p className="title">LeanCloud 各项服务的费用可以在「价格」页面找到。</p>
                        <Link to={'/pricing'} className={'question-link'}>
                            <div className="question-cards">
                                <p className={'title'}>查看价格页面</p>
                                <p className={'text-muted'}>您可以在这里查看所有产品的价格，还可以用计算器估算自己的消费。</p>
                            </div>
                        </Link>
                    </div>
                    <div className="question">
                        <p className="title">LeanCloud 各项服务的费用可以在「价格」页面找到。</p>
                        <a href={'tel:+8613011098244'} className={'question-link'}>
                            <div className="question-cards">
                                <p className={'title'}>查看价格页面</p>
                                <p className={'text-muted'}>您可以在工作日 9:00 - 19:00 致电 <b>+86 130-1109-8244</b>。来电时请简单介绍您的公司名称、您的职位、您产品的使用场景。该电话仅提供商务售前咨询，不解答任何非售前咨询的问题。</p>
                            </div>
                        </a>
                    </div>
                </ul>
            )
        } else if (problem.size) {
            return (<ul className="list">
                <li className="list-item">
                    <h1>售前咨询</h1>
                    {
                        problem.get(1).map((item: string, index: number) => <Link key={index} to={{
                            pathname: '/support/',
                            search: '?query=' + item
                        }}>{item}</Link>)
                    }
                </li>
                <li className="list-item">
                    <h1>财务</h1>
                    {
                        problem.get(2).map((item: string, index: number) => <Link key={index} to={{
                            pathname: '/support/',
                            search: '?query=' + item
                        }}>{item}</Link>)
                    }
                </li>
                <li className="list-item">
                    <h1>技术问题</h1>
                    {
                        problem.get(3).map((item: string, index: number) => <Link key={index} to={{
                            pathname: '/support/',
                            search: '?query=' + item
                        }}>{item}</Link>)
                    }
                </li>
                <li className="list-item">
                    <h1>账号</h1>
                    {
                        problem.get(4).map((item: string, index: number) => <Link key={index} to={{
                            pathname: '/support/',
                            search: '?query=' + item
                        }}>{item}</Link>)
                    }
                </li>
                <li className="list-item">
                    <h1>其他</h1>
                    {
                        problem.get(5).map((item: string, index: number) => <Link key={index} to={{
                            pathname: '/support/',
                            search: '?query=' + item
                        }}>{item}</Link>)
                    }
                </li>
                <li className="list-item">
                    <h1>故障</h1>
                    {
                        problem.get(6).map((item: string, index: number) => <Link key={index} to={{
                            pathname: '/support/',
                            search: '?query=' + item
                        }}>{item}</Link>)
                    }
                </li>
            </ul>)
        }
    }
    return <>
        <div className="section-support">
            <div className="support">
                <div className="title">
                    <h1>帮助</h1>
                    <span>您需要哪方面的帮助？</span>
                </div>
                {
                    content()
                }
            </div>
        </div>
    </>
}

