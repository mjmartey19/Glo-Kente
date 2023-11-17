import React, { useState } from "react";

const SideBar = () => {
  return (
    <section className="flex h-screen flex-col w-1/4 bg-[#f5f5f5] p-3 border border-gray-300 border-opacity-30">
      <div className="">
        <h3 className="text-xl font-custom text-yellow-500 font-semibold">
          Customize Your Kente Cloth Design
        </h3>
        <div className="h-[1px] w-full bg-yellow-400 mt-2"></div>
        <h4 className="text-[1.1rem] pt-4 text-gray-500 font-custom">
          Welcome to our Kente Cloth Customization Tool.{" "}
        </h4>
        <div className="pt-3 font-custom">
          <span className="">Create your unique Kente design with ease.</span>
        </div>

        <div className="pt-4">
          <h4 className="font-custom font-semibold">
            Step-by-Step Instructions:
          </h4>
          <ul className="p-3 font-custom">
            <div className="flex flex-row items-center gap-x-2">
              <div className="bg-black w-1 h-1 rounded-full"></div>
              <li> Choose a Kente Cloth Design.</li>
            </div>
            <div className="flex flex-row items-center gap-x-2 pt-2">
              <div className="bg-black w-1 h-1 rounded-full"></div>
              <li>Drag and Drop Icons and Symbols.</li>
            </div>
           
            <div className="flex flex-row items-center gap-x-2 pt-2">
              <div className="bg-black w-1 h-1 rounded-full"></div>
              <li> Customize the Colors and Sizes.</li>
            </div>
            <div className="flex flex-row items-center gap-x-2 pt-2">
              <div className="bg-black w-1 h-1 rounded-full"></div>
              <li> Arrange the Layers.</li>
            </div>
            <div className="flex flex-row items-center gap-x-2 pt-2">
              <div className="bg-black w-1 h-1 rounded-full"></div>
              <li>Preview and Save Your Design.</li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
