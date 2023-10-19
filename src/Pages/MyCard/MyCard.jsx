import { FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import StarRating from "../../Components/Rating/Rating";
import { useState } from "react";


const MyCard = () => {
    const data = useLoaderData();

    const [newData, SetNewData] = useState(data)



    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5003/cart/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // After deleting the item, update the state
                //SetNewData(newData.filter(item => item._id !== id));
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
    }

    return (
        <div className="px-5 mx-auto my-12 overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-xl">
                        <th>Product Name</th>
                        <th>Brand & Rating</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newData.map((singleData => {

                            const { Rating, brand, image, name, price, type, _id } = singleData;


                            return (
                                <tr key={_id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="w-12 h-12 mask mask-squircle">
                                                        <img src={image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{name}</div>
                                                    <div className="text-sm opacity-50">{type}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="flex items-center gap-5 my-4">
                                            {brand}
                                            <span className="badge badge-ghost badge-sm"><StarRating rating={Rating}></StarRating></span>
                                        </td>
                                        <td className="font-bold">${price}</td>
                                        <th>
                                            <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
                                        </th>
                                    </tr>
                            )

                        }))
                    }

                </tbody>
                {/* foot */}
                {/* <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot> */}

            </table>
        </div>
    );
};

export default MyCard;