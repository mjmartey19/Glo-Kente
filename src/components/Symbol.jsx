
import React from 'react';
import { useDrag } from 'react-dnd';


const Symbol = ({ id, img }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "box",
        item: { id },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
        
      }));
  return (
    <div ref={drag} data-testid="box">
      <img src={img} alt="" className="w-10 h-10 " />
    </div>
  );
};

export default Symbol