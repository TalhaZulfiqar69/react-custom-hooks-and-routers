import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_SUCCESS, DECREMENT, DECREMENT_SUCCESS } from '../constants'

export function* helloSaga() {
    console.log('Hello Sagas!')
}

function* getIncrement(action: any) {
    yield put({
        type: INCREMENT_SUCCESS
    })
}

function* getDecrement() {
    yield put({
        type: DECREMENT_SUCCESS
    })
}

export function* watchIncrementDecrementValueChange() {
    yield takeLatest(INCREMENT, getIncrement)
    yield takeLatest(DECREMENT, getDecrement)
}
