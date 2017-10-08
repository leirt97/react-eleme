import React from 'react'
import './style.less'

class OrderItem extends React.Component {
    // constructor(props,context) {
    //     super(props,context)
    // }

    render() {
        return (
            <div className="order-items">
                {this.props.data.map((v,i) => {
                    return (
                        <div className="order-item" key={i}>
                            <div className="order-info">
                                <div className="order-left"></div>
                                <div className="order-right">
                                    <div className="right-header">
                                        <h3>{v.store_name}</h3>
                                        <span>{v.order_state}</span>
                                        <p>{v.order_birth_time}</p>
                                    </div>
                                    <div className="right-footer">
                                        <p>{v.order_brief_info}</p>
                                        <p>￥{v.order_price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default OrderItem