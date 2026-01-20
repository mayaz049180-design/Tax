import React from "react";

const Text = ({ label, placeholder, type, name, value, onChange }) => {
  return (
    <>
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="text-sm capitalize inline-block font-medium"
        >
          {label}
        </label>
        <div className="w-full rounded-[8px] border-[#E6E7E9] shadow-sm">
          <input
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            className="w-full py-2.5 px-4  outline-none"
            id="name"
          />
        </div>
      </div>
    </>
  );
};

export default Text;
