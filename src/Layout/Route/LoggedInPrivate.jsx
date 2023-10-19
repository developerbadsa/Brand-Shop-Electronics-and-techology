import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userPovider } from "../../AuthProvider/AuthProvider";


const LoggedInPrivate = ({children}) => {

    const {user} = useContext(userPovider)


    if (!user) {
        return <Navigate to="/landing" replace />;
      }
    
      return children;
};

export default LoggedInPrivate;