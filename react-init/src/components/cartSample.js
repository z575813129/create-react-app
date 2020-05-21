import React, {Component} from 'react'

export default class CartSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cart: [],
            goods: [
                {id: 1, text: 'js'},
                {id: 2, text: 'java'}
            ]
        }
        this.addGood = this.addGood.bind(this)
    }

    textChange = (e) => {
        this.setState({text: e.target.value})
    }

    addGood() {
        this.setState(prevState => {
            return {
                goods: [
                    ...prevState.goods,
                    {id: prevState.goods.length + 1, text: 'js'}
                ]
            }
        })
    }

    // 加购物车
    addToCart = (good) => {
        console.log(good)
        // 创建新购物车
        const newCart = [...this.state.cart];
        const idx = newCart.findIndex(c => c.id === good.id)
        const item = newCart[idx]
        console.log('idx', idx)
        if (idx > -1) {
            // 删除老的 生成新的
            newCart.splice(idx, 1, {...item, count: item.count + 1});
        } else {
            newCart.push({...good, count: 1})
        }
        // 更新
        this.setState({cart: newCart})
    }

    add = (good) => {
        // 创建新购物车
        const newCart = [...this.state.cart];
        const idx = newCart.findIndex(c => c.id === good.id)
        const item = newCart[idx]
        newCart.splice(idx, 1, {...item, count: item.count + 1});
        // 更新
        this.setState({cart: newCart})
    }

    minus = (good) => {
        // 创建新购物车
        const newCart = [...this.state.cart];
        const idx = newCart.findIndex(c => c.id === good.id)
        const item = newCart[idx]
        newCart.splice(idx, 1, {...item, count: item.count - 1});
        // 更新
        this.setState({cart: newCart})
    }

    render() {
        // const title = this.props.title ? <h1>this.props.title</h1> : null
        return (
            <div>
                {this.props.title && <h1>this.props.title</h1>}
                <div>
                    <input type="text" value={this.state.text} onChange={this.textChange}/>
                    <button onClick={this.addGood}>添加商品</button>
                    {this.state.text}
                </div>

                <ul>
                    {this.state.goods.map(good => <li key={good.id}>
                        <button onClick={() => this.addToCart(good)}>加购</button>
                        {good.text}
                    </li>)}
                </ul>

                <Cart data={this.state.cart} minus={this.minus} add={this.add}></Cart>

            </div>
        )
    }
}

function Cart({data, minus, add}) {
    return (
        <div>
            <table>
                <tbody>
                {data.map(d => (
                    <tr key={d.id}>
                        <td>{d.text}</td>
                        <td>
                            <button onClick={() => minus(d)}>-</button>
                            {d.count}
                            <button onClick={() => add(d)}>+</button>
                        </td>
                        <td>{d.price * d.count}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )

}