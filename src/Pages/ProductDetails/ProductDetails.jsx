import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StarRating from "../../Components/Rating/Rating";
import Swal from "sweetalert2";
import LoadingSpinner from "../../Components/LoadingSpiner/LoadingSpiner";


const ProductCardDetails = () => {
    const {id} = useParams()
    const pageNavigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [productCardDetails, setProductCardDetails] = useState([])

    useEffect(()=>{

        fetch(`http://localhost:5003/productCardDetails/${id}`)
        .then(res=>res.json())
        .then(data=> {
            
            setProductCardDetails(data)})
            setLoading(false)


    },[])


    const handleAddToCard = ()=>{
        fetch("http://localhost:5003/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productCardDetails),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire(
            'Good job!',
            'This Product added to cart',
            'success'
            )
            pageNavigate('/cart')
      })
      .catch(()=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
            })
      })
    }




    const { Rating, brand, description, image, name, price, type , _id} = productCardDetails;


    return (
       loading? <LoadingSpinner></LoadingSpinner> : <div className="py-8 shadow-xl card lg:card-side bg-base-100">
            <figure className='flex-1'><img src={image} alt="Album" /></figure>
            <div className="flex-1 card-body">
                <h2 className="my-4 text-3xl font-extrabold card-title">{name}</h2>
                <p className="text-base text-slate-400">{description}</p>

                <div className="flex gap-4">
                    <span className="btn">{type}</span>
                    <p className="btn">{brand}</p>
                </div>
                <h3 className="my-6 font-extrabold text-blue-600">Price: ${price}</h3>

                <div className="my-4">
                    <StarRating rating={Rating}></StarRating>
                </div>

                <div className="flex justify-end gap-8">
                    <button onClick={handleAddToCard} className="bg-blue-600 btn hover:bg-amber-700 text-slate-100">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCardDetails;