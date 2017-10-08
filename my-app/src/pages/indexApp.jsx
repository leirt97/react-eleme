import React from 'react'
import * as actionsFromOtherFile from '../actions/userinfo.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './style.less'

class App extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            isFetch: true
        }
    }

    render() {
        return (
            <div className="app">
                {/* 根据是否在判断加载 */}
                {this.state.isFetch ? <div className="app-load"></div> : <div>{this.props.children}</div>}
            </div>
        )
    }

    componentDidMount() {
        //更新状态
        this.props.actions.quit({isLogin:false})
        //模拟加载时间
        let time = Math.floor(Math.random(1000)*1000)   
        setTimeout(() => {this.setState({isFetch: false})}, time)
    }
}

//------------------------------
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
)(App)

