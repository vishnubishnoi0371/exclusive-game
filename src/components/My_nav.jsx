import React, { useState, useEffect } from "react";
import logo from "../assets/images/page_logo.webp";
import btnlinew from "../assets/images/white-line.webp";
import btnline from "../assets/images/btn_line.webp";
import openbtn from "../assets/images/nav_line.svg";
import closebtn from "../assets/images/close-line.svg";
import Samebtn from "./Samebtn";
import AOS from "aos";
import "aos/dist/aos.css";
const My_Nav = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  const Movement = () => {
    setshow(false);
  };
  return (
    <div className="bg-[url('../src/assets/images/hero_bg.webp')] flex flex-col bg-no-repeat bg-100% min-h-[100vh] overflow-hidden ">
      <div className=" relative z-30">
        <nav className=" nav_bg py-[19px]">
          <div className=" container  mx-auto max-w-[1164px] px-3">
            <div className=" flex items-center justify-between ">
              <div className=" flex  xl:gap-[101px] gap-[60px]">
                <div>
                  <img className=" cursor-pointer" src={logo} alt="img" />
                </div>
                <ul
                  className={`${
                    show ? "left-0" : "left-[-100%]"
                  } flex  gap-[28px]  z-10 min-h-screen fixed lg:min-h-fit lg:static w-full lg:w-auto items-center justify-center
              top-0 bg-[#00141b] lg:bg-[unset]  max-lg:w-[100%] max-lg:flex-col flex-row max-lg:min-h-screen  right-0 ps-0 duration-[400ms] transition-all ease-linear`}
                >
                  <li>
                    <a
                      onClick={Movement}
                      href="#Hogar"
                      className=" font-medium text-[16px] font-ff-inter text-[#d2d8da] hover:text-white duration-300  relative after:absolute after:bg-[#fff] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                    >
                      Hogar
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#Misión"
                      className=" font-medium text-[16px] font-ff-inter text-[#d2d8da] hover:text-white duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                    >
                      Misión
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#Tragamonedas"
                      className=" font-medium text-[16px] font-ff-inter text-[#d2d8da] hover:text-white duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                    >
                      Tragamonedas
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#elegirnos"
                      className=" font-medium text-[16px] font-ff-inter text-[#d2d8da] hover:text-white duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                    >
                      Por qué elegirnos
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#Ofertas"
                      className=" font-medium text-[16px] font-ff-inter text-[#d2d8da] hover:text-white duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                    >
                      Ofertas
                    </a>
                  </li>
                  <div className=" relative lg:hidden z-[10]">
                    <button className=" border border-[#fff] px-[46px] py-[13px] text-white text-[16px] font-bold font-ff-inter rounded-[41px] ">
                      Acceso
                    </button>
                    <img
                      className=" absolute  bottom-[-4px] left-[-4px]  "
                      src={btnlinew}
                      alt="img"
                    />
                  </div>
                </ul>
              </div>
              <div className=" relative hidden lg:block z-[10]">
                <button className=" border border-[#fff] hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 px-[46px] py-[13px] text-white text-[16px] font-bold font-ff-inter rounded-[41px] white_shadow ">
                  Acceso
                </button>
                <img
                  className=" absolute  bottom-[-9%] left-[-3%] z-[-3] "
                  src={btnlinew}
                  alt="img"
                />
              </div>
              <div
                className=" position-relative  z-30  lg:hidden  "
                onClick={() => {
                  setshow(!show);
                }}
              >
                {show ? (
                  <img src={closebtn} alt="#" />
                ) : (
                  <img src={openbtn} alt="#" />
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div id="Hogar" className=" flex-grow flex">
        <div className=" container  mx-auto max-w-[1164px] px-3 flex items-center justify-center">
          <div
            className="  text-center m150px] lg:mt-0"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <h1 className=" font-normal lg:text-[72px]  text-[48px] text-white font-ff-anton leading-[120%] uppercase">
              Exclusive Games. <span className=" block"> Pasión por ganar</span>
            </h1>
            <p className=" font-medium lg:text-[16px] text-[14px] font-ff-inter text-[#cccfd1] pt-[16px] leading-[131%]">
              En Exclusive Games somos un equipo apasionado de personas
              dedicados al desarrollo de{" "}
              <span className=" sm:block">
                multiplataformas para juegos de azar. A lo largo de nuestra vida
                consumimos todo tipo de
              </span>{" "}
              juegos hasta que un día decidimos crear los propios.
            </p>
            <div className=" flex justify-center z-[10] pt-[40px]">
              <div className="relative">
                <Samebtn text="Empezar" />
                <img
                  className="absolute bottom-[-13%] left-[-4%]"
                  src={btnline}
                  alt="btn-line"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_Nav;
