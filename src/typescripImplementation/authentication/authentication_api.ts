import { firebase, db } from '../../util/firebase'

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

interface USER_ADDITIONAL_INFORMATION {
    mobileNumber: string,
    qualification: string,
    designation: string,
    company: string,
    address: string,
    imgUrl: string,
    UID: any
}

interface USER_ID {
    userId: any
}

const REGISTER_USER = async (register: USER_CREDENTIALS) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(register.email, register.password)
    } catch (error) {
        return error.message
    }
}

const REGISTER_USER_SECOND_STEP = async (userAdditionalInfo: USER_ADDITIONAL_INFORMATION) => {
    try {
        await db.collection('userDetails').add({
            mobileNumber: userAdditionalInfo.mobileNumber,
            qualification: userAdditionalInfo.qualification,
            designation: userAdditionalInfo.designation,
            company: userAdditionalInfo.company,
            address: userAdditionalInfo.address,
            profilePicture: userAdditionalInfo.imgUrl,
            userId: userAdditionalInfo.UID,
        })
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

const GET_USER_INFORMATION = async (userInformation: USER_ID) => {
    try {
        return await db.collection('userDetails').where('userId', '==', userInformation.userId).get()
    } catch (error) {
        return error.message
    }
}

export {
    REGISTER_USER,
    REGISTER_USER_SECOND_STEP,
    LOGIN_USER,
    FORGET_PASSWORD,
    RESET_PASSWORD,
    GET_USER_INFORMATION
}
