import {NavLink} from "react-router-dom";
import React,{useEffect} from "react";
import {connect} from 'react-redux'


 function DocHead(props:any){
     function toRouter(islink: string, e: any) {
         if (!islink) e.preventDefault()
     }
     useEffect(()=>{
         props.setDocList()
     },[])

     return (
        <ul className='head_ul'>
            <div className='head_left'>
                <NavLink to='/' className='LeanCloud'>LeanCloud</NavLink>

                {
                    props.queryList.map((item:any, key:number) => <NavLink onClick={(e)=>{toRouter(item.islink,e)}} to={item.url} key={key}>{item.name}</NavLink>)
                }
                <div className='log'>
                    <NavLink to='/login' className='login'>登录</NavLink>
                    <NavLink to='/logout' className='logout'>注册</NavLink>
                </div>
            </div>

        </ul>
    )
}

function mapStateToProps(state: any, ownProps: any) {
    const {queryList} = state
    return {
        queryList
    }
}
function mapDispatchToProps(dispatch: any) {
    return {
        setDocList: () => dispatch({type: 'DOCLIST'}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DocHead);

