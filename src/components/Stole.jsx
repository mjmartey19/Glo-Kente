import React, { useState } from 'react'
import images from '../Data/Image';

const Stole = ({ setSelectedStoleId, selectedStoleId }) => {
  
    const handleSelect = (id) => {
        setSelectedStoleId(id);
      };



    return (

        <div className="h-[460px] overflow-y-scroll">
            <div className="p-2 grid grid-cols-2 gap-x-2 gap-y-2">
                {images.map((data) => (
                    <div
                        key={data.id}
                        onClick={() => handleSelect(data.id)}
                        className={`cursor-pointer flex flex-col
                         bg-[#f5f5f5] gap-2 items-center
                          justify-center rounded-lg relative
                           h-36 overflow-hidden hover:transform 
                           ${ selectedStoleId === data.id  ? 'border border-yellow-500' : ''
                            }`}
                    >
                        <img src={data.img} className="object-contain h-[7rem]" />
                        <div className="absolute inset-0"></div>
                    </div>
                ))}
            </div>
        </div>



    )
}

export default Stole



  // const [selected, setSelected] = useState(false);
//   const [selectedStoleId, setSelectedStoleId] = useState(null);

    // const isSelected = id === selectedId

    // const handleSelect = (id) => {
    //     onSelect(id)

    // };