import React from "react";
import news1 from "/news1.png";
import news2 from "/news2.png";
import NewsReuse from "../reuse/NewsReuse";

const NewsSection = () => {
  return (
    <section>
      <div className="container mx-auto p-[10px]">
        <h2 className="text-[30px] lg:text-[40px] font-bold mt-[30px] mb-[20px] text-center">
          News & Articles
        </h2>

        <div className="flex flex-col">
          <div className="sm:flex gap-[20px] lg:gap-[40px] xl:justify-between mt-[30px] mb-[10px] justify-center items-center">
            <NewsReuse
              img={<img src={news1} alt="" />}
              title="Outdoor Catering Discounts"
              para="Lorem ipsum dolor sit enim consect aetur adipisicing convallis lorems
              ipsum nosturd sit amet lorem ipsum dolor sit enim cons ect aetur
              adipisicing convallis lorems ipsum nosturd sit amet."
            />
            <NewsReuse
              img={<img src={news2} alt="" />}
              title="Events Management Company"
              para="Lorem ipsum dolor sit enim consect aetur adipisicing convallis lorems
              ipsum nosturd sit amet lorem ipsum dolor sit enim cons ect aetur
              adipisicing convallis lorems ipsum nosturd sit amet."
            />
          </div>

          <button className="font-bold lg:text-[20px]">Read More News </button>
        </div>
        <div className="bg-slate-300 h-[5px] w-full my-[50px]"></div>
      </div>
    </section>
  );
};

export default NewsSection;
