import React, { useEffect } from "react";
import mas7 from "../assets/images/mas7.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mas1, Mas2, Mas3 } from "../common_svg/icon";

const Mas = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="bg-[#00141b] relative mt-[-2px] overflow-hidden">
      <div className="container max-w-[1164px] px-3 mx-auto py-10 xl:py-[100px]">
        <div className="flex  flex-row flex-wrap items-center justify-center -mx-3 ">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="md:w-1/2 z-30 w-full ps-3 pe-[22px]"
          >
            <img className="w-full h-full rounded-[8px]" src={mas7} alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="md:w-1/2 w-full z-30 flex flex-col justify-center items-center md:items-start pe-3 ps-[22px]"
          >
            <h2 className="lg:text-[48px] z-30 md:text-[35px] text-[40px] text-center md:text-start font-normal font-ff-anton leading-[57.6px] mb-10 sm:mb-4 mt-5 md:mt-0 lg:mb-[60px] text-white">
              Más razones para elegirnos
            </h2>
            <div className="flex items-center z-30 max-w-[375px] w-full justify-center green-crd py-[18px] lg:py-[24px] px-[40px] lg:px-[56px] gap-[37px] rounded-[16px] border-[.5px] border-white mb-4 lg:mb-[24px]">
              <div className="flex items-center justify-center bg-[#0f2f28] rounded-full w-[68px] h-[68px]">
                <Mas1 />
              </div>
              <div>
                <p className="font-normal font-ff-anton text-[32px] text-white leading-[42px]">
                  200
                </p>
                <p className="text-base font-medium font-ff-inter text-white">
                  Páginas creadas
                </p>
              </div>
            </div>
            <div className="flex items-center z-30 max-w-[375px] w-full justify-center green-crd py-[18px] lg:py-[24px] px-[40px] lg:px-[56px] gap-[37px] rounded-[16px] border-[.5px] border-white mb-4 lg:mb-[24px]">
              <div className="flex items-center justify-center bg-[#0f2f28] rounded-full w-[68px] h-[68px]">
                <Mas2 />
              </div>
              <div>
                <p className="font-normal font-ff-anton text-[32px] text-white leading-[42px]">
                  98%
                </p>
                <p className="text-base font-medium font-ff-inter text-white">
                  Clientes Satisfechas{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center max-w-[375px] w-full justify-center green-crd py-[18px] lg:py-[24px] px-[40px] lg:px-[56px] gap-[37px] rounded-[16px] border-[.5px] border-white mb-4 lg:mb-[24px]">
              <div className="flex items-center justify-center bg-[#0f2f28] rounded-full w-[68px] h-[68px]">
                <Mas3 />
              </div>
              <div>
                <p className="font-normal font-ff-anton text-[32px] text-white leading-[42px]">
                  200
                </p>
                <p className="text-base font-medium font-ff-inter text-white">
                  Divisas Disponibles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <span className="md:w-[480px] md:h-[480px] w-[280px] h-[280px] bg-[#69e2a9] absolute right-[1%] md:right-[-25%] bottom-[25%] md:bottom-[17%] opacity-[50%] rounded-full ft_ep_1"></span> */}
      <span className="md:w-[480px] md:h-[480px] w-[280px] h-[280px] bg-[#69e2a9] absolute left-[-15%] top-0  md:top-[-25%] opacity-[50%] rounded-full ft_ep_1"></span>
    </div>
  );
};

export default Mas;
