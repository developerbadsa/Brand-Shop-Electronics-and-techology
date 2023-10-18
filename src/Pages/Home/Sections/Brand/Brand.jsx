import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Brand = () => {

    const [brands, setBrand] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5003/brand')
            .then(res => res.json())
            .then(brandData => setBrand(brandData))

    }, [])




    return (
        <div>

                <h2 className="text-center font-bold text-4xl my-4">Our Brands</h2>
            <div className="grid grid-cols-3 gap-6 ">
                {
                    brands.map((brand) => {

                        const { _id, brandName, brandImage } = brand;

                        console.log(brand);
                        return (
                            <Link to={_id} key={_id} className="card w-96 p-6 bg-base-100 shadow-xl">
                                <div className="card-body mx-auto">
                                    <h2 className="card-title font-semibold text-slate-600 text-3xl ">{brandName}</h2>
                                </div>
                                <figure><img className="max-h-52" src={brandImage} alt={brandName} /></figure>
                            </Link>
                        )

                    }

                    )
                }
            </div>
        </div>
    );
};

export default Brand;