import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { addProductSaleAction, removeProductSaleAction } from '../../../redux/ventasDuck';
import { apiUrl } from '../../../utils/environments';
import { connect } from 'react-redux';

const ItemSeleccionarProducto = ({ productosVendidos, addProductSaleAction, removeProductSaleAction, producto }) => {

  const checkProductoSeleccionado = (productId) => {

    if (!(productosVendidos?.length)) {
      return false;
    }

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

  const isSelectedProduct = () => {
    return checkProductoSeleccionado(producto._id);
  }

  return (
    <button className="first:mt-0 last:mb-0 mx-2 mb-4 text-center bg-gray-900 text-white rounded-lg overflow-hidden square-bottom shadow-md shadow-gray-500" onClick={() => addOrRemoveProduct(producto)} >
      <div
        className='absolute z-10 w-full h-full'
        style={{
          backgroundImage: `url(${apiUrl}/${producto.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div
        className='absolute z-10 w-full h-full flex flex-wrap justify-center content-center'
        style={{
          backgroundColor: `${(isSelectedProduct()) ? "#000a" : "#0006"}`
        }}
      >
        <p className='w-full text-lg font-semibold stroke-black stroke-1'>{producto.name}</p>
        <p className='w-full text-base leading-none font-light stroke-black stroke-1'><span className='font-semibold'>{`$${producto.currentPrice.amount}`}</span> c/u</p>
        <p className='w-full text-base leading-none font-light stroke-black stroke-1'><span className='font-semibold'>{producto.stock}</span> disponibles</p>
      </div>
      <div className={`absolute z-10 w-full h-full flex-wrap justify-end items-strech ${(isSelectedProduct()) ? "flex" : "hidden"}`}>
        <div className="w-auto h-auto p-1 bg-green-500 text-white">
          <FontAwesomeIcon size='lg' icon={faCheckCircle} />
        </div>
      </div>
    </button>
  );
};

const mapStateToProps = (store) => {
  return {
    productosVendidos: store.ventas.productosVendidos
  };
};

export default connect(mapStateToProps, { addProductSaleAction, removeProductSaleAction })(ItemSeleccionarProducto);