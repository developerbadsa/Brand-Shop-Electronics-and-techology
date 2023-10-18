import { useState } from "react";
import Swal from "sweetalert2";




const AddProduct = () => {

    const [rating, setRating] = useState(0);


    const handleAddProduct = (e) => {
        e.preventDefault()
        const image = e.target.image.value;
        const name = e.target.name.value;
        const brand = e.target.brand.value; 
        const type = e.target.type.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const Rating = rating


        const ProductData = {name, image, brand, type, price, description, Rating}


        fetch('http://localhost:5003/product', {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ProductData)

        })
        .then(()=>{
            Swal.fire(
                'Good job!',
                'You added successfully your product!',
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







    return (
        <div className="max-w-md mx-auto bg-white rounded p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Image
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                        Brand
                    </label>
                    <select
                        id="brand"
                        name="brand"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    >
                        <option value="apple">Apple</option>
                        <option value="samsung">Samsung</option>
                        <option value="sony">Sony</option>
                        <option value="google">Google</option>
                        <option value="intel">Intel</option>
                        <option value="microsoft">Microsoft</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                        Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    >
                        <option value="phone">Phone</option>
                        <option value="computer">Computer</option>
                        <option value="headphone">Headphone</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Short Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        defaultValue={""}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="rating"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Rating
                    </label>
                    <div className="mt-1 flex items-center space-x-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <label key={index} className="cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={index + 1}
                  onChange={() => setRating(index + 1)}
                  checked={rating === index + 1}
                  className="sr-only"
                />
                <span
                  className={`text-2xl ${
                    rating >= index + 1 ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
              </label>
            ))}
          </div>
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>

    );
};

export default AddProduct;