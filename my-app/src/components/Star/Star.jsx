import React from 'react'
import './style.less'

class Star extends React.Component {
    // constructor(props,context) {
    //     super(props,context) 
    // }

    render() {
        let star = this.props.star || 0
        star = Math.floor(star)
        return (
            <div className="star">
                {[1,2,3,4,5].map((item,i) => {
                    const lightClass = star >= item ? 'light' : 'dark'
                    return <div key={i} className={`star-icon ${lightClass}`}></div>
                })}
            </div>
        )
    }
}

export default Star