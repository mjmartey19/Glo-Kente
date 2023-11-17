import React from 'react'
import bg from '../assets/kent.png'
import { useDrag } from 'react-dnd'

const Note = ({note, binnedItems}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type:"note", 
        item:{name: note},
        end:(item, monitor) => {
            const dropResult = monitor.getDropResult()
            if(item && dropResult) {
                // alert(`You threw ${item.name} into ${dropResult.name}`)
                let tempList = binnedItems;
                tempList.push(item.name);
                localStorage.setitem("binnedItems", JSON.stringify(tempList));
                window.location.reload();
            }
        },
        collect:(monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }), [],)
    return (
        <div ref={drag} key={note}>
           {note}
        </div>
    )
}

export default Note

// import React from 'react';
// import { useDrag } from 'react-dnd';

// const Note = ({ note }) => {
//   const [{ isDragging }, drag] = useDrag({
//     type: 'NOTE',
//     item: { name: note },
//   });

//   collect:(monitor) => ({
//           isDragging: !!monitor.isDragging(),
//            })

//   return (
//     <div
//       ref={drag}
//       style={{ opacity: isDragging ? 0.5 : 1 }}
//       className="note"
//     >
//       {note}
//     </div>
//   );
// };

// export default Note;
