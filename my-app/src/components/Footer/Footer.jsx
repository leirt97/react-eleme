import React from 'react'
import './style.less'
import {Link} from 'react-router'

class Footer extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            homeActive: null,
            orderAcive: null,
            mineActive: null
        }
        this.clickChange=this.clickChange.bind(this)
        this.homeHandle=this.homeHandle.bind(this)
        this.orderHandle=this.orderHandle.bind(this)
        this.mineHandle=this.mineHandle.bind(this)
    }

    render() {
        let home,order,mine = ''
        home = this.state.homeActive ? 'active' : 'normal'
        order = this.state.orderAcive ? 'active' : 'normal'
        mine = this.state.mineActive ? 'active' : 'normal'
        return (
            <div className="Footer" onClick={(e) => {this.clickChange(e)}}>
                <Link to='/' className="a-home">
                    <div className={`nav-home-${home}`}></div>
                    <span className="home">外卖</span>
                </Link>
                <Link to='/order' className="a-order">
                    <div className={`nav-order-${order}`}></div>
                    <span className="order">订单</span>
                </Link>
                <Link to='/mine/Home' className="a-mine">
                    <div className={`nav-mine-${mine}`}></div>
                    <span className="mine">我的</span>
                </Link>
            </div>
        )
    }

    componentDidMount() {
        switch (this.props.footer) {
            case 'home':
                this.setState({
                    homeActive: true,
                    orderAcive: false,
                    mineActive: false
                })
                break
            case 'order':
                this.setState({
                    homeActive: false,
                    orderAcive: true,
                    mineActive: false
                })
                break
            case 'mine':
                this.setState({
                    homeActive: false,
                    orderAcive: false,
                    mineActive: true
                })
                break
            default:
                break
        }
    }

    clickChange(e) {
        if(/home/.test(e.target.className)) this.homeHandle()
        if(/order/.test(e.target.className)) this.orderHandle()
        if(/mine/.test(e.target.className)) this.mineHandle()
    }  

    homeHandle() {
        if(this.state.homeActive) return 
        else this.setState({
            homeActive: true,
            orderAcive: false,
            mineActive: false
        })
    }

    orderHandle() {
        if(this.state.orderActive) return 
        else this.setState({
            homeActive: false,
            orderAcive: true,
            mineActive: false
        })
    }

    mineHandle() {
        if(this.state.mineActive) return 
        else this.setState({
            homeActive: false,
            orderAcive: false,
            mineActive: true
        })
    }
}

export default Footer