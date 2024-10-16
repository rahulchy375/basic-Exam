import React from "react";
import extraImg from "/extraImg.png";
import smoke from "/smoke.png";

const ExtraReuse = ({button}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-[50px]">
        <img src={extraImg} alt="" className="mb-[20px]" />
        <img src={smoke} alt="" className="mb-[20px]" />
        <h2 className="font-bold text-[17px]">Mechelin Star Quality</h2>
        <p className="text-center font-semibold my-[20px]">
          Lorem ipsum dolor sit enim con sect aetur adipisicing convallis lorems
          ipsum nosturd sit amet
        </p>
        <button className="font-bold outline-none">{button}</button>
      </div>
    </>
  );
};

export default ExtraReuse;
