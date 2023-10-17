import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyCard from "../../Pages/MyCard/MyCard";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Login></Login>
            },
            {
                path: '/cart',
                element: <Login></Login>
            },
            {
                path: '/cart',
                element: <MyCard></MyCard>
            },
            {
                path: 'addproduct',
                element:<AddProduct></AddProduct>
            }
        ]
    }
])

export default Router;