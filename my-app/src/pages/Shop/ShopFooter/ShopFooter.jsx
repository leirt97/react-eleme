import React from 'react'
import './style.less'

class ShopFooter extends React.Component {
    // constructor(props,context) {
    //     super(props,context)
    // }

    render() {
        const { data, money, number } = this.props
        return (
        <div className="shop-footer">
            <div className={`cart ${money > 0 ? 'have' : ' '}`} onClick={() => { this.props.showCart() }}>
                <div className="cart-img"></div>
                {number > 0 && <span>{number}</span>}
            </div>
            <div className="footer-money">
                <span>{`￥${money}`}</span>
                <p>{`配送费￥${data.send_cost}`}</p>
            </div>
            {(money >= 0 && (data.start_send - money > 0))
            ?<span className="shortof-send pay">{ `差￥${data.start_send-money}起送`}</span>
            :<span className="goto-pay pay" onClick={() => { this.props.checkOut() }}>去结算</span>  
            }
        </div>
        )
    }
}

export default ShopFooter