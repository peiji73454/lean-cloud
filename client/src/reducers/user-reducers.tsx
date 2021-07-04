//结合本地存储来解决刷新页面数据丢失的问题
//将字符串变为对象（获取数据如果没有就赋值为空对象）
import {AnyAction} from "redux";
import {getToken,setToken,removeToken} from "../utils/cookie";
let userInfo = localStorage.getItem("userInfo")||{}
//设置数据的方法
let setUserInfo = (val:string) => {
    if(val===userInfo) return;
    localStorage.setItem("userInfo", val)
}

export const user = (state = userInfo, action: AnyAction) => {
    switch (action.type) {
        case "user":
            setToken('accessToken',action.value.accessToken)
            setUserInfo(action.value)
            return action.value
        default :
            removeToken('accessToken')
            return {}
    }
};
