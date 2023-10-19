import { useContext, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { userPovider } from "../../AuthProvider/AuthProvider";


const LoggedInPrivate = ({children}) => {

    const { user } = useContext(userPovider);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
          navigate('/login');
        }
      }, [user, navigate]);
    
      return children;
    };

export default LoggedInPrivate;