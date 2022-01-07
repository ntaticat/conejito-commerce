import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PageHeader from '../PageHeader/PageHeader';

const CategoriasPage = () => {

  const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className='relative'>
      <PageHeader titulo={"Categorias"} />

      {/* Categorias */}
      <div className="p-3">
        {list.map((value, i) => (
          <div key={i} className="flex flex-nowrap justify-between items-center first:rounded-t-lg last:rounded-b-lg first:border-t-2 border-b-2 border-x-2 border-solid border-gray-900">
            <h2 className="py-2 px-3">Nombre de categoría</h2>
            <div className="py-2 px-3 text-center text-xs">
              <p className='text-sm'>10</p>
              <p>productos</p>
            </div>
          </div>
        ))}
      </div>

      {/* Formulario */}
      <div className="fixed hidden right-0 top-10 p-3">
        <div className="bg-white p-3 border-2 border-solid border-gray-900 rounded-xl mb-2">
          <form>
            <label htmlFor="">Nombre</label>
            <input className='w-full mb-2' type="text" placeholder='Nombre...' />
            <label htmlFor="">Descripción</label>
            <textarea className='w-full mb-2' placeholder='Datos adicionales...' name="" id="" rows="4"></textarea>
          </form>
        </div>
      </div>


      {/* Panel bottom */}
      <div className="sticky bottom-0 bg-white left-0 w-full h-auto border-y-2 border-solid border-gray-900 py-2 px-3 text-center">
        <button className="py-2 px-3 w-full rounded-lg bg-gray-900 text-white">
          <FontAwesomeIcon icon="faCoffee" />
          Añadir categoría
        </button>

      </div>
    </div>
  );
};

export default CategoriasPage;