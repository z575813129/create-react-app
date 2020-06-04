// 隔代传惨
import React, {useContext} from 'react'

// 使用上下文
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext

let color={color:'red'}
function Child(prop) {
    return <div style={color}>Child: {prop.foo}</div>
}

// 使用Hook消费
function Child2() {
    const ctx = useContext(MyContext)
    console.log(ctx)
    return <div className="hahah">Child2: {ctx.foo}</div>
}

// 使用class指定静态contextType
class Child3 extends React.Component {
    static contextType = MyContext

    render() {
        return <div>Child3: {this.context.foo}</div>
    }
}

export default function ContextText() {
    return (
        <div>
            <Provider value={{foo: "bar"}}>
                {/*1,Consumer*/}
                <Consumer>
                    {value => <Child {...value} />}
                </Consumer>

                {/*2,HOOK*/}
                <Child2></Child2>
                {/*3,class*/}
                <Child3></Child3>
            </Provider>
        </div>
    )
}