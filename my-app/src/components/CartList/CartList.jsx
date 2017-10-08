import React from 'react'
import './style.less'

class CartList extends React.Component{
    // constructor(props, context) {
    //     super(props, context)
    // }

    render() {
        const { record, add, minus } = this.props
        return (
            <div className="cart_warp">
                <ul className="cart_list">
                    {record.map((v,i) => {
                        return (
                            <li key={i}>
                                <span className="list_name">{v.name}</span>
                                <span className="list_money">￥{v.price}</span>
                                <span className="list_num">
                                    <span className="num_v num_minus" onClick={minus.bind(this, v.name)}>-</span>
                                    <span className="num_v num_number">{v.num}</span>
                                    <span className="num_v num_add" onClick={add.bind(this, v.name)}>+</span>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default CartList