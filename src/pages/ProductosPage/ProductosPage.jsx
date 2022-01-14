import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from '../../components/PageHeader/PageHeader';

const ProductosPage = () => {
  const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className='relative min-h-screen'>
      <PageHeader titulo={"Productos"} />

      {/* Productos */}
      <div className="p-3 min-h-screen">
        {list.map((value, i) => (
          <div key={i} className="flex flex-nowrap justify-between items-center first:rounded-t-lg last:rounded-b-lg first:border-t-2 border-b-2 border-x-2 border-solid border-gray-900 overflow-hidden">
            <div className="py-2 px-3 w-full">
              <h2 className="text-base text-center">Nombre del Producto</h2>
              <div className="w-full flex flex-nowrap justify-center">
                <p className='text-sm mx-2'>Stock: <span className='font-semibold'>30</span></p>
                <p className='text-sm mx-2'>Precio: <span className='font-semibold'>$50</span></p>
              </div>
            </div>
            <div className="">
              <img className='h-16 w-32 object-cover object-center' src="https://images.coplusk.net/project_images/208626/image/2019-11-27-210127-burger.jpg" alt="" />
            </div>
          </div>
        ))}
      </div>

      {/* Panel bottom */}
      <div className="sticky left-0 bottom-0 bg-white w-full h-auto border-y-2 border-solid border-gray-900 py-2 px-3 text-center">
        <button className="py-2 px-3 w-full rounded-lg bg-gray-900 text-white">
          <FontAwesomeIcon icon="faCoffee" />
          Añadir producto
        </button>

      </div>
    </div>
  );
};

export default ProductosPage;