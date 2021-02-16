import { TODO_LIST, ADD_TODO, TODO_BY_ID, UPDATE_TODO, DELETE_TODO } from '../constants'
import axios from 'axios'

export const getTodoList = () => {
    return (dispatch: any) => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                dispatch({
                    type: TODO_LIST,
                    todos_list: persons
                })
            })
    }
}
