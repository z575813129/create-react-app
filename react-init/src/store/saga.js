import {call, put, takeEvery} from 'redux-saga/effects'
// takeEvery 全局监听器
const userService = {
    login(uname) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (uname === 'Jerry') {
                    resolve({id: 1, name: 'Jerry', age; 20})
                } else {
                    reject('用户名或密码错误')
                }
            }, 1000)
        })
    }
}

function* login(action) {
    try {
        yield put({type: 'requestLogin'})
        const result = yield call(userService.login, action.uname)
        yield put({type: 'loginSuccess', result})
    } catch (message) {
        yield put({type: 'loginFailure', message})
    }
}

function* mySaga() {
    yield takeEvery('login', login)
}

export default mySaga