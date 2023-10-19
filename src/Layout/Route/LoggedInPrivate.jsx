import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userPovider } from "../../AuthProvider/AuthProvider";
import LoadingSpinner from "../../Components/LoadingSpiner/LoadingSpiner";


const LoggedInPrivate = ({ children }) => {

    const { user, loading } = useContext(userPovider);
    console.log(loading);
    const navigate = useNavigate();

    useEffect(() => {

        if (loading) {
            <LoadingSpinner></LoadingSpinner> 
            return  
        }
        else if (!user) {
            navigate('/login');
        }
    }, [user, navigate, loading]);

    return loading?  <LoadingSpinner></LoadingSpinner> : children;
}

export default LoggedInPrivate;