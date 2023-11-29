import React from "react";
import banner from "../../assets/JBL_JR 310BT_Product Image_Hero_Skyblue.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="max-w-7xl bg-gray-600 mx-auto mb-20 relative rounded-md p-6 ">
      <p className="ml-2">UBL</p>
      <h3 className="font-bold text-2xl ml-2 ">Wireless</h3>
      <h1 className="text-9xl tracking-wider ">HEADPHONES</h1>
      <img src={banner} className="w-96 absolute -top-24 right-16 " />
      <div className="flex justify-between ml-2 mt-2  items-center">
        <Link to={`/product/8`}>
          <Button>Shop</Button>
        </Link>
        <div>
          <h4>Design & Quality</h4>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
