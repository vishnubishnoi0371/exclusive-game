import React, { useEffect, useState } from "react";
import arow1 from "../assets/images/arrow1.png";
import arow2 from "../assets/images/arrow2.png";

import { Marcaone, Marcathree, Marcatwo } from "../common_svg/icon";
import Slots from "./Slots";

const mycardinfo = [
  {
    svg: <Marcaone />,
    name: "Inteligencia",
    para: "Comprendemos a la perfección los gustos de las personas y el mundo del gaming.",
  },
  {
    svg: <Marcatwo />,
    name: "Proactividad",
    para: "Somos creadores de cambios que exploran nuevas formas de entretenimiento.",
  },
  {
    svg: <Marcathree />,
    name: "Innovación",
    para: "Pensamos fuera de la caja para estar siempre un paso adelante.",
  },
];

const Marca = () => {
  const [first, setfirst] = useState();
  function index(first) {
    setfirst(!first);
  }
  const mycard = mycardinfo.map((mycard) => (
    <div className="xs_1:w-1/2 md:w-1/3 lg:w-4/12 px-3 pt-2 md:pt-5 overflow-hidden">
      <div
        className={`${
          index === 1 ? "max-w-[260px]" : ""
        } max-w-[252px] mx-auto flex justify-center flex-col`}
        data-aos={mycard.aos}
      >
        <div className=" flex  justify-center">
          <span className="p-[25px] rounded-full bg-[#f5fff5]">
            {mycard.svg}
          </span>
        </div>
        <p className="text-xl  font-normal font-ff-anton text-nowrap md:leading-[130%] mb-1 md:mb-[10px] mt-2 md:mt-[16px] text-center text-[#00141b] ">
          {mycard.name}
        </p>
        <div className="flex items-center justify-center">
          <p className="text-base  font-medium max-w-[262px] font-ff-inter  md:leading-[160%] text-center text-[#334349] opacity-80 ">
            {mycard.para}
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <div
      id="Tragamonedas"
      className="marca-bg bg-white lg:bg-[#00141b] pt-3 md:pt-10 lg:pb-[100px] xl:pb-[160px] mt-[-2px]"
    >
      <div className="max-w-[1164px]  relative px-3 mx-auto pb-10 lg:pb-14 xl:pb-[150px] ">
        <h2
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="md:text-[48px] text-[44px] font-normal font-ff-anton leading-[57px]  lg:pt-[230px] pb-4 md:pb-[60px]  text-center text-[#00141b]"
        >
          Nuestros Atributos de Marca
        </h2>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="flex flex-row items-center justify-center flex-wrap -mx-3 "
        >
          {mycard}
        </div>
        <span>
          <img
            className="absolute top-[38%] lg:top-[58%] xl:top-[50%] left-[23%] lg:left-[22%] max-w-[200px] lg:max-w-[242px] w-full hidden md:block"
            src={arow1}
            alt=""
          />
        </span>
        <img
          className="absolute top-[45%] lg:top-[68%] xl:top-[60%] right-[23%] lg:right-[22%] max-w-[200px] lg:max-w-[242px] w-full hidden md:block"
          src={arow2}
          alt=""
        />
      </div>
      <Slots />
    </div>
  );
};
export default Marca;
