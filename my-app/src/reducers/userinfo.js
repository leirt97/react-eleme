import * as actionTypes from '../constants/userinfo.js'

export default function userinfo(state = {} , action) {
    // const {type , payload} = action
    // console.log('reducers update')
    // console.log(type)
    // console.log(payload)
    switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
            return action.payload
        case actionTypes.USERINFO_QUIT:
            return action.payload
        default:
            return state
    }
}
