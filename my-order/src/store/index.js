import {createStore, applyMiddleware,combineReducers} from 'redux'
import logger from 'redux-logger' // 日志中间件
import thunk from 'redux-thunk' // 异步中间件
import {counterReducer} from './count.redux'
// combineReducers 模块化写法，将多个reduce变成一个, counter相当于命名空间
const store = createStore(combineReducers({counter: counterReducer}), applyMiddleware(logger, thunk))
export default store
// 非模块化写法
// const store = createStore(counterReducer, applyMiddleware(logger, thunk))
// export default store