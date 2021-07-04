import {createStore,combineReducers,applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';
import {program,programDetail,queryList,docResults,subHeadQueryList} from './reducers'
import {lang} from './lang-reducers'
import {user} from './user-reducers'


const rootReducers = combineReducers({
    program,
    programDetail,
    queryList,
    docResults,
    subHeadQueryList,
    lang,
    user
})

// 可以实时监听到state里值的改变
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducers
    // composeEnhancers(
    //     applyMiddleware(thunk)
    // )
    )
