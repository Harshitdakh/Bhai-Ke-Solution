import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVG2uoHCAsHE1HbzGwHw0tEttNSd8WeYQ",
    authDomain: "bhai-ke-solution-af11b.firebaseapp.com",
    projectId: "bhai-ke-solution-af11b",
    storageBucket: "bhai-ke-solution-af11b.appspot.com",
    messagingSenderId: "92529401009",
    appId: "1:92529401009:web:c0f267603dce1723615690"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

// Set the persistence mode to 'local' to keep the user logged in across browser sessions
setPersistence(auth, 'local')
    .then(() => {
        console.log('Persistence mode set to local');
    })
    .catch((error) => {
        console.error('Error setting persistence mode:', error);
    });




// Assuming you have a function to check if the user is logged in
onAuthStateChanged(auth, (user) => {
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    if (loggedInUserId) {
        console.log(user);
        document.getElementById('logout').style.display = "block";
        document.getElementById('logout1').style.display = "block";
        document.getElementById('login').style.display = "none";
        document.getElementById('login1').style.display = "none";
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    document.getElementById('loggedUserFName').innerText = userData.firstName;
                    document.getElementById('loggedUserEmail').innerText = userData.email;
                    document.getElementById('loggedUserLName').innerText = userData.lastName;

                }
                else {
                    console.log("no document found matching id")
                }
            })
            .catch((error) => {
                console.log("Error getting document");
            })
    }
    else {
        console.log("User Id not Found in Local storage")
    }
})


// Add event listener for the logout button
document.getElementById("logout").addEventListener("click", function () {
    // Implement your logic to log out the user
    // Example: localStorage.removeItem("loggedInUser");
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";
});
document.getElementById("logout1").addEventListener("click", function () {
    // Implement your logic to log out the user
    // Example: localStorage.removeItem("loggedInUser");
    document.getElementById("login1").style.display = "block";
    document.getElementById("logout1").style.display = "none";
});
// document.getElementById("login").addEventListener("click", function () {
//     // Implement your logic to log out the user
//     // Example: localStorage.removeItem("loggedInUser");
//     document.getElementById("login").style.display = "none";
//     document.getElementById("logout").style.display = "block";
// });
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedInUserId');
    document.getElementById('loggedUserFName').innerText = "";
    document.getElementById('loggedUserEmail').innerText = "";
    document.getElementById('loggedUserLName').innerText = "";
    signOut(auth)
        .then(() => {
            window.location.href = 'index_login.html';
        })
        .catch((error) => {
            console.error('Error Signing out:', error);
        })
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";
})
document.getElementById('logout1').addEventListener('click', () => {
    localStorage.removeItem('loggedInUserId');
    document.getElementById('loggedUserFName').innerText = "";
    document.getElementById('loggedUserEmail').innerText = "";
    document.getElementById('loggedUserLName').innerText = "";
    signOut(auth)
        .then(() => {
            window.location.href = 'index_login.html';
        })
        .catch((error) => {
            console.error('Error Signing out:', error);
        })
    document.getElementById("login1").style.display = "block";
    document.getElementById("logout1").style.display = "none";
})


console.log("hlloe")