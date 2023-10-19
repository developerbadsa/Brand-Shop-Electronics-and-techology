import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Auth } from '../Firebase/Firebase.config';


export const userPovider = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password)=>{


       return createUserWithEmailAndPassword(Auth, email, password)
    }



    const loginEmail = (email, password)=>{


        return signInWithEmailAndPassword(Auth, email, password)

     }





     useEffect(() => {
 
         const unSubscribe = onAuthStateChanged(Auth, currentUser => {
             setUser(currentUser)
         });
         return unSubscribe
     }, [])


     const logOut = () =>{

       return signOut(Auth)
     }




    const userInfo = {
        createUser, loginEmail, user, logOut, 
    }

    console.log(user);
    
    return (
        <userPovider.Provider value={userInfo}>
           {children}
        </userPovider.Provider>
    );
};

export default AuthProvider;