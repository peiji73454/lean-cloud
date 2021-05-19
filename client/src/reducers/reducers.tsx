
import {Action} from 'redux'
//结合本地存储来解决刷新页面数据丢失的问题
//将字符串变为对象（获取数据如果没有就赋值为空对象）
let redux_data = JSON.parse(localStorage.getItem("redux_data") as any) || {}

//设置数据的方法
let setData = (name:string,data:any) => {
    let obj = localStorage.getItem("redux_data") ? JSON.parse(localStorage.getItem("redux_data") as any) : {}
    //添加新数据
    obj[name] = data
    localStorage.setItem("redux_data",JSON.stringify(obj))
}
export const user = (state=redux_data.user || {},action:any) => {
    let userData;
    switch(action.type){
        case "user":
            userData = {
                ...state,
                [action.key]:action.value
            }
            setData("user",userData)
            return userData
        default :
            userData = state
            setData("user",userData)
            return userData
    }
}

export const routecss = (state="left", action:any) => {
    console.log(action.type,'action')

    switch (action.type) {
        case 'left':
            return "left"
        case 'right':
            return "right"
        default :
            return state
    }
}
