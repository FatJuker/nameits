 const config = {
  apiKey: "AIzaSyAG-AsgKydeYqU-g5OuiTCNGn8t8BfsepA",
  authDomain: "rate-em-3d20e.firebaseapp.com",
  databaseURL: "https://rate-em-3d20e.firebaseio.com",
  projectId: "rate-em-3d20e",
  storageBucket: "rate-em-3d20e.appspot.com",
  messagingSenderId: "96444177029"
 };
 firebase.initializeApp(config);
 const auth = firebase.auth()
 // Find Elements
 const main = document.querySelector("main")
 const signUp = document.getElementById("sign")
 const body = document.querySelector("body")
 const modalOverlay = document.createElement("div")
 const modal = document.createElement("form")
 const exitButton = document.createElement("i")
 const newEmail = document.createElement("input")
 const newPassword = document.createElement("input")
 const confirmPassword = document.createElement("input")
 const captcha = document.createElement("div")
 const captchaCheckbox = document.createElement("input")
 const email = document.getElementById("modalEmail")
 const password = document.getElementById("modalPassword")
 const submit = document.createElement("button")
 const login = document.getElementById("login")
 modalOverlay.classList.add("overlay")
 body.appendChild(modalOverlay)



 // Functions

 //1. Sign Up Modal code
 const createSignUpFormElements = () => {

  modal.classList.add("modal")

  exitButton.setAttribute("id", "exitButton")
  modal.appendChild(exitButton)
  exitButton.addEventListener("click", () => {
   modalOverlay.classList.add("hide")
   modal.classList.add("hide")
  })
  newEmail.setAttribute("placeholder", "Email")
  newEmail.setAttribute("type", "email")
  newEmail.setAttribute("required", true)
  newEmail.setAttribute("id", "modalEmail")
  newEmail.style.color = "black"
  const emailLabel = document.createElement("label")
  emailLabel.innerText = "Email:"

  const passwordLabel = document.createElement("label")
  passwordLabel.innerText = "Password:"

  newPassword.setAttribute("type", "password")
  newPassword.setAttribute("required", true)
  newPassword.setAttribute("id", "modalPassword")
  //
  const confirmPasswordLabel = document.createElement("label")
  confirmPasswordLabel.innerText = "Confirm Password:"
  confirmPassword.setAttribute("placeholder", "Confirm Password")
  confirmPassword.setAttribute("type", "password")
  confirmPassword.setAttribute("required", true)

  // append modal
  modal.appendChild(emailLabel)
  modal.appendChild(newEmail)
  modal.appendChild(passwordLabel)
  modal.appendChild(newPassword)
  modal.appendChild(confirmPasswordLabel)
  modal.appendChild(confirmPassword)


  captchaCheckbox.setAttribute("type", "checkbox")


  captcha.appendChild(captchaCheckbox)
  const captchaLabel = document.createElement("label")
  captchaLabel.innerText = "I am not a Robot."
  captcha.appendChild(captchaLabel)
  modal.appendChild(captcha)

  submit.setAttribute("id", "submitButton")
  submit.innerText = "Submit"
  submit.style.borderRadius = "8%"
  modal.appendChild(submit)
  body.appendChild(modal)
 }
 //Create Signup Form and Hide
 createSignUpFormElements()
 modalOverlay.classList.add("hide")
 modal.classList.add("hide")

 signUp.addEventListener("click", (e) => {
  modalOverlay.classList.remove("hide")
  modal.classList.remove("hide")
  modalOverlay.addEventListener("click", (e) => {
   modalOverlay.classList.add("hide")
   modal.classList.add("hide")
  })
 })

 //https: //firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword


 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   // User is signed in.
   window.location = "dashboard.html"

  }
  else {
   // No user is signed in.
  }
 });
 