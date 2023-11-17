import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import Plan from '../components/Plan'
import PaymentMethod from '../components/PaymentMethod'

const BuyPlan = () => {
    const savings = [
        { id: 1, usr: '1 user', amt: '119.40 per year' },
        { id: 2, usr: 'Yearly savings(20%)', amt: '24.00' },
        { id: 3, usr: 'Total', amt: '95.40' },
    ]
    return (
        <section className='mx-[8rem] mt-[1rem]'>

            <div className='flex flex-row items-center justify-between'>
                <Link to='/home'>
                    <img src={logo} className="w-20 " />
                </Link>
                <Link to='/account-settings' className='bg-yellow-400 px-7 py-2.5 rounded-md hover:bg-yellow-300 transition-all duration-700'>
                    Go Back
                </Link>

            </div>
            <div className='w-full h-[0.7px] bg-gray-300 mt-4'></div>
            <div className='flex flex-row  justify-between'>
                <div>
                    <div className='pt-6'>
                        <span className='font-bold text-3xl text-gray-700'>Add a payment method</span>
                    </div>
                    <Plan />
                    <PaymentMethod />
                </div>

                <div className='bg-white mt-20 h-[16.5rem] border border-gray-300
                 border-opacity-30 px-14 py-10 shadow-2xl rounded-md'>
                    <div>
                        <span className='font-semibold text-lg'>Order summary</span>
                        <div>

                            <div className='pt-8 leading-9'>
                                <div className='flex flex-row gap-[7.8rem]'>
                                    <span className='text-sm'>I user</span>
                                    <span className='text-sm'>$ 119.40 per year</span>
                                </div>
                                <div className='flex flex-row gap-x-16 pt-2'>
                                    <span className='w-[10rem] text-sm'>Yearly savings(20%)</span>
                                    <span className='text-sm'>-$24.00</span>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-300 mt-2'></div>
                            <div className='flex flex-row gap-x-48 pt-3'>
                                <span className='font-semibold text-sm'>Total</span>
                                <span className='font-semibold text-sm'>$95.00</span>
                            </div>
                            <div className='pt-2'>
                                <span className='text-xs pl-[10.7rem]'>Plus applicable tax</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BuyPlan