import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userPovider } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";


const Login = () => {

    const { loginEmail, googleSign } = useContext(userPovider)
    const navigatePage = useNavigate();



    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const isCheacked = e.target.remember


        loginEmail(email, password)
            .then(() => {

                navigatePage('/');

                Swal.fire(
                    'Congratulations!',
                    'Successfuly logged in with Email and Password',
                    'success'
                )

            })
            .catch(err => {


                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message
                });
            })

    }

    const handleGoogleSignIn =()=>{

        googleSign()
        .then(res=>{
            navigatePage('/');
            Swal.fire({
                icon: 'success',
                text: 'You have successfully logged in with Google'
          });
        })
    }





    return (
        <div className="items-center px-2 align-middle md:flex">


            <div className="flex-1">
                <h2 className="px-4 mb-10 text-5xl font-bold">Please Log in Now</h2>



                <form className="px-6" onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="example@gmail.com"
                            required=""
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                            placeholder="*&***"
                        />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input
                                name="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required=""
                            />
                        </div>
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Remember me
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login
                    </button>
                    <span className="px-4">If You Dont have account, Please <Link to='/register' className="text-blue-600 underline"> Register Here</Link></span>
                </form>
                <div className="flex justify-center gap-4 px-4 my-8">
                    <button onClick={handleGoogleSignIn} className="text-xl btn"> Sign in With Google Now <FaGoogle></FaGoogle></button>
                </div>

            </div>
            <div className="flex-1">
                <img src="https://i.ibb.co/pPkZwBB/10-1.png" alt="" />
            </div>



        </div>

    );
};

export default Login;