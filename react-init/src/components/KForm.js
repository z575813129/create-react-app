import React from "react";
import {Input, Button} from "antd";

// 创建一个高阶组件: 扩展现有表单 、时间处理、数据收集、校验
// 接受一个组件，渲染一个组件
function KFormCreat(Comp) {
    // 创建input包装器
    return class extends React.Component {
        render() {
            return <Comp></Comp>
        }
    }
}

@KFormCreat
class KForm extends React.Component {
    render() {
        return (
            <div>
                <Input></Input>
                <Button>登录</Button>
            </div>
        )
    }
}
export default KForm