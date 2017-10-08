import React from 'react'
import './style.less'
import {Link} from 'react-router'
import Star from '../Star/Star.jsx'

class Item extends React.Component {
    // constructor(props,context) {
    //     super(props,context)
    // }

    render() {
        const data = this.props.data
        const minLength = 7
        let arr = data.shop_name.split('')
        if(arr.length>minLength){
            arr = arr.splice(0,minLength).concat('...')
            data.shop_name = arr.join('')
        }
        let isBrand,isBao,isPiao,isZhun,isOntime,isFengniao = ''
        isBrand = data.brand ? 'show' : 'hide'
        isBao = data.bao ? 'show' : 'hide'
        isPiao = data.piao ? 'show' : 'hide'
        isZhun = data.zhun ? 'show' : 'hide'
        isOntime = data.on_time ? 'show' : 'hide'
        isFengniao = data.fengniao ? 'show' : 'hide'
        return (
            <div className="item">
                <Link to={`/shop/${data.shop_name}`}>
                    <div className="item-logo">
                        <div></div>
                    </div>
                    <div className="item-detail">
                        <div className="detail-top">
                            <div className="detail-title">                            
                                <span className={isBrand}>品牌</span>
                                <h3>{data.shop_name}</h3>
                            </div>
                            <div className="detail-three">                            
                                <span className={isBao}>保</span>                                                       
                                <span className={isPiao}>票</span>                            
                                <span className={isZhun}>准</span>
                            </div>
                        </div>
                        <div className="detail-middle">
                            <Star star={data.shop_rating}/>
                            <div className="icon">                            
                                <div className={`icon-1 ${isOntime}`}>准时达</div>                                                        
                                <div className={`icon-2 ${isFengniao}`}>蜂鸟专送</div>
                            </div>                            
                        </div>
                        <div className="detail-bottom">
                            <div className="money">
                                <span>￥{data.start_send}起送</span>
                                <span>|</span>
                                <span>配送费￥{data.send_cost}</span>
                            </div>
                            <div className="distance">
                                <span>{data.distance}m</span>
                                <span>|</span>
                                <span>{data.estimate_time}分钟</span>
                            </div>
                        </div>
                    </div>
                </Link>                
            </div>
        )
    }
}

export default Item