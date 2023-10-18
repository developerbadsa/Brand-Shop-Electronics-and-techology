import StarRating from "../../../../Components/Rating/Rating";


const ProductDetails = ({ SingleProduct }) => {

    const { Rating, brand, description, image, name, price, type } = SingleProduct;


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
                    <button className="btn bg-blue-600 hover:bg-amber-700 text-slate-100">Update</button>
                    <button className="btn bg-amber-700 hover:bg-blue-700 text-stone-100">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;