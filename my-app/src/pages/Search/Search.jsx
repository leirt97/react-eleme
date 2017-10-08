import React from 'react'
import SearchHead from '../../components/SearchHead/SearchHead.jsx'
import SearchHot from '../../components/SearchHot/SearchHot.jsx'
import List from '../../components/List/List.jsx'
import data from '../../static/data/HomeListData.js'
import './style.less'

class Search extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            data: [],
            hasMore: false,
            isSearch: false,
            value: ''
        }
    }
    
    render() {
        return (
            <div className="search">
                <SearchHead search={this.search.bind(this)} value={this.state.value}/>
                {this.state.data.length > 0
                ? <List data={this.state.data} />
                : <SearchHot search={this.search.bind(this)}/>
                }
                {!this.state.hasMore && this.state.data.length > 0
                ? <p>没有更多了...</p>
                : <p></p>
                }
                {this.state.isSearch && !this.state.hasMore && this.state.data.length === 0
                ? <div className="search-none"><p>没有找到哦,你可以尝试上面那的热门搜索</p><div className="not-found"></div></div>
                : <p></p>
                } 
            </div>
        )
    }

    search(value) {
        if(!value) {
            alert('搜索内容不能为空') 
            return 
        }
        let result = data.filter(item => 
            item.shop_name.indexOf(value) !== -1
        )
        this.setState({
            data: result,
            isSearch: true,
            value: value
        })
    }
}

export default Search