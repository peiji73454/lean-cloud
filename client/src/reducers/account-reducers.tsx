
import {AnyAction} from "redux";

export const collapsed = (state = false, action: AnyAction) => {
    switch (action.type) {
        case "onCollapse":
            console.log(action.value,'---');
            return action.value
        default :
            return state
    }
};
