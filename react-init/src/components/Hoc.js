import React, {Component} from "react";

const kaikeba = props => (
    <div>
        {props.aa} --  {props.stage} -- {props.name}
    </div>
)
const Newkaikeba = Comp => {
    const name = '高阶组件'
    return props => {
        console.log({...props})
        return <Comp {...props} name={name}></Comp>
    }
}
const NewHoc = Newkaikeba(kaikeba)

export default class Hoc extends Component {

    render() {
        return (
            <div>
                <NewHoc stage="React" aa="dsadas"></NewHoc>
            </div>
        );
    }
}