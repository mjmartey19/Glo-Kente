import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';
import { getContrastingColor } from '../config/helpers';
import { Link } from 'react-router-dom';

const PreviewCustomButton = ({display=true, path, title, type, customStyles, handleClick}) => {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        if(type == "filled") {
            return {
                backgroundColor:snap.color,
                color:getContrastingColor(snap.color)

            }
        }else if(type === 'outline') {
            return {
                borderWidth:'1px',
                borderColor:snap.color,
                color:snap.color
            }
        }
    }
  return (
   <>
     {display && (
        <Link
        to={path}
         className={`px-2 py-1.2 rounded-md ${customStyles}`}
    style={{backgroundColor: '#EFBD48'}}
    onClick={handleClick}
    >
        {title}
    </Link>
    )}
   </>
  );
}

export default PreviewCustomButton;
