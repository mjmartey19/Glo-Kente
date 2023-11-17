import React from 'react'
import detailsData from '../Data/Details'

const Details = () => {
  return (
    <div className='p-2 '>
        {
            detailsData.map(data => (
                <div className='font-custom  flex p-2 mt-3 bg-[#f5f5f5] rounded-lg flex-row items-center  hover:transition-all  cursor-pointer'>
                    <div className='flex items-center
                     justify-center resize-contain
                      bg-white p-1 rounded-lg 
                       h-16 w-16 shadow-2xl hover:border-2 border-gray-400 hover:transition-all duration-100'>
                        <img src={data.img} alt="" className='w-10 h-10  '/>
                    </div>
                    <div className='flex flex-col items-start pl-4'>
                        <span className='text-sm text-gray-500'>{data.title}</span>
                        <span className='w-48 text-[0.7rem]'>{data.info}</span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Details