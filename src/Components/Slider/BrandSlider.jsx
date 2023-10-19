


import React, { useState } from 'react';

const BrandSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]}
        className="w-[790px]"
      />
      <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full">
        <button
          onClick={prevImage}
          className="p-2 ml-4 text-2xl text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
        >
          &larr;
        </button>
        <button
          onClick={nextImage}
          className="p-2 mr-4 text-2xl text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};




export default BrandSlider;

