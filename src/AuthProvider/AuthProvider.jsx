import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loadin, setLoading] = useState(true);

    const googleSignUp = () =>{
        return signInWithPopup(auth, provider);
    }
    // google sign up 

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }
    // create user by email pass 

    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password)
    }
    // user login by her/his email and pass 

    const logOut = () =>{
       return signOut(auth)
    }
    // sign out user 

    const updateUser = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{       
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => unsubscribe();
    },[])
    // get crrunt sign in user 

    const authInfo = {user, createUser, loginUser, googleSignUp, logOut, updateUser, setLoading, loadin};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;