import React from 'react';
import Prev from '../components/Prev';
import CanvasModel from '../canvas/CanvasModel'
import bg from '../assets/cus.png'

const Preview = () => {
  return (
    <main className='app transition-all ease-in'>
      <Prev />
      <CanvasModel/>
      {/* <div className=''>
        <img src={bg} alt="" className='h-96 '/>
      </div> */}
    </main>
  );
}

export default Preview;

