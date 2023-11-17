import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import CustomButton from '../components/PreviewCustomButton'
import state from '../store';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import PreviewCustomButton from '../components/PreviewCustomButton';


const Prev = () => {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                        KENTE <br className='xl:block hidden'/> STOLE.
                        </h1>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                                Create your unique and exclusive Kente Stole with our
                                customization tool. <strong>unleash your 
                                imagination </strong> {" "} and define your new style.
                            </p>
                          
                           <div className='flex gap-5 w-96'> 
                           <CustomButton
                           path='/home'
                                type="filled"
                                title='Customize'
                                
                                customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
                            />
                            <CustomButton
                                display={false}
                                type="filled"
                                title='Order'
                                
                                customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
                            />
                            <CustomButton
                                display={false}
                                type="filled"
                                title='Download'
                               
                                customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
                            />
                            </div>
                            
                        </motion.div>

                    </motion.div>

                </motion.div>

            </motion.section>
        )}
    </AnimatePresence>
  );
}

export default Prev;
