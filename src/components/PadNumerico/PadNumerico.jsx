import React from 'react';

const PadNumerico = () => {
  return (
    <div className="flex flex-wrap justify-center rounded-2xl overflow-hidden">
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-900 text-white'><span>1</span></button>
      </div>
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-900 text-white'><span>2</span></button>
      </div>
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-900 text-white'><span>3</span></button>
      </div>
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-900 text-white'><span>4</span></button>
      </div>
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-900 text-white'><span>5</span></button>
      </div>
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-900 text-white'><span>6</span></button>
      </div>
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-900 text-white'><span>7</span></button>
      </div>
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-900 text-white'><span>8</span></button>
      </div>
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-900 text-white'><span>9</span></button>
      </div>
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-800 text-white'><span>.</span></button>
      </div>
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-900 text-white'><span>0</span></button>
      </div>
      <div className="w-4/12">
        <button className='px-3 py-2 w-full bg-gray-800 text-white'><span>Eliminar</span></button>
      </div>
    </div>
  );
};

export default PadNumerico;