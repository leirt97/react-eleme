import React from 'react'
import './style.less'
// import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionsFromOtherFile from '../../../actions/userinfo.js'

class Info extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.quit.bind(this)
    }

    render() {
        return (
            <div className="info">
                <div className="info-user">
                    <div className="user-via"></div>
                    <div className="user-info">
                        <h3>someone</h3>
                        <p>185****8732</p>
                    </div>
                </div>
                <div className="info-three">
                    <div className="three-money">
                        <span>
                            <h3>0.00</h3>
                            <p>元</p>
                        </span>
                        <p>余额</p>
                    </div>
                    <div className="three-discount">
                        <span>
                            <h3>3</h3>
                            <p>个</p>
                        </span>
                        <p>优惠</p>
                    </div>
                    <div className="three-integral">
                        <span>
                            <h3>6250</h3>
                            <p>分</p>
                        </span>
                        <p>积分</p>
                    </div>
                </div>
                <div className="info-address">
                    <p>我的地址</p>
                    <span>&gt;</span>
                </div>
                <div className="info-address">
                    <p>积分商城</p>
                    <span>&gt;</span>
                </div>
                <div className="info-address">
                    <p>服务中心</p>
                    <span>&gt;</span>
                </div>
                <div className="info-download">
                    <p>下载饿了么APP</p>
                    <span>&gt;</span>
                </div>
                <div className="user-quit" onClick={() => this.quit()}>退出登录</div>
            </div>
        )
    }

    quit() {
        this.props.actions.quit({isLogin: false})
    }
}


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
)(Info)