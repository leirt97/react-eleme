import userinfo from './userinfo.js'
import goods from './goods.js'
import number from './number.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    userinfo,
    goods,
    number
})

export default rootReducer

// 状态
// let state = {
//     userinfo: {
//         login: 'bolean',
//     },
//     goods: {
//          goodsInfo: [
//                  1.
//                  { name: 'string', cost: 'number' ,count: 'number'},
//                  { name: 'string', cost: 'number' ,count: 'number'},
//                  ...
//          ]
// }
//      goods: {
//         2.
//         goodNames: [ 'string', 'string', '...' ],
//         goodCosts: [ 'number', 'number', '...' ],
//         goodCounts: [ 'number', 'number', '...' ]
//      },
//      number: {
//          n: 0
//      }
// }