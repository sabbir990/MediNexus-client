import { createContext, useEffect, useState } from "react";
import React from 'react'
import auth from "../../Firebase/Firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon/useAxiosCommon";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

export const AuthContext = createContext(null);


export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const axiosCommon = useAxiosCommon()

    const {mutateAsync} = useMutation({
        mutationFn : async (user) => {
            const {data} = await axiosCommon.put('/user', user)
            return data
        }
    })

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

    const updateUserProfile = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL : image
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const saveUser = async(currentUser) => {
        const createdUser = {
            email : currentUser?.email,
            name : currentUser?.displayName,
            role : "user",
            image : currentUser?.photoURL
        }

        await mutateAsync(createdUser)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser)
                axiosCommon.post('/jwt', {email : currentUser?.email}).then(response => {
                    if(response.data.token){
                        localStorage.setItem('token', response.data.token);
                    }
                })
                
                if(currentUser?.providerData[0]?.providerId !== 'password'){
                    saveUser(currentUser)
                }
            }else{
                localStorage.removeItem('token')
            }

            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authObject = {
        user,
        setUser,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        updateUserProfile,
        logOut,
        loading,
        setLoading,
        saveUser,
        resetPassword
    }
  return (
    <AuthContext.Provider value={authObject}>
        {children}
    </AuthContext.Provider>
  )
}
