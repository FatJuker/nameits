const errorDict = {
    "auth/weak-password": "Password needs to be at least 6 characters.",
    "auth/email-already-in-use": "Email already in use.",
    "auth/invalid-email": "Invalid Email.",
    "auth/user-disabled": "This account has been disabled.",
    "auth/user-not-found": "There is no evidence of this user.",
    "auth/wrong-password": "This password is invalid.",
}

const renderErrorMsg = (errorCode, ele) => {
    const displayError = document.createElement("p")
    displayError.classList.add("error")
    displayError.innerText = errorCode
    ele.appendChild(displayError)

}
const clearErrors = () => {
    const error = document.querySelector(".error")
    if (error) {
        error.remove()
    }
}
