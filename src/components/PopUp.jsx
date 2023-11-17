import React, { useState, useEffect, useRef } from 'react'

import { IoChevronBackOutline } from 'react-icons/io5'
import { BiSolidLockAlt } from 'react-icons/bi'
import { IoMdSettings } from 'react-icons/io'
import cus from '../assets/cus.png';

import noUser from '../assets/noUser.png';
import safe from '../assets/shield.png'


const PopUp = () => {
    const cusRef = useRef(null);
    const [setting, setSettings] = useState(false);
    const [newItem, setNewItem] = useState([]);

    const handleSettings = () => {
        setSettings(!setting)
    }

    const handleDeleteStole = (id) => {
        
    }

    useEffect(() => {
        const handleClickCus = (event) => {
            if (cusRef.current && !cusRef.current.contains(event.target)) {
                setSettings(false);
            }
        };

        document.addEventListener('click', handleClickCus);

        return () => {
            document.removeEventListener('click', handleClickCus);
        };
    }, []);

    return (
        <div>
            <div className='bg-white relative px-10 py-8 top-11 rounded-lg'>
                <div className='relative flex flex-row  items-center justify-between'>
                    <a href='home' className='flex text-yellow-400 flex-row items-center gap-x-0.5 '>
                        <IoChevronBackOutline />
                        <span className='text-md'>Back</span>
                    </a>
                    <div className='flex flex-row items-center gap-x-4'>
                        <div className='flex flex-row rounded-full
                           border border-[#d0d5db] px-3 bg-[#f1f1f1] py-1 items-center gap-x-1'>
                            <BiSolidLockAlt size={20} color='#646e80' />
                            <span className='text-sm text-[#646e80]'>Private</span>
                        </div>
                        <IoMdSettings color='#646e80' size={20} className='cursor-pointer ' onClick={handleSettings} ref={cusRef} />
                    </div>
                    {setting && (
                        <div className='flex flex-col   absolute z-10 right-4 top-10 border shadow-2xl rounded-md border-gray-500 border-opacity-30  w-[10rem] items-center bg-[#fff]'>
                            <span className=' p-2 border-b border-gray-300 border-opacity-70  w-full text-center hover:bg-yellow-400 cursor-pointer rounded-t-md '>Duplicate</span>
                            <span className='p-2  w-full text-center hover:bg-yellow-400 rounded-b-md cursor-pointer'>Delete</span>

                        </div>
                    )}
                </div>
                <div className='pt-8'>
                    <span className='font-bold text-2xl underline'>Copy of kente Stole with Parameters</span>
                    <div className='flex flex-row pt-8 gap-28'>
                        <div className='h-[35rem] bg-[#f1f1f1] rounded-md px-16 py-8 '>
                            <img src={cus} className="object-cover h-full" />
                        </div>
                        <div className='flex flex-row  '>
                            <div className='mt-4 absolute z-10 '>
                                <img src={noUser} alt="" className='rounded-full w-9 h-9' />
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='relative flex flex-col pt-3'>
                                    <span>Kente Sash by </span>
                                    <a href="" className='underline text-yellow-400'>Dannny123</a>

                                </div>

                                <a href='/whiteboard' className=" px-10 py-2.5  mt-4  rounded-full bg-yellow-400 hover:bg-opacity-75 ">
                                    <span className="text-md text-white">Customize this</span>
                                </a>

                                <div className='flex flex-row items-center mt-7  gap-20'>
                                    <span className='text-yellow-400 underline cursor-pointer'>Safe Mode</span>
                                    <img src={safe} alt="" className='w-5 h-5' />

                                </div>
                                <div className='flex flex-col text-sm items-center gap-y-1 mt-8 text-[#646e80]'>
                                    <span>Edited November 06, 2023</span>
                                    <span>Edited November 06, 2023</span>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default PopUp