import React from "react";
import {connect} from 'react-redux'
import {add, minus, asyncAdd} from '../store/count.redux'

const mapStateToProps = state => ({num: state.counter})
const mapDispatchToProps = {add, minus, asyncAdd}

// 装饰器写法
@connect(mapStateToProps, mapDispatchToProps)
class ReduxTest extends React.Component {
    render() {
        const {num, add, minus, asyncAdd} = this.props
        return (
            <div>
                <p>{num}</p>
                <div>
                    <button onClick={add}> +</button>
                    <button onClick={minus}> -</button>
                    <button onClick={asyncAdd}> asyncAdd</button>
                </div>
            </div>
        );
    }
}

export default ReduxTest
// connect本质是一个工厂函数,是个高阶组件
// const mapStateToProps = state => ({num: state})
// const mapDispatchToProps = {
//     add: () => ({type: "add"}),
//     minus: () => ({type: "minus"})
// }
//
// function ReduxTest({num, add, minus}) {
//     return <div>
//         <p>{num}</p>
//         <div>
//             <button onClick={add}> +</button>
//             <button onClick={minus}> -</button>
//         </div>
//     </div>
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)


// import index from '../index'
// export default function TeduxTest() {
//     return <div>
//         <p>{index.getState()}</p>
//         <div>
//             <button onClick={() => index.dispatch({type: "add"})}> +</button>
//             <button onClick={() => index.dispatch({type: "minus"})}> -</button>
//         </div>
//     </div>
// }