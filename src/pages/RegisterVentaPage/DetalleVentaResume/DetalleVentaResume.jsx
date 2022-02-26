import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

const DetalleVentaResume = ({ productosVendidos, toggleDetalleVenta }) => {
  return (
    <div className="sticky z-30 bottom-0 left-0 w-full text-center flex flex-wrap justify-center">

      <div className="relative bg-white w-11/12 border-t-2 border-x-2 border-solid border-gray-800 max-h-screen overflow-auto  shadow-black shadow-md flex flex-col flex-nowrap rounded-t-lg">
        {/* Button */}
        <button className="sticky top-0 left-0 py-2 px-3 w-full h-auto bg-gray-900 text-white flex justify-around" onClick={() => toggleDetalleVenta(true)}>
          Mostrar detalle de la venta <FontAwesomeIcon size='lg' icon={faCaretUp} />
        </button>
        {/* Resumen */}
        <div className="w-full p-3 h-auto">
          <div className="flex flex-nowrap justify-center items-baseline w-full">
            <div className="flex w-auto items-baseline">
              <p className="w-full text-sm font-light whitespace-pre-wrap"><span className="text-base font-normal whitespace-nowrap">{productosVendidos?.length || 0} </span><span className='text-sm font-normal'>productos seleccionados</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    productosVendidos: store.ventas.productosVendidos
  };
};

export default connect(mapStateToProps, {})(DetalleVentaResume);