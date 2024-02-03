import React, { useEffect } from "react";
import jackpot from "../assets/images/jackpot1.webp";
import vivo1 from "../assets/images/vivo1.webp";
import vivo2 from "../assets/images/vivo2.webp";
import vivo3 from "../assets/images/vivo3.png";
import btnline from "../assets/images/white-line.webp";
import { Tickmark } from "../common_svg/icon";
import AOS from "aos";
import "aos/dist/aos.css";
const Jackpot = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="bg-jackpot relative pb-10 pt-10 lg:pt-5 xl:pt-[130px] xl:pb-[114px] overflow-hidden">
      <div className="max-w-[1164px] px-3 mx-auto ">
        <div className="flex flex-row flex-wrap -mx-3 pb-[75px]">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="w-full z-30 md:w-1/2 px-3"
          >
            <img className="w-full h-full" src={jackpot} alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="w-full md:w-1/2 px-3 "
          >
            <h2 className="md:text-[48px] text-[30px] font-normal font-ff-anton leading-[57.5px] text-[#fff] xl:mt-[30px] mb-3 lg:mb-[16px]">
              Potenciando sus elecciones
            </h2>
            <p className="font-medium text-base font-ff-inter leading-[25.6px] text-[#fff] mb-3 lg:mb-[24px]">
              Con Exclusive Game lo mejor está de tu lado.
            </p>
            <div className="flex items-center gap-2">
              <span>
                <Tickmark />
              </span>
              <p className="text-base font-medium font-ff-inter leading-[25.5px] text-[#fff] mb-2 lg:mb-3">
                Tecnología HTML5
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <Tickmark />
              </span>
              <p className="text-base font-medium font-ff-inter leading-[25.5px] text-[#fff] mb-2 lg:mb-3">
                Versión PC y móvil{" "}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <Tickmark />
              </span>
              <p className="text-base font-medium font-ff-inter leading-[25.5px] text-[#fff] mb-2 lg:mb-3">
                Control de RTP (controlás qué porcentaje pagar){" "}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <Tickmark />
              </span>
              <p className="text-base font-medium font-ff-inter leading-[25.5px] text-[#fff] mb-2 lg:mb-3">
                Bonos editables, happy hours, Jackpots, códigos promocionales.{" "}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <Tickmark />
              </span>
              <p className="text-base font-medium font-ff-inter leading-[25.5px] text-[#fff] mb-2 lg:mb-3">
                Aplicación para android y windows de regalo.{" "}
              </p>
            </div>

            <p className="text-base font-medium font-ff-inter leading-[25.5px] text-[#fff] mt-2 lg:mt-3 mb-2 lg:mb-3">
              Te reintegramos todo lo invertido en fichas en la moneda que
              elijas.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-full w-[1043px]  border-[.5px]  border-white rounded-[16px] bg_jackpot_2  xl:my-[75px]">
            <div className="flex items-center justify-center py-10 md:py-[96px]">
              {" "}
              <h2
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="text-[48px] font-ff-anton font-normal leading-[57px] text-center max-w-[520px] text-white"
              >
                lanza tu propia plataforma en sólo 2 semanas
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6 lg:pt-[75px] ">
          <h2
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="text-[48px] font-normal font-ff-anton text-white leading-[57.6px] mb-7 lg:mb-[60px]"
          >
            Juegos en vivo
          </h2>
        </div>
        <div className="flex flex-row z-30 items-center justify-center flex-wrap -mx-3 ">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="w-full xxs:w-1/2 md:w-1/3 px-3"
          >
            <div className=" relative">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Reproducir ahora
                  </button>
                  <img
                    className=" absolute  bottom-[-8%] left-[-2%]"
                    src={btnline}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px] w-full h-full "
                src={vivo1}
                alt="img"
              />
            </div>
            {/* <img className="w-full rounded-[8px]" src={elos1} alt="" /> */}
          </div>{" "}
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="w-full xxs:w-1/2 md:w-1/3 px-3 pt-4 xxs:pt-0"
          >
            <div className=" relative">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Reproducir ahora
                  </button>
                  <img
                    className=" absolute  bottom-[-8%] left-[-2%]"
                    src={btnline}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px] w-full h-full "
                src={vivo2}
                alt="img"
              />
            </div>
            {/* <img className="w-full rounded-[8px]" src={elos1} alt="" /> */}
          </div>{" "}
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="w-full xxs:w-1/2  md:w-1/3 px-3 pt-4 z-30 md:pt-0"
          >
            <div className=" relative ">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Reproducir ahora
                  </button>
                  <img
                    className=" absolute  bottom-[-8%] left-[-2%]"
                    src={btnline}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px] w-full h-full "
                src={vivo3}
                alt="img"
              />
            </div>
            {/* <img className="w-full rounded-[8px]" src={elos1} alt="" /> */}
          </div>{" "}
        </div>
      </div>
      <span className="md:w-[480px] md:h-[480px] w-[280px] h-[280px] bg-[#69e2a9] absolute left-[-18% top-[0%] md:top-[-15%] opacity-[50%]  rounded-full ft_ep_1"></span>
      {/* <span className="md:w-[480px] md:h-[480px] w-[280px] h-[280px] bg-[#69e2a9] absolute right-[-18%] bottom-[8%] opacity-[50%] rounded-full ft_ep_1"></span> */}
    </div>
  );
};

export default Jackpot;
