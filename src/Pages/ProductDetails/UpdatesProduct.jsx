import { useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatesProduct = () => {
    const data = useLoaderData()
    const { id } = useParams()


    const PageNavigate = useNavigate();


    const [formData, setFormData] = useState(data);

    const { image, name, brand, type, price, description, rating } = formData;


    console.log(brand);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    //=========handle update
    const onClic = (e) => {
        e.preventDefault();

        fetch(`https://brand-shop-electronics-and-techology-server.vercel.app/updateProduct1/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow! You have Updated your Product data Successfully',
                        text: 'Something went wrong!',
                        confirmButtonText: 'Show This Brand',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            PageNavigate(`/brand/${brand}`)
                        }
                      
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to update Product',
                        text: 'You might not have changed anything before clicking Update',
                    });
                }
            })
            .catch((error) => {
                console.error("An error occurred while updating the product:", error);
            });
    }


    return (
        <div className="max-w-md p-6 mx-auto bg-white rounded shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">Update Your Product</h2>
            <form >
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={image}
                        onChange={handleInputChange}
                        accept="image/*"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
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
                        value={name}
                        onChange={handleInputChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                        Brand
                    </label>
                    <select
                        id="brand"
                        name="brand"
                        value={brand}
                        onChange={handleInputChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
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
                        value={type}
                        onChange={handleInputChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    >
                        <option value="phone">Phone</option>
                        <option value="computer">Computer</option>
                        <option value="headphone">Headphone</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={handleInputChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Short Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                        Rating
                    </label>
                    <div className="flex items-center mt-1 space-x-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <label key={index} className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="rating"
                                    value={index + 1}
                                    onChange={handleInputChange}
                                    checked={rating === index + 1}
                                    className="sr-only"
                                />
                                <span
                                    className={`text-2xl ${rating >= index + 1 ? 'text-yellow-500' : 'text-gray-400'
                                        }`}
                                >
                                    ★
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <Link>

                        <button
                            onClick={onClic}
                            type="submit"
                            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                        >
                            Update Product
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default UpdatesProduct;
