import React from 'react';
import {Link} from 'react-router-dom';

const MainPage = () => {
  return (
    <div className=''>
      <div className="bg-white border-b-2 border-solid border-gray-900 py-2 px-3 text-center">
        <h1>ConejitoCommerce</h1>
      </div>
      <div className="flex flex-wrap">

        <div className="w-6/12 p-3 flex justify-center items-center">
          <Link to="/adeudos" className="w-full text-center bg-gray-900 text-white rounded-lg px-3 py-2">
            <span>Adeudos</span>
          </Link>
        </div>
        <div className="w-6/12 p-3 flex justify-center items-center">
          <Link to="/clientes" className="w-full text-center bg-gray-900 text-white rounded-lg px-3 py-2">
            <span>Clientes</span>
          </Link>
        </div>
        <div className="w-6/12 p-3 flex justify-center items-center">
          <Link to="/categorias" className="w-full text-center bg-gray-900 text-white rounded-lg px-3 py-2">
            <span>Categorias</span>
          </Link>
        </div>
        <div className="w-6/12 p-3 flex justify-center items-center">
          <Link to="/productos" className="w-full text-center bg-gray-900 text-white rounded-lg px-3 py-2">
            <span>Productos</span>
          </Link>
        </div>
        <div className="w-6/12 p-3 flex justify-center items-center">
          <Link to="/ventas" className="w-full text-center bg-gray-900 text-white rounded-lg px-3 py-2">
            <span>Ventas</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MainPage;