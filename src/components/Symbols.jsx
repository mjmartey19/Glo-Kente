import React, { useEffect, useState } from 'react'
import DraggableSymbol from './DraggableSymbol'

import symbolsData from '../Data/Symbols'

const Symbols = ({searchSymbol}) => {
    useEffect(() => {

        console.log(searchSymbol)
    }, [searchSymbol])


    return (
        <div className='p-2 grid grid-cols-3 gap-x-2 gap-y-2 '>
            
                {
                    symbolsData.map(({id,img, title}) => (
                        <div key={id} className=' flex flex-col items-center  hover:bg-white hover:transition-all hover:duration-100 hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                            <div className='w-10 h-10 resize-contain '>
                                <img src={img} alt="" className='' />
                            </div>
                            <span className='font-custom text-xs pt-3'>{title}</span>
                        </div>
                    ))
                }
              
          
        </div>
    )
}

export default Symbols