import React from "react";
import logo from "/logo.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io";

const FooterSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto p-[10px]">
        <div className="sm:flex flex-wrap justify-between lg:justify-around">
          <div className="flex justify-center w-[100px] h-[50px]">
            <img src={logo} alt="" />
          </div>
          <div className="text-center sm:text-left my-[25px] sm:my-[0px]">
            <p className="font-bold">Service Hours</p>
            <p>Monday to Friday : 09:00am to 07:00pm</p>
            <p>Saturday : 10:30am to 04:00pm</p>
            <p>Sunday : On Demand</p>
            <p>We Are Social</p>
            <div className="flex justify-center sm:justify-start gap-[10px] mt-[15px]">
            <FaFacebook />
            <FaTwitter />
            <IoLogoYoutube />
            <IoLogoWhatsapp />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-bold">Contact Us</h3>
            <p>25 Avada Avenue, FL 12340 USA</p>
            <p>catering@myavada-domain.com</p>
            <p>Need our services? Call Today!</p>
            <p>1 (900) 123 4567</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
