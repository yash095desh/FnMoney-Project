import ProductCard from "@/components/layout/ProductCard";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4  bg-gray-950  rounded-3xl p-2 m-auto mt-[7%] text-white flex-wrap ">
        <h1 className="text-5xl font-medium uppercase text-center text-white">
          <span className="text-2xl">welcome to </span>
          <br /> <span className="text-6xl font-bold">fnaxiom</span> <br /> full
          stack <br /> internship{" "}
        </h1>
        <p className=" text-sm text-center text-gray-400">
          Lorem ipsum dolor sit amet{" "}
        </p>
        <button className="text-sm px-4 py-3 rounded-full bg-gradient-to-r from-blue-400 from-30% to-red-600 to-70% ">
          Lorem ipsum dolor sit amet.
        </button>
        <button className="text-xl font-semibold px-4 py-3 rounded-full bg-orange-600 uppercase">
          Get Started
        </button>
      </div>
      <div className="flex items-center gap-6 max-w-screen-xl m-auto flex-wrap">
        <ProductCard heading={'coding Challenge'} btncolor={'orange'}/>
        <ProductCard heading={'Project Submission'} btncolor={'blue'}/>
        <ProductCard heading={'Project Quiz'} btncolor={'blue'}/>
        <ProductCard heading={'Load Assisment'} btncolor={'orange'}/>
        <ProductCard heading={'Live Assisment'} btncolor={'blue'}/>
        <ProductCard heading={'Load Assismentt'} btncolor={'orange'}/>
      </div>
    </div>
  );
}

export default page;
