import React, { useEffect } from 'react';
import "./VentasPage.css";
import PageLayout from '../../layouts/PageLayout/PageLayout';
import {getSalesAction} from '../../redux/ventasDuck';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const VentasPage = ({ventas, getSalesAction}) => {

  useEffect(() => {
    getSalesAction();
  }, []);

  return (
    <PageLayout>
      <div className="w-full h-auto py-2 px-3">
        {/* Contenido */}
        {ventas.map((venta) => (
          <Link key={venta._id} to={`/ventas/${venta._id}`}>
            <div className='my-3 w-full rounded-lg shadow-md shadow-gray-500 overflow-hidden border-2 border-solid border-gray-500'>
              <div className="flex flex-nowrap">
                <div className="w-full p-2">
                  <div className="flex flex-nowrap items-baseline border-b-2 border-solid border-gray-400 pb-2">
                    <p className='w-full text-lg text-left'>Venta #??</p>
                    <p className='text-right text-sm font-light whitespace-nowrap'>{venta?.date.split("T")[0].replaceAll("-", "/")}</p>
                  </div>
                  <div className="pt-2">
                    <p className='text-left text-sm font-light'>{venta?.soldProducts?.length || 0} productos</p>
                  </div>
                </div>
                <div className="p-2 bg-green-500 text-white flex flex-wrap content-center">
                  <p className='w-full leading-tight text-right font-semibold text-lg'>{`$${venta?.total}`}</p>
                  <p className='w-full leading-tight text-right text-sm'>{venta?.paid ? "Pagado" : "No pagado" }</p>
                </div>
              </div>
            </div>
          </Link>
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

const mapStateToProps = (store) => {
  return {
    ventas: store.ventas.ventas
  };
};

export default connect(mapStateToProps, {getSalesAction})(VentasPage);