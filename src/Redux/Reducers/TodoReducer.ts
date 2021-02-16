import { TODO_LIST, ADD_TODO, TODO_BY_ID, UPDATE_TODO, DELETE_TODO } from '../constants'
const initialState = {
    loading: false,
    todos: [],
    error: null
}

export const todoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TODO_LIST:
            return {
                ...state,
                loading: true,
                todos: action.todos_list
            };
        case ADD_TODO:

            return {
                ...state,

            };
        case TODO_BY_ID:

            return {
                ...state,

            };
        case UPDATE_TODO:

            return {
                ...state,

            };
        case DELETE_TODO:

            return {
                ...state,

            };

        default:
            return {
                state
            };
    }
}
