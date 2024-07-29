import { createContext, useEffect, useState } from "react";
import React from 'react'
import auth from "../../Firebase/Firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);


export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const updateUserProfile = () => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL : image
        })
    }

    const logOut = () => {
        return signOut();
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser)
                console.log(currentUser);
            }
            else{
                console.log("Already logged out!")
            }

            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    })

    const authObject = {
        user,
        setUser,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        updateProfile,
        logOut,
        loading,
        setLoading
    }
  return (
    <AuthContext.Provider value={authObject}>
        {children}
    </AuthContext.Provider>
  )
}
