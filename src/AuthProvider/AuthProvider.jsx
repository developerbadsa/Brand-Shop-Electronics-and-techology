import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { Auth } from '../Firebase/Firebase.config';


export const userPovider = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }



    const loginEmail = (email, password) => {


        return signInWithEmailAndPassword(Auth, email, password)

    }





    useEffect(() => {

        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return unSubscribe
    }, [])


    const logOut = () => {
        setLoading(true)
        return signOut(Auth)
    }

    const googleProvider = new GoogleAuthProvider();

    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(Auth, googleProvider)
    }


    const userInfo = {
        createUser, loginEmail, user, logOut, loading, googleSign
    }

    console.log(user);

    return (
        <userPovider.Provider value={userInfo}>
            {children}
        </userPovider.Provider>
    );
};

export default AuthProvider;