import React from 'react';
import { Link } from 'react-router-dom';
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className=''>
      <div className="bg-white border-b-2 border-solid border-gray-900 py-2 px-3 text-center">
        <h1>ConejitoCommerce</h1>
      </div>
      <div className="flex flex-wrap">

        <div className="w-6/12 p-3 flex justify-center items-center">
          <Link to="/pagos" className="text-center bg-gray-900 text-white rounded-lg square-bottom">
            <div className='absolute w-full h-full flex flex-wrap justify-center items-center'>
              <span>pagos</span>
            </div>
          </Link>
        </div>
        <div className="w-6/12 p-3 flex justify-center items-center">
          <Link to="/clientes" className="text-center bg-gray-900 text-white rounded-lg square-bottom">
            <div className='absolute w-full h-full flex flex-wrap justify-center items-center'>
              <span>Clientes</span>
            </div>
          </Link>
        </div>
        <div className="w-6/12 p-3 flex justify-center items-center">
          <Link to="/categorias" className="text-center bg-gray-900 text-white rounded-lg square-bottom">
            <div className='absolute w-full h-full flex flex-wrap justify-center items-center'>
              <span>Categorias</span>
            </div>
          </Link>
        </div>
        <div className="w-6/12 p-3 flex justify-center items-center">
          <Link to="/productos" className="text-center bg-gray-900 text-white rounded-lg square-bottom">
            <div className='absolute w-full h-full flex flex-wrap justify-center items-center'>
              <span>Productos</span>
            </div>
          </Link>
        </div>
        <div className="w-6/12 p-3 flex justify-center items-center">
          <Link to="/ventas" className="text-center bg-gray-900 text-white rounded-lg square-bottom">
            <div className='absolute w-full h-full flex flex-wrap justify-center items-center'>
              <span>Ventas</span>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MainPage;