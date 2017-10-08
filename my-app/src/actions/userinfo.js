import * as actionTypes from '../constants/userinfo.js'

export const login = (boole) => {
    // console.log('login')
    return {
        type: actionTypes.USERINFO_LOGIN,
        payload: boole
        //payload: isLogin: true
    }
}

export const quit = (boole) => {
    // console.log('quit')
    return {
        type: actionTypes.USERINFO_QUIT,
        payload: boole
    }
}

export const goods = (aGoods) => {
    console.log('goodsadd')
    return {
        type: actionTypes.A_GOODS,
        payload: aGoods
        //payload: goodsInfo: { ... }
    }
}

export const add = (i) => {
    console.log('add')
    i += 1
    return {
        type: actionTypes.N_ADD,
        payload: i
    }
}