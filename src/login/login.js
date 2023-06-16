import { app } from "../../firebase-config.js";
console.log("I was called")
function signInWithGoogle() {
    var provider = new app.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(provider)
        .then(function(result) {
            // Handle successful sign-in
            var user = result.user;
            console.log(user);
        })
        .catch(function(error) {
            // Handle error
            console.log(error);
        });
}

// Make the function globally accessible
window.signInWithGoogle = signInWithGoogle;
