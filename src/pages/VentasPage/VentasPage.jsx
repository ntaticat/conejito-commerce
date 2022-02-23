import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import PageHeader from '../../components/PageHeader/PageHeader';
import './VentasPage.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProductosAction } from './../../redux/productosDuck';
import { addProductSaleAction, decreaseQuantityProductAction, increaseQuantityProductAction, registerPaymentAction, removeProductSaleAction } from './../../redux/ventasDuck';
import { apiUrl } from '../../utils/environments';

const VentasPage = ({ productos, venta, productosVendidos, getProductosAction, addProductSaleAction, decreaseQuantityProductAction, increaseQuantityProductAction, registerPaymentAction, removeProductSaleAction }) => {

  useEffect(() => {
    getProductosAction();
  }, []);

  const validarRegistrarProducto = (product) => {
    const indiceProducto = productosVendidos.findIndex((productoVendido) => productoVendido.product._id === product._id);

    if(indiceProducto === -1) {
      agregarProducto(product);
    }
    else {
      incrementarCantidadProducto(product._id);
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

  const registrarPago = (pagoInfo) => {
    registerPaymentAction(pagoInfo);
  };


  const [showDetailVenta, toggleDetailVenta] = useState(false);

  const renderProductos = () => {
    return productos.map((producto) => (
      <div key={producto._id} className="w-6/12 p-3 flex justify-center items-center" >
        <button className="text-center bg-gray-900 text-white rounded-lg overflow-hidden square-bottom" onClick={() => validarRegistrarProducto(producto)} >
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
              backgroundColor: "#0006"
            }}
          >
            <p className='w-full leading-none font-semibold stroke-black stroke-1'>{producto.name}</p>
            <p className='w-full leading-none font-bold text-lg'>x30</p>
          </div>
        </button>
      </div>
    ));
  };

  const renderProductosFake = () => (
    <div className="w-6/12">
      <div className="square-bottom">
      </div>
    </div>
  );

  return (
    <div className='relative'>
      <PageHeader titulo={"Ventas"} />

      {/* Productos */}
      <div className="p-3">
        <div className="flex flex-wrap">
          {renderProductos()}
          {renderProductosFake()}
          {renderProductosFake()}
          {renderProductosFake()}
          {renderProductosFake()}
        </div>
      </div>

      {/* Panel bottom */}
      <div className={`fixed z-30 bottom-0 left-0 w-full text-center flex flex-wrap justify-center ${showDetailVenta ? "top-0 bg-gray-600" : ""}`}>

        <div className="relative bg-white w-11/12 rounded-t-lg border-t-2 border-x-2 border-solid border-gray-800 max-h-screen overflow-auto  shadow-black shadow-md flex flex-wrap justify-center">
          <button className="sticky top-0 left-0 py-2 px-3 w-full bg-gray-900 text-white flex justify-around" onClick={() => toggleDetailVenta(!showDetailVenta)}>
            Detalle de la venta <FontAwesomeIcon size='lg' icon={!showDetailVenta ? faCaretUp : faCaretDown} />
          </button>
          {/* Resumen */}
          <div className={`w-full p-3 ${showDetailVenta ? "hidden" : ""}`}>
            <div className="flex flex-nowrap justify-between items-baseline w-full">
              <div className="flex w-auto items-baseline">
                <p className="w-full text-sm font-light whitespace-pre-wrap">Cantidad: <span className="text-base font-normal whitespace-nowrap">{`30`} </span><span className='text-xs font-normal'>productos</span></p>
              </div>
              <div className="flex w-auto items-baseline">
                <p className="w-full text-sm font-light whitespace-pre-wrap">Total: <span className='text-xs font-normal'>$</span><span className="text-base font-normal whitespace-nowrap">30</span></p>
              </div>
            </div>
          </div>
          {/* Info */}
          <div className={`bg-white w-full ${!showDetailVenta ? "hidden" : ""}`}>
            <div className="flex justify-center">
              <div className="w-11/12 py-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint, molestias consectetur facilis nulla quidem non et, ratione harum ipsa sapiente laudantium error sit deserunt neque nihil nostrum laboriosam vitae?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint, molestias consectetur facilis nulla quidem non et, ratione harum ipsa sapiente laudantium error sit deserunt neque nihil nostrum laboriosam vitae?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint, molestias consectetur facilis nulla quidem non et, ratione harum ipsa sapiente laudantium error sit deserunt neque nihil nostrum laboriosam vitae?</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-11/12 border-t-2 border-solid border-gray-600 py-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint, molestias consectetur facilis nulla quidem non et, ratione harum ipsa sapiente laudantium error sit deserunt neque nihil nostrum laboriosam vitae?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint, molestias consectetur facilis nulla quidem non et, ratione harum ipsa sapiente laudantium error sit deserunt neque nihil nostrum laboriosam vitae?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint, molestias consectetur facilis nulla quidem non et, ratione harum ipsa sapiente laudantium error sit deserunt neque nihil nostrum laboriosam vitae?</p>
              </div>
            </div>

            <div className={`flex justify-center`}>
              <div className="w-11/12 border-t-2 border-solid border-gray-600 py-3">
                <div className="flex flex-nowrap justify-between">
                  <div className="flex items-baseline">
                    <p className="w-full text-sm font-light whitespace-pre-wrap">Cantidad: </p>
                    <span className="w-auto whitespace-nowrap leading-none">{`30`} <span className='text-xs'>productos</span></span>
                  </div>
                  <div className="flex items-baseline">
                    <p className="w-full text-sm font-light whitespace-pre-wrap">Total: </p>
                    <span className="w-auto whitespace-nowrap"><span className='text-xs'>$</span>30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className={`sticky bottom-0 flex justify-center w-full bg-white border-2 border-solid border-gray-200 shadow-lg shadow-black p-3 ${!showDetailVenta ? "hidden" : ""}`}>
            <button className={`rounded-lg left-0 py-2 px-3 w-full bg-gray-900 text-white flex justify-center items-center whitespace-pre-wrap`}>
              Confirmar venta <FontAwesomeIcon size='1x' icon={faCheckCircle} />
            </button>
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

export default connect(mapStateToProps, { getProductosAction, addProductSaleAction, decreaseQuantityProductAction, increaseQuantityProductAction, registerPaymentAction, removeProductSaleAction })(VentasPage);