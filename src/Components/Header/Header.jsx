import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { userPovider } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Header = () => {

    const {logOut, user}  = useContext(userPovider)

    const handleLogout = ()=>{
        logOut()
        .then(()=>{
            Swal.fire(
                'Logged Out!',
                'success'
                )
        })
    }



    const menuItems = (
        <>

            <li className="">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-slate-100" : isActive ? "text-blue-600 bg-slate-200 p-1 flex rounded-lg" : "text-slate-500 p-1 flex"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className="">
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-slate-100" : isActive ? "text-blue-600 bg-slate-300 p-1 flex rounded-lg" : "text-slate-500 p-1 flex"
                    }
                >
                    Login
                </NavLink>
            </li>
            <li className="">
                <NavLink
                    to="/register"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-slate-100" : isActive ? "text-blue-600 bg-slate-300 p-1 flex rounded-lg" : "text-slate-500 p-1 flex"
                    }
                >
                    Register
                </NavLink>
            </li>
            {
             user &&  <li className="">
                <NavLink
                    to="/cart"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-slate-100" : isActive ? "text-blue-600 bg-slate-300 p-1 flex rounded-lg" : "text-slate-500 p-1 flex"
                    }
                >
                    My Cart
                </NavLink>
             </li>
            }


        </>
    )



    return (
        <nav className="justify-between px-4 py-4 mx-auto bg-transparent border-b navbar max-w-7xl lg:px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn bg-slate-300 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <div className="hidden lg:inline-block">
                    <img className="w-[170px]" src="https://i.ibb.co/L5Cw2ph/logo.png" alt="" />
                </div>
            </div>
            <div className="navbar-center ">
                <div className="-ml-10 lg:hidden">
                    <img className="w-24 mr-5" src="https://i.ibb.co/L5Cw2ph/logo.png" alt="" />
                </div>
                <div className="hidden ml-32 lg:flex">
                    <ul className="gap-4 px-1 text-xl font-semibold menu-horizontal">
                        {
                            menuItems
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <> <div className="hidden px-4 ml-4 font-bold text-white lg:inline-block">name</div><div className="dropdown dropdown-end">


                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="text-3xl ">
                            <FaUserCircle></FaUserCircle>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div> </>
            </div>
        </nav>
    );
};
export default Header;