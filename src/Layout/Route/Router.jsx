import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyCard from "../../Pages/MyCard/MyCard";
import Register from "../../Pages/Register/Register";
import BrandDetails from "../../Pages/Home/Sections/Brand/BrandDetails";


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
                element: <Register></Register>
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
            },
            {
                path: "/brand/",
                element: <BrandDetails></BrandDetails>
              }
        ]
    }
])

export default Router;