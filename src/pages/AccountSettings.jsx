import React, { useEffect, useState } from "react";
import HomeSideBar from "../components/HomeSideBar";
import HometopBar from "../components/HometopBar";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import kent1 from "../assets/kent-1.jpg";
import AccountTop from "../components/AccountTop";
import AccountSideBar from "../components/AccountSideBar";
import CustomButton from "../components/CustomButton";
import Overview from "../components/Overview";
import Personal from "../components/Personal";
import PlanBilling from "../components/PlanBilling";
import { useSelector } from "react-redux";

const Input = ({ type, styles, label, labelStyles, name, value }) => {
  return (
  <table className="text-sm table-fixed">
    <tbody>
      <tr className="">
        <td className="text-[#979ea8] py-2" style={{ width: '50%' }}>
          {label && (
            <p className={`text-ascent-2 text-sm ${labelStyles}`}>{label}</p>
          )}
        </td>
        <td style={{ width: '50%' }}>
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

const AccountSettings = () => {
  const [active, setActive] = useState("overview");
  const { user } = useSelector((state) => state.user);
  const handleSetActive = (newActive) => {
    setActive(newActive);
  };
  return (
    <div className="h-screen">
      <AccountTop user={user}/>
      <div className="w-full flex pt-10 relative">
         <AccountSideBar  user={user} active={active} setActive={handleSetActive} />
        <div className="main flex flex-1 flex-col px-5 ml-60 mt-6">
        <Overview user={user} active={active} handleSetActive={handleSetActive} />
        <Personal user={user} active = {active} />
        <PlanBilling active = {active} />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
