import React, { useState, useEffect } from "react";
import logo from "../assets/images/page_logo.webp";
import btnlinew from "../assets/images/white-line.webp";
import btnline from "../assets/images/btn_line.webp";
import Samebtn from "./Samebtn";
import AOS from "aos";
import "aos/dist/aos.css";
const My_Nav = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const [first, setfirst] = useState(false);
  function view() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <div className="bg-[url('../src/assets/images/hero_bg.webp')] bg-no-repeat bg-100% md:min-h-[800px] overflow-hidden">
      <div className=" nav_bg">
        <div className="max-w-[1164px] relative  px-3 mx-auto ">
          <div className="flex justify-between py-[19px]">
            <img className="cursor-pointer" src={logo} alt="" />
            <ul
              className={`${
                first ? "left-0" : "left-[-100%]"
              } flex  gap-[28px]  z-50 min-h-screen fixed lg:min-h-fit lg:static w-full lg:w-auto items-center justify-center
              top-0 bg-[#000] lg:bg-[unset]  max-lg:w-[100%] max-lg:flex-col flex-row max-lg:min-h-screen  right-0 ps-0 duration-[350ms] transition-all ease-linear nav_set`}
            >
              <li className="list-none cursor-pointer text-white text-base fw-medium font-ff-inter leading-[160%] not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500 duration-500  before:h-[2px] before:bg-white  before:content'' hover:before:w-full hover:before:right-0">
                {" "}
                <a href="#locatio">Hogar</a>
              </li>
              <li className="list-none cursor-pointer text-white text-base fw-medium font-ff-inter leading-[160%] not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500 duration-500  before:h-[2px] before:bg-white  before:contents'' hover:before:w-full hover:before:right-0">
                {" "}
                <a href="#schdul">Misión</a>
              </li>
              <li className="list-none cursor-pointer text-white text-base fw-medium font-ff-inter leading-[160%] not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500 duration-500  before:h-[2px] before:bg-white  before:contents'' hover:before:w-full hover:before:right-0">
                {" "}
                <a href="#Ticke">Tragamonedas</a>
              </li>
              <li className="list-none cursor-pointer text-white text-base fw-medium font-ff-inter leading-[160%] not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500 duration-500  before:h-[2px] before:bg-white  before:contents'' hover:before:w-full hover:before:right-0">
                {" "}
                <a href="#memoris">Por qué elegirnos</a>
              </li>
              <li className="list-none cursor-pointer text-white text-base fw-medium font-ff-inter leading-[160%] not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500 duration-500  before:h-[2px] before:bg-white  before:contents'' hover:before:w-full hover:before:right-0">
                {" "}
                <a href="#memoris">Ofertas</a>
              </li>
            </ul>
            <div className=" relative hidden lg:block ">
              <button className=" border border-[#fff]  hover:shadow-[inset_18rem_0_0_0_#fff] hover:text-[#00141b] shadow-[inset_0_0_0_0]  duration-500 px-[46px] py-[13px] text-white text-[16px] font-bold font-ff-inter rounded-[41px]  ">
                Acceso
              </button>
              <img
                className=" absolute  bottom-[-9%] left-[-3%]  "
                src={btnlinew}
                alt="img"
              />
            </div>
            <button
              onClick={view}
              className=" z-10 absolute block border-none tracking-[3px] rotate-90 lg:hidden right-2 top-6   text-white"
            >
              |||
            </button>
          </div>{" "}
        </div>
      </div>

      <div className="max-w-[1164px] relative px-3 mx-auto ">
        <div className="flex flex-col items-center justify-center pt-[60px] md:pt-[140px]">
          <p
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="max-w-[505px] z-20 text-[50px] md:text-[72px] font-normal leading-[120%] uppercase text-white text-center font-ff-anton mb-2"
          >
            Exclusive Games. Pasión por ganar
          </p>
          <p
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="mt-2 text-base font-medium font-ff-inter text-center text-white max-w-[727px] leading-[120%] opacity-80"
          >
            En Exclusive Games somos un equipo apasionado de personas dedicados
            al desarrollo de multiplataformas para juegos de azar. A lo largo de
            nuestra vida consumimos todo tipo de juegos hasta que un día
            decidimos crear los propios.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="flex items-center justify-center  py-[40px]"
          >
            <div className="relative">
              <Samebtn text="Empezar" />
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

export default My_Nav;
