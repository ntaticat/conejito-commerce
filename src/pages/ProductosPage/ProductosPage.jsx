import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductosAction } from './../../redux/productosDuck';
import ProductoItem from './ProductoItem/ProductoItem';
import ProductoForm from './ProductoForm/ProductoForm';
import PageLayout from '../../layouts/PageLayout/PageLayout';

const ProductosPage = () => {

  const dispatch = useDispatch();
  const { productos } = useSelector( store => store.productos );

  useEffect(() => {
    dispatch(getProductosAction());
  }, []);

  const [modal, toggleModal] = useState(false);

  const onToggleModal = () => toggleModal(!modal);

  const renderProductos = () => {
    return productos.map((producto) => (
      <ProductoItem key={producto._id} productoInfo={producto} />
    ));
  }

  return (
    <PageLayout>
      {/* Productos */}
      <div className="w-full p-3">
        {renderProductos()}
      </div>

      {/* Panel bottom */}
      <div className="sticky left-0 bottom-0 bg-white w-full h-auto border-y-2 border-solid border-gray-900 py-2 px-3 text-center">
        <button className="py-2 px-3 w-full rounded-lg bg-gray-900 text-white" onClick={onToggleModal}>
          Añadir producto
        </button>
      </div>

      {/* Form */}
      <ProductoForm modal={modal} onToggleModal={onToggleModal} />
    </PageLayout>
  );
};

export default ProductosPage;