import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import MapRouter from './router/MapRouter.jsx'
import initStore from './store/store.js'
//引入全局样式
import './static/css/index.less'

// let defaultState = {
//     userinfo:{address:''},
//     userlogin:{isLogin:false}
// }

const store = initStore()

render(
    <Provider store={store}>
        <MapRouter />
    </Provider>,
    document.getElementById('root')
)