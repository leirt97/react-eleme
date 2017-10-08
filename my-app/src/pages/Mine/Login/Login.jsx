import React from 'react'
import './style.less'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionsFromOtherFile from '../../../actions/userinfo.js'
import data from '../../../static/data/userinfoData.js'
import { hashHistory } from 'react-router'

class Login extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state = {
            value1: '',
            value2: ''
        }
        this.username.bind(this)
        this.password.bind(this)
        this.login.bind(this)
    }

    render() {
        // /shop/:shopName
        return (
            <div className="login">
                <input type="text" placeholder="用户名(是someone)" onChange={(e) => {this.username(e)}}/>
                <input type="password" placeholder="密码(是someone)" onChange={(e) => {this.password(e)}}/>
                <div onClick={() => this.login()}>登录</div>
            </div>
        )
    }

    username(e) {//用户名文本框受控
        this.setState({value1: e.target.value})
    }

    password(e) {//密码输入框受控
        this.setState({value2: e.target.value})
    }

    login() {
        if(this.state.value1 === data.username && this.state.value2 === data.password) {
            this.props.actions.login({isLogin: true})
            const { props } = this.props
            console.log(props)
            if(props) 
                if(props.location.query.page === 'Shop')
                    hashHistory.push(`/${ props.location.query.page }/${ props.params.shopName }`)
        }
    }
}


//-------------react-redux关联绑定---------------
function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)