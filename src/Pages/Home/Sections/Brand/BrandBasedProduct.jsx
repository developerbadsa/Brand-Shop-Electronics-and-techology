import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import BrandSlider from "../../../../Components/Slider/BrandSlider";
import WarningDirection from "../../../../Components/Warning/WarningDirection";



const BrandBasedProduct = () => {

  const images = [
    "https://i.ibb.co/25w0FCX/1d648bd1cf760afe149e2583e1755e96.png",
    "https://i.ibb.co/SBrMZ8F/images-1.jpg",
    "https://i.ibb.co/grqR3W0/images.jpg"
  ];

  const { brand_name } = useParams();

  const [product, setProduct] = useState([]);

  const productLength = parseInt(product.length)

  useEffect(() => {
    fetch(`https://b8a10-brandshop-server-side-developerbadsa-hr55-bvhz6bdu9.vercel.app/product/${brand_name}`)
      .then(data => data.json())
      .then(res => setProduct(res))
      .catch()


  }, [])


  return (
    <div>
      <div className="flex items-center justify-center my-12">
        <BrandSlider images={images}></BrandSlider>

      </div>

      <div className="grid items-center justify-center grid-cols-1 gap-8 mx-4 md:grid-cols-2 md:mx-auto">
        {

          productLength === 0 ? <div className="col-span-2 my-4"><WarningDirection ></WarningDirection> </div> : product.map(((SingleProduct, inx) => <ProductDetails key={inx} SingleProduct={SingleProduct}></ProductDetails>))

        }
      </div>


    </div>
  );
};

export default BrandBasedProduct;
