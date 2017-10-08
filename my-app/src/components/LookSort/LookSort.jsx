import React from 'react'
import './style.less'

class LookSort extends React.Component {
    // constructor(props,context) {
    //     super(props,context)
    // } 

    render() {
        const { data } = this.props
        return (
            <div className="look-sort">
                <div className="look-scroll" id="look-scroll">
                    {data.commodity.map((items,i) => {
                        return (
                        <div key={i} className="look-items">
                            <h3>{items.name}</h3>
                            {items.foods.map((item,j) => {
                                return (
                                <div key={j} className="look-item">
                                    <div className="look-detail">
                                        <div className="look-detail-img"></div>
                                        <div className="look-detail-text">
                                            <h3>{item.name}</h3>
                                            <p>{item.tips}</p>
                                            <div className="look-detail-money">
                                                <p>{`￥${item.unit_price}`}</p>
                                                <div className="money-all">                                                    
                                                    <span className={ `money-minus ${ item.num > 0 ? 'show' : 'hide' }` }
                                                        onClick={ this.props.minus.bind(this, item.name) }
                                                        >-</span>
                                                    <p className={ `money-num ${ item.num > 0 ? 'show' : 'hide' }` }>{ item.num }</p>
                                                    <span className="money-add" onClick={ this.props.add.bind(this, item.name) }>+</span>
                                                </div>                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                        )
                    })}
                </div>     
            </div>
        )
    }
}


export default LookSort