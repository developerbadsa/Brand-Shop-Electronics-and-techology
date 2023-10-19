import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-8 text-center bg-white rounded shadow-md">
                <h1 className="my-4 text-4xl font-semibold text-red-600">404</h1>
                <p className="mb-4 text-xl text-gray-600">Page Not Found</p>
                <p className="text-gray-600">
                    The page you are looking for might have been removed or doesn't exist.
                </p>
                <Link className="my-10 text-white bg-orange-600 btn" to='/'>
                    Go Home
                </Link>
            </div>
        </div>

    );
};

export default ErrorPage;