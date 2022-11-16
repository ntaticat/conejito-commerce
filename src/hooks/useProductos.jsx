import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

import { addProductoPrecioAction, getProductoAction, getProductosAction, postProductoAction, putProductoAction } from '../redux/productosDuck';

const useProductos = () => {
  
  const dispatch = useDispatch();
  
  const addPrecioToProducto = (productoId, precioInfo) => {
    dispatch(addProductoPrecioAction(productoId, precioInfo));
  };

  const getProducto = () => {

  };


  return {
    addPrecioToProducto
  }
};

export default useProductos;