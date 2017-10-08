import React from 'react'
import './style.less'
import Star from '../Star/Star.jsx'

class CommentItem extends React.Component {
    render() {
        let {data} = this.props
        return (
            <div className="comment-item">
                <div className="comment-left"></div>
                <div className="comment-right">
                    <div className="right-user">
                        <p>{data.username}</p>
                        <p>{data.time}</p>
                    </div>
                    <div className="right-star">
                        <Star star={data.evaluate_code}/>
                        <p>{data.send_time}分钟送达</p>
                    </div>
                    <div className="right-comment">
                        <p>{data.evaluate_details}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentItem