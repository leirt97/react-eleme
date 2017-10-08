import React from 'react'
import Item from '../Item/Item.jsx'
import './style.less'

class List extends React.Component {
    // constructor(props,context) {
    //     super(props,context)
    // }

    render() {
        return (
            <div className="list">
                {this.props.data.map((item,i) => {
                    return <Item key ={i} data={item}/>
                })}
            </div>
        )
    }
}

export default List