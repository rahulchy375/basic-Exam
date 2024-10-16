import React from "react";
import serviceImg from "/serviceImg.png";
import smoke from "/smoke.png";

const ServiceSection = () => {
  return (
    <section>
      <div className="container mx-auto p-[10px]">
        <div className="my-[20px] md:mt-[40px] sm:flex justify-between">
          <div className="sm:w-[48%] flex justify-center items-center">
            <img src={serviceImg} alt="" className="lg:w-[80%] xl:w-[70%]"/>
          </div>
          <div className="sm:w-[48%] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-[20px] mt-[40px] sm:mt-0">
              <img src={smoke} alt="" />
              <div className="">Best Catering Services</div>
            </div>
            <h2 className="text-center text-[27px] font-bold xl:w-[70%] mb-[20px]">Our Ingredients Are Sustainably Sourced </h2>
            <p className="text-center xl:w-[70%]">
              Lorem ipsum dolor sit enim consect aetur adipisicing convallis
              lorems ipsum nosturd sit amet lorem ipsum dolor sit enim cons ect
              aetur adipisicing convallis lorems ipsum nosturd sit amet, lo- rem
              ipsum dolor sit enim consect aetur adipisicing convallis lorems
              ipsum nosturd sit amet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
