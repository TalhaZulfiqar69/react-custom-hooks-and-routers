import { firebase } from '../util/firebase'

interface USER_CREDENTIALS {
  email: string,
  password: string
}

const REGISTER_USER = async (register: USER_CREDENTIALS) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(register.email, register.password);
  } catch (error) {
    return error.message;
  }
};

const LOGIN_USER = async (login: USER_CREDENTIALS) => {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(login.email, login.password);
  } catch (error) {
    return error.message;
  }
};

export { REGISTER_USER, LOGIN_USER }
