import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { increment, decrement } from './actions/indexAction'
const Sample = (props: any) => {
    const counter = useSelector((state: any) => state.state)
    const dispatch = useDispatch()

    return (
        <div>
            {' '}
            <br />
            <br />
            <br />
            Counter: {counter}
            <h1>Sample Component</h1>
            <button onClick={() => dispatch(increment)}>Increment</button>
            <button onClick={() => dispatch(decrement)}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        counter: state.counter,
    }
}
export default connect(mapStateToProps)(Sample)
