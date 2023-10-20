import { FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import StarRating from "../../Components/Rating/Rating";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCard = () => {
    const data = useLoaderData();
    const [newData, SetNewData] = useState(data);
    const isEmpty = newData.length;




    const handleDelete = (_id) => {


        const shouldDelete = window.confirm("Are you sure you want to delete this item?")


        if (shouldDelete) {

            const URL = `https://technology-electronics-server.vercel.app/cart/${_id}`;
            fetch(URL, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(({ deletedCount }) => {

                    if (deletedCount) {
                        const updatedData = newData.filter(item => item._id !== _id);
                        SetNewData(updatedData)
                        Swal.fire(
                            'Deleted Item',
                            'success'
                        )
                    }
                })
                .catch(err => console.log(err))
        }

    }

    return (
        <div className="px-5 mx-auto my-12 overflow-x-auto">
            <div>
                <h3 className="my-6 text-xl font-bold text-center">Your Added Card</h3>
            </div>
            <div className="w-full ">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="text-xs md:text-xl">
                            <th className="w-1/3 sm:w-1/4 lg:w-1/5">Product Name</th>
                            <th className="w-1/3 sm:w-1/4 lg:w-1/5">Brand & Rating</th>
                            <th className="w-1/6 sm:w-1/4 lg:w-1/5">Price</th>
                            <th className="w-1/6 sm:w-1/4 lg:w-1/5"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newData.map((singleData => {
                                const { Rating, brand, image, name, price, type, _id } = singleData;
                                return (
                                    <tr key={_id} className="text-center border">
                                        <td className="w-1/3 text-center sm:w-1/4 lg:w-1/5">
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="w-12 h-12 mask mask-squircle">
                                                        <img src={image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold lg:text-xl">{name}</div>
                                                    <div className="text-[9px] lg:text-sm opacity-50">{type}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="flex items-center justify-center gap-5 my-4 text-sm capitalize">
                                            {brand}
                                            <span className="hidden py-4 badge badge-ghost badge-sm lg:flex lg:items-center">
                                                <StarRating rating={Rating}></StarRating>
                                            </span>
                                        </td>
                                        <td className="w-1/6 text-xs font-bold sm:w-1/4 lg:w-1/5 lg:text-lg">${price}</td>
                                        <th className="w-1/6 sm:w-1/4 lg:w-1/5">
                                            <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
                                        </th>
                                    </tr>
                                )
                            }))
                        }
                    </tbody>
                </table>
                {!isEmpty && <div className="my-4 mr-32 text-xl font-bold text-center text-red-600">Currently No Data to Display To Add Data <Link to='/ourBrand' className="mx-4 italic text-blue-600 underline">Click Here</Link></div>}
            </div>
        </div>
    );
};

export default MyCard;