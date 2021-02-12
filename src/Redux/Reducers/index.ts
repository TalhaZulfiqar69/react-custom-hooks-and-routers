import { combineReducers } from 'redux'
import { counterReducer } from './CounterReducer'
import { authReducer } from './LoginReducer'
const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
})

export default rootReducer
