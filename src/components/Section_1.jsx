import React, { useEffect } from "react";
import aviater from "../assets/images/sec_1_2.webp";
import poker from "../assets/images/sec_1_1.webp";
import { Whitearrow } from "../common_svg/icon";
import AOS from "aos";
import "aos/dist/aos.css";
const Section_1 = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div
      id="Misión"
      className="bg-[#00141b]  relative mt-[-2px] overflow-hidden"
    >
      <div className="max-w-[1200px] px-3 mx-auto py-10 sm:py-[50px] overflow-hidden">
        <div className="flex flex-row items-center justify-center flex-wrap  -mx-3 ">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="sm:w-1/2 lg:w-1/2 px-3  md:pe-[25px] z-30"
          >
            <img
              className="w-full h-full rounded-[16px] mb-4 sm:mb-[60px]"
              src={poker}
              alt="#"
            />
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-[48px] font-normal text-white font-ff-anton leading-[120%] mb-2 sm:mb-[16px]"
            >
              Nuestra Visión
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-base font-ff-inter font-medium text-white leading-[160%] mb-3 sm:mb-[24px]"
            >
              Nuestra visión es ser líderes indiscutibles en la industria de los
              juegos de azar y llevar nuestra pasión por el entretenimiento más
              allá de las fronteras. Imagina un mundo donde la emoción y la
              diversión no tengan límites, y ese es el mundo que queremos crear
              contigo.
            </p>
            <button
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-base flex items-center gap-1 font-bold font-ff-inter text-[#7AF57A] leading-[160%]"
            >
              Aprende más{" "}
              <span>
                <Whitearrow />
              </span>
            </button>
          </div>
          <div className="sm:w-1/2 flex flex-col-reverse sm:flex-col lg:w-1/2 px-3 md:ps-[25px] z-30">
            <div>
              <p
                data-aos="fade-left"
                data-aos-duration="2000"
                className="text-[48px] font-normal text-white font-ff-anton leading-[120%] mt-3 sm:mt-0 mb-2 sm:mb-[16px]"
              >
                Nuestra Misión{" "}
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="2000"
                className="text-base font-ff-inter font-medium text-white leading-[160%] mb-3 sm:mb-[24px]"
              >
                Nuestra visión es ser líderes indiscutibles en la industria de
                los juegos de azar y llevar nuestra pasión por el
                entretenimiento más allá de las fronteras. Imagina un mundo
                donde la emoción y la diversión no tengan límites, y ese es el
                mundo que queremos crear contigo.
              </p>
              <button
                data-aos="fade-left"
                data-aos-duration="2000"
                className="text-base flex items-center gap-1 font-bold font-ff-inter text-[#7AF57A] leading-[160%]"
              >
                Aprende más{" "}
                <span>
                  <Whitearrow />
                </span>
              </button>
            </div>
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              className="w-full h-full rounded-[16px] mt-5 md:mt-[60px]"
              src={aviater}
              alt="#"
            />
          </div>
        </div>
      </div>
      <span className="md:w-[480px] w-[280px] h-[280px] md:h-[480px] bg-[#69e2a9] absolute left-[-8%] top-[15%] opacity-[50%]  rounded-full ft_ep_1"></span>
      <span className="md:w-[280px] md:h-[280px] w-[100px] h-[100px] bg-[#69e2a9] absolute left-[10%] md:left-[40%] top-[39%] opacity-[50%]  rounded-full ft_ep_1"></span>
    </div>
  );
};

export default Section_1;
