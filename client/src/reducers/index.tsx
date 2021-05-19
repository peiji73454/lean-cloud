import {createStore,combineReducers} from 'redux'
import {user,routecss} from './reducers'


const todoApp = combineReducers({
    routecss,
    user
})
export default createStore(todoApp)
