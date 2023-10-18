import { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Auth } from '../Firebase/Firebase.config';


export const userPovider = createContext(null)

const AuthProvider = ({children}) => {

    const createUser = (email, password)=>{


       return createUserWithEmailAndPassword(Auth, email, password)
    }



    const loginEmail = (email, password)=>{


        return signInWithEmailAndPassword(Auth, email, password)

     }



     const [user, setUser] = useState(null)

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
    
    return (
        <userPovider.Provider value={userInfo}>
           {children}
        </userPovider.Provider>
    );
};

export default AuthProvider;