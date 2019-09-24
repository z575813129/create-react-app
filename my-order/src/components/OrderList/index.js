import React, {Component} from 'react'
import OrderItem from '../OrderItem'

const data = [
    {
        id: 1,
        shop: '创意菜',
        product: '百香果',
        price: 19.9

    },
    {
        id: 2,
        shop: '创意菜',
        product: '百香果',
        price: 29.9

    },
    {
        id: 3,
        shop: '创意菜',
        product: '百香果',
        price: 39.9

    }
]


class OrderList extends Component {
    constructor(props) {
        super(props)
        this.state = {data: data}
    }

    componentDidMount() {
        // fetch('/mock/orders.json').then(r => {
        //     console.log(r)
        //     if (r.ok) {
        //         r.json().then(data => {
        //             this.setState({data})
        //         })
        //     }
        // })
    }

    render() {
        return (
          <div>
              {
                  this.state.data.map(item => {
                      return (<OrderItem data={item} key={item.id}/>
                      )
                  })
              }
          </div>
        )
    }
}

export default OrderList