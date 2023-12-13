import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../../Components/LoadingSpiner/LoadingSpiner";


const Brand = () => {

    const [brands, setBrand] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        fetch('http://localhost:5003/brand')
            .then(res => res.json())
            .then(brandData => {
                setLoading(false)
                 setBrand(brandData) 
            })

    }, [])




    return (
        loading? <LoadingSpinner></LoadingSpinner>:<div className="px-8 mx-auto my-12">

                <h2 className="my-2 text-4xl font-bold text-center">Our Brands</h2>
            <div className="grid justify-center grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 md:gap-24">
                {
                    brands.map((brand) => {

                        const { _id, brandName, brandImage } = brand;

                        const brand_name_lowecase = brandName
                        
                        return (
                            <Link to={`/brand/${brand_name_lowecase}`} key={_id} className="p-6 my-8 shadow-xl card bg-base-100">
                                <div className="mx-auto card-body">
                                    <h2 className="text-3xl font-semibold card-title text-slate-600 ">{brandName}</h2>
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