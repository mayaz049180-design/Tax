import React from "react";
import ImageUploader from "./ImageUploader";

const FileCard = () => {
  return (
    <>
      <div className="flex flex-col mt-5 mb-7 justify-between  bg-[#F7F7F8]  border border-[#E6E6E9] rounded-md py-4 lg:px-8 px-4">
        <div>
          <ImageUploader />
        </div>
        <div>
          <p className="border-b-2 border-dashed pb-3 lg:text-[14px] text-[10px] text-[#BDBCC1]  my-4 border-[#E1E1E2]">
            Tax Advisor Name :
            <span className=" text-black font-semibold"> Brooklyn Simmons</span>
          </p>
          <p className="border-b-2 pb-3 border-dashed lg:text-[14px] text-[10px] text-[#BDBCC1]  my-4 border-[#E1E1E2]">
            Date:
            <span className="text-black font-semibold"> 10/20/2024</span>
          </p>
          <p className="border-b-2 pb-3 border-dashed lg:text-[14px] text-[10px] text-[#BDBCC1]  my-4 border-[#E1E1E2]">
            Token Number :
            <span className="text-black font-semibold"> 423D$Z</span>
          </p>

          <p className="text-[#BDBCC1]  lg:text-[14px] text-[10px] my-4 border-[#E1E1E2]">
            Nots :
            <span className="text-black  font-semibold">
              {" "}
              et consectetur. Quam bibendum sit nec egestas facilisis molestie
              nisi sit sed. Lobortis neque neque amet facilisis sapien velit sed
              id suspendisse. Sed ac porta pellentesque magna. Varius nisl
              aliquet mauris tempor amet in. dolor sit amet consectetur. Quam
              bibendum sit nec egestas facilisis molestie nisi sit sed. Lobortis
              neque neque amet facilisis sapien vel amet consectetur. Quam
              bibendum sit nec egestas facilisis molestie nisi sit sed. Lobortis
              neque neque amet facilisis
            </span>
          </p>
          <div className="flex justify-center flex-col gap-3   ">
            <button className="p-3  w-full lg:text-[14px] text-[10px]  text-center font-semibold  bg-[#C7E941] rounded">
              Decrypt Image & Download
            </button>
            <button className="p-3  w-full lg:text-[14px] text-[10px]   font-semibold  bg-white rounded">
              Decrypt Image & send to TA
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileCard;
