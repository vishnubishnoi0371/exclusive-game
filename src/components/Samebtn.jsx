import React from "react";

const Samebtn = (props) => {
  return (
    <button className="px-[32px] common-btn green-sh md:px-[46px] buttonbox py-3 md:py-[13px]  rounded-[41px]  text-[#00141b]  text-base font-ff-inter font-bold text-center">
      {props.text}
    </button>
  );
};
export default Samebtn;
