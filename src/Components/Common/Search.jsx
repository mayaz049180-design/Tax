import React, { useEffect } from "react";
import { LuSearch } from "react-icons/lu";

const Search = ({ onChange, value }) => {

  return (
    <>
      <div className="flex w-full  sm:w-auto gap-3">
        <div className="bg-[#F7F7F8] flex-1 border  rounded-[6px] border-[#E6E6E9] shadow-sm shadow-[#E6E6E9]">
          <input
            onChange={onChange}
            value={value}
            type="text"
            className=" px-4  w-full py-2 outline-none placeholder:text-[#84818A80]"
            placeholder="Search..."
          />
        </div>
        <button className="bg-[#C7E941] text-nowrap cursor-pointer rounded-[8px] px-3.5 py-3">
          <LuSearch className="text-lg" />
        </button>
      </div>
    </>
  );
};

export default Search;
