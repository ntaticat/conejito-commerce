import React from 'react';
import "./VentasPage.css";
import PageLayout from '../../layouts/PageLayout/PageLayout';

const VentasPage = () => {

  const valores = [1, 1, 1, 1, 1, 1, 1];

  return (
    <PageLayout>
      <div className="w-full h-auto py-2 px-3">
        {/* Contenido */}
        {valores.map(() => (
          <button className='my-3 w-full rounded-lg shadow-md shadow-gray-500 overflow-hidden border-2 border-solid border-gray-500'>
            <div className="flex flex-nowrap">
              <div className="w-full p-2">
                <div className="flex flex-nowrap items-baseline border-b-2 border-solid border-gray-400 pb-2">
                  <p className='w-full text-lg text-left'>Venta #23</p>
                  <p className='text-right text-sm font-light'>17/03/2022</p>
                </div>
                <div className="pt-2">
                  <p className='text-left text-sm font-light'>5 productos</p>
                </div>
              </div>
              <div className="p-2 bg-green-500 text-white flex flex-wrap content-around">
                <p className='w-full leading-tight font-semibold text-lg'>$300.00</p>
                <p className='w-full leading-tight text-right text-sm'>Pagado</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Buttons */}
      <div className={`sticky bottom-0 left-0 w-full h-auto p-3 bg-white border-t-2 border-solid border-gray-500`}>
        <div className="flex flex-wrap justify-center w-full">
          <button onClick={() => { }} className={`rounded-lg left-0 py-2 px-3 w-full bg-gray-900 text-white flex justify-center items-center whitespace-pre-wrap`}>
            Confirmar venta
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default VentasPage;