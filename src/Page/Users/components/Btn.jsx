import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Btn = ({ label, img, img1, handleBtn, status, bg }) => {
  return (
    <>
      <button
        onClick={() => {
          handleBtn();
        }}
        className="bg-white border cursor-pointer rounded-[6px] shadow-sm flex items-center gap-0.5 border-[#E6E6E8] py-2 px-4"
      >
        <img src={status ? img1 : img} alt="" className="h-3" />
        <span
          className={`text-sm capitalize ${status ? bg : "text-[#828282]"}
          `}
        >
          {label}
        </span>
      </button>
    </>
  );
};

export default Btn;
