import { useContext } from "react";
import { userPovider } from "../../../../AuthProvider/AuthProvider";


const BrandDetails = () => {
    const data = useContext(userPovider)
    console.log(data);

  return (
    <div>details</div>
  );
};

export default BrandDetails;
