import React, { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./canvasUtils";
import waveBg from "../assets/wavebackground.svg";
import pictureIcon from "../assets/pictureIcon.svg";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

const DragAndDropModal = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(file, croppedAreaPixels);
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };


  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
      let fileType = file.type

    if (validExtensions.includes(fileType)) {
      try {
        let imageDataUrl = await readFile(file);
        setFile(imageDataUrl);
        console.log("done", { file });
      } catch (err) {
        console.error("File failed to read", err);
      }
    } else {
      alert("This is not an Image File!");
      setIsActive(false);
    }
    
    }
  };
  
  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        // 'event.target.result' contains the base64-encoded content of the file
        resolve(event.target.result);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      // Start reading the file as a data URL
      reader.readAsDataURL(file);
    });
  };
    

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleDragLeave = () => {
    setIsActive(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setIsActive(true);
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    let fileType = droppedFile.type

  if (validExtensions.includes(fileType)) {
    try {
      let imageDataUrl = await readFile(droppedFile);
      setFile(imageDataUrl);
      console.log("done", { file });
    } catch (err) {
      console.error("File failed to read", err);
    }
  } else {
    alert("This is not an Image File!");
    setIsActive(false);
  }
    
    }

  const handleButtonClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.click();

    input.addEventListener("change", (e) => {
      onFileChange(e);
    });
  };

  return (
    <div
      className={`z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 ${
        isActive ? "active" : ""
      }`}
    >
      <div className="bg-white rounded-lg shadow-md w-[50%]">
        <div className="flex justify-between px-4 py-5 border-b">
        <div className="flex items-center gap-4">
        {file && <IoIosArrowBack size={25} className="cursor-pointer" onClick={() => setFile(null)}/>}
        <h3 className="text-2xl font-bold font-sans">Upload Photo</h3>
        </div>
          <div className="cursor-pointer">
            <AiOutlineClose onClick={onClose} size={17} />
          </div>
        </div>

        {file ? (
          <React.Fragment>
          <div className="cropper-container" style={{ width: '100%', height: '320px', position: 'relative'}}>
           
              <Cropper
                image={file}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                cropSize={{ width: 230, height: 250 }} 
              />
            </div>
            <div>
            
            </div>
            {/* {croppedImage && (
              <img
                src={croppedImage}
                alt="Uploaded File"
                className="mt-4 mx-auto rounded"
              />
            )} */}
          </React.Fragment>
        ) : (
          <div
            className="relative drag-area border border-dashed border-[#dedeff] rounded p-20  m-6  text-sm hover:border-solid"
            style={{ backgroundImage: `url(${waveBg})` }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
          >
            <div
              className="flex flex-col items-center justify-center gap-5"
            >
              <img src={pictureIcon} alt="picture icon" />
              <div>
                <span
                  className="underline text-[#3c41c2] cursor-pointer"
                  onClick={handleButtonClick}
                >
                  Choose a file
                </span>
                <span> or drag and drop an image here to upload</span>
              </div>
              <input type="file" onChange={onFileChange} hidden className="absolute w-full h-full" accept="image/*"/>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-2 px-5 mb-5 font-semibold pt-5">
          <button
            onClick={onClose}
            className="text-sm border border-[#3c41c2] text-[#3c41c2] hover:bg-[#3c41c2] hover:text-white py-1.5 px-7 rounded cursor-pointer"
          >
            Cancel
          </button>
          <button className="text-sm border bg-[#3c41c2] text-white py-1.5 px-7 rounded cursor-pointer"
          onClick={() => {
            showCroppedImage
            onClose();
          }}

          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DragAndDropModal;
