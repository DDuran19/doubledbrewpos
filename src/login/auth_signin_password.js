import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config.js";

export default function signIn(email, password) {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("Success!", user);
        resolve(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "; ", errorMessage);
        reject(false);
      });
  });
}
