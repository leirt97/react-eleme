import React from 'react'
import HomeHeader from '../HomeHeader/HomeHeader.jsx'
import {Link} from 'react-router'
import './style.less'

function HomeHead(props) {
    let Oimg = require('../../static/images/search/search.png')
    return (
        <div className="home-head">
            <HomeHeader address="北京"/>
            <div className={`head-search ${props.isFixed}`} >
                <Link to='/search'>
                    <img src={Oimg} alt=""/>
                    <p>搜索商家、商品名称</p>
                </Link>
            </div>
        </div>
    )
}

export default HomeHead