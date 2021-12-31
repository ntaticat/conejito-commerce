import React from 'react';

const AdeudoPage = () => {
  return (
    <div className='relative'>
      <div className="sticky top-0 bg-white border-b-2 border-solid border-gray-900 py-2 px-3 text-center">
        <h1>Adeudo</h1>
        <button className='absolute top-0 right-0 py-2 px-3 bg-gray-900 text-white'>Back</button>
      </div>
      <div className="p-3">
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

        <div className="">
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
        </div>

      </div>
      
    </div>
  );
};

export default AdeudoPage;