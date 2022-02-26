import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCheckCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { registerPaymentAction, postSaleAction } from '../../../redux/ventasDuck';
import ItemProductoPorVender from './ItemProductoPorVender/ItemProductoPorVender';

const DetalleVenta = ({ venta, productosVendidos, registerPaymentAction, postSaleAction, toggleDetalleVenta }) => {

  const [isPagoTotal, setIsPagoTotal] = useState(false);
  const [pagoTotal, setPagoTotal] = useState(0);

  const renderProductosPorVender = () => {

    if (!(productosVendidos?.length)) {
      return (<p className='pb-2'>No se han seleccionado productos...</p>);
    }

    console.log("RENDERIZADO DE PRODUCTOS POR VENDER");

    return productosVendidos.map((producto) => {
      return (
        <ItemProductoPorVender key={producto.product._id} producto={{...producto}} />
      );
    });
  };

  const registrarPago = () => {
    registerPaymentAction(pagoTotal, isPagoTotal);
  };

  const registrarVenta = () => {
    registrarPago();
    postSaleAction();
  };

  return (
    <div className="fixed z-30 bottom-0 left-0 w-full text-center flex flex-wrap justify-center top-0 bg-white">
      <div className="relative bg-white w-11/12 border-t-2 border-x-2 border-solid border-gray-800 max-h-screen overflow-auto  shadow-black shadow-md flex flex-col flex-nowrap">
        {/* Button */}
        <button className="sticky top-0 left-0 py-2 px-3 w-full h-auto bg-gray-900 text-white flex justify-around" onClick={() => toggleDetalleVenta(false)}>
          Ocultar detalle de la venta <FontAwesomeIcon size='lg' icon={faCaretDown} />
        </button>
        {/* Info */}
        <div className="bg-white w-full h-full flex flex-wrap content-between">

          <div className="w-full h-auto py-2 px-3">
            <div className="">
              {/* Productos */}
              {renderProductosPorVender()}
            </div>



            {/* Pago */}
            <div className="w-full h-auto">
              {/* Cliente */}
              <div className="py-2 px-3 border-t-2 border-solid border-gray-500">
                <p className='pb-2'>Cliente valor</p>
                <div className="w-full flex flex-nowrap border-2 border-solid border-gray-500 rounded-t-lg overflow-hidden">
                  <button onClick={() => { setIsPagoTotal(false) }} className={`whitespace-pre-wrap w-full px-2 py-2 ${isPagoTotal ? "text-gray-900 bg-white" : "bg-gray-900 text-white"}`}>Pago parcial {!isPagoTotal && (<FontAwesomeIcon size='1x' icon={faCheck} />)}</button>
                  <button onClick={() => { setIsPagoTotal(true); setPagoTotal(venta.total); }} className={`whitespace-pre-wrap w-full px-2 py-2 ${!isPagoTotal ? "text-gray-900 bg-white" : "bg-gray-900 text-white"}`}>Pagado total {isPagoTotal && (<FontAwesomeIcon size='1x' icon={faCheck} />)}</button>
                </div>
                <div className="">
                  <input className='w-full rounded-b-lg border-x-2 border-b-2 border-solid border-gray-500 p-2' disabled={!!isPagoTotal} type="text" value={pagoTotal} onChange={(e) => setPagoTotal(e.target.value)} placeholder='Cantidad...' />
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="sticky bottom-0 left-0 w-full h-auto p-3 bg-white border-t-2 border-solid border-gray-500">
            {/* Resultado */}
            <div className="w-full h-auto border-b-2 border-solid border-gray-600 pb-3">
              <div className="flex flex-nowrap justify-between items-baseline">
                <div className="flex items-center">
                  <p className="w-full text-base font-light whitespace-pre-wrap">Cantidad: </p>
                  <span className="w-auto whitespace-nowrap leading-none">{productosVendidos?.length || 0} <span className='text-base'>productos</span></span>
                </div>
                <div className="flex items-center">
                  <p className="w-full text-base font-light whitespace-pre-wrap">Total: </p>
                  <span className="w-auto whitespace-nowrap"><span className='text-base'>$</span><span className='text-lg font-bold'>{venta.total}</span> </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center w-full pt-3">
              <button onClick={() => registrarVenta()} className={`rounded-lg left-0 py-2 px-3 w-full bg-gray-900 text-white flex justify-center items-center whitespace-pre-wrap`}>
                Confirmar venta <FontAwesomeIcon size='1x' icon={faCheckCircle} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    productos: store.productos.productos,
    venta: store.ventas.venta,
    productosVendidos: store.ventas.productosVendidos
  };
};

export default connect(mapStateToProps, { registerPaymentAction, postSaleAction })(DetalleVenta);