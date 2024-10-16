import React from "react";

const CateringReuse = ({img,title, para, price,}) => {
  return (
    <>
      <div className="text-center mb-[50px]">
        <div className="flex justify-center items-center mt-[30px]">
          {img}
        </div>
        <h3 className="text-[22px] font-bold mt-[10px]">{title}</h3>
        <p className="text-[14px] mb-[20px]">
          {para}
        </p>
        <p className="mb-[25px] font-semibold">{price} </p>
        <button>View details</button>
      </div>
    </>
  );
};

export default CateringReuse;
