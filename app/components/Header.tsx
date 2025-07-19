import Image from "next/image";
import React from "react";
import { fratelliLogo } from "../config";
import { PhoneCall, Search, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between absolute lg:px-20 items-center pt-8 pb-3 z-20">
      <div className="">
        <Image 
          src={fratelliLogo} 
          alt="Fratelli Logo"
          width={400}
          height={400}
          className="w-auto h-[2em]"
        />
      </div>
      <div className="text-white">
        <ul className="flex gap-6 items-center font-clashdisplay font-medium">
          <li>Home</li>
          <li>Our Story</li>
          <li>Discover</li>
          <li>Shop</li>
          <li>Estate</li>
          <li>Investor</li>
        </ul>
      </div>
      <div className="">
        <ul className="flex text-white gap-8 items-center">
          <li><ShoppingCart size={16} /></li>
          <li><User size={16} /></li>
          <li><Search size={16} /></li>
          <li><PhoneCall size={16} /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;