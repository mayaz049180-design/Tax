import React from "react";

const ModalBtn = ({ bg, label, close }) => {
  return (
    <button
      onClick={close}
      className={`${bg} rounded-[6px] cursor-pointer w-full py-2.5 px-4 text-sm shadow-sm`}
    >
      {label}
    </button>
  );
};

export default ModalBtn;
