import React from 'react';
import "./VentasPage.css";
import PageLayout from '../../layouts/PageLayout/PageLayout';

const VentasPage = () => {
  return (
    <PageLayout>
      <div className="w-full h-auto py-2 px-3">
        {/* Contenido */}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatibus dicta accusamus porro? Nam facere nostrum voluptates earum quam ex. Rerum excepturi libero aperiam laboriosam, incidunt exercitationem deserunt ad ab.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatibus dicta accusamus porro? Nam facere nostrum voluptates earum quam ex. Rerum excepturi libero aperiam laboriosam, incidunt exercitationem deserunt ad ab.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatibus dicta accusamus porro? Nam facere nostrum voluptates earum quam ex. Rerum excepturi libero aperiam laboriosam, incidunt exercitationem deserunt ad ab.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatibus dicta accusamus porro? Nam facere nostrum voluptates earum quam ex. Rerum excepturi libero aperiam laboriosam, incidunt exercitationem deserunt ad ab.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatibus dicta accusamus porro? Nam facere nostrum voluptates earum quam ex. Rerum excepturi libero aperiam laboriosam, incidunt exercitationem deserunt ad ab.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatibus dicta accusamus porro? Nam facere nostrum voluptates earum quam ex. Rerum excepturi libero aperiam laboriosam, incidunt exercitationem deserunt ad ab.</p>
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