
// HOW TO AUTHENTICATE VIA EMAIL AND PASSWORD


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTnwn4LDTv_BnkdX4aUY2OtN7kz1gRwRA",
  authDomain: "my-project-3fd48.firebaseapp.com",
  projectId: "my-project-3fd48",
  storageBucket: "my-project-3fd48.appspot.com",
  messagingSenderId: "1019206583137",
  appId: "1:1019206583137:web:ac726564f181ff1e80bb20",
  measurementId: "G-9D4J05FXNR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Redirect to sign-in page
function redirectToSignin() {
  window.location.href = "signin.html"; // Make sure you have a signin.html page
}

document.addEventListener('DOMContentLoaded', function() {
  // Redirect to sign-in page when "Already have an account" is clicked
  const signindirect = document.getElementById('signindirect');
  if (signindirect) {
    signindirect.addEventListener('click', redirectToSignin);
  }

  // Sign-up logic
  const signup = document.getElementById('signup');
  signup.addEventListener('click', signupuser);
});

// Sign-up function
function signupuser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User signed up:", userCredential.user.uid);
      window.location.href = "dashboard.html";  // Redirect to dashboard after successful signup
    })
    .catch((error) => {
      console.error("Error: ", error.message);
    });
}


console.log("hello")



// Sign-in function
function signInUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Sign-in successful
      console.log("User signed in:", userCredential.user.uid);
      window.location.href = "dashboard.html";  // Redirect to dashboard after successful sign-in
    })
    .catch((error) => {
      // Handle error
      console.error("Error: ", error.message);
      alert("Sign-in failed. Please check your credentials.");
    });
}

// Attach event listener to the sign-in button
document.addEventListener('DOMContentLoaded', function() {
  const signinButton = document.getElementById('signin');
  if (signinButton) {
    signinButton.addEventListener('click', signInUser);
  }
});



console.log("ok");

// Sign-out function
function signOutUser() {
  signOut(auth)
    .then(() => {
      alert("You have signed out successfully!");
      window.location.href = "index.html"; // Redirect to homepage or login page
    })
    .catch((error) => {
      console.error("Sign-out error:", error.message);
      alert("Sign-out failed. Please try again.");
    });
}

// Attach event listener to sign-out button
const signOutButton = document.getElementById('signoutButton');
if (signOutButton) {
  signOutButton.addEventListener('click', signOutUser);
}

console.log("hi");
