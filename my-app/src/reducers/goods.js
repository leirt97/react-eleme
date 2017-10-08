import * as actionTypes from '../constants/userinfo.js'

let defaultState = { goodsInfo: [] }

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.A_GOODS:
            return action.payload
        default: 
            return state
    }
}