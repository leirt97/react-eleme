import React from 'react'
import './style.less'
import CartList from '../CartList/CartList.jsx'

class ShopCart extends React.Component{
    // constructor(props,context) {
    //     super(props, context)
    // }

    render() {
        let record = []
        this.cartRecord(this.props.data, record)
        const { add, minus, empty } = this.props
        return (
            <div className={`shop_cart_warp ${this.props.paying ? 'show' : 'hide'}`}
            onClick={() => { this.props.showCart() }}>
                <div className={`shop_cart ${this.props.paying ? 'up' : 'down'}`} onClick={(e) => {e.stopPropagation()}}>
                    <div className="cart_head">
                        <span className="cart_head_left cart_head_span">购物车</span>
                        <span className="cart_head_right cart_head_span" onClick={() => {empty()}}>清空</span>
                    </div>
                    {record.length > 0 && <CartList record={record}  add={add} minus={minus}></CartList>}
                </div>
            </div>
        )
    }

    cartRecord(data, record) {
        data.commodity.forEach((items) => {
            items.foods.forEach((v) => {
                if(v.num > 0) {
                    let item = {}
                    item.name = v.name
                    item.price = v.unit_price
                    item.num = v.num
                    record.push(item)
                }
            })
        })
    }
}

export default ShopCart