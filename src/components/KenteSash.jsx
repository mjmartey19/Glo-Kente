import React, {useRef, useEffect, useState} from 'react'
import { IoIosCheckmark } from 'react-icons/io'
import correct from '../assets/correct.png'
import { Link } from 'react-router-dom'
import PremiumData from '../Data/Premium'

const KenteSash = () => {
   
    useEffect(() => {
        const handleClickOutline = (event) => {
            if (premiumRef.current && !premiumRef.current.contains(event.target)) {
                setT(false);
              }
        }
    })

    return (
        <section className=''>
            <div className='flex flex-col '>
                <span className='font-semibold text-lg text-center'>Kente Design Premium</span>
                {PremiumData.map(premium => 
                    <main>
                        <div className='flex bg-[#f1f1f1] mt-2 p-3 rounded-lg border border-gray-300 border-opacity-30 flex-row items-center gap-3'>
                            <img src={correct} alt="" className='w-3.5 h-3.5' />
                            <span className='text-sm'>{premium.title}</span>
                        </div>
                    </main>
                )}
                <a href='' className='bg-yellow-400 hover:bg-opacity-80 cursor-pointer rounded-lg mt-4 p-3 text-center font-medium'>
                    Start Free Trial
                </a>
            </div>

        </section>
    )
}

export default KenteSash