import React from "react";
import del from "./assets/delete.png";
const TaxDeleteModal = ({ closeModal }) => {
  return (
    <>
      <div className="bg-[#1A1A1A99] fixed  flex px-4 pt-15 pb-4  overflow-y-auto inset-0 z-99  h-screen w-full">
        <div className="bg-white  relative  w-full  m-auto pb-7 sm:w-[60%]  lg:w-[40%] rounded-[16px]  px-8 ">
          <div className="h-25 w-25 left-1/2  -translate-y-1/2 -translate-x-1/2 absolute border-[4px] border-white  rounded-full bg-[#EA4334]  flex items-center justify-center">
            <img src={del} alt="" className="w-10" />
          </div>
          <div className="text-center space-y-2 pb-6 border-dashed border-b border-[#7070702E]  mt-14">
            <p className="text-[#000000]  font-medium xl:text-3xl">Delete</p>
            <p className="text-[#8C959A] xl:text-2xl">
              Are you sure you want to delete.
            </p>
          </div>
          {/* button */}
          <div className="flex justify-between gap-2 mt-5 xl:gap-10 md:gap-6   md:mx-5">
            {/* Cancel btn */}
            <button
              onClick={closeModal}
              className="shadow-md cursor-pointer max-w-[200px] shadow-[#1018280D] w-full  md:text-xl py-2.5 rounded-full border border-[#E6E7E9]"
            >
              Cancel
            </button>
            <button className="shadow-md text-white max-w-[200px] cursor-pointer shadow-[#1018280D] w-full md:text-xl py-2.5 rounded-full bg-[#EA4334]">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxDeleteModal;
