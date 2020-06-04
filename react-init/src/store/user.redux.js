const init = {
    isLogin: false,
    loading: false,
    error: ''
}
export const user = (state = init, action) => {
    switch (action.type) {
        case 'requestLogin':
            return {
                isLogin: false,
                loading: true,
                error: ''
            };
        case 'loginSuccess':
            return {
                isLogin: true,
                loading: false,
                error: ''
            };
        case 'loginFailure':
            return {
                isLogin: true,
                loading: false,
                error: action.message
            };
        default:
            return state
    }
}

// action creator
export function login(uname) {
   return {type: 'login', uname}
}
// export const login = () => dispatch => {
//     dispatch({type: "requestLogin"})
//     // 异步操作
//     setTimeout(() => {
//         dispatch({type: "login"})
//     }, 2000)
// };