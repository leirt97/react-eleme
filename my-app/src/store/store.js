import {createStore} from 'redux'
import rootReducer from '../reducers/index.js'

export default function initStore(defaultState) {
    return createStore(
        rootReducer,
        defaultState
    )
}