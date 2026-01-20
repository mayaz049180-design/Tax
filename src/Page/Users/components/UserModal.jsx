import React, { useRef, useState } from "react";
import Text from "../../../Components/Common/Text";
import ModalBtn from "../../../Components/Common/ModalBtn";
import { IoMdAdd } from "react-icons/io";

const UserModal = ({ closeModal }) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    location: "",
  });
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      console.log(reader);
      reader.readAsDataURL(file);
      console.log(reader.result);
      reader.onload = (e) => {
        console.log(`this is ${e}`);
        setImage(e.target.result);
      };
      setImage(file.name);
    } else {
      alert("Please upload a valid image file.");
    }
  };
  return (
    <div className="bg-[#1A1A1A99] fixed   flex px-4 py-4  overflow-y-auto inset-0 z-99  min-h-screen w-full">
      <div className="bg-white w-full m-auto lg:w-[35%] md:w-[50%] rounded-[16px] p-8">
        <div>
          <div className="flex flex-col items-center gap-4">
            <div
              className="flex
               justify-center items-center   border border-[#E6E6E9] cursor-pointer rounded-full w-[100px] h-[100px] bg-[#FFFFFF]"
              onClick={handleImageClick}
              role="button"
              aria-label="Upload profile picture"
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className=" h-full object-cover  "
                />
              ) : (
                // <ImImage  className="text-4xl  text-gray-500" />
                <IoMdAdd className="text-[#D4D4D4] text-[50px]" />
              )}
            </div>

            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="space-y-3">
          <Text
            label="Full Name"
            placeholder="Brooklyn Simmons "
            type="text"
            name="name"
            value={inputValue.name}
            onChange={handleInputValue}
          />
          <Text
            label="Email Address"
            placeholder="(219) 555-0114 "
            type="email"
            name="email"
            value={inputValue.email}
            onChange={handleInputValue}
          />
          <Text
            label="Location"
            placeholder="(219) 555-0114 "
            type="text"
            name="location"
            value={inputValue.location}
            onChange={handleInputValue}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <ModalBtn bg="bg-white" label="Cancel" close={closeModal} />
          <ModalBtn bg="bg-[#C7E941]" label="Add" />
        </div>
      </div>
    </div>
  );
};

export default UserModal;
