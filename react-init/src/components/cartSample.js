import React, {Component} from 'react'

export default class Cart extends Component {
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
                    {this.state.goods.map(good => <li key={good.id}>{good.text}</li>)}
                </ul>

                <Cart data={this.state.cart}></Cart>

            </div>
        )
    }
}