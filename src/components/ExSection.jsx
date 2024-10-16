import React from "react";
import smoke from "/smoke.png";
import exImg1 from "/exImg1.png"
import exImg2 from "/exImg2.png"
import exImg3 from "/exImg3.png"
import exImg4 from "/exImg4.png"
import exImg5 from "/exImg5.png"
import exImg6 from "/exImg6.png"

const ExSection = () => {
  return (
    <section>
      <div className="container mx-auto p-[10px]">
        <div className="flex items-center mb-[20px] sm:mt-0">
          <img src={smoke} alt="" />
          <div className="">Best Catering Services</div>
        </div>
        <h2 className="text-[27px] font-bold">A Shared Experience</h2>
        <p>
          Lorem ipsum dolor sit enim consect aetur adipisicing convallislorems
          ipsum nosturd sit amet lorem ipsum dolor sit enim cons ect aetur
          adipisicing convallis lorems ipsum nosturd sit amet, lorem ipsum dolor
          sit enim consect aetur adipisicing convallis lorems ipsum nosturd sit
          amet.Lorem ipsum dolor sit enim consect aetur adipisicing
          convallislorems ipsum nosturd sit amet lorem ipsum dolor sit enim
          consect aetur adipisicing convallis lorems ipsum nosturd sit amet,
          lorem ipsum dolor sit enim consect aetur adipisicing convallislorems
          ipsum nosturd sit amet.
        </p>
        <div className="flex justify-center items-center my-[30px]">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[20px] lg:gap-[50px] w-[90%] sm:w-full sm:flex-wrap">
            <img src={exImg1} alt="" />
            <img src={exImg2} alt="" />
            <img src={exImg3} alt="" />
            <img src={exImg4} alt="" />
            <img src={exImg5} alt="" />
            <img src={exImg6} alt="" />
        </div>
        </div>

        <div className="text-center mb-[50px] mt-[50px]">
            <h2 className="text-[27px] sm:text-[35px] font-bold mb-[20px]">Subscribe for office</h2>
            <p className="mb-[20px]">Subscribe for early access offers, discounted rates, and you can cancel at any time.</p>
            <input type="email" placeholder="Enter Your Email..." className="border outline-none p-[5px] rounded-[3px]"/>
        </div>
      </div>
    </section>
  );
};

export default ExSection;
