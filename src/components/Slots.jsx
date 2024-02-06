import React, { useEffect } from "react";
import slot1 from "../assets/images/slot1.webp";
import slot3 from "../assets/images/slot3.webp";
import slot2 from "../assets/images/slot2.webp";
import slot4 from "../assets/images/slot4.webp";
import slot5 from "../assets/images/slot5.webp";
import slot6 from "../assets/images/slot6.webp";
import btnline from "../assets/images/btn_line.webp";
import btnlinew from "../assets/images/white-line.webp";
import Samebtn from "./Samebtn";
import AOS from "aos";
import "aos/dist/aos.css";
const Slots = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="marca-bg">
      <div className="max-w-[1164px] px-3 mx-auto ">
        <div className="flex items-center flex-col justify-center">
          <p
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="text-[48px] font-normal font-ff-anton text-center  leading-[120%] text-[#00141b] mb-[16px]"
          >
            Slots
          </p>
          <p
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="text-base mb-4 md:mb-[60px] font-ff-inter font-medium md:leading-[160%] text-center max-w-[904px] text-[#00141b]"
          >
            En Exclusive Games, ofrecemos una selección de más de 600 juegos de
            los principales desarrolladores, como Aristocrat, Amatic, EGT,
            Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo
            trabaja incansablemente para innovar y ampliar nuestra oferta de
            experiencias, garantizando la máxima seguridad con operaciones
            protegidas por cifrado SSL de 256 bits.
          </p>
        </div>
        <div className="flex flex-row  items-center justify-center flex-wrap -mx-3 ">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="xs_1:w-1/2 md:w-1/3 lg:w-4/12 px-3 pb-[24px]"
          >
            <div className=" relative">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" border-[1px] hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 border-[#fff] font-bold text-[16px] font-ff-inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Jugar{" "}
                  </button>
                  <img
                    className=" absolute  bottom-[-8%] left-[-3%]"
                    src={btnlinew}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px] w-full h-full "
                src={slot1}
                alt="img"
              />
            </div>{" "}
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="xs_1:w-1/2 md:w-1/3 lg:w-4/12 px-3 pb-[24px]"
          >
            <div className=" relative">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" border-[1px] hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 border-[#fff] font-bold text-[16px] font-ff-inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Jugar{" "}
                  </button>
                  <img
                    className=" absolute  bottom-[-8%] left-[-3%]"
                    src={btnlinew}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px] w-full h-full "
                src={slot2}
                alt="img"
              />
            </div>{" "}
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="xs_1:w-1/2 md:w-1/3 lg:w-4/12 px-3 pb-[24px]"
          >
            <div className=" relative">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" border-[1px] hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 border-[#fff] font-bold text-[16px] font-ff-inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Jugar{" "}
                  </button>
                  <img
                    className=" absolute  bottom-[-8%] left-[-3%]"
                    src={btnlinew}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px] w-full h-full "
                src={slot3}
                alt="img"
              />
            </div>{" "}
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="xs_1:w-1/2 md:w-1/3 lg:w-4/12 px-3 pb-[24px] md:pb-0"
          >
            <div className=" relative">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className="hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 border-[1px] border-[#fff] font-bold text-[16px] font-ff-inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Jugar{" "}
                  </button>
                  <img
                    className=" absolute  bottom-[-8%] left-[-3%]"
                    src={btnlinew}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px] w-full h-full "
                src={slot4}
                alt="img"
              />
            </div>{" "}
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="xs_1:w-1/2 md:w-1/3 lg:w-4/12 px-3 pb-[24px] md:pb-0"
          >
            <div className=" relative">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className="hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 border-[1px] border-[#fff] font-bold text-[16px] font-ff-inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Jugar{" "}
                  </button>
                  <img
                    className=" absolute  bottom-[-8%] left-[-3%]"
                    src={btnlinew}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px] w-full h-full "
                src={slot5}
                alt="img"
              />
            </div>{" "}
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="xs_1:w-1/2  md:w-1/3 lg:w-4/12 px-3 pb-[24px] md:pb-0"
          >
            <div className=" relative">
              <div className="img_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[2] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className="hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 border-[1px] border-[#fff] font-bold text-[16px] font-ff-inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Jugar{" "}
                  </button>
                  <img
                    className=" absolute z-30  bottom-[-8%] left-[-3%]"
                    src={btnlinew}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px] w-full h-full "
                src={slot6}
                alt="img"
              />
            </div>{" "}
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="flex items-center justify-center py-4  md:py-[40px]"
        >
          <div className="relative">
            <Samebtn text="Mostrar más" />
            <img
              className="absolute bottom-[-13%] left-[-3%]"
              src={btnline}
              alt="btniline"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slots;
