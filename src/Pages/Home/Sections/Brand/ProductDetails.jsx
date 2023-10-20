import { Link } from "react-router-dom";
import StarRating from "../../../../Components/Rating/Rating";


const ProductDetails = ({ SingleProduct }) => {

    const { Rating, brand, description, image, name, price, type, _id } = SingleProduct;


        return (
            <div className="px-6 py-8 shadow-xl card lg:card-side bg-base-100">
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
                       <Link to={`/cart/${_id}`}> <button className="bg-blue-600 btn hover:bg-amber-700 text-slate-100">Update</button></Link>
                        <Link to={`/productCardDetails/${_id}`}><button className="btn bg-amber-700 hover:bg-blue-700 text-stone-100">View Details</button></Link>
                    </div>
                </div>
            </div>
        )
    }

    export default ProductDetails;