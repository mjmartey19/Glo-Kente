

import React from 'react';
import bg from '../assets/stole.png'

const SelectedImage = ({ image }) => {
  return (
    <div className="flex items-center justify-center mt-20 perspective">
      <img
        src={bg}
        alt="Selected Image"
        className="resize-contain w-96 h-96 hover:transform hover:rotate-left-right hover:scale-105 transition-transform duration-700"
      />
    </div>
  );
};

export default SelectedImage;

