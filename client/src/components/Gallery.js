import React, { useState } from 'react';
import { QuestionMarkCircleIcon, ChevronDownIcon } from '@heroicons/react/solid';


const Gallery = () => {
  const [images, setImages] = useState([
    'https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://miro.medium.com/v2/resize:fit:786/format:webp/0*ngAthWxOvKZHvsw9',
    'https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add your images here
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const addImage = () => {
    // Logic to add image, e.g., from file upload or external URL
    const newImage = 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*99VvgE1zh2bvl8_6V0G00A.png'; // Change this to dynamic input
    setImages([...images, newImage]);
  };

  return (
    <div className="bg-gray-800 pt-4 pr-4 pb-4 pl-1 rounded-lg shadow-lg ">
      <div className="flex items-center mb-4 space-x-2  ">
        <QuestionMarkCircleIcon className="h-6 w-6 text-slate-600 " />
        
        <div className='space-x-7'>
      
        <button className="bg-black text-white px-4 py-2 rounded-lg shadow-2xl  shadow-black  ">
          Gallery
        </button>
      <button
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-2xl shadow-black "
          onClick={addImage}
        >
          + Add Image
        </button>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-2xl shadow-black "
          onClick={prevImage}
        >
          &lt;
        </button>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-2xl shadow-black"
          onClick={nextImage}
        >
          &gt;
        </button>
        </div>
       
        
      </div>

      <div className="flex ">
      <ChevronDownIcon className="h-6 w-6 text-slate-600 mt-8 " />
        {images.map((image, index) => (
          <div
            key={index}
            className={`border-2 rounded-lg shadow-2xl shadow-black ${
              index === currentImageIndex ? 'border-slate-600' : 'border-slate-800'
            }`}
          >
            <img src={image} alt="gallery item" className="h-32 w-32 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
