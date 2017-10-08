import React from 'react'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router'
import './style.less'

class HomeCategory extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            index: 0,
            category: [
                ['美食','甜品饮食','商超便利','预定早餐','果蔬生鲜','新店特惠','大牌必吃','晚餐'],
                ['浪漫鲜花','医疗健康','汉堡薯条','包子粥店 ','地方菜系','披萨意面','麻辣烫','南瓜汤'],
                ['浪漫鲜花','医疗健康','汉堡薯条','包子粥店 ','地方菜系','披萨意面','麻辣烫'],
            ]
        }
    }

    render() {
        let opt = {
            auto: 2500,
            callback: index => this.setState({ index })
        }
        return (
            <div className="home-category">
                <ReactSwipe swipeOptions={ opt }>
                { this.state.category.map((item,i) => {
                    return (
                    <div key={ i } className='category-items'>
                        <ul>
                            { item.map((text,j) => {
                                let imgObj = require(`../../static/images/category/${i+1}-${j+1}.png`)
                                return (
                                <Link key={ j } to={`/category/${text}`}>
                                    <li>
                                        <img src={imgObj} alt={ text }/>
                                        <span>{ text }</span>
                                    </li>
                                </Link>
                                )
                            })}
                        </ul>
                    </div>
                    )
                })}
                </ReactSwipe>
                <div className='index-container'>
                    <ul>
                        <li className={ this.state.index === 0 ? 'selected' : ''}></li>
                        <li className={ this.state.index === 1 ? 'selected' : ''}></li>
                        <li className={ this.state.index === 2 ? 'selected' : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomeCategory