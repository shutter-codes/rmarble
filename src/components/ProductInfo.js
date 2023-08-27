import React, { useState } from "react";
import products from "../Api/data.json";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const [show, setShow] = useState(false);

  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find((product) => product.id === productId);

  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="md:flex  justify-center items-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 ">
        <img className="w-full" src={product.ProductImage} />
      </div>

      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        {/* <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">
            {product.ProductName}
          </p>
          <h1
            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
          >
            {product.ProductName}
          </h1>
        </div> */}

        <div class="mt-4 px-5 pb-5">
          <a href="#">
            <h5 class="text-base text-center tracking-tight text-slate-900">
              {product.ProductName}
            </h5>
          </a>

          <a
            href="http://wa.me/+917003278402"
            class="flex items-center justify-center rounded-md  mt-2 font-bold bg-green-500 px-5 py-2.5 text-center text-sm  text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
