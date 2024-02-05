import React, { useEffect } from "react";
import Samebtn from "./Samebtn";
import btnline from "../assets/images/btn_line.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const Lanza = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="bg-[#00141b] mt-[-2px]">
      <div className="container max-w-[1164px] px-3 mx-auto pt-10 xl:pt-[118px] pb-7 xl:pb-[75px]">
        <div className="border-[.5px] border-white rounded-[16px] lanza-bg px-1 sm:px-0">
          <h2
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="text-[32px] font-normal font-ff-anton leading-[42px] text-white text-center mb-5 md:mb-[40px] mt-5 lg:mt-[60px] xl:mt-[104px]"
          >
            Lanza tu propia plataforma en sólo 2 semanas
          </h2>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="flex items-center justify-center pb-10 lg:pb-[60px] xl:pb-[100px]"
          >
            <div className="relative">
              <Samebtn text="Leer más" />
              <img
                className="absolute bottom-[-13%] left-[-3%]"
                src={btnline}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lanza;
