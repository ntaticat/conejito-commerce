import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { apiUrl } from '../../../../utils/environments';
import { decreaseQuantityProductAction, increaseQuantityProductAction } from '../../../../redux/ventasDuck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const ItemProductoPorVender = ({ producto }) => {

  const dispatch = useDispatch();

  console.log("INFO DEL PRODUCTO", producto);

  const incrementarCantidadProducto = (productId) => {
    dispatch(increaseQuantityProductAction(productId));
  };

  const decrementarCantidadProducto = (productId) => {
    dispatch(decreaseQuantityProductAction(productId));
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

  return (
    <div key={producto.product._id} className="w-full py-2">
      <div className="p-2 border-x-2 border-t-2 border-solid border-gray-500 rounded-t-lg overflow-hidden flex flex-nowrap justify-between items-center">
        {/* Imagen */}
        <div className="w-20 h-12 bg-black rounded-lg overflow-hidden">
          <img className='w-full h-full object-cover object-center' src={`${apiUrl}/${producto?.product?.img}`} alt="" />
        </div>
        {/* Nombre */}
        <p className='px-2 w-full text-center'>{producto.product.name}</p>
        {/* Cantidades */}
        <div className="text-right">
          <p className="w-auto whitespace-nowrap leading-tight text-xs text-light">{`${producto.amount}`}<span className='text-xs'> x </span>{`$${producto.price.amount}`}</p>
          <p className="w-auto whitespace-pre-wrap leading-tight text-sm font-semibold"><span className='text-xs'>$</span>{`${producto.total}`}</p>
        </div>


      </div>
      <div className="w-full flex flex-nowrap border-2 border-solid border-gray-500 rounded-b-lg overflow-hidden">
        <button onClick={() => puedeDecrementar(producto)} className='w-full px-2 py-2 text-gray-900 bg-white'><FontAwesomeIcon size='1x' icon={faMinusCircle} /></button>
        <button onClick={() => puedeIncrementar(producto)} className='w-full px-2 py-2 text-white bg-gray-900'><FontAwesomeIcon size='1x' icon={faPlusCircle} /></button>
      </div>
    </div>
  );
};

export default ItemProductoPorVender;