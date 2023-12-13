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
import LoggedInPrivate from "./LoggedInPrivate";
import LoggedOutPrivate from "./LoggedOutPrivate";
import Contact from "../../Pages/Contact/Contact";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import UpdatesProduct from "../../Pages/ProductDetails/UpdatesProduct";
import OurBrand from "../../Components/OurBrand/OurBrand";
import UserProfile from "../../Components/Profile/Profile";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LoggedOutPrivate><Login></Login></LoggedOutPrivate>
            },
            {
                path: '/register',
                element: <LoggedOutPrivate><Register></Register></LoggedOutPrivate>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/cart',
                element: <LoggedInPrivate><MyCard></MyCard></LoggedInPrivate>,
                loader: ()=> fetch('http://localhost:5003/cart')
            },
            {
                path: '/updatesProduct/:id',
                loader: ({params})=> {
                    return fetch(`http://localhost:5003/updateProduct/${params.id}`)
                 },
                element: <LoggedInPrivate><UpdatesProduct></UpdatesProduct></LoggedInPrivate>,
               
            },
            {
                path: '/addproduct',
                element:<LoggedInPrivate><AddProduct></AddProduct></LoggedInPrivate>
            },
            {
                path: '/ourBrand',
                element:<LoggedInPrivate><OurBrand></OurBrand></LoggedInPrivate>
            },
            {
                path: '/userProfile',
                element:<LoggedInPrivate><UserProfile></UserProfile></LoggedInPrivate>
            },
            {
                path: "/brand/:brand_name",
                element: <BrandBasedProduct></BrandBasedProduct>
            },
            {
                path: '/productCardDetails/:id',
                element:<LoggedInPrivate><ProductCardDetails></ProductCardDetails></LoggedInPrivate>
            }
        ]
    }
])

export default Router;