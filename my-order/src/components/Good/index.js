import React, {Component} from 'react'

export class Good extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            list: [
                {title: 'aa', id: 1},
                {title: 'bb', id: 2},
                {title: 'cc', id: 3}
            ]
        }
    }
    changeText = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    add = () => {
        this.setState((prevState) => {
            return {
                list: [
                    ...prevState.list,
                    {
                        id: prevState.list.length+1,
                        title: 'dd'
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div>
                <h1>hello, {this.props.name}</h1>
                {
                    this.state.list.map(item => {
                        return (<h3 key={item.id}>{item.title}</h3>)
                    })
                }
                <input type="text" value= {this.state.text} onChange={this.changeText} />
                <h3>{this.state.text}</h3>
                <button onClick={this.add}>增加</button>
            </div>
        )
    }

}