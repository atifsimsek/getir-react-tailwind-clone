import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

const ProductItem = ({ product }) => {
  return (
    <div className="  bg-white flex flex-col relative gap-y-1 text-center  items-center  text-sm font-semibold p-3">
      <img src={product.image} alt="" />
      <div className="text-brand-color ">{product.price}</div>
      <div className="text-gray-900">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
      <button className="absolute z-10 top-3 right-3 shadow-md border border-gray-200 bg-white rounded-lg text-brand-color w-8 h-8 flex items-center justify-center hover:border-brand-color ">
        <HiOutlinePlusSm size={14} className="text-brand-color" />
      </button>
    </div>
  );
};

export default ProductItem;
