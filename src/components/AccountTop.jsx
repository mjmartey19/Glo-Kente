
import React, { useState, useRef, useEffect } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { CiCircleQuestion } from 'react-icons/ci';
import { IoNotificationsOutline } from 'react-icons/io5';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import noUser from '../assets/noUser.png';
import ProfilePopUp from './ProfilePopUp';
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';

const AccountTop = ({user}) => {
  const [toggle, setToggle] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full px-8 py-3 border-b border-b-[#bbbbbb] flex justify-between fixed z-40 bg-[#FFFFFF]'>
    <Link to='/home'>
        <img src={logo} className="w-20" />
    </Link>
      <div className='flex gap-2 '>
        <CiCircleInfo
          size={35}
          data-tooltip-id='detail'
          className='cursor-pointer hover:bg-[#E8E8E9] p-1 rounded'
        />
        <CiCircleQuestion
          size={35}
          data-tooltip-id='support'
          className='cursor-pointer text-xl  hover:bg-[#E8E8E9] p-1 rounded'
        />

        <IoNotificationsOutline
          size={35}
          data-tooltip-id='notification'
          className='cursor-pointer text-xl  hover:bg-[#E8E8E9] p-1 rounded'
        />

        <div className='cursor-pointer' ref={profileRef}>
          <img
             src={user?.profileUrl  ?? noUser}
            alt='User Profile Image'
            className='w-9 h-9 object-cover rounded-full'
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
      {toggle && <ProfilePopUp  user={user}/>}

      <ReactTooltip id='detail' place='bottom' content='Detail' />
      <ReactTooltip id='support' place='bottom' content='Support' />
      <ReactTooltip id='notification' place='bottom' content='Notification' />
    </div>
  );
};

export default AccountTop;
