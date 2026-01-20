import React, { useEffect, useRef, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import del from "./assets/del.png";
import edit from "./assets/edit.png";
const TaxCard = ({ info, openModal, openEditModal }) => {
  const [option, showOption] = useState(false);
  const optionRef = useRef(null);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        optionRef.current &&
        option &&
        !optionRef.current.contains(event.target)
      ) {
        showOption(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [option]);
  return (
    <>
      <div className="bg-[#F7F7F8] relative rounded-[8px] border border-[#E6E6E9] shadow-sm shadow-[#1018280D] pl-4 pt-6 pr-8">
        <p
          className={`text-sm font-medium py-4 text-[#070707] border-dashed border-b border-[#00000017]`}
        >
          <span className="text-[#84818A80]">Tax Advisors Name : </span>
          {info.name}
        </p>
        <p
          className={`text-sm  break-all font-medium py-4 text-[#070707] border-dashed border-b border-[#00000017]`}
        >
          <span className="text-[#84818A80]">Email address : </span>
          {info.email}
        </p>
        <p
          className={`text-sm font-medium py-4 text-[#070707] border-dashed border-b border-[#00000017]`}
        >
          <span className="text-[#84818A80]">Phone Number : </span>
          {info.phone}
        </p>
        <p
          className={`text-sm font-medium w-full break-all
 py-4 text-[#070707]`}
        >
          <span className="text-[#84818A80]">Location : </span>
          {info.location}
        </p>
        <div ref={optionRef} className="absolute top-2 right-4">
          <button
            onClick={() => showOption(!option)}
            className="bg-black p-1 rounded-full  cursor-pointer "
          >
            <BiDotsVerticalRounded className="text-lg text-white" />
          </button>
          {/* Edit/Delte dropdown */}
          {option && (
            <div className="absolute space-y-1 py-1 pr-7 bg-white rounded-tl-[8px] top-1/2 right-1/2 rounded-tr-[2px] rounded-br-[8px] rounded-bl-[8px] px-3 ">
              {/* Edit */}
              <div className="border-[#00000017] py-2 flex items-center gap-1 border-b border-dashed">
                <button
                  onClick={openEditModal}
                  className="h-6 w-6 flex items-center justify-center cursor-pointer bg-white border-[#E6E7E9] rounded-full border"
                >
                  <img src={edit} alt="" className="w-3" />
                </button>
                <span className="text-sm font-medium">Edit</span>
              </div>
              {/* Delete */}
              <div className="border-[#00000017] flex items-center gap-1 py-2 border-dashed">
                <button
                  onClick={openModal}
                  className="h-6 w-6 cursor-pointer flex items-center justify-center bg-white border-[#E6E7E9] rounded-full border"
                >
                  <img src={del} alt="" className="w-3" />
                </button>
                <span className="text-sm font-medium ">Delete</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TaxCard;
