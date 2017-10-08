import React from 'react'
import './style.less'

class MineHead extends React.Component {
    // constructor(props,context) {
    //     super(props,context)
    // }

    render() {
        return (
            <div className="mine-head">
                <div className="mine-back" onClick={() => {window.history.back()}}></div>
                <span>{this.props.title}</span>
                <div></div>
            </div>
        )
    }
}

export default MineHead