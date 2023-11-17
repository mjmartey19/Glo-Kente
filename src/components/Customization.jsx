import './customization.css'
import Product from '../assets/pick_product.svg'
import Create from '../assets/create_a_design.svg'
import Generate from '../assets/generate_mockups.svg'
import Order from '../assets/order_add_product.svg'
import { Link } from 'react-router-dom'

const Customize = () =>{
    return(
        <>
            
                <div className='py-5 px-3'>
                    <div className=' flex flex-col items-center'>
                        <div className=' text-3xl font-500 text-center pt-8 pb-8 mx-6'>
                           <span className='underline'>How to use the customization page</span>
                        </div>

                        <div className=' flex flex-wrap justify-center gap-7 mx-14 mt-8'>
                            <div className=' flex flex-col items-center'>
                                <img className=' w-44' src={Product} alt="" />
                                <div className=' w-8 text-center rounded-full border-[3px] border-slate-300 mt-3'>
                                    1
                                </div>

                                <div className='flex flex-col items-center mt-3'>
                                    <div className=' text-xl'>
                                        Pick a kente sash
                                    </div>
                                    <div className='max-w-[240px] text-center text-[16.2px] text-[#646e80] mt-1.5'>
                                        Choose the colour your want for the designable sash
                                    </div>
                                </div>

                            </div>

                            <div className=' flex flex-col items-center'>
                                <img className=' w-44' src={Create} alt="" />
                                <div className=' w-8 text-center rounded-full border-[3px] border-slate-300 mt-3'>
                                    2
                                </div>

                                <div className='flex flex-col items-center mt-3'>
                                    <div className=' text-xl'>
                                       Add your design
                                    </div>
                                    <div className=' max-w-[240px] text-center text-[16.2px] text-[#646e80] mt-1.5'>
                                       Customize your Sash by adding a symbol of choice 
                                    </div>
                                </div>
                            </div>

                            <div className=' flex flex-col items-center'>
                                <img className=' w-44' src={Generate} alt="" />
                                <div className=' w-8 text-center rounded-full border-[3px] border-slate-300 mt-3'>
                                    3
                                </div>

                                <div className='flex flex-col items-center mt-3'>
                                    <div className=' text-xl'>
                                        Save the design
                                    </div>
                                    <div className=' max-w-[240px] text-center text-[16.2px] text-[#646e80] mt-1.5'>
                                        Save the end product after the customization
                                    </div>
                                </div>
                            </div>

                            <div className=' flex flex-col items-center'>
                                <img className=' w-[236px] h-[172px] mt-2' src={Order} alt="" />
                                <div className=' w-8 text-center rounded-full border-[3px] border-slate-30 mt-[7px]'>
                                    4
                                </div>

                                <div className='flex flex-col items-center mt-[10px]'>
                                    <div className=' text-xl'>
                                        Order online
                                    </div>
                                    <div className='max-w-[240px] text-center text-[16.2px] text-[#646e80] mt-1.5'>
                                        Get the designed Sash at your door step by ordering it online
                                    </div>
                                </div>
                            </div>

                        </div>

                        <Link to='/whiteboard' className='text-center w-44 rounded-md bg-yellow-400 mt-10 px-6 py-2.5'>Customize now</Link>
                    </div>
                </div>
           
        </>
    )
}

export default Customize;