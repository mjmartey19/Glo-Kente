import React, { useState } from 'react'

const Plan = () => {
    const [Yearly, setYearly] = useState(null);
    const [Monthly, setMonthly] = useState(null);
    
    return (
        <div className='flex flex-col'>
            <div className='pt-7'>
                <span className='font-bold text-sm'>Your Plan</span>
                <div className='flex  gap-10'>
                    <div className='flex flex-row  items-center hover:bg-yellow-50  rounded  px-4 py-4 gap-2'>
                        <input type="radio" name='plan' value={Yearly} onChange={(e) => setYearly(e.target.value)} className='cursor-pointer'/>
                        <div className='flex flex-col gap-y-[0.12] '>
                            <span className='font-bold text-sm'>Individual - paid yearly</span>
                            <span className='text-xs text-gray-500'>$7.95 / month</span>
                            <div className='border border-black px-2 py-[0.05] rounded-sm'>
                                <span className='text-xs font-medium'>12 MONTHS FOR THE PRICE OF 10</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row mt-3 items-start gap-2 hover:bg-yellow-50  rounded  px-3 py-2'>
                        <input type="radio" name='plan' value={Monthly} onChange={(e) => setMonthly(e.target.value)} className='mt-4 p-1 cursor-pointer'/>
                        <div className='flex flex-col gap-y-[0.12] '>
                            <span className='font-bold text-sm'>Individual - paid monthly</span>
                            <span className='text-xs text-gray-500'>$7.95 / month</span>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan