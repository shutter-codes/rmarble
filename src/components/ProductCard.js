import React from "react";
import products from "../Api/data.json";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center ">
      {products.map((product) => {
        return (
          <div key={product.id} class="relative m-2  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md justify-center items-center">
            <Link
              class="relative mt-3 flex h-60 overflow-hidden rounded-xl"
              to={`/productInfo/${product.id}`}
            >
              <img
                class="object-cover"
                src={product.ProductImage}
                alt="product image"
              />
            </Link>
            <div class="mt-4 px-3 pb-5">
              <a href="">
                <h5 class="text-base tracking-tight font-semibold text-center text-slate-900">
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
        );
      })}
    </div>
  );
}

export default ProductCard;
