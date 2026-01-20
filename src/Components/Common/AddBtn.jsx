import React from "react";
import { IoIosAdd } from "react-icons/io";

const AddBtn = ({ title, openModal }) => {
  return (
    <>
      <button
        onClick={openModal}
        className="bg-[#030712] cursor-pointer shadow-sm shadow-[#1018280e] flex gap-0.5 items-center rounded-[6px] px-5 py-2.5"
      >
        <IoIosAdd className="text-white text-xl" />
        <span className="text-sm font-medium capitalize text-white">
          {title}
        </span>
      </button>
    </>
  );
};

export default AddBtn;
