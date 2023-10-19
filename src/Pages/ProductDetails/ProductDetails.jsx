import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRating from "../../Components/Rating/Rating";
import Swal from "sweetalert2";


const ProductCardDetails = () => {
    const {id} = useParams()

    const [productCardDetails, setProductCardDetails] = useState([])

    useEffect(()=>{

        fetch(`https://b8a10-brandshop-server-side-developerbadsa.vercel.app/productCardDetails/${id}`)
        .then(res=>res.json())
        .then(data=>setProductCardDetails(data))


    },[])


    const handleAddToCard = ()=>{
        fetch("https://b8a10-brandshop-server-side-developerbadsa.vercel.app/cart", {
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
        <div className="card lg:card-side bg-base-100 shadow-xl py-8">
            <figure className='flex-1'><img src={image} alt="Album" /></figure>
            <div className="card-body flex-1">
                <h2 className="card-title font-extrabold text-3xl my-4">{name}</h2>
                <p className="text-base text-slate-400">{description}</p>

                <div className="flex gap-4">
                    <span className="btn">{type}</span>
                    <p className="btn">{brand}</p>
                </div>
                <h3 className="my-6 font-extrabold text-blue-600">Price: ${price}</h3>

                <div className="my-4">
                    <StarRating rating={Rating}></StarRating>
                </div>

                <div className="flex gap-8 justify-end">
                    <button onClick={handleAddToCard} className="btn bg-blue-600 hover:bg-amber-700 text-slate-100">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCardDetails;