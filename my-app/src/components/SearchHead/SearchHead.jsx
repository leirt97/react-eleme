import React from 'react'
import './style.less'
// import SearchInput from '../SearchInput/SearchInput.jsx'
// import {hashHistory} from 'react-router'
// import data from '../../static/data/HomeListData.js'

class SearchHead extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            data: [],
            value: ''
        }
    }

    render() {      
        console.log(this.state.value)  
        let imgObj = require('../../static/images/search/search.png')
        return (
            <div className="search-head">
                <div className="back" onClick={() => {window.history.back()}}></div> 
                <div className="search-input">
                    <img src={imgObj} alt=""/>
                    <input type="search" placeholder="请输入商家或商品名称" 
                    onChange={e => this.changeHandle(e)}
                    onKeyUp={e => this.keyUpHandle(e)}
                    value={this.state.value}
                    />
                </div>
                <span  onClick={() => {this.props.search(this.state.value)}}>搜索</span>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({value: nextProps.value})
    }

    keyUpHandle(e) {
        if(e.keyCode !== 13) return 
        else {
            this.props.search(this.state.value)
        }
    }

    changeHandle(e) {
        this.setState({value: e.target.value})
    }


}

export default SearchHead