import React from 'react'
import CustomButton from './CustomButton'

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
const Personal = ({active, user}) => {

  return (
    <div>
       {/* User Settings  */}
       {active === 'user-settings' && (
            <div className="template bg-[#fff] w-full py-1 -z-20">
            <div className="fixed bg-[#fff] pt-14 w-full pb-10 border-b px-4">
              <div className="w-[70%] flex items-center justify-between pr-10">
                <h3 className="pb-3 font-bold text-xl">User settings</h3>
                <CustomButton
                  title="Save Changes"
                  containerStyles="bg-yellow-400 text-sm text-black py-2 px-4 rounded semibold"
                />
                
              </div>
              <p className="text-sm text-[#979ea8]">
                Any changes you make will apply to your Account
              </p>
            </div>

            <div className="p-9  mt-36 border-b">
              <p className="pb-3 font-bold text-lg">Account settings</p>
              <form>
                <Input type="text" label="First Name" value={user?.firstName} />
                <Input type="text" label="Last Name" value={user?.lastName} />
                <Input type="text" label="Email" value={user?.email} />
              </form>
            </div>

            {/* Password   */}
            <div className="p-6 ">
              <p className="pb-3 font-bold text-lg">Change Password </p>
              <form>
                <Input type="password" label="Current Password" />
                <Input type="password" label="New Password " />
                <Input type="password" label="Repeat Password" />
              </form>
              <div className="w-full mt-20">
              <h3 className="pb-3 font-bold text-xl">Delete account</h3>
              <p className="text-sm text-[#979ea8]">
              If you delete your account, your data will be gone forever.
              </p>
            </div>

            </div>

          </div>
          )}
    </div>
  )
}

export default Personal
