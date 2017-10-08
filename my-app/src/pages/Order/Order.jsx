import React from 'react'
import './style.less'
import Footer from '../../components/Footer/Footer.jsx'
import Head from '../../components/Head/Head.jsx'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionsFromOtherFile from '../../actions/userinfo.js'
import Login from '../Mine/Login/Login.jsx'
import OrderItem from '../../components/OrderItem/OrderItem.jsx'
import data from '../../static/data/OrderListData.js'

class Order extends React.Component {
    // constructor(props,context) {
    //     super(props,context)
    // }

    render() {
        let title = this.props.userinfo.isLogin ? '订单' : '登录'
        return (
            <div className="order">
                <Head title={title} />
                {this.props.userinfo.isLogin
                ?<OrderItem data={data}/>
                :<Login/>
                }
                <Footer footer="order"/>
            </div>
        )
    }
}

//----------------react-redux------------

function mapStateToProps(state) {
    return {userinfo: state.userinfo}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order)