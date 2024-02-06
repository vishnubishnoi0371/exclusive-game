import React, { useEffect } from "react";
import elos1 from "../assets/images/elos1.webp";
import elos2 from "../assets/images/elos2.webp";
import elos3 from "../assets/images/elos3.webp";
import btnline from "../assets/images/white-line.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const Eloss = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="bg-[#00141b] mt-[-2px]">
      <div className="container max-w-[1164px] px-3 mx-auto pt-7 lg:pt-[50px] xl:pt-[100px]">
        <h2
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="md:text-[48px] text-[38px] font-normal font-ff-anton md:leading-[57px] text-white text-center mb-4 md:mb-[60px]"
        >
          Ellos eligieron apostar con nosotros
        </h2>
        <div className="flex flex-row items-center justify-center flex-wrap -mx-3 mb-[38px]">
          <div className="md:w-1/3 xs_1:w-1/2 w-full px-3">
            <div className=" relative">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 border-[1px] border-[#fff] font-bold text-[16px] font-ff-inter text-white px-[46px] py-[13px] rounded-[41px] ">
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
                src={elos1}
                alt="img"
              />
            </div>
          </div>
          <div className="md:w-1/3 xs_1:w-1/2 w-full px-3 pt-4 xs_1:pt-0">
            <div className=" relative">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 border-[1px] border-[#fff] font-bold text-[16px] font-ff-inter text-white px-[46px] py-[13px] rounded-[41px] ">
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
                src={elos2}
                alt="img"
              />
            </div>
          </div>
          <div className="md:w-1/3 xs_1:w-1/2 w-full px-3 pt-4 md:pt-0">
            <div className=" relative">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 border-[1px] border-[#fff] font-bold text-[16px] font-ff-inter text-white px-[46px] py-[13px] rounded-[41px] ">
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
                src={elos3}
                alt="img"
              />
            </div>
          </div>
        </div>
        <p
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="text-base font-semibold  text-center font-ff-inter leading-[26px] text-white pb-3 mt-[-15px] sm:mt-0 md:pb-[20px]"
        >
          Clientes satisfechos que confiaron en Exclusive Games y han disfrutado
          de emocionantes experiencias de juego.{" "}
          <span className="md:block">
            Ahora, la próxima apuesta está en tus manos.
          </span>{" "}
          Elige ganar. Elige exclusive game.
        </p>
      </div>
    </div>
  );
};

export default Eloss;
