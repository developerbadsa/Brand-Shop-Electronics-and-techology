import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";



const BrandBasedProduct = () => {

  const { brand_name } = useParams();


  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5003/product/${brand_name}`)
      .then(data => data.json())
      .then(res => setProduct(res))
      .catch()


  }, [])



  return (
    <div>
      <div className="py-12 text-center font-bold text-5xl">slider</div>

      <div className="grid grid-cols-2 gap-7">
        {

          product.map((SingleProduct => <ProductDetails key={SingleProduct._id} SingleProduct={SingleProduct}></ProductDetails>))

        }
      </div>


    </div>
  );
};

export default BrandBasedProduct;
