import React from "react";

const NewsReuse = ({img,title,para}) => {
  return (
    <>
      <div className="text-center mb-[40px]">
        <div className="flex justify-center items-center">
          {img}
        </div>
        <h2 className="text-[25px] font-bold mt-[20px]">
          {title}
        </h2>
        <p className="font-semibold">
          {para}
        </p>
      </div>
    </>
  );
};

export default NewsReuse;
