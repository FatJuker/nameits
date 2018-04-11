const checkForErrors = (errorCode, ele) => {
    clearErrors()
    renderErrorMsg(errorDict[errorCode], ele)
}

modal.addEventListener("submit", (e) => {
    e.preventDefault()
    if (captchaCheckbox.checked === true && newPassword.value === confirmPassword.value) {
        const email = email.value
        const password = password.value
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
                checkForErrors(error.code, modal)

            }

        )
    }

})

exitButton.addEventListener("click", (e) => {
    modal.reset()
    clearErrors()
})

modalOverlay.addEventListener("click", (e) => {
    modal.reset()
    clearErrors()
})
