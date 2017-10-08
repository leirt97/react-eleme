import React from 'react'
import './style.less'
import data from '../../static/data/HomeListData.js'
import List from '../../components/List/List.jsx'
import {hashHistory} from 'react-router'

class Category extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            keyWords: '',
            data: []
        }
    }

    render() {
        return (
            <div className="category">
                <div className="category-head">
                    <div className="back" onClick={() => {hashHistory.push('/')}}></div>
                    <h3>{this.state.keyWords}</h3>
                    <div></div>
                </div>
                <List data={this.state.data} />
                <p>已加载全部...</p>
            </div>
        )
    }

    componentDidMount() {
        let {keyWords} = this.props.params
        console.log(keyWords)
        this.setState({keyWords: keyWords})
        console.log(data)
        let result = data.filter(item => 
            item.category.indexOf(keyWords) !== -1
        )
        this.setState({data: result})
    }
}

export default Category