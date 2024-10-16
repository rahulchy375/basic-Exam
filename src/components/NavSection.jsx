import React, { useState } from "react";
import logo from "/logo.png";
import chamos from "/chamos.png";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const NavSection = () => {
  let [nav, setNav] = useState(false);
  const handleNavs = () => {
    setNav(!nav);
  };
  return (
    <section id="navSection">
      <div className="container mx-auto p-[10px]">
        <div className="flex justify-between">
          <div className="w-[100px] md:w-[120px]">
            <img src={logo} alt=""/>
          </div>
          <div className="relative flex gap-[10px] md:gap-[55px] lg:gap-[120px] xl:gap-[150px] items-center">
            <div className="order-2 sm:hidden" onClick={handleNavs}>
              {nav === true ? <RxCross2 /> : <FaBars />}
            </div>
            
            <ul className={`fixed sm:static sm:flex sm:gap-[7px] md:gap-[10px] lg:gap-[30px] xl:gap-[50px] lg:px-[30px] xl:px-[40px] md:font-bold top-[45px] xl:text-[18px] right-0 !bg-[#D9D9D9] rounded-[5px] sm:rounded-[0px] p-[10px] sm:py-[5px] md:py-[8px] ${nav === true ? "right-[10px] duration-300" : "right-[-150px] duration-300 "}`}>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Our Menus</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>

            <button className="px-[10px] py-[7px] bg-[#FD1212] outline-none flex justify-center items-center gap-[5px] text-white order-1 text-[14px]">
              <img src={chamos} alt="" className="w-[15px]" />
              Order Today!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavSection;
