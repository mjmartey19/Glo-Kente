import React, { useState } from 'react'
import { GoLock } from "react-icons/go";
import lock from '../assets/lock.svg'
import visa from '../assets/visa.png'
import card from '../assets/card.png'
import express from '../assets/express.png'
import stripe from '../assets/stripe.png'
import mtn from '../assets/ghanaCash.png'

const PaymentMethod = () => {

    const [focus, setFocus] = useState(false);
    const [postal, setPostal] = useState('');
    const [postalFocus, setPostalFocus] = useState(false);
    const [cardText, setCardText] = useState('')
    const [cvText, setCvText] = useState('')
    const [mdText, setMdText] = useState('')
    const [mdFocus, setMdFocus] = useState(false);
    const [cvFocus, setCvFocus] = useState(false);
    const [mobileMoney, setMobileMoney] = useState('')
    const [mobileFocus, setMobileFocus] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('Card');
    const [optionFocus, setOptionFocus] = useState(false);
    // const [Visa, setVisa] = useState(null);

    const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value);
    }
    const [selectRadio, setSelectRadio] = useState(false);

    const handleSelectRadio = () => {
        setSelectRadio(false);
    }

    const colourOptions = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ];

    const payment = [
        { img: visa },
        { img: card },
        { img: express },
        { img: stripe },
    ]
    return (
        <div>
            <div className='flex flex-row items-center gap-3 mt-8'>
                <span className='text-[0.83rem] font-bold'>Payment Method</span>
                <img src={lock} alt="" />
            </div>
            <div className='flex flex-row items-center gap-10 '>
                <div className='flex flex-row items-center gap-4 hover:bg-yellow-50  rounded px-4 py-4'>
                    <input type="radio" name="method" value='Card' checked={paymentMethod === 'Card'} onChange={handlePaymentMethod} className='cursor-pointer' />

                    {
                        payment.map(pay => <img src={pay.img} alt="" className='w-10' />)
                    }

                </div>
                <div className='flex flex-row items-center gap-4 hover:bg-yellow-50  rounded  px-4 py-4'>
                    <input type="radio" name="method" value='MobileMoney' checked={paymentMethod === 'MobileMoney'} onChange={handlePaymentMethod} className='cursor-pointer' />
                    <img src={mtn} alt="" className='resize-contain w-40' />
                </div>
            </div>
            {
                paymentMethod === 'Card' ? (
                    <div className='mt-6'>
                        <span className='pl-[9.6rem] font-semibold text-gray-500'>Enter your card details to pay</span>
                        <div className='flex flex-col ml-5 mt-4'>
                            <input
                                type="text"
                                value={cardText}
                                onChange={(e) => setCardText(e.target.value)}
                                placeholder='Card Number'
                                className={`
                                p-2.5 border
                                border-gray-400
                                rounded-sm 
                                w-[30.7rem]
                                outline-none ${focus ? 'border border-gray-700' : ''}`}
                                onFocus={() => setFocus(true)}
                                onBlur={() => setFocus(false)}
                            />
                            <div className='flex flex-row items-center gap-3 mt-4'>
                                <input
                                    type="text"
                                    value={mdText}
                                    onChange={(e) => setMdText(e.target.value)}
                                    placeholder='MM/YY'
                                    className={`p-2.5 border
                                border-gray-400 
                                rounded-sm
                                outline-none  ${cvFocus ? 'border-gray-700 border ' : ''}`}
                                    onFocus={() => setCvFocus(true)}
                                    onBlur={() => setCvFocus(false)}
                                />
                                <input
                                    type="text"
                                    value={cvText}
                                    onChange={(e) => setCvText(e.target.value)}
                                    placeholder='CVV' className={` 
                                p-2.5 border border-gray-400 
                                rounded-sm outline-none  ${mdFocus ? 'border border-gray-700' : ''}`}
                                    onFocus={() => setMdFocus(true)}
                                    onBlur={() => setMdFocus(false)}

                                />
                            </div>
                        </div>
                        {/* <div className='flex flex-row items-center gap-6 mt-5'>
                            <div className=''>
                                <input type="text"
                                    value={postal}
                                    onChange={(e) =>
                                        setPostal(e.target.value)}
                                    placeholder='Postal Code'
                                    className={`outline-none border
                                    border-gray-400 p-2.5
                                        rounded-sm w-[15.8rem] ${postalFocus && 'border border-gray-700'}`}
                                    onFocus={() => setPostalFocus(true)}
                                    onBlur={() => setPostalFocus(false)}
                                />
                            </div>
                            <div className=''>
                                <input type="text" placeholder='Postal Code' className='outline-none border border-gray-400 p-2.5 rounded-sm w-[15.8rem]' />
                            </div>
                        </div> */}
                    </div>
                ) : (

                    <div className='mt-4'>
                        <div className='ml-64'>
                            <img src="https://checkout.paystack.com/img/mobile_money_gh.12d76b3c.svg" alt="" className='h-10 w-10' />
                        </div>
                        <p className=' text-sm font-semibold pl-9 pt-4'>
                        Enter your mobile money number and provider to start the payment
                        </p>
                        <div className='flex flex-row ml-5 mt-6 items-center gap-4'>
                            <input type="text"
                                value={mobileMoney}
                                onChange={(e) =>
                                    setMobileMoney(e.target.value)}
                                placeholder='Enter Mobile Number'
                                className={`outline-none border
                                    border-gray-400 p-2.5
                                        rounded-sm w-[16rem] ${mobileFocus && 'border border-gray-700'}`}
                                onFocus={() => setMobileFocus(true)}
                                onBlur={() => setMobileFocus(false)}
                            />
                            <select 
                            onFocus={() => setOptionFocus(true)}
                            onBlur={() => setOptionFocus(false)}
                             name="" id="" className={`w-[13.7rem] 
                             rounded-sm outline-none border cursor-pointer border-gray-400
                              p-[0.65rem] ${optionFocus && 'border border-gray-700'}`}>
                                
                                <option value="" >Choose your provider</option>
                                <option value="">MTN</option>
                                <option value="">Airtel/Tigo</option>
                                <option value="">Vodafone</option>
                            </select>
                        </div>
                    </div>

                )
            }
            <div className='bg-yellow-400 text-center w-[30.8rem] ml-5 p-2.5 font-medium rounded-sm mt-4 cursor-pointer hover:bg-yellow-300 transition-all duration-700'>Pay Now</div>
            <div className='flex flex-row items-center ml-5 mt-4 gap-[0.1rem]'>
                <div className=' w-[14.6rem] h-[0.6px] bg-gray-400'></div>
                <span className='font-medium'>Or</span>
                <div className=' w-[14.6rem] h-[0.6px] bg-gray-400'></div>
            </div>
            <div className='pl-[14.5rem] mt-4 cursor-pointer'>
                <span className='underline'>Pay Later</span>
            </div>
            <p className='text-xs text-gray-500 pt-4 pb-4'>
                You will be charged $95.40/year (plus applicable tax) when you click "Pay now". Your paid subscription will automatically renew until you cancel it. You can cancel at any time by visiting Account Settings or by contacting us. By clicking "Pay now", you agree to our Terms of Service and Privacy Policy.
            </p>
        </div>
    )
}

export default PaymentMethod