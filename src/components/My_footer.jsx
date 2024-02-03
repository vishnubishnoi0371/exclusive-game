import React from "react";
import footerlogo from "../assets/images/footer_logo.webp";
import { Face, Insta, Linkdin, Mail, Phone } from "../common_svg/icon";

const My_footer = () => {
  const phoneNumber = "+2349067322844";

  return (
    <div className="bg-black relative mt-[-2px] overflow-hidden md:mt-[75px]">
      {" "}
      <div className="container max-w-[1164px] px-3 mx-auto ">
        <div className="flex flex-row flex-wrap  justify-between -mx-3 pt-10 md:pt-[64px] pb-5 md:pb-[40px]">
          <div className="lg:w-1/3 w-full px-3">
            <img src={footerlogo} className="cursor-pointer" alt="ft-logo" />
            <p className="text-base font-medium font-ff-inter leading-[26px] text-white mt-[16px] mb-[24px] lg:max-w-[368px]">
              En Exclusive Games somos un equipo{" "}
              <span className="lg:block">
                {" "}
                apasionado de personas dedicadas al desarrollo{" "}
              </span>{" "}
              de multiplataformas para juegos de azar
            </p>
            <div className="flex items-center pb-3  gap-3">
              <a
                href="https://www.instagram.com/"
                target="blank"
                className="rounded-full duration-500 hover:translate-y-[-20%]     cursor-pointer flex items-center justify-center w-[32px] h-[32px] p-[7px] bg-[#292929]"
              >
                <span>
                  <Insta />
                </span>
              </a>
              <a
                href="https://www.facebook.com/login/"
                target="blank"
                className="rounded-full duration-500 hover:translate-y-[-20%]     cursor-pointer flex items-center justify-center w-[32px] h-[32px] p-[5px_11px] bg-[#292929]"
              >
                <span>
                  <Face />
                </span>{" "}
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="blank"
                className="rounded-full duration-500 hover:translate-y-[-20%]     cursor-pointer flex items-center justify-center w-[32px] h-[32px] p-[7px] bg-[#292929]"
              >
                <span>
                  <Linkdin />
                </span>
              </a>
            </div>
          </div>
          <div className=" lg:w-8/12 w-full px-3">
            <div className="flex flex-row  flex-wrap   -mx-3">
              <div className="w-1/2 xs_2:w-1/4  px-3">
                <p
                  className="text-white  text-base font-bold font-ff-inter  leading-[26px] 
  "
                >
                  Menú principal{" "}
                </p>
                <ul className="ps-0 mt-3 md:mt-[16px]">
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-medium text-base font-ff-inter  text-white relative not-italic leading-[26px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Hogar
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-medium text-base font-ff-inter  text-white relative not-italic leading-[26px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Misión
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-medium text-base font-ff-inter  text-white relative not-italic leading-[26px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Tragamonedas
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-normal text-nowrap  cursor-pointer  font-ff-rob text-base text-white relative not-italic leading-[26px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Por qué elegirnos{" "}
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-medium text-base font-ff-inter  text-white relative not-italic leading-[26px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Ofertas{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 xs_2:w-1/3  px-3">
                <p className="text-white  text-base font-bold font-ff-inter  leading-[26px] ">
                  Atención al cliente
                </p>
                <ul className="ps-0 mt-3  md:mt-[16px]">
                  <li className="mb-3 ">
                    <a
                      href="#"
                      className="font-medium text-base font-ff-inter  text-white relative not-italic leading-[26px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      ¿Necesitas ayuda?
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-medium text-base font-ff-inter  text-white relative not-italic leading-[26px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      política de privacidad
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-medium text-base font-ff-inter  text-white relative not-italic leading-[26px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Términos de servicios
                    </a>
                  </li>
                </ul>
              </div>
              <div className="xs_1:w-1/2 w-full xs_2:w-5/12  px-3">
                <p className="text-white  text-base font-bold font-ff-inter  leading-[26px]">
                  Ponerse en contacto{" "}
                </p>
                <ul className="ps-0 mt-3 md:mt-[16px]">
                  <li className="mb-3 flex items-center gap-2">
                    <span>
                      <Mail />
                    </span>
                    <a
                      href="#"
                      className="font-medium  cursor-pointer  font-ff-inter text-base text-white relative not-italic leading-[26px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      juegosexclusivos@gmail.com
                    </a>
                  </li>
                  <li className="mb-3 flex items-center  gap-2">
                    <Phone />
                    <a
                      href={`tel:${phoneNumber}`}
                      className="font-medium text-nowrap cursor-pointer  font-ff-inter text-base text-white relative not-italic leading-[26px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      (101)342-7873{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <hr className="w-full h-[1px] bg-[#191919]" />
      <div className="flex items-center justify-center py-[20px]">
        <p className="text-base font-medium font-ff-inter leading-[26px] text-[#808080] text-center">
          © Juegos exclusivos - Todos los derechos reservados 2023
        </p>
      </div>
      <span className="w-[170px] h-[170px] bg-[#69e2a9] absolute left-[-4%] bottom-[-2%] opacity-[50%] rounded-full ft_ep_1"></span>
      <span className="w-[180px] h-[180px] bg-[#69e2a9] absolute right-[-5%] top-0 md:top-[20%] opacity-[50%] rounded-full ft_ep_1"></span>
    </div>
  );
};

export default My_footer;
