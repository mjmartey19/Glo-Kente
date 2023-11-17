import React, { useState } from 'react'
import { AiOutlinePlus, AiFillCloseCircle } from 'react-icons/ai';

import { IoChevronBackOutline } from 'react-icons/io5'
import { BiSolidLockAlt } from 'react-icons/bi'
import { IoMdSettings } from 'react-icons/io'
import { Link } from 'react-router-dom';
import kent1 from '../assets/kent-1.jpg';
import cus from '../assets/cus.png';
import noUser from '../assets/noUser.png';
import safe from '../assets/shield.png'

import s1 from '../assets/stole.png'
import s2 from '../assets/s1.png'
import s3 from '../assets/stole5.png'
import emogi1 from '../assets/k.png'
import emogi2 from '../assets/heart.png'
import emogi3 from '../assets/wow.png'
import emogi4 from '../assets/star.png'
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Reaction from './Reaction';


const Free = ({name}) => {

    const emogis = [
        { id: 1, img: emogi2, title: 'Like' },
        { id: 2, img: emogi4, title: 'Awesome' },
        { id: 3, img: emogi3, title: 'Wow' },
        { id: 4, img: emogi1, title: 'Keep Going' },
    ];

    const [setting, setSettings] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const [active, setActive] = useState(null);



    const handleTooltip = (id) => {
        setTooltip(!tooltip);
        setActive(id);
    }


    const handleSettings = () => {
        setSettings(!setting)
    }
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
                        <IoMdSettings color='#646e80' size={20} className='cursor-pointer ' onClick={handleSettings} />
                    </div>
                    {setting && (
                        <div className='flex flex-col   absolute z-20 right-4 top-10 border shadow-2xl rounded-md border-gray-500 border-opacity-30  w-[10rem] items-center bg-[#fff]'>
                            <span className=' p-2 border-b border-gray-300 border-opacity-70  w-full text-center hover:bg-yellow-400 cursor-pointer rounded-t-md '>Duplicate</span>
                            <a href='/whiteboard' className='p-2  w-full text-center hover:bg-yellow-400 rounded-b-md cursor-pointer'>Customize</a>

                        </div>
                    )}
                </div>
                <div className='pt-8'>
                    <div className='flex flex-row items-center justify-between'>
                        <span className='font-bold text-2xl underline'>{name}</span>
                        <div className='flex flex-row items-center gap-3'>
                            <span className='font-semibold'>React:</span>
                            <div className='flex flex-row items-center gap-6 border h-[3rem] border-gray-300 px-6 py-1.5 rounded-full'>
                                {
                                    emogis.map(emogi =>
                                        <div className={`cursor-pointer ${active === emogi.id ? 'bg-[#f1f1f1] rounded-full p-1.5' : ''} `}>
                                            <img onClick={() => handleTooltip(emogi.id)} data-tooltip-id={emogi.id} src={emogi.img} alt='' className={`h-7 w-7 `} />
                                            <ReactTooltip id={emogi.id} place='bottom' content={emogi.title} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    
                    </div>
                    <div className='flex flex-row pt-8 gap-28'>
                        <div className='h-[35rem] bg-[#f1f1f1] rounded-md px-16 py-8 '>
                            <img src={s1} className="object-cover h-full" />
                        </div>
                        <div className='flex flex-row  '>
                            <div className='mt-4 absolute z-10 '>
                                <img src={noUser} alt="" className='rounded-full w-9 h-9' />
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='relative flex flex-col pt-3'>
                                    <span>Kente Sash by </span>
                                    <a href="" className='underline text-yellow-400'>Glokente</a>

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

export default Free