import React from 'react';
import {Layout, Button} from 'antd';
import {useState} from "react";
import './Head.less';
import {FormattedMessage} from "react-intl";
import {NavLink, Switch, Route} from "react-router-dom";
import * as events from "events";
import {connect} from 'react-redux'
import {
    PauseOutlined,
    CloseOutlined
} from '@ant-design/icons';

function toRouter(url: string, e: any) {
    if (url.indexOf('product') > -1) e.preventDefault()
    // if(url.indexOf('doc')>-1) setDocList()
}

const Head: React.FC = function (props: any) {
    const {queryList} = props
    const [isOpened, setOpenMenu] = useState(false);
    return (
        <div className={`head ${isOpened?'active':''}`} >
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
                !isOpened?<PauseOutlined onClick={()=>setOpenMenu(isOpened=>!isOpened)}/>:<CloseOutlined onClick={()=>setOpenMenu(isOpened=>!isOpened)}/>
            }
        </div>

    );
}

function mapStateToProps(state: any, ownProps: any) {
    const {queryList} = state
    return {
        queryList
    }
}

// function mapDispatchToProps(dispatch: any, ownProps: any) {
//     return {
//         setDocList: () => dispatch({type: 'DOCLIST'})
//     }
//
// }

export default connect(mapStateToProps)(Head);
