import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">
      <div className="">
        {/* Left Side - Empty */}
        <div></div>
        
        {/* Right Side */}
        <div className="p-2 ">
          <Tabs />
          <div className='h-1 mt-4 mb-4 ml-14 mr-10 rounded-full w-80 bg-slate-700'></div>
          <Gallery />
          <div className='h-1 mt-4 mb-4 ml-14 mr-10  rounded-full w-80 bg-slate-700'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
