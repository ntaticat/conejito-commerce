import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCheckCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { registerPaymentAction, postSaleAction } from '../../../redux/ventasDuck';
import ItemProductoPorVender from './ItemProductoPorVender/ItemProductoPorVender';
import { redondearDosDecimales } from '../../../utils/numbers.utilities';

const DetalleVenta = ({ toggleDetalleVenta }) => {

  const dispatch = useDispatch();
  const { venta, productosVendidos } = useSelector(store => store.ventas);

  const [isPagoTotal, setIsPagoTotal] = useState(false);
  const [pagoTotal, setPagoTotal] = useState(0);
  const [efectivo, setEfectivo] = useState(0);
  const [cambioEfectivo, setCambioEfectivo] = useState(0);
  const [isCambioValid, setIsCambioValid] = useState(false);


  const cambiarPagoTotal = (isTotal) => {
    const cantidad = isTotal ? venta.total : 0;
    setPagoTotal(cantidad);
    setIsPagoTotal(isTotal);
  }

  const onChangeInputEfectivo = (event) => {
    const cambio = Number(event.target.value || "") - Number(pagoTotal);
    const cambioRedondeado = redondearDosDecimales(cambio);

    setIsCambioValid(!(cambioRedondeado < 0))

    setCambioEfectivo(cambioRedondeado);

    setEfectivo(event.target.value);
  }

  const onChangeInputPago = (e) => {
    if (Number(e.target.value) >= venta.total) {
      cambiarPagoTotal(true);
    }
    else {
      setPagoTotal(e.target.value);
    }
  }

  const registrarPago = () => {
    dispatch(registerPaymentAction(pagoTotal, isPagoTotal));
  };

  const registrarVenta = () => {
    registrarPago();
    dispatch(postSaleAction());
  };

  const renderProductosPorVender = () => {

    if (!(productosVendidos?.length)) {
      return (<p className='pb-2'>No se han seleccionado productos...</p>);
    }

    return productosVendidos.map((producto) => {
      return (
        <ItemProductoPorVender key={producto.product._id} producto={{ ...producto }} />
      );
    });
  };

  return (
    <div className="fixed z-30 bottom-0 left-0 w-full text-center flex flex-wrap justify-center top-0 bg-white">
      <div className="relative bg-white w-11/12 border-t-2 border-x-2 border-solid border-gray-800 max-h-screen overflow-auto  shadow-black shadow-md flex flex-col flex-nowrap">
        {/* Button */}
        <button
          className="sticky top-0 left-0 py-2 px-3 w-full h-auto bg-gray-900 text-white flex justify-around"
          onClick={() => toggleDetalleVenta(false)}
        >
          Ocultar detalle de la venta <FontAwesomeIcon size='lg' icon={faCaretDown} />
        </button>
        {/* Info */}
        <div className="bg-white w-full h-full flex flex-wrap content-between">

          <div className="w-full h-auto">
            <div className="py-2 px-3">
              <div className='rounded-lg overflow-hidden border-2 border-solid border-gray-500'>
                {/* Productos */}
                {renderProductosPorVender()}
              </div>
            </div>

            {/* Pago */}
            {!!productosVendidos?.length && (
              <div className="w-full h-auto">
                {/* Cliente */}
                <div className="p-3 border-t-2 border-solid border-gray-500">
                  {/* <p className='pb-2'>Cliente valor</p> */}
                  <div className="w-full flex flex-nowrap border-2 border-solid border-gray-500 rounded-t-lg overflow-hidden">
                    <button
                      onClick={() => { cambiarPagoTotal(false) }}
                      className={`whitespace-pre-wrap w-full px-2 py-2 ${isPagoTotal ? "text-gray-900 bg-white" : "bg-gray-900 text-white"}`}
                    >
                      Pago parcial {!isPagoTotal && (<FontAwesomeIcon size='1x' icon={faCheck} />)}</button>
                    <button
                      onClick={() => { cambiarPagoTotal(true) }}
                      className={`whitespace-pre-wrap w-full px-2 py-2 ${!isPagoTotal ? "text-gray-900 bg-white" : "bg-gray-900 text-white"}`}
                    >
                      Pagado total {isPagoTotal && (<FontAwesomeIcon size='1x' icon={faCheck} />)}</button>
                  </div>
                  <div className="">
                    <input
                      className='w-full rounded-b-lg border-x-2 border-b-2 border-solid border-gray-500 p-2 text-center'
                      disabled={!!isPagoTotal}
                      type="text"
                      value={pagoTotal}
                      onChange={(e) => onChangeInputPago(e)}
                      placeholder='Cantidad...'
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Efectivo y cambio */}
            {isPagoTotal && (
              <div className="w-full h-auto">
                {/* Cliente */}
                <div className="p-3 border-t-2 border-solid border-gray-500">
                  <div className="w-full flex flex-wrap border-2 border-solid border-gray-500 rounded-lg overflow-hidden">
                    {/* pago */}


                    {/* efectivo */}
                    <div className="whitespace-pre-wrap w-full px-2 py-2 bg-gray-900 text-white">Efectivo recibido</div>
                    <input
                      className='w-full border-y-2 border-solid border-gray-500 p-2 text-center'
                      type="text"
                      value={efectivo}
                      onChange={(e) => onChangeInputEfectivo(e)}
                      placeholder='Efectivo...'
                    />
                    {/* cambio efectivo */}
                    <div className="whitespace-pre-wrap w-full px-2 py-2 bg-gray-900 text-white">Cambio efectivo</div>
                    <div className='w-full border-t-2 border-solid border-gray-500 p-2'>
                      {isCambioValid ? (<p>Cambio efectivo: ${cambioEfectivo}</p>) : (<p>El cambio no es valido</p>)}
                    </div>
                  </div>
                  <div className="">

                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Botton */}
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
              <button
                onClick={() => registrarVenta()}
                className={`rounded-lg left-0 py-2 px-3 w-full bg-gray-900 text-white flex justify-center items-center whitespace-pre-wrap`}
              >
                Confirmar venta <FontAwesomeIcon size='1x' icon={faCheckCircle} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleVenta;