import TodoComponent from '../components/TodoComponent'
import { connect } from 'react-redux'
import { getTodoList } from '../Redux/Actions/TodoAction'

const mapStateToProps = (state: any) => {
    todos: state.todoData
}

const mapDispatchToProps = (dispatch: any) => ({
    getTodoListHandler: () => dispatch(getTodoList())

})

// const mapDispatchToProps = (dispatch: any) => {
//     getTodoListHandler: () => dispatch(getTodoList())
// }

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent)
