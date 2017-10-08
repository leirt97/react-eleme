import React from 'react'
import './style.less'

class Address extends React.Component {
    constructor(props,context) {
        super(props,context)
    }

    render() {
        return (
            <div className="address">
                <div className="address-head">
                    <div className="address-back"></div>
                    <div>请选择您当前的地址</div>
                </div>
            </div>
        )
    }
}

export default Address