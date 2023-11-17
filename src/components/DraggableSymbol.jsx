import React from 'react'
import { useDrag } from 'react-dnd'


const DraggableSymbol = ({ icon }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'icon' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (

    <img ref={drag} src={icon} style={{opacity : isDragging ? 0.5 : 1 }} alt="Draggable Icon" />


  )
}

export default DraggableSymbol