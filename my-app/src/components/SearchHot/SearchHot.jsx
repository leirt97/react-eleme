import React from 'react'
import './style.less'

class SearchHot extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            data: ['烧烤','麦当劳','川味','蛋糕','炸鸡']
        }
    }

    render() {
        return (
            <div className="search-hot">
                <h2>热门搜索</h2>
                <ul>
                    {this.state.data.map((v,i) => {
                        return (
                            <li key={i} onClick={() => {this.props.search(v)}}>{v}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default SearchHot