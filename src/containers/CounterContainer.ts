import Counter from '../components/CounterComponent'
import { connect } from 'react-redux'
import { increment, decrement } from '../Redux/Actions/CounterAction'

const mapStateToProps = (state: any) => ({
    countData: state.counter,
})

const mapDispatchToProps = (dispatch: (arg0: { type: string }) => any) => ({
    incrementHandler: () => dispatch(increment()),
    decrementHandler: () => dispatch(decrement()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

// redux sause
// redux saga
// custom triggers
// sequelizer 
// postgres
// routers
// and axios

// Functions, https callables
