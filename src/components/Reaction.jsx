import React, {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Reaction = () => {

    const [tooltip, setTooltip] = useState(false);

    const handleTooltip = () => {
        setTooltip(!tooltip)
    };

    const handleClose = () => {
        setTooltip(false);
    }

    return (
        <div>
            <div className='bg-white absolute z-30 right-3 top-36 p-3.5 rounded-md w-[26rem]  border border-gray-500 border-opacity-30 shadow-2xl'>
                <div className='flex flex-row items-center justify-between'>
                    <span className='font-semibold text-lg w-[22rem]'>Change your Reaction</span>
                    {/* <div className='absolute right-3  cursor-pointer hover:bg-yellow-400 hover:bg-opacity-50 hover:rounded-full p-[0.25rem]'>
                        <AiOutlineClose onClick={handleClose} size={17} />
                    </div> */}
                </div>
                <div className='flex flex-row items-center
                         justify-between bg-[#f1f1f1] p-3 rounded-lg mt-2 border border-gray-300 border-opacity-20'>
                    <div className='flex flex-row items-center gap-2'>

                        <span className='text-sm'>Up to 60 objects per documents</span>
                    </div>

                </div>
                <div className='flex flex-row items-center
                         justify-between bg-[#f1f1f1] p-3 rounded-lg mt-2 border border-gray-300 border-opacity-20'>
                    <div className='flex flex-row items-center gap-2'>

                        <span className='text-sm'>Full access to basic templates</span>
                    </div>

                </div>
                <div className='flex flex-row items-center
                         justify-between bg-[#f1f1f1] p-3 rounded-lg mt-2 border border-gray-300 border-opacity-20'>
                    <div className='flex flex-row items-center gap-2'>

                        <span className='text-sm'>Up to 3 editable documents</span>
                    </div>

                </div>
                <div className='mt-2'>
                    <span className='text-sm'>Upgrade to an <b>individual</b> plan to unlock premium features:</span>
                </div>
                <div href='/premium' className='bg-yellow-400 hover:bg-opacity-80 cursor-pointer rounded-lg mt-4 p-3 text-center font-medium'>
                    View Premium features
                </div>
            </div>
        </div>
    )
}

export default Reaction