import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../Redux/Reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Saga'
const myMiddleware = (store: any) => {
    return (next: any) => (action: any) => {
        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action)

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk, sagaMiddleware, logger))
)

sagaMiddleware.run(rootSaga)

// , composeWithDevTools()
// store.dispatch({
//     type: 'COUNTER',
//     text: 'Understand the middleware'
// })

// store.dispatch({
//     type: 'TODO_LIST',
//     text: 'TODO_LIST is returned'
// });
export default store
