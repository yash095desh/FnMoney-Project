import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className=" flex bg-gray-950 bg-opacity-95 text-white px-6 py-4 items-center gap-4 justify-between">
      <div className=" flex items-center gap-8 ">
        <div className="text-4xl font-semibold flex items-center gap-2">
            <Image src={'/logo.png'} height={28} width={28}/>
            FNAXIOM
            </div>
        <div className=" flex font-medium items-center gap-6 ">
          <Link href={"/"}>HOME</Link>
          <Link href={"/"}>ABOUT</Link>
        </div>
      </div>
      <h2 className=" text-3xl font-semibold font-Roboto whitespace-nowrap pl-4">
        FULL INTERNSHIP ASSESSMENT
      </h2>
      <div className="flex gap-4 items-center">
        <div className="flex gap-4 items-center text-sm ">
          <button className=" px-8 py-2 rounded-full border border-white">
            Hero
          </button>
          <button className=" px-8 py-2 rounded-full border border-white">
            Notifications
          </button>
        </div>
        <div>
          <button className=" text-xl font-semibold font-Roboto uppercase bg-orange-600 px-6 whitespace-nowrap py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
