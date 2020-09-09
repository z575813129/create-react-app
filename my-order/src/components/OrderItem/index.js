import React, {Component} from 'react'
import {Card, Button} from 'antd';

const {Meta} = Card;

class OrderItem extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const {img, name, price} = this.props.data
    return (
      <Card
        hoverable
        style={{width: 240, marginBottom: 15}}
        cover={<img alt="example" src={img}/>}>
        <Meta title={name} description="It is a boy"/>
        <Button>${price}</Button>
        <Button style={{marginTop: 10, marginLeft: 20}} onClick={this.props.add}>加购</Button>
        <Button style={{marginTop: 10}} onClick={this.props.minus}>减购</Button>
      </Card>
    )
  }
}

export default OrderItem