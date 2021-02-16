import { all } from 'redux-saga/effects'
import { helloSaga, watchIncrementDecrementValueChange } from './practiceSaga'
import { hiSaga } from './LoginSaga'

export default function* rootSaga() {
    yield all([
        watchIncrementDecrementValueChange(),
        helloSaga(),
        hiSaga()
    ])
}
