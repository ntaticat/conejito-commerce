import React from 'react';

const MainPage = () => {
  return (
    <div className=''>
      <div className="bg-white border-b-2 border-solid border-gray-900 py-2 px-3 text-center">
        <h1>ConejitoCommerce</h1>
      </div>
      <div className="flex flex-wrap">
        <div className="w-6/12 p-3 flex justify-center items-center">
          <button className="w-full text-center bg-gray-900 text-white rounded-lg px-3 py-2">
            <span>Adeudos</span>
          </button>
        </div>
        <div className="w-6/12 p-3 flex justify-center items-center">
          <button className="w-full text-center bg-gray-900 text-white rounded-lg px-3 py-2">
            <span>Clientes</span>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default MainPage;