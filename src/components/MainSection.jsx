import React from "react";
import mainImg from "/mainImg.png";
import smoke from "/smoke.png";
const MainSection = () => {
  return (
    <section id="mainSection" className="sm:flex">
      <div className="bg-black text-[#FDF8F8]">
        <div className="flex flex-col justify-center py-[40px] items-center p-[10px]">
          <div className="flex items-center">
            <img src={smoke} alt="" />
            <div className="">Best Catering Services</div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[27px] lg:w-[75%] md:text-[30px] lg:text-[40px] text-center mb-[20px] mt-[7px]">Special Occasions Deserve Special Food</h1>
            <p className="text-center mb-[20px] lg:w-[75%] lg:text-[20px]">
              Dolor consect aetur adipisicing pellenqest convallis lorems ipsum
              nosturd sit amet
            </p>
            <p className="text-center">Need our Services. Call Today! </p>
            <p className="text-center">(+880)1884805902</p>
          </div>
        </div>
      </div>
      <div >
        <img src={mainImg} alt="" className="h-[300px] sm:h-full w-full sm:w-auto" />
      </div>
    </section>
  );
};

export default MainSection;
