import React from 'react';
import PageHeader from '../PageHeader/PageHeader';

const ProductoPage = () => {
  return (
    <div className='relative'>
      <PageHeader titulo={"Producto"} />
      
      <div className="p-3">
        {/* Form */}
        <div className="p-3 border-2 border-solid border-gray-900 rounded-xl mb-2">
          <form>
            <label htmlFor="">Nombre</label>
            <input className='w-full mb-2' type="text" placeholder='Nombre...' />
            <label htmlFor="">Descripción</label>
            <textarea className='w-full mb-2' placeholder='Datos adicionales...' name="" id="" rows="4"></textarea>
          </form>
        </div>

        <div className="p-3 border-2 border-solid border-gray-900 rounded-xl mb-2">
          <label htmlFor="">Clientes</label>
          <select className='w-full mb-2' name="" id="">
            <option value="1">Seleccione una opción</option>
          </select>
        </div>

        <div className="p-3 border-2 border-solid border-gray-900 rounded-xl mb-2">
          <label htmlFor="">Cantidad</label>
          <input className='w-full mb-2' type="text" placeholder='Cantidad...' />
        </div>

        {/* <div className="">
          <PadNumerico />
        </div> */}

      </div>

    </div>
  );
};

export default ProductoPage;