
import React, { useState, useRef } from 'react'
import kente from '../assets/kent.png'
import { AiOutlinePlus } from 'react-icons/ai'
import { CiClock2 } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { TbSocial } from 'react-icons/tb'
import { AiOutlineCaretDown, AiOutlineClose, AiOutlineFileText, AiOutlineFile } from 'react-icons/ai'
import { RiLayoutGridLine } from 'react-icons/ri'

import correct from '../assets/correct.png'

const HomeSideBar = () => {
    const [freePlan, setFreePlan] = useState(false);
    const premiumRef = useRef();

    


    const handleFreePlan = () => {
        setFreePlan(!freePlan)
    }
    return (
        <div className='relative w-1/3 md:w-1/5 h-screen border border-r-[#bbbbbb]'>
            <div className='flex flex-row items-center ml-6 p-4 gap-x-1 w-full'>
                {/* <img src={kente} className='w-10'/> */}
                <TbSocial size={30} />
                <p className='font-bold text-sm'>KenStole</p>
            </div>
            <div onClick={handleFreePlan} className='flex flex-row items-center w-[50%] ml-8  justify-center rounded-full gap-x-2 bg-yellow-400 cursor-pointer px-4 py-1.5 '>
                <span className='font-semibold text-sm'>Free plan</span>
                <AiOutlineCaretDown />
            </div>
            {
                freePlan && (
                    <div className='bg-white z-50 p-3.5 rounded-md absolute left-20 w-[26rem]  border border-gray-500 border-opacity-30 shadow-2xl'>
                        <div className='flex flex-row items-center justify-between'>
                            <span className='font-semibold text-lg w-[22rem]'>Included in your free kente stole plan</span>
                            <div  className='cursor-pointer hover:bg-yellow-400 hover:bg-opacity-50 hover:rounded-full p-[0.25rem]'>
                                <AiOutlineClose onClick={() => setFreePlan(false)} size={17} />
                            </div>
                        </div>
                        <div className='flex flex-row items-center
                         justify-between bg-[#f1f1f1] p-3 rounded-lg mt-2 border border-gray-300 border-opacity-20'>
                            <div className='flex flex-row items-center gap-2'>
                                <RiLayoutGridLine />
                                <span className='text-sm'>Up to 60 objects per documents</span>
                            </div>
                            <img src={correct} alt="" className='w-3.5 h-3.5' />
                        </div>
                        <div className='flex flex-row items-center
                         justify-between bg-[#f1f1f1] p-3 rounded-lg mt-2 border border-gray-300 border-opacity-20'>
                            <div className='flex flex-row items-center gap-2'>
                                <AiOutlineFileText />
                                <span className='text-sm'>Full access to basic templates</span>
                            </div>
                            <img src={correct} alt="" className='w-3.5 h-3.5' />
                        </div>
                        <div className='flex flex-row items-center
                         justify-between bg-[#f1f1f1] p-3 rounded-lg mt-2 border border-gray-300 border-opacity-20'>
                            <div className='flex flex-row items-center gap-2'>
                                <AiOutlineFile />
                                <span className='text-sm'>Up to 3 editable documents</span>
                            </div>
                            <img src={correct} alt="" className='w-3.5 h-3.5' />
                        </div>
                        <div className='mt-2'>
                            <span className='text-sm'>Upgrade to an <b>individual</b> plan to unlock premium features:</span>
                        </div>
                        <div href='/premium' className='bg-yellow-400 hover:bg-opacity-80 cursor-pointer rounded-lg mt-4 p-3 text-center font-medium'>
                            View Premium features
                        </div>
                    </div>
                )
            }
            <div className='mt-3 w-full flex justify-center'>
                <Link
                    to='/whiteboard'
                    className='flex items-center gap-1 font-bold bg-yellow-400 justify-center py-2 px-16 rounded hover:opacity-80 transition-all ease-linear'>
                    <AiOutlinePlus />
                    <span>New</span>
                </Link>
            </div>

            <div className='flex items-center mt-4 justify-center gap-1 w-full bg-[#E8E8E9] py-2 font-semibold border-4 border-l-[#333] cursor-pointer'>
                <CiClock2 />
                <span>Recent documents</span>

            </div>
        </div>
    )
}

export default HomeSideBar
