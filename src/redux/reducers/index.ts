import indexReducer from './indexReducer'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: indexReducer
})

export default allReducers
