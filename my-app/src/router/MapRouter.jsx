import React from 'react'
import { Router , Route , hashHistory , IndexRoute } from 'react-router'
import App from '../pages/indexApp.jsx'
import Home from '../pages/Home/indexHome.jsx'
import Search from '../pages/Search/Search.jsx'
import Category from '../pages/Category/Category.jsx'
// import Address from '../pages/Address/Address.jsx'
import Shop from '../pages/Shop/Shop.jsx'
import Order from '../pages/Order/Order.jsx'
import Mine from '../pages/Mine/Mine.jsx'

class MapRouter extends React.Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    {/* <Route path='/address' component={Address}/> */}
                    <Route path='/search' component={Search}/>
                    <Route path='/category/:keyWords' component={Category}/>
                    <Route path='/shop/:shopName' component={Shop}/>
                    <Route path='/order' component={Order}/>
                    <Route path='/mine/:shopName' component={Mine}/>
                </Route>
            </Router>
        )
    }
}

export default MapRouter