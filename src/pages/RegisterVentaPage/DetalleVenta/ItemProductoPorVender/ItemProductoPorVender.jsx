import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiUrl } from '../../../../utils/environments';
import { decreaseQuantityProductAction, increaseQuantityProductAction, removeProductSaleAction } from '../../../../redux/ventasDuck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'

const ItemProductoPorVender = ({ producto }) => {

  const dispatch = useDispatch();

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
  
  const removerProducto = (productVenderInfo) => {
    dispatch(removeProductSaleAction(productVenderInfo.product._id));
  };

  return (
    <div className="w-full">
      <div className="p-2 first:border-t-0 border-t-2 border-solid border-gray-500 overflow-hidden flex flex-nowrap justify-between items-center">
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
      <div className="w-full flex flex-nowrap border-t-2 border-b-2 border-solid border-gray-500 overflow-hidden">
        {
          producto.amount > 1 ?
          (<button onClick={() => puedeDecrementar(producto)} className='w-full px-2 py-2 text-gray-900 bg-white'><FontAwesomeIcon size='1x' icon={faMinusCircle} /></button>) 
          : 
          (<button onClick={() => removerProducto(producto)} className='w-full px-2 py-2 text-gray-900 bg-white'><FontAwesomeIcon size='1x' icon={faTrash} /></button>) 
        }
        <button onClick={() => puedeIncrementar(producto)} className='w-full px-2 py-2 text-white bg-gray-900'><FontAwesomeIcon size='1x' icon={faPlusCircle} /></button>
      </div>
    </div>
  );
};

export default ItemProductoPorVender;