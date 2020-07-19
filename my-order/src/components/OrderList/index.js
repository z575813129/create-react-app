import React, {Component} from 'react'
import OrderItem from '../OrderItem'
import {Col, Row} from 'antd'

const data = [
    {
        id: 1,
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        name: 'Lydia',
        price: 19.9

    },
    {
        id: 2,
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        name: 'Lydia',
        price: 19.9

    },
    {
        id: 3,
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        name: 'Lydia',
        price: 19.9

    },
    {
        id: 4,
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        name: 'Lydia',
        price: 19.9

    },
    {
        id: 5,
        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        name: 'Lydia',
        price: 19.9

    },
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
                <Row gutter={16}>
                    {
                        this.state.data.map(item => {
                            return (
                                <Col span={6} key={item.id}>
                                    <OrderItem style={{marginBottom: '20px'}}  data={item} />
                                </Col>

                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default OrderList