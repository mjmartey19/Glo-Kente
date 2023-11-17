import React, { useState } from "react";

const Overview = ({ active, handleSetActive, user }) => {
  return (
    <div>
      {/* Overview */}
      {active === "overview" && (
        <div className="template w-full px-10">
          <div className=" bg-[#fff] pt-14 w-full">
            <h3 className="pb-2 font-bold text-xl">Overview</h3>
            <p className="text-sm text-[#979ea8]">
              One place to manage your information
            </p>
          </div>

          <div className="rounded-lg border p-6 w-fit mt-5">
            <p className="pb-3 text-sm text-[#979ea8]">USER SETTINGS</p>
            <h3 className="pb-5 font-bold text-xl">User Information</h3>
            <p className="text-sm pb-5 border-b text-[#979ea8]">
              You can edit your name, email address, account password, and
              language.
            </p>

            <table className="  text-sm w-full">
              <tr className="w-full border-b">
                <td className="text-[#979ea8] py-2 pr-10">NAME</td>
                <td>{user?.firstName} {user?.lastName}</td>
              </tr>
              <tr className="py-2 border-b">
                <td className="text-[#979ea8] py-2">USERNAME</td>
                <td>{user?.userName}</td>
              </tr>
              <tr className="py-2 border-b">
                <td className="text-[#979ea8] py-2">EMAIL</td>
                <td>{user?.email}</td>
              </tr>
              <tr className="py-2 border-b">
                <td className="text-[#979ea8] py-2">PASSWORD</td>
                <td>************</td>
              </tr>
             
            </table>
            <p
              className="text-blue-500 text-end mt-8 text-sm cursor-pointer hover:text-blue-400"
              onClick={() => handleSetActive("user-settings")}
            >
              See more in User settings
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
