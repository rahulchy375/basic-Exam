import React from "react";
import catering1 from "/catering1.png";
import CateringReuse from "../reuse/CateringReuse";
import catering2 from "/catering2.png";
import catering3 from "/catering3.png";
import partner1 from "/partner1.png"
import partner2 from "/partner2.png"
import partner3 from "/partner3.png"
import partner4 from "/partner4.png"
import partner5 from "/partner5.png"


const Catering = () => {
  return (
    <>
      <section className="bg-black">
        <div className="container mx-auto p-[10px] text-white">
          <p className="text-[13px] text-center">Family owned since 1995</p>
          <h2 className="text-[27px] text-center font-bold">
            Catering Services{" "}
          </h2>
          <div className="sm:flex flex-wrap justify-between">
            <CateringReuse
              img={<img src={catering1} alt="" />}
              title="Catering Holiday"
              para="A blend of delicios and real tasty food"
              price="Start $62.50/person "
            />
            <CateringReuse
              img={<img src={catering2} alt="" />}
              title="Catering Holiday"
              para="A blend of delicios and real tasty food"
              price="Start $62.50/person "
            />
            <CateringReuse
              img={<img src={catering3} alt="" />}
              title="Catering Holiday"
              para="A blend of delicios and real tasty food"
              price="Start $62.50/person "
            />
            <CateringReuse
              img={<img src={catering2} alt="" />}
              title="Catering Holiday"
              para="A blend of delicios and real tasty food"
              price="Start $62.50/person "
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FA0606]">
        <div className="container mx-auto p-[10px]">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
            <div className="text-center">
              <h2 className="text-[25px] mb-[10px] mt-[20px] font-bold">
                Our Ingredients Are Sustainably Sourced{" "}
              </h2>
              <p className="mb-[15px] text-white">
                Loremipsumdoloremearsit ametconsectoradicipingconsectene{" "}
              </p>
            </div>
            <button className="font-bold px-[20px] py-[10px] bg-white">View Menu</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-[10px]">
            <div className="flex flex-col justify-center items-center sm:flex-row gap-[30px] flex-wrap">
                <img src={partner1} alt="" />
                <img src={partner2} alt="" />
                <img src={partner3} alt="" />
                <img src={partner4} alt="" />
                <img src={partner5} alt="" />
            </div>
        </div>
      </section>
    </>
  );
};

export default Catering;
