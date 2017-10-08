import React from 'react'
import './style.less'

function HomeHeader(props) {
    return (
        <div className="home-header">
            <p>{props.address}(假定位0.0)</p>
        </div>
    )
}

export default HomeHeader