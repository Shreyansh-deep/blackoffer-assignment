import React from "react";
import Logo from "../assets/logo_blackoffer.jpg";
import Profile from "../assets/profile_blackoffer.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-4">
      <div className="flex text-center items-center">
        <img src={Logo} className="w-12 h-12" />
        <p className="font-semibold text-2xl">BlackOffer</p>
      </div>
      <div className="flex justify-center items-center border border-gray-300 px-8 rounded-xl">
        <HiOutlineMagnifyingGlass className="w-6 h-6"/>
        <input
          type="text"
          placeholder="Search Keyword"
          className="pl-8 w-96"
        />
        <img src={Profile} className="w-14 h-14" />
      </div>
    </div>
  );
};

export default Navbar;
