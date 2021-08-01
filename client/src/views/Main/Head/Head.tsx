import React from 'react';
import {Layout, Button} from 'antd';
import {useState} from "react";
import './Head.less';
import {FormattedMessage} from "react-intl";
import {NavLink, Switch, Route, BrowserRouter} from "react-router-dom";
import * as events from "events";
import {connect} from 'react-redux'
import {
    PauseOutlined,
    CloseOutlined
} from '@ant-design/icons';
import Home from "views/Main/Home/Home";
import Storage from "../../storage";
import Pricing from "../../Price/pricing";
import Users from "../User/Users";
import Tutorials from "../Tutorials/Tutorials";
import Support from "../Support/Support";
import Play from "../../play";
import Error from "../../Error/Error";
const {Header, Footer, Content} = Layout;

function toRouter(url: string, e: any) {
    if (url.indexOf('product') > -1) e.preventDefault()
}

const Head: React.FC = function (props: any) {
    const {queryList} = props
    const [isOpened, setOpenMenu] = useState(false);
    return (
        <Layout className='layouts'>
            <Header>
                <div className={`head ${isOpened ? 'active' : ''}`}>
                    {/*<FormattedMessage id="help" />*/}
                    <NavLink to='/' className='link LeanCloud'>LeanCloud</NavLink>
                    <ul className='head_ul'>
                        {
                            queryList.map((item: any, key: number) => <NavLink onClick={(e) => {
                                toRouter(item.url, e)
                            }} to={item.url} key={key}>{item.name}</NavLink>)
                        }
                        <NavLink to='/console' className='link'>
                            控制台
                            <i className="iconfont iconfont-angle-right"></i>
                        </NavLink>
                    </ul>
                    {
                        !isOpened ? <PauseOutlined onClick={() => setOpenMenu(isOpened => !isOpened)}/> :
                            <CloseOutlined onClick={() => setOpenMenu(isOpened => !isOpened)}/>
                    }
                </div>
            </Header>
            <Content>
                <Route exact path="/" component={Home}/>
                <Route path="/pricing" component={Pricing}/>
                <Route path="/Storage" component={Storage}/>
                <Route path="/customers" component={Users}/>
                <Route path="/tutorials" component={Tutorials}/>
                <Route path="/support" component={Support}/>
                <Route path="/play" component={Play}/>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

function mapStateToProps(state: any, ownProps: any) {
    const {queryList} = state
    return {
        queryList
    }
}

export default connect(mapStateToProps)(Head);
