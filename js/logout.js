 var config = {
  apiKey: "AIzaSyAG-AsgKydeYqU-g5OuiTCNGn8t8BfsepA",
  authDomain: "rate-em-3d20e.firebaseapp.com",
  databaseURL: "https://rate-em-3d20e.firebaseio.com",
  projectId: "rate-em-3d20e",
  storageBucket: "rate-em-3d20e.appspot.com",
  messagingSenderId: "96444177029"
 };

 //Find Elements
 const signOutBtn = document.getElementById("signout")

 signOutBtn.addEventListener("click", (e) => {
  e.preventDefault()
  auth().signOut()
 })
 g
 