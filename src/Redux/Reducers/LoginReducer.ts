import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants'
// import * as type from '../types';

const initialState = {
    login: {},
    is_login: false,
    login_error: ''
}

type Action = {
    type: string,
    payload: object,
    message: string
}

// type loginInitialState = {
//     login: {
//         email: string,
//         password: string
//     }
// }

const authReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case LOGIN:
            console.log("data in login reducer", action)
            return {
                ...state,
                login: action.payload
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                is_login: true
            }

        case LOGIN_FAILED:
            return {
                ...state,
                is_login: false,
                login_error: action.message
            }

        case LOGOUT:
            return {

            }
        default:
            return state
    }
}

export { authReducer }
