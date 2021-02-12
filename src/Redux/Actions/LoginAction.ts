import { LOGIN, LOGOUT } from '../constants'

const login = (data: any) => {
    console.log("data in login action", data)
    return {
        type: LOGIN,
        is_login: true,
        payload: data
    }
}

const logout = (data: any) => {
    console.log("data in logout action", data)
    return {
        type: LOGOUT,
        is_login: false,
        payload: data
    }
}

export { login, logout }
