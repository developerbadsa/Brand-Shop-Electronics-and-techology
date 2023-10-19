import { Link } from "react-router-dom";


const WarningDirection = () => {
    return (
        <div className="flex items-center justify-center">
        <div className="p-8 mx-auto text-center bg-white rounded">
            <h1 className="my-4 text-4xl font-semibold text-red-600 ">Opps</h1>
            <p className="mb-4 text-xl text-gray-600">In this Brand Nothing to Show</p>
            <p className="text-gray-600">
                
            </p>
            <Link className="my-10 text-white bg-orange-600 hover:bg-blue-600 btn" to='/addproduct'>
                You Can Add Product This Brand Click Here
            </Link>
        </div>
    </div>
    );
};

export default WarningDirection;