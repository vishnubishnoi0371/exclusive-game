import React, { useEffect } from "react";
import casino from "../assets/images/casino.webp";
import btnline from "../assets/images/btn_line.webp";
import Samebtn from "./Samebtn";
import AOS from "aos";
import "aos/dist/aos.css";
const Casino = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="bg-white casino-bg-img lg:bg-[#00141b] mt-[-2px] overflow-hidden">
      <div className="container max-w-[1164px] px-3 mx-auto py-10 lg:py-[150px] xl:py-[290px] mb-[44px]">
        <div className="flex flex-row flex-wrap items-center justify-center -mx-3 ">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="w-full md:w-1/2 px-3"
          >
            <h2 className="text-[48px] font-normal font-ff-anton leading-[57.6px] mb-[16px] text-[#00141b]">
              Por qué elegirnos
            </h2>
            <p className="text-base font-medium font-ff-inter leading-[25.5px] max-w-[526px] text-[#334349] mb-[24px]">
              Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
              todo lo invertido en fichas en la moneda que elijas. En Exclusive
              Games siempre sumamos nuevos juegos. Juegos crash, los juegos
              interactivos que más pide la gente. Con Exclusive Games empezás a
              ganar ya! Creamos tu plataforma en solo 2 semanas.
            </p>
            <div className="relative">
              <Samebtn text="Aprende más" />
              <img
                className="absolute bottom-[-13%] left-[-1%]"
                src={btnline}
                alt=""
              />
            </div>{" "}
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="w-full md:w-1/2 px-3 pt-6 md:pt-0"
          >
            <img className="w-full rounded-[8px]" src={casino} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
