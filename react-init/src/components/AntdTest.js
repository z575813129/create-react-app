import React from "react";
import {Button} from 'antd'

// 组件方式一
// export default class AntdTest extends Component {
//     render() {
//         return (
//             <div>
//                 <Button type="primary">按钮</Button>
//             </div>
//         )
//     }
// }
// 组件方式二
// react 16.6 高阶组件memo,本事也是浅对比 接受一个组件 然后返回一个全新的组件,新的组件就拥有了 pureComponent的能力
// React.memo()
const AntdTest = React.memo(function(prop) {
    console.log(111)
    return (
        <div>
            <Button type="primary">按钮</Button>
        </div>
    )
})

export default AntdTest