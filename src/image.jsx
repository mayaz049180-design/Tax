import React, { useEffect, useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { IoIosClose } from "react-icons/io";

const Image = () => {
  const [images, setImages] = useState([]);
  const inputRef = useRef(null);
  console.log(images);
  const handleInput = () => {
    inputRef.current.click();
    console.log(inputRef.current);
  };
  const handleChange = (e) => {
    const img = [...e.target.files];
    const newFile = img.map((item) => {
      return {
        file: item,
        id: crypto.randomUUID(),
        url: URL.createObjectURL(item),
      };
    });
    setImages((prev) => [...prev, ...newFile]);
  };
  const handleDelete = (id) => {
    setImages((prev) => prev.filter((item) => item.id !== id));
    const remove = images.find((item) => item.id === id);
    if (remove) {
      URL.revokeObjectURL(remove);
    }
  };
  return (
    <div className="flex flex-col bg-red-400 justify-center my-10 items-center">
      <div
        onClick={handleInput}
        className="h-20 w-20 cursor-pointer border flex my-2 bg-gray-100 items-center justify-center "
      >
        <IoMdAdd className="text-4xl " />
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-4  gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="h-40 relative w-40 flex items-center justify-center border"
          >
            <img
              src={img.url}
              alt=""
              className="h-20 w-20 object-cover rounded-xl"
            />
            <div
              onClick={() => {
                handleDelete(img.id);
              }}
              className="absolute -right-2 flex items-center justify-center -top-3 rounded-full w-8 h-8 bg-white"
            >
              <IoIosClose className="text-3xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
