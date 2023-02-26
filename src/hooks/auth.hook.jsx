import React from 'react'
import { app } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential, signInWithPopup } from "firebase/auth";

const authHook = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const emailPasswordAuth = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const token = userCredential.user.accessToken;

            if (token) {
                localStorage.setItem("token", token)
            }

            console.log(user)
        } catch(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
        }
    }

    const googleAuth = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            if (token) {
                localStorage.setItem("token", token)
            }

            console.log(user)
        } catch(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
        }
    }

    const googleLogin = async () => {
        try {
            const token = localStorage.getItem("token")
            const result = await signInWithCredential(token) || null

            console.log(result)
        } catch(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
        }
    }

    const getMe = async () => {
        const user = auth.currentUser;

        console.log(user)
    }
        
    return {
        emailPasswordAuth,
        googleAuth, 
        googleLogin,
        getMe
    }
}

export default authHook