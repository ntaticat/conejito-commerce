import PageHeader from '../../components/PageHeader/PageHeader';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProductosAction, postProductoAction } from './../../redux/productosDuck';
import ProductoItem from './ProductoItem/ProductoItem';
import ProductoForm from './ProductoForm/ProductoForm';

const ProductosPage = ({ productos, getProductosAction, postProductoAction }) => {

  useEffect(() => {
    getProductosAction();
  }, []);

  const [modal, toggleModal] = useState(false);

  const onToggleModal = () => toggleModal(!modal);

  const renderProductos = () => {
    return productos.map((producto) => (
      <ProductoItem key={producto._id} productoInfo={producto} />
    ));
  }

  return (
    <div className='relative min-h-screen'>
      <PageHeader titulo={"Productos"} />

      {/* Productos */}
      <div className="p-3 min-h-screen">
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
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    productos: store.productos.productos
  }
};

export default connect(mapStateToProps, { getProductosAction, postProductoAction })(ProductosPage);