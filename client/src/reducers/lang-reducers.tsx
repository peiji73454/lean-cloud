//结合本地存储来解决刷新页面数据丢失的问题
//将字符串变为对象（获取数据如果没有就赋值为空对象）
import {AnyAction} from "redux";

let $lang = localStorage.getItem("lang")||navigator.language

//设置数据的方法
let setLang = (val:string) => {
    if(val===$lang) return;
    localStorage.setItem("lang", val)
}

export const lang = (state = $lang, action: AnyAction) => {
    switch (action.type) {
        case "lang":
            setLang(action.value)
            return action.value
        default :
            setLang(state)
            return state
    }
};
