import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faCheckCircle, faCheck, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import PageHeader from '../../components/PageHeader/PageHeader';
import './RegisterVentaPage.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProductosAction } from '../../redux/productosDuck';
import { addProductSaleAction, decreaseQuantityProductAction, increaseQuantityProductAction, registerPaymentAction, removeProductSaleAction, postSaleAction } from '../../redux/ventasDuck';
import { apiUrl } from '../../utils/environments';

const RegisterVentaPage = ({ productos, venta, productosVendidos, getProductosAction, addProductSaleAction, decreaseQuantityProductAction, increaseQuantityProductAction, registerPaymentAction, removeProductSaleAction, postSaleAction }) => {

  useEffect(() => {
    getProductosAction();
  }, []);

  const [isPagoTotal, setIsPagoTotal] = useState(false);
  const [pagoTotal, setPagoTotal] = useState(0);

  const validarRegistrarProducto = (product) => {
    const indiceProducto = productosVendidos.findIndex((productoVendido) => productoVendido.product._id === product._id);

    if (indiceProducto === -1) {
      agregarProducto(product);
    }
    else {
      incrementarCantidadProducto(product._id);
    }

  };

  const checkProductoSeleccionado = (productId) => {
    const indiceProducto = productosVendidos?.findIndex((productoVendido) => productoVendido.product._id === productId);
    return indiceProducto !== -1;
  }

  const addOrRemoveProduct = (product) => {
    const productoEncontrado = checkProductoSeleccionado(product._id);

    if (!productoEncontrado) {
      agregarProducto(product);
    }
    else {
      removerProducto(product._id);
    }
  };

  const agregarProducto = (productInfo) => {
    addProductSaleAction(productInfo);
  };

  const removerProducto = (productId) => {
    removeProductSaleAction(productId);
  };

  const incrementarCantidadProducto = (productId) => {
    increaseQuantityProductAction(productId);
  };

  const decrementarCantidadProducto = (productId) => {
    decreaseQuantityProductAction(productId);
  };

  const puedeIncrementar = (productVenderInfo) => {
    if (productVenderInfo.amount < productVenderInfo.product.stock) {
      incrementarCantidadProducto(productVenderInfo.product._id);
    }
  };

  const puedeDecrementar = (productVenderInfo) => {
    if (productVenderInfo.amount > 1) {
      decrementarCantidadProducto(productVenderInfo.product._id);
    }
  };

  const [showDetailVenta, toggleDetailVenta] = useState(false);

  const renderProductos = () => {

    if(!(productos?.length)) {
      return (<h1>No hay</h1>); 
    }


    return productos.map((producto) => {

      console.log("ID DEL PRODUCTO RENDER", producto._id);

      const selectedProduct = checkProductoSeleccionado(producto._id);

      return (
        <div key={producto._id} className="w-full p-3 flex justify-center items-center">
          <button className="text-center bg-gray-900 text-white rounded-lg overflow-hidden square-bottom" onClick={() => addOrRemoveProduct(producto)} >
            <div
              className='absolute z-10 w-full h-full'
              style={{
                backgroundImage: `url(${apiUrl}/${producto.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            ></div>
            <div
              className='absolute z-20 w-full h-full flex flex-wrap justify-center content-center'
              style={{
                backgroundColor: `${selectedProduct ? "#000a" : "#0006"}`
              }}
            >
              <p className='w-full text-lg font-semibold stroke-black stroke-1'>{producto.name}</p>
              <p className='w-full text-base leading-none font-light stroke-black stroke-1'><span className='font-semibold'>{`$${producto.currentPrice.amount}`}</span> c/u</p>
              <p className='w-full text-base leading-none font-light stroke-black stroke-1'><span className='font-semibold'>{producto.stock}</span> disponibles</p>
            </div>
            <div className={`absolute z-20 w-full h-full flex-wrap justify-end items-strech ${selectedProduct ? "flex" : "hidden"}`}>
              <div className="w-auto h-auto p-1 bg-green-500 text-white">
                <FontAwesomeIcon size='lg' icon={faCheckCircle} />
              </div>
            </div>
          </button>
        </div>
      )
    });
  };

  const renderProductosPorVender = () => {

    if(!(productosVendidos?.length)) {
      return (<h1>No hay</h1>); 
    }

    return productosVendidos?.map((productoPorVender) => {
      return (
        <div key={productoPorVender.product._id} className="w-full py-2">
          <div className="p-2 border-x-2 border-t-2 border-solid border-gray-500 rounded-t-lg overflow-hidden flex flex-nowrap justify-between items-center">
            {/* Imagen */}
            <div className="w-20 h-12 bg-black rounded-lg overflow-hidden">
              <img className='w-full h-full object-cover object-center' src={`${apiUrl}/${productoPorVender?.product?.img}`} alt="" />
            </div>
            {/* Nombre */}
            <p className='px-2 w-full text-center'>{productoPorVender.product.name}</p>
            {/* Cantidades */}
            <div className="text-right">
              <p className="w-auto whitespace-nowrap leading-tight text-xs text-light">{`${productoPorVender.amount}`}<span className='text-xs'> x </span>{`$${productoPorVender.price.amount}`}</p>
              <p className="w-auto whitespace-pre-wrap leading-tight text-sm font-semibold"><span className='text-xs'>$</span>{`${productoPorVender.total}`}</p>
            </div>


          </div>
          <div className="w-full flex flex-nowrap border-2 border-solid border-gray-500 rounded-b-lg overflow-hidden">
            <button onClick={() => puedeDecrementar(productoPorVender)} className='w-full px-2 py-2 text-gray-900 bg-white'><FontAwesomeIcon size='1x' icon={faMinusCircle} /></button>
            <button onClick={() => puedeIncrementar(productoPorVender)} className='w-full px-2 py-2 text-white bg-gray-900'><FontAwesomeIcon size='1x' icon={faPlusCircle} /></button>
          </div>
        </div>
      );
    });
  };

  const renderProductosFake = () => (
    <div className="w-full">
      <div className="square-bottom">
      </div>
    </div>
  );

  const registrarPago = () => {
    console.log("pagoTotal", pagoTotal);
    console.log("isPagoTotal", isPagoTotal);
    registerPaymentAction(pagoTotal, isPagoTotal);
  };

  const registrarVenta = () => {
    registrarPago();
    postSaleAction();
  };

  return (
    <div className='relative'>
      <PageHeader titulo={"Ventas"} />

      {/* Productos */}
      <div className={`p-3 ${!showDetailVenta ? "block" : "hidden"}`}>
        <div className="flex flex-wrap">
          {renderProductos()}
          {renderProductosFake()}
        </div>
      </div>

      {/* Panel bottom */}
      <div className={`fixed z-30 bottom-0 left-0 w-full text-center flex flex-wrap justify-center ${showDetailVenta ? "top-0 bg-white" : ""}`}>

        <div className={`relative bg-white w-11/12 border-t-2 border-x-2 border-solid border-gray-800 max-h-screen overflow-auto  shadow-black shadow-md flex flex-col flex-nowrap ${showDetailVenta ? "" : "rounded-t-lg"}`}>
          {/* Button */}
          <button className="sticky top-0 left-0 py-2 px-3 w-full h-auto bg-gray-900 text-white flex justify-around" onClick={() => toggleDetailVenta(!showDetailVenta)}>
            {!showDetailVenta ? "Continuar con la venta" : "Detalle de la venta"} <FontAwesomeIcon size='lg' icon={!showDetailVenta ? faCaretUp : faCaretDown} />
          </button>
          {/* Resumen */}
          <div className={`w-full p-3 h-auto ${showDetailVenta ? "hidden" : ""}`}>
            <div className="flex flex-nowrap justify-center items-baseline w-full">
              <div className="flex w-auto items-baseline">
                <p className="w-full text-sm font-light whitespace-pre-wrap"><span className="text-base font-normal whitespace-nowrap">{productosVendidos?.length || 0} </span><span className='text-sm font-normal'>productos seleccionados</span></p>
              </div>
              {/* <div className="flex w-auto items-baseline">
                <p className="w-full text-sm font-light whitespace-pre-wrap">Total: <span className='text-xs font-normal'>$</span><span className="text-base font-normal whitespace-nowrap">{venta?.total || 0}</span></p>
              </div> */}
            </div>
          </div>
          {/* Info */}
          <div className={`bg-white w-full h-full flex flex-wrap content-between ${!showDetailVenta ? "hidden" : ""}`}>

            <div className="w-full h-auto py-2 px-3">
              {/* Productos */}
              {renderProductosPorVender()}
            </div>

            <div className="w-full h-auto">
              {/* Cliente */}
              <div className="py-2 px-3 border-t-2 border-solid border-gray-500">
                <h1>Cliente valor</h1>
                <div className="w-full flex flex-nowrap border-2 border-solid border-gray-500 rounded-t-lg overflow-hidden">
                  <button onClick={() => {setIsPagoTotal(false)}} className={`whitespace-pre-wrap w-full px-2 py-2 ${isPagoTotal ? "text-gray-900 bg-white" : "bg-gray-900 text-white"}`}>Pago parcial { !isPagoTotal && (<FontAwesomeIcon size='1x' icon={faCheck} />) }</button>
                  <button onClick={() => {setIsPagoTotal(true);setPagoTotal(venta.total);}} className={`whitespace-pre-wrap w-full px-2 py-2 ${!isPagoTotal ? "text-gray-900 bg-white" : "bg-gray-900 text-white"}`}>Pagado total { isPagoTotal && (<FontAwesomeIcon size='1x' icon={faCheck} />) }</button>
                </div>
                <div className="">
                  <input className='w-full rounded-b-lg border-x-2 border-b-2 border-solid border-gray-500 p-2' disabled={!!isPagoTotal} type="text" value={pagoTotal} onChange={(e) => setPagoTotal(e.target.value)} placeholder='Cantidad...' />
                </div>
              </div>
            </div>

            <div className=""></div>

            {/* Button */}
            <div className={`sticky bottom-0 left-0 w-full h-auto p-3 bg-white border-t-2 border-solid border-gray-500 ${!showDetailVenta ? "hidden" : ""}`}>
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

export default connect(mapStateToProps, { getProductosAction, addProductSaleAction, decreaseQuantityProductAction, increaseQuantityProductAction, registerPaymentAction, removeProductSaleAction, postSaleAction })(RegisterVentaPage);