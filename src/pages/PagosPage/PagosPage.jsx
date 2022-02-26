import React from 'react';
import PageLayout from '../../layouts/PageLayout/PageLayout';

const PagosPage = () => {

  const list = [1,1,1,1,1];

  return (
    <PageLayout>
      <div className="p-3 w-full">
        {list.map((value, i) => (
          <div key={i} className="flex flex-nowrap justify-between first:rounded-t-lg last:rounded-b-lg first:border-t-2 border-b-2 border-x-2 border-solid border-gray-900">
            <h2 className="py-2 px-3">Nombre del cliente</h2>
            <div className="w-3/12 py-2 px-3 text-right"><span>$300.00</span></div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 bg-white left-0 w-full h-auto border-y-2 border-solid border-gray-900 py-2 px-3 text-center">
        <button className="py-2 px-3 w-full rounded-lg bg-gray-900 text-white">
          Añadir adeudo
        </button>

      </div>
    </PageLayout>
  );
};

export default PagosPage;