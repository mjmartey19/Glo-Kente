import React, { useState } from "react";
import kente from "../assets/kent.png";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NoProfile } from "../assets/index";
import Overview from "./Overview";
import Personal from "./Personal";
import { BsCamera } from "react-icons/bs"
import DragAndDropModal from './DragAndDropModal';

const accountList = [
   {
    id:'overview',
    name:'Overview',
   },
   {
    id:'user-settings',
    name:'User Settings',
   },
   {
    id:'billing',
    name:'Plan & Billing',
   }
]

const AccountSideBar = ({ active, setActive, user }) => {
  const Input = ({ type, styles, label, labelStyles, name, value }) => {
    return (
      <table className="text-sm table-fixed">
        <tbody>
          <tr className="">
            <td className="text-[#979ea8] py-2" style={{ width: "50%" }}>
              {label && (
                <p className={`text-ascent-2 text-sm ${labelStyles}`}>
                  {label}
                </p>
              )}
            </td>
            <td style={{ width: "50%" }}>
              <input
                type={type}
                name={name}
                value={value}
                className={`bg-secondary rounded border border-[#66666690] outline-none text-sm text-ascent-1 px-4 py-2 placeholder:text-[#666] ${styles}`}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  const [clickSettings, setClickSettings] = useState(false);

  const handleToggle = () => {
    setClickSettings(!clickSettings);
  };

  const [hover, setHover] = useState(false);

  //Drag and drop model
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="fixed w-1/4 lg:w-1/5 h-screen border border-r-[#bbbbbb] flex  justify-center z-30">
      <div className="w-full">
        <div className="flex flex-col items-center pt-20 w-full ">
          <div className="w-fit relative rounded-full cursor-pointer"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={openModal}
          >
          <img   src={user?.profileUrl  ?? noUser}
            alt='User Profile Image' className="w-20 h-20 rounded-full object-cover" />
          {hover && (
            <div className="absolute inset-0 bg-black/20 rounded-full flex flex-col justify-center items-center">
          <BsCamera color="white"/>
              <span className="text-sm font-bold text-white">Upload</span>
          </div>
          )}
          </div>
          {modalOpen && <DragAndDropModal onClose={closeModal} />}
        </div>
        <div className="mt-2 text-center">
          <h1 className="font-bold pb-2">{user?.firstName} {user?.lastName}</h1>
          <p className="text-sm">{user?.email}</p>
        </div>

        <ul className="mt-8">
          {accountList.map((list) => (
            <li
              key={list.id}
              className={`pl-8 w-full py-2 cursor-pointer hover:bg-[#E8E8E9] ${
                active == list.id &&
                "bg-[#E8E8E9] font-semibold border-4 border-l-[#333]"
              }`}
              onClick={() => setActive(list.id)}
            >
              <span>{list.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountSideBar;
