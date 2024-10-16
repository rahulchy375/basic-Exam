import React from "react";
import extraImg from "/extraImg.png";
import smoke from "/smoke.png";
import ExtraReuse from "../reuse/ExtraReuse";

const ExtraSection = () => {
  return (
    <section>
      <div className="container mx-auto p-[10px] pt-[30px]">
        <div className="sm:flex justify-between items-center">
          <ExtraReuse button="View all services"/>
          <ExtraReuse button="View Our Menu"/>
          <ExtraReuse button="Read Our Story "/>
        </div>
        <div className="bg-[#eeeded] h-[5px] w-full"></div>
      </div>
    </section>
  );
};

export default ExtraSection;
