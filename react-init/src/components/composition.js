import React from "react";

// 组件复合 类似于vue中的slot
function Dialog(props) {
    console.log(props)
    return (
        <div style={{border: `4px solid ${props.color || 'blue'}`}}>
            {props.children}
            // 具名slot
            <div className="footer">
                {props.footer}
            </div>
        </div>
    )
}

function WelcomDialog(props) {
    return (
        <Dialog {...props}>
            <h1>欢迎光临</h1>
            <h1>谢谢使用Reat</h1>
        </Dialog>
    )
}

export default function() {
    const footer = <button onClick={() => alert('确定')}>确定</button>
    return <WelcomDialog color="green" footer={footer}></WelcomDialog>
}