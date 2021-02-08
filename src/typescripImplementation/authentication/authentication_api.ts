import { firebase } from '../../util/firebase'

interface USER_CREDENTIALS {
    email: string,
    password: string
}

interface USER_FORGET_PASSWORD {
    email: string
}

interface USER_RESET_PASSWORD {
    oobCode: any,
    password: string
}

const REGISTER_USER = async (register: USER_CREDENTIALS) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(register.email, register.password)
    } catch (error) {
        return error.message
    }
}

const LOGIN_USER = async (login: USER_CREDENTIALS) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(login.email, login.password)
    } catch (error) {
        return error.message
    }
}

const FORGET_PASSWORD = async (forgetPassword: USER_FORGET_PASSWORD) => {
    try {
        await firebase.auth().sendPasswordResetEmail(forgetPassword.email)
    } catch (error) {
        return error.message
    }
}

const RESET_PASSWORD = async (resetPassword: USER_RESET_PASSWORD) => {
    try {
        await firebase.auth().confirmPasswordReset(resetPassword.oobCode, resetPassword.password)
    } catch (error) {
        return error.message
    }
}

export {
    REGISTER_USER,
    LOGIN_USER,
    FORGET_PASSWORD,
    RESET_PASSWORD
}
