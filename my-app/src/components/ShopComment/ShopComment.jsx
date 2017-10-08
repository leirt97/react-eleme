import React from 'react'
import './style.less'
import Star from '../Star/Star.jsx'
import CommentItem from '../CommentItem/CommentItem.jsx'

class ShopComment extends React.Component {
    // constructor(props,context) {
    //     super(props,context)
    // }

    render() {
        const data = this.props.data[0]
        let h_or_l = data.high_or_low ? '高' : '低'

        return (
            <div className="shop-comment">
                <div className="comment-info">
                    <div className="info-left">
                        <div className="left-number">
                            <h2>{data.shop_rating}</h2>
                            <span>综合评价</span>
                            <p>{`${h_or_l}于周边商家${data.h_l_percent}%`}</p>
                        </div>
                    </div>
                    <div className="info-right">
                        <div className="right-star">
                            <span>服务态度</span>
                            <Star star={data.service_code}/>
                        </div>
                        <div className="right-star">
                            <span>商品评价</span>
                            <Star star={data.foods_code}/>
                        </div>
                        <div className="right-time">
                            <span>送达时间</span>
                            <span>{`${data.estimate_time}`}分钟</span>
                        </div>
                    </div>
                </div>
                {data.evaluate.map((v,i) => {
                    return (
                    <CommentItem key={i} data={v}/>    
                    )
                })}
            </div>
        )
    }
}

export default ShopComment