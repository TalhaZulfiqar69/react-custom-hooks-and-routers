import { Login } from '../typescripImplementation/authentication/Login'
import { connect } from 'react-redux'
import { login, logout } from '../Redux/Actions/LoginAction'
const mapStateToProps = (state: any) => {
    userData: state.auth
}

const mapDispatchToProps = (dispatch: any) => ({
    loginHandler: (data: any) => dispatch(login(data)),
    logoutHandler: (data: any) => dispatch(logout(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
