import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyCard from "../../Pages/MyCard/MyCard";
import Register from "../../Pages/Register/Register";
import BrandBasedProduct from "../../Pages/Home/Sections/Brand/BrandBasedProduct";
import ProductCardDetails from "../../Pages/ProductDetails/ProductDetails";
import AboutUs from "../../Pages/AboutUs/About.";


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
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/cart',
                element: <MyCard></MyCard>,
                loader: ()=> fetch('http://localhost:5003/cart')
            },
            {
                path: 'addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: "/brand/:brand_name",
                element: <BrandBasedProduct></BrandBasedProduct>
            },
            {
                path: '/productCardDetails/:id',
                element:<ProductCardDetails></ProductCardDetails>
            }
        ]
    }
])

export default Router;