import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger' // 日志记录
import thunk from 'redux-thunk' // 异步处理方案
import {counterReducer} from './count.redux'
import creatSagaMiddleware from 'redux-saga' // 创建中间件
// import mySaga from './saga'
// combineReducers 将多个reducer变成一个
// 1, 创建saga中间件并注册
// const sagaMiddleware = creatSagaMiddleware()
const store = createStore(
    combineReducers({'counter': counterReducer})
    , applyMiddleware(logger, thunk, creatSagaMiddleware))
// const store = createStore(counterReducer, applyMiddleware(logger, thunk))
// 2, 中间件运行saga
// sagaMiddleware.run(mySaga)
export default store