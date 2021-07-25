import React from "react";
import {connect} from "react-redux";
 function SubHead(props:any){
    return <>
        <ul className='sub_head_ul'>
            {
                props.subHeadQueryList.map((item:any, key:number) => <span key={key}> {item.name}</span>)
            }
        </ul>
    </>
}

function mapStateToProps(state: any) {
    const {subHeadQueryList} = state
    return {
        subHeadQueryList
    }
}

export default connect(mapStateToProps)(SubHead);
