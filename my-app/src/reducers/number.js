import * as actionTypes from '../constants/userinfo.js'

export default (state={ n: 0 }, action) => {
    switch(action.type) {
        case actionTypes.N_ADD:
            return Object.assign(
                {}, state,
                { n: action.payload }
            )
        default:
            return state
    }
}