import { useRef, useState } from "react";
import gal from "./assets/gal.png";
const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
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
    <div>
      <div className="flex flex-col items-center gap-4">
        <div
          className="flex justify-center items-center overflow-hidden  border border-[#E6E6E9] cursor-pointer rounded-lg  w-[100px] h-[100px] bg-[#FFFFFF]"
          onClick={handleImageClick}
          role="button"
          aria-label="Upload profile picture"
        >
          {image ? (
            <img src={image} alt="Uploaded" className=" h-20 w-20 " />
          ) : (
            // <ImImage  className="text-4xl  text-gray-500" />
            <img src={gal} alt="Uploaded" className="h-10 object-cover" />
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
  );
};

export default ImageUploader;
