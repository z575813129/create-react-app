import React, {Component} from 'react'

class OrderItem extends Component {
    render() {
        const {shop, product,price} = this.props.data
        return (
          <div>
              <span>{shop}</span>
              <span>{product}</span>
              <span>{price}</span>
          </div>
        )
    }
}

export default OrderItem