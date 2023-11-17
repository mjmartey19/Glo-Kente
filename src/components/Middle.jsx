import React, { useEffect, useState } from 'react';
import bg from '../assets/stole.png'
import './Middle.css'
import { useDrop } from 'react-dnd';

import Note from './Note';
import SelectedImage from './Bin';



const Middle = ({ images, selectedStoleId }) => {

  const [basket, setBasket] = useState([])
  const [{ isOver }, dropRef] = useDrop({
    accept: 'box',
    drop: (item) => setBasket((basket) =>
      !basket.includes(item) ? [...basket, item] : basket),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })


  const selectedImage = selectedStoleId
    ? images.find((data) => data.id === selectedStoleId)
    : null;

  return (
    <div ref={dropRef} className='flex-1 bg-[#f5f5f5] border border-gray-300 border-opacity-30  '>
      <div className='flex items-center justify-center mt-20 '>
        {selectedImage ? (
          <img src={selectedImage.img} alt="Selected Stole" className="resize-contain w-96 h-96 hover:transform hover:rotate-left-right hover:scale-105 transition-transform duration-700" />
        ) : (
          <div className="flex  items-center justify-center  perspective">
            <img src={bg} alt="Selected Stole" className="resize-contain w-96 h-96 hover:transform hover:rotate-left-right hover:scale-105 transition-transform duration-700" />
          </div>
        )}
      </div>
      {/* <div className='basket' ref={dropRef}>
        {basket.map(pet => <Symbol id={pet.id}  />)}
        {isOver && <div>Drop Here!</div>}
      </div> */}


    </div>
  );
}

export default Middle;