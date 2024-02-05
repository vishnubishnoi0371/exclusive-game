import React, { useState } from "react";
const AccordionItem = ({
  index,
  title,
  content,
  headingParaStyle,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="bg-[#00141b] ">
      <div className="mb-2 md:mb-5 lg:mb-[32px] bg-[#00141b] p-[12px_14px] md:p-[16px_20px] rounded-[6px] border-[1px] border-[#FFFFFF80]">
        <div className="flex justify-between items-center bg-transparent  cursor-pointer">
          <span
            style={headingParaStyle}
            className=" font-ff-anton text-base md:text-[20px] leading-[26px] text-[#FFF] font-normal bg-transparent"
            onClick={() => onToggle(index)}
          >
            {title}
          </span>
          <span
            className=" font-medium text-[14px] md:text-base font-ff-inter text-[#cbd0d1]"
            onClick={() => onToggle(index)}
          >
            {isOpen ? "-" : "+"}
          </span>
        </div>
        {isOpen && (
          <div className="bg-transparent py-2">
            <p className="  font-ff-inter text-[12px] md:text-base text-[#FFF] md:leading-[25.6px] font-medium opacity-[80%] bg-transparent max-w-[880px]">
              {content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Accordion_Faq = () => {
  const accordionItems = [
    {
      title:
        "¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?",
      content:
        "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      title: "¿Cómo garantizan la seguridad de las operaciones en sus juegos?",
      content:
        "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      title:
        " ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?",
      content:
        "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      title: "¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?",
      content:
        "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      title: "¿Qué métodos de pago aceptan?",
      content:
        "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      title: "¿Puedo probar sus juegos antes de comprometerme?",
      content:
        "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordionItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="bg-[#00141b] relative">
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className=" max-w-[997px] z-30  mx-auto px-3"
      >
        <p className=" font-ff-anton font-normal text-[40px] z-30 lg:text-[48px] text-[#FFF] md:leading-[57.6px] pt-7 lg:pt-[60px] xl:pt-[130px] text-center mb-5  lg:mb-[60px]">
          Preguntas más frecuentes{" "}
        </p>
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            title={item.title}
            content={item.content}
            headingParaStyle={item.headingParaStyle}
            isOpen={index === openIndex}
            onToggle={toggleAccordionItem}
          />
        ))}
      </div>
      <span className="lg:w-[480px] lg:h-[480px] h-[280px] w-[280px] bg-[#69e2a9] absolute left-[-75%] lg:left-[-18%] top-[-15%] opacity-1 lg:opacity-[50%]  rounded-full ft_ep_1"></span>
    </div>
  );
};

export default Accordion_Faq;
