import React, { useEffect } from "react";
import silver from "../assets/images/silver.webp";
import platnium from "../assets/images/platnium.png";
import { Tickmark } from "../common_svg/icon";
import Samebtn from "./Samebtn";
import btnline from "../assets/images/btn_line.webp";
import btnline2 from "../assets/images/white-line.webp";
import aheart from "../assets/images/aheart.webp";
import abreks from "../assets/images/abreks.webp";
import caram from "../assets/images/caramdice.webp";
import ludo from "../assets/images/ludodice.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const Ofertas = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <div className="bg-[#00141b] relative mt-[-2px] overflow-hidden">
        <div className="container max-w-[1164px] px-3 mx-auto pb-5 md:py-[50px]">
          <div className="flex flex-col items-center justify-center">
            <h2
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="text-[48px] font-ff-anton leading-[57.6px] mb-4 font-normal text-white "
            >
              Nuestras ofertas
            </h2>
            <p
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="sm:text-base text-[14px] text-center md:text-start font-medium font-ff-inter leading-[26px]  text-white mb-[60px]"
            >
              Te ofrecemos las mejores experiencias de juegos para tus clientes.
            </p>
          </div>
          <div className="border-[.5px] relative border-white rounded-[16px] bg-[#062023] p-3 mb-7 lg:mb-[64px]">
            <div className="flex flex-row flex-wrap items-center justify-between -mx-3 pt-5 md:pt-[45px] pb-[20px]">
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className=" md:w-6/12 z-30 w-full px-3"
              >
                <img
                  className="w-full md:w-[125%] xl:w-[118%] max-w-[700px] max-h-[500px]  h-full lg:px-[40px] md:px-2 rounded-[8px]"
                  src={silver}
                  alt=""
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="2000"
                className=" md:w-6/12 w-full px-3 "
              >
                <div className="xs_1:px-6 sm:px-[40px] sm_2:px-0 xl:px-[40px] ">
                  <p className="text-[32px] font-normal font-ff-anton leading-[42px] mb-2 md:mb-[16px] text-white">
                    Silver
                  </p>
                  <p className="sm:text-base text-[14px]  font-medium font-ff-inter md:leading-[26px] md:max-w-[400px] text-[#cdd2d3] mb-4 md:mb-[32px]">
                    Diseño predeterminado, atractivo y fácil de navegar,
                    tecnología HTLM5.
                  </p>
                  <p className="text-[48px] font-normal font-ff-anton leading-[57px] mb-2 md:mb-[16px] text-white">
                    $5000
                  </p>
                  <div className="flex gap-2 mb-2 md:mb-3">
                    <span>
                      <Tickmark />
                    </span>{" "}
                    <p className="md:max-w-[387px] font-medium sm:text-base text-[14px]  font-ff-inter leading-[26px] text-[#cdd2d3]">
                      Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                      Cargas manuales
                    </p>
                  </div>
                  <div className="flex gap-2 mb-2 md:mb-3">
                    <span>
                      <Tickmark />
                    </span>{" "}
                    <p className="md:max-w-[387px] font-medium sm:text-base text-[14px] font-ff-inter leading-[26px] text-[#cdd2d3]">
                      Control de RTP (controlás qué porcentaje pagar)
                    </p>
                  </div>
                  <div className="flex gap-2 mb-2 md:mb-3">
                    <span>
                      <Tickmark />
                    </span>{" "}
                    <p className="md:max-w-[387px] font-medium sm:text-base text-[14px]  font-ff-inter leading-[26px] text-[#cdd2d3]">
                      Bonos Editables, Happy Hours, Jackpots, Códigos
                      Promocionales Regalo
                    </p>
                  </div>
                  <div className="flex gap-2 mb-2 md:mb-3">
                    <span>
                      <Tickmark />
                    </span>{" "}
                    <p className="md:max-w-[387px] font-medium sm:text-base text-[14px] text-center md:text-start font-ff-inter leading-[26px] text-[#cdd2d3]">
                      Aplicación para Android y Windows de regalo.
                    </p>
                  </div>
                  <div className="flex gap-2 mb-5 md:mb-[40px]">
                    <span>
                      <Tickmark />
                    </span>
                    <p className="max-w-[387px] font-medium sm:text-base text-[14px] text-center md:text-start font-ff-inter leading-[26px] text-[#cdd2d3]">
                      Tiempo de creación 2 a 3 semanas
                    </p>
                  </div>
                  <div className="relative">
                    <button className="p-[13px_46px] rounded-[41px]  hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 border-white border-[1px]  text-white  sm:text-base text-[14px] text-center md:text-start font-ff-inter font-bold text-center">
                      Comprar ahora
                    </button>
                    <img
                      className="absolute bottom-[-13%] left-[-1%]"
                      src={btnline2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className="md:w-[280px] w-[180px] h-[180px] z-20 md:h-[280px] bg-[#69e2a9] absolute left-[8%] top-[5%] md:top-[10%] opacity-[50%] rounded-full ft_ep_1"></span>
          </div>
          <div className="border-[.5px] relative z-30 border-white rounded-[16px] bg-[#062023] p-3 pt-[38px] mb-6 lg:mb-[64px] pb-[41px] bg-luxury">
            <div className="flex flex-col xs_1:items-center justify-center">
              <h2 className="text-[32px] font-normal font-ff-anton leading-[42px] text-white mb-[16px]">
                Luxury
              </h2>

              <p className="sm:text-base text-[14px]    font-medium font-ff-inter xs_1:text-center leading-[26px] text-[#ced4d5] max-w-[391px] mb-[32px]">
                lleva tu experiencia de juego al siguiente nivel. Con todas las
                características de la versión Silver y la potencia adicional de
                la tecnología React .
              </p>
              <p className="text-[48px] font-normal font-ff-anton leading-[57px] text-white mb-[16px]">
                $9000
              </p>
              <div className="flex flex-col items-start">
                <div className="flex w-full  mb-3">
                  <span>
                    <Tickmark />
                  </span>
                  <p className="max-w-[387px] ps-2 xs_1:ps-0  mx-auto  font-medium text-start xs_1:text-center sm:text-base text-[14px]  font-ff-inter leading-[26px] text-[#cdd2d3]">
                    Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas,
                    Cargas manuales
                  </p>
                </div>
                <div className="flex w-full mb-3">
                  <span>
                    <Tickmark />
                  </span>
                  <p className="max-w-[387px] ps-2 xs_1:ps-0 xs_1:mx-auto   font-medium text-start xs_1:text-center sm:text-base text-[14px]  font-ff-inter leading-[26px] text-[#cdd2d3]">
                    Control de RTP (controlás qué porcentaje pagar)
                  </p>
                </div>
                <div className="flex w-full  mb-3 ">
                  <span>
                    <Tickmark />
                  </span>
                  <p className="max-w-[387px] ps-2 xs_1:ps-0 mx-auto   font-medium text-start xs_1:text-center sm:text-base text-[14px]   font-ff-inter leading-[26px] text-[#cdd2d3]">
                    Bonos Editables, Happy Hours, Jackpots, Códigos
                    Promocionales Regalo
                  </p>
                </div>
                <div className="flex w-full mb-3 ">
                  <span>
                    <Tickmark />
                  </span>
                  <p className=" w-full ps-2 xs_1:ps-0 mx-auto font-medium  sm:text-base text-[14px] text-start xs_1:text-center font-ff-inter leading-[26px] text-[#cdd2d3]">
                    Aplicación para Android y Windows de regalo.{" "}
                  </p>
                </div>
                <div className="flex w-full mb-3 ">
                  <span>
                    <Tickmark />
                  </span>
                  <p className=" w-full ps-2 xs_1:ps-0 mx-auto font-medium  sm:text-base text-[14px] text-start xs_1:text-center font-ff-inter leading-[26px] text-[#cdd2d3]">
                    Tiempo de creación 2 a 3 semanas{" "}
                  </p>
                </div>
                <div className="flex items-center xs_1:mx-auto justify-center py-5 pb-0  md:py-[40px]">
                  <div className="relative ">
                    <Samebtn text="Comprar ahora" />
                    <img
                      className="absolute bottom-[-13%] left-[-3%]"
                      src={btnline}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <span>
              <img
                className="absolute hidden lg:block top-[16%] right-[11%] z-50"
                src={aheart}
                alt=""
              />
              <img
                className="absolute hidden lg:block bottom-[13%] left-[13%] z-50"
                src={abreks}
                alt=""
              />
              <img
                className="absolute top-[2%] lg:top-[13%] left-[40%] sm:left-[20%] "
                src={caram}
                alt=""
              />
              <img
                className="absolute bottom-[5%] md:bottom-[15%] right-[15%] "
                src={ludo}
                alt=""
              />
            </span>
          </div>
          <div className="border-[.5px] relative border-white z-30 rounded-[16px] bg-[#062023] ps-5 pe-2 sm:pe-6 sm:ps-[50px] overflow-hidden">
            <div className="flex md:flex-row z-30 flex-col-reverse flex-wrap items-center justify-between -mx-3 py-8  md:py-[80px] ">
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="w-full md:w-5/12  px-3"
              >
                <p className="text-[32px] font-normal font-ff-anton leading-[42px] mb-[16px] text-white">
                  Silver
                </p>
                <p className="sm:text-base text-[14px] font-medium font-ff-inter leading-[26px] md:max-w-[400px] text-[#cdd2d3] mb-3 md:mb-[32px]">
                  Diseño totalmente personalizado. Contáctanos para un
                  presupuesto.
                </p>
                <p className="text-[48px] font-normal font-ff-anton leading-[57px] mb-[16px] text-white">
                  Consultar precio{" "}
                </p>
                <div className="flex gap-2 mb-5 md:mb-[40px]">
                  <Tickmark />
                  <p className="max-w-[387px] font-medium sm:text-base text-[14px] text-center md:text-start font-ff-inter leading-[26px] text-[#cdd2d3]">
                    Personalizable
                  </p>
                </div>
                <div className="relative">
                  <button className="p-[13px_46px]  hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 rounded-[41px] border-white border-[1px]  text-white  sm:text-base text-[14px]  md:text-start font-ff-inter font-bold text-center">
                    Comprar ahora
                  </button>
                  <img
                    className="absolute bottom-[-13%] left-[-.8%]"
                    src={btnline2}
                    alt=""
                  />
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="2000"
                className="w-full md:w-7/12 z-30 px-3"
              >
                <img
                  className="w-full h-full rounded-[8px]"
                  src={platnium}
                  alt=""
                />
              </div>
              <span className="w-[280px]  h-[280px] bg-[#69e2a9] absolute right-[11%] top-[5%] md:top-[14%] opacity-[50%] rounded-full ft_ep_1"></span>
            </div>
          </div>
        </div>
        <span className="md:w-[480px] w-[280px]  h-[280px]  md:h-[480px] bg-[#69e2a9] absolute left-[-23%] bottom-[24%] md:bottom-[14%] opacity-[50%] rounded-full ft_ep_1"></span>
      </div>
    </div>
  );
};

export default Ofertas;
