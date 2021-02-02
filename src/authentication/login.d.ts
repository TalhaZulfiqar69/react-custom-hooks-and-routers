interface Login {
    email: string,
    password: string
}

const login = () => {
    firebase
      .auth()
      // .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .signInWithEmailAndPassword(Login.email, Login.password)
      .then((userCredential) => {
        setPasswordError('')
        var user = userCredential.user

        setEmail('')
        setPassword('')

        history.push('/profile')
      })
      .catch((error) => {
        setPasswordError('Email or password is incorrect')
        const errorCode = error.code
        const errorMessage = error.message
      })
}
