import React from 'react'
import './style.less'

class SearchInput extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state = {
            value: ''
        }
    }

    render() {
        let imgObj = require('../../static/images/search/search.png')
        return (
            <div className="search-input">
                <img src={imgObj} alt=""/>
                <input type="search" placeholder="请输入商家或商品名称" onChange={e => this.changeHandle(e)}/>
            </div>
        )
    }

    // componentDidMount() {
    //     setState
    // }
    changeHandle(e) {
        this.setState({value: e.target.value})
    }
}

export default SearchInput