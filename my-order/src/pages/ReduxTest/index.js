import React from 'react'
import {Button} from 'antd';
import {connect} from 'react-redux'
import {minus, asyncAdd, add} from "../../store/count.redux"

const mapStateToProps = state => ({num: state.counter})
const mapDispatchToProps = {add, asyncAdd, minus}

// 装饰器写法
@connect(mapStateToProps, mapDispatchToProps)
class ReduxTest extends React.Component {
  render() {
    const {num, minus, add, asyncAdd} = this.props
    return (
      <div>
        <p>{num}</p>
        <Button onClick={minus}>-</Button>
        <Button onClick={add}>+</Button>
        <Button onClick={asyncAdd}>asyncAdd</Button>
      </div>
    )
  }
}

export default ReduxTest

// 函数式写法
// function ReduxTest({num, add, minus}) {
//   return (
//     <div>
//       <p>{num}</p>
//       <Button onClick={minus}>-</Button>
//       <Button onClick={add}>+</Button>
//     </div>
//   )
// }
// // connect接受一个组件 返回一个强化后的组件 是高阶组件
// export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)
