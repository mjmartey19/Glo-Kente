import React from 'react'
import { useDrop } from 'react-dnd'
import bg from '../assets/kent.png'

const Droptarget = () => {
    const [{ isOver }, drop] = useDrop({
        accept: 'icon',
        drop: () => {
            // Handle the drop icon
            console.log(drop);
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
    });
    return (
        <div className={isOver ? 'drop-target active' : 'drop-target' `bg-white`} ref={drop}>
            <div className='flex items-center justify-center mt-4 perspective'>
                <img src={bg} alt="" className='w-96 h-96 hover:transform hover:rotate-left-right hover:scale-105 transition-transform duration-700' />
            </div>
        </div>
    )
}

export default Droptarget