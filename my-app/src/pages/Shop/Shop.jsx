import React from 'react'
import './style.less'
import ShopHead from '../../components/ShopHead/ShopHead.jsx'
import data from '../../static/data/ShopData.js'
import Goods from './Goods/Goods.jsx'
import ShopFooter from './ShopFooter/ShopFooter.jsx'
import ShopComment from '../../components/ShopComment/ShopComment.jsx'
import ShopCart from '../../components/ShopCart/ShopCart.jsx'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

class Shop extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            goodsActive: 'active',
            commentActive: '',
            isFixed: '',
            result: [],
            money: 0,
            number: 0,
            paying: false,
            showPay: false
        }
        this.goodsAdd = this.goodsAdd.bind(this)
        this.goodsMinus = this.goodsMinus.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
    }

    render() {
        const { result } = this.state
        return (
            <div className="shop">
                <ShopHead data={result}/>
                <div id="shop-chose" className={`shop-chose ${this.state.isFixed}`}>
                    <div onClick={() => this.goods()} className={`goods ${this.state.goodsActive}`}>
                        <span>商品</span>
                    </div>
                    <div onClick={() => this.comment()} className={`commnet ${this.state.commentActive}`}>
                        <span>评价</span>
                    </div>
                </div>
                {this.state.goodsActive === 'active'
                ? <Goods data={result} isFixed={this.state.isFixed} add={this.goodsAdd} minus={this.goodsMinus}/>
                : <ShopComment data={result}/>
                }
                {this.state.goodsActive === 'active'
                ? <ShopFooter data={result[0]} money={this.state.money} number={this.state.number} 
                    showCart={this.showCart.bind(this)} checkOut={this.checkOut.bind(this)}/>
                : <div></div>
                }
                <ShopCart data={result[0]} paying={this.state.paying} add={this.goodsAdd} minus={this.goodsMinus} 
                empty={this.emptyCart} showCart={this.showCart.bind(this)}></ShopCart>
                {this.state.showPay && 
                    <div className="check_out_warp">
                        <div className="check_out">
                            <h4 className="check_head">支付确认</h4>
                            <div className="need_pay">{`需支付￥${this.state.money}`}</div>
                            <div className="two_button">
                                <span onClick={ () => { this.checkOut() }}>取消</span>
                                <span onClick={ () => { this.account() }}>支付</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
    //获取本店数据
    componentWillMount() {
        let shopName = this.props.params.shopName
        shopName = shopName.split('').splice(0,4).join('')
        let result = data.filter(item => item.shop_name.indexOf(shopName) !== -1)
        this.setState( { result: result } )
        let number = 0
        let money = 0
        result[0].commodity.forEach((item, index) => {
            item.foods.forEach((v, i) => {
                if(v.num > 0) {
                    number += v.num
                    money += (v.num * v.unit_price)
                    this.setState({
                        number,
                        money
                    })
                }
            })
        })
    }

    componentDidMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0
        let timer 
        let distance = () => {
            // let oDiv = document.getElementById('shop-bg');
            // let oDiv = document.getElementById('shop-chose');
            // let high = oDiv.getBoundingClientRect().top;//另外一种判断距离的方法
            let high = document.documentElement.scrollTop || document.body.scrollTop
            // console.log(high)
            if(high >= 140) {
                this.setState({isFixed: 'isfixed'})
            } else {
                this.setState({isFixed: ''})
            }
        }
        window.addEventListener('scroll',() => {
            if(timer) clearTimeout(timer)
            timer = setTimeout(distance,1)
        })
    }
    //商品
    goods() {
        if('' === this.state.goodsActive) {
            this.setState({
                goodsActive: 'active',
                commentActive: ''
            })
        }  else return 
    }
    //评价
    comment() {
        if('' === this.state.commentActive) {
            this.setState({
                goodsActive: '',
                commentActive: 'active'
            })
        } else return 
    }
    //商品数量加
    goodsAdd(name) {
        //调用辅助函数更改商品数量
        this.changeNum(name, 1)

    }   
    //商品数量减
    goodsMinus(name) {
        this.changeNum(name, -1)
    }
    //更改商品数量辅助函数
    changeNum(name, n) {
        let items = this.state.result
        let money = 0
        let number = 0
        items[0].commodity.map((item, index) => {
            item.foods.map((v, i , arr) => {
                if(v.name === name) {
                    v.num += n
                    this.setState( { result: items } )
                }
                money += (v.num * v.unit_price)//计算总价
                number += v.num//计算总数
                this.setState({
                    money,
                    number
                })
                if(number === 0) {
                    this.setState({
                        result: items,
                        paying: false,
                        number: 0,
                        money: 0
                    })
                }
            })
        })
    }
    //购物车是否显示
    showCart() {
        if(this.state.number === 0) return
        this.setState({ paying: !this.state.paying })
    }
    //清空购物车
    emptyCart() {
        let items = this.state.result
        items[0].commodity.map((item, index) => {
            item.foods.map((v, i) => {
                v.num = 0
                this.setState({
                    result: items,
                    paying: false,
                    number: 0,
                    money: 0
                })
            })
        }) 
    }
    //结算弹窗
    checkOut() {
        this.setState({
            paying: false,
            showPay: !this.state.showPay
        })
    }
    //结算
    account() {
        if(!this.props.isLogin) {
            alert('请先登录')
            hashHistory.push(`/Mine/${this.props.params.shopName}?page=Shop`)
        } else {
            alert('支付成功')
            this.emptyCart()
            this.setState({showPay: false})
        }
    }
}

//--------------react-redex--------------

function mapStateToProps(state) {
    return { isLogin: state.userinfo.isLogin }
}

export default connect(mapStateToProps)(Shop)