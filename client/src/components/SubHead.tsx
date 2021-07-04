import {Layout} from "antd";
import DocHead from "components/DocHead";
import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
const {Header, Content, Footer, Sider} = Layout;
 function SubHead(props:any){
    return <>
        <ul className='sub_head_ul'>
            {
                props.subHeadQueryList.map((item:any, key:number) => <span key={key}> {item.name}</span>)
            }
        </ul>
    </>
}

function mapStateToProps(state: any, ownProps: any) {
    const {subHeadQueryList} = state
    return {
        subHeadQueryList
    }
}

export default connect(mapStateToProps)(SubHead);
