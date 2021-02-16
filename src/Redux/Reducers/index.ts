import { combineReducers } from 'redux'
import { counterReducer } from './CounterReducer'
import { authReducer } from './LoginReducer'
import { todoReducer } from './TodoReducer'
const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    todoData: todoReducer
})

export default rootReducer
