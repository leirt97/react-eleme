import React from 'react'
import './style.less'

class ShopHead extends React.Component {
    // constructor(props,context) {
    //     super(props,context)
    // }

    render() {
        let data = this.props.data[0]
        return (
            <div className="shop-head">
                <div className="shop-bg" id="shop-bg">
                    <div className="shop-back" onClick={() => {window.history.back()}}></div>
                    <div className="shop-detail">
                        <div className="shop-logo"></div>
                        <div className="shop-info">
                            <h3>{data.shop_name}</h3>
                            <p>{`${data.peisong} / 
                                ${data.estimate_time}分钟送达 / 
                                配送费￥${data.send_cost}`}
                            </p>
                            <p>{`公告：${data.notice}`}</p>
                        </div>
                    </div>
                    <div className="shop-activity">
                        <span>首</span>
                        <p>{`${data.discount}`}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopHead