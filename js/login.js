login.addEventListener("click", (e) => {
    firebase.auth().signInWithEmailAndPassword(newEmail.value, newPassword.value).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message

        /*if (errorCode === "auth/weak-password") {
            const ele = newPassword
        }

        else if (errorCode === "auth/email-already-in-use") {
            const ele = newEmail
        }*/
        clearErrors()
        renderErrorMsg(errorDict[errorCode], main)
    })
})
