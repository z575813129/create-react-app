import React, {useState, useEffect} from "react";

export default function HookTest() {
    const [count, setCount] = useState(0)
    // 生命周期作用钩子复合,具有 compontDidmount,componentDidUpdate, componentWillUnmount三个相同的作用 每次渲染时都会执行
    useEffect(() => {
        document.title = `点击了${count}`
    })
    // 如果只打算执行一次传递第二个参数为空数组
    useEffect(() => {
        // api 调用
        console.log('只执行一次')
    }, [])
    // 多个状态
    const [age] = useState(20)
    const [fruit, setFruit] = useState('banana')
    const [fruits, setFruits] = useState(['banana', 'apple'])
    const [input, setInput] = useState('')

    function add() {
        if (input || !(input in fruits)) {
            setFruits([...fruits, input])
        } else {
            console.log('已存在');
        }
    }

    return (
        <div>
            <p>点击了{count}</p>
            <button onClick={() => setCount(count + 1)}>点击</button>
            <p>年龄{age}</p>
            <p>选择的水果{fruit}</p>
            <p>
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <button onClick={add}>新增水果</button>
            </p>
            <p></p>
            <ul>
                {fruits.map(f => <li key={f} onClick={() => setFruit(f)}>{f}</li>)}
            </ul>
        </div>
    )
}