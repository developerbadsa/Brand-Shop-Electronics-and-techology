import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const BrandBasedProduct = () => {

  const { brand_name } = useParams();


  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5003/product/${brand_name}`)
      .then(data => data.json())
      .then(res => setProduct(res))
      .catch()


  }, [])




  console.log(product);

  return (
    <div>
      <div className="py-12 text-center font-bold text-5xl">slider</div>

      {

        product.map((SingleProduct=> <>SingleProduct.brand</>))

      }


    </div>
  );
};

export default BrandBasedProduct;
