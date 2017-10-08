import React from 'react'
import List from '../../../components/List/List.jsx'
import data from '../../../static/data/HomeListData.js'
import './style.less'

class HomeList extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            isFetch: true,
            data: [],
            hasMore: false,
            time: 0
        }
    }

    render() {
        return (
            <div className="home-list">
                <div className="empty"></div>
                <h2>推荐商家</h2>
                {this.state.isFetch ? <div className="load"></div> : <List data={this.state.data}/>}
                {this.state.hasMore ? <p onClick={() => {this.loadMore()}}>点击加载更多...</p> : <p>没有更多了...</p>}              
            </div>
        )
    }

    componentDidMount() {
        this.setState({data: data})
        let time = Math.floor(Math.random()*500)
        console.log(time)
        let timeHandle = setTimeout(() => {this.setState({
            isFetch: false,
            hasMore: true
        })}, time)
    }

    loadMore() {
        this.setState({time: this.state.time + 1})
        this.setState({data: this.state.data.concat(data)})
        if(this.state.time >= 1) {
            this.setState({hasMore: false})
        }
    }
}

export default HomeList