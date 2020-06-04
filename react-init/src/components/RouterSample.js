import React from "react";
import {BrowserRouter, Link, Route, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import {login} from '../store/user.redux'

function Home(props) {
    return <div>
        <h3>课程列表</h3>
        <ul>
            <li><Link to="/detail/js">js</Link></li>
            <li><Link to="/detail/java">java</Link></li>
        </ul>
    </div>
}

// 传递进来的路由器对象
function Detail(props) {
    console.log(props)
    // 1, history: 导航指令
    // 2, match: 获取参数信息
    // 3,location:当前url信息
    return <div>
        <h3>当前课程: {props.match.params.course}</h3>
        <button onClick={props.history.goBack}>返回</button>
    </div>
}

function About(props) {
    return <div>
        <h3>个人中心</h3>
        <div>
            <Link to="/about/me">个人信息</Link>
            <Link to="/about/order">订单查询</Link>
        </div>

        <Switch>
            <Route path="about/me" component={() => (<div>me</div>)}></Route>
            <Route path="about/order" component={() => (<div>order</div>)}></Route>
            // 默认重定向
            <Redirect to="/about/me"></Redirect>
        </Switch>

    </div>
}

function NoMatch({location}) {
    return <div>404, {location.pathname}不存在 </div>
}

// 路由守卫 (高阶组件, 实际是对Route的封装)
// 希望用法 <PrivateRoute component={About}  path="/about"  ... />
const PrivateRoute = connect(state => ({isLogin: state.user.isLogin}))(
    ({component: Comp, isLogin, ...rest}) => {
        // 做认证
        // render: 根据条件动态渲染
        return (
            // rest剩余的props ,props中包含了conponent,  conponent优先级会高于 render
            <Route {...rest} render={props => isLogin ? (<Comp/>) : (
                <Redirect to={{pathname: "/login", state: {redirect: props.location.pathname}}}/>)}/>
        )
    }
)

// function PrivateRoute({component: Comp, isLogin, ...rest}) {
//     // 做认证
//     // render: 根据条件动态渲染
//     return (
//         <Route {...rest} render={props => isLogin ? (<Comp/>) : (
//             <Redirect to={{pathname: "/login", state: {redirect: props.location.pathname}}}/>)}/>
//     )
// }

//登录组件
const Login = connect(state => ({isLogin: state.user.isLogin, loading: state.user.isLogin}, {login: login}))
(({location, isLogin, login, loading}) => {
    const redirect = location.state.redirect || '/'
    if (isLogin) {
        return <Redirect to={redirect}/>
    }
    return (
        <div>
            <p>用户登录</p>
            <hr/>
            <button onClick={login} disabled={loading}>{loading ? '登录中...' : '登录'}</button>
        </div>
    )
})
// function Login({location, isLogin, login}) {
//     const redirect = location.state.redirect || '/'
//     if (isLogin) {
//         return <Redirect to={redirect}/>
//     }
//     return (
//         <div>
//             <p>用户登录</p>
//             <hr/>
//             <button onClick={login}>登录</button>
//         </div>
//     )
// }

export default function RouterSample() {
    return <div>
        <BrowserRouter>
            <div>
                {/*导航链接*/}
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                        <Link to="/about">关于</Link>
                    </li>
                </ul>

                {/*路由配置: 路由既组件*/}
                {/*路由匹配默认是包容性质*/}
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <PrivateRoute path='/about' component={About}></PrivateRoute>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/detail/:course' component={Detail}> </Route>
                    // 404没有path, 必然匹配
                    <Route component={NoMatch}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
}
