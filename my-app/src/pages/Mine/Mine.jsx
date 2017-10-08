import React from 'react'
import './style.less'
import Footer from '../../components/Footer/Footer.jsx'
import Head from '../../components/Head/Head.jsx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionsFromOtherFile from '../../actions/userinfo.js'
import Login from './Login/Login.jsx'
import Info from './Info/Info.jsx'

class Mine extends React.Component {
    // constructor(props,context) {
    //     super(props,context)
    // }

    render() {
        let title = this.props.userinfo.isLogin ? '我的' : '登录'
        return (
            <div className="mine">
                <Head title={title}/>
                {this.props.userinfo.isLogin
                ?<Info />
                :<Login props={this.props}/>
                }
                <Footer footer="mine"/>
            </div>
        )
    }

}


//---------------react-redux关联绑定------------------

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
)(Mine)