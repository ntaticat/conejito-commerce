import './RegisterVentaPage.css';
import React, { useEffect, useState } from 'react';
import { getProductosAction } from '../../redux/productosDuck';
import DetalleVenta from './DetalleVenta/DetalleVenta';
import DetalleVentaResume from './DetalleVentaResume/DetalleVentaResume';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import ItemSeleccionarProducto from './ItemSeleccionarProducto/ItemSeleccionarProducto';
import { useDispatch, useSelector } from 'react-redux';

const RegisterVentaPage = () => {

  const dispatch = useDispatch();
  const { productos } = useSelector( store => store.productos );

  useEffect(() => {
    dispatch(getProductosAction());
  }, []);

  const [showDetalleVenta, toggleDetalleVenta] = useState(false);

  const renderProductos = () => {
    if (!(productos?.length)) {
      return (<p>No hay productos que mostrar...</p>);
    }

    return productos.map((producto) => {
      return (
        <ItemSeleccionarProducto key={producto._id} producto={producto} />
      )
    });
  };

  return (
    <PageLayout>
      {/* Productos */}
      <div className={`w-full py-4 px-2 ${!showDetalleVenta ? "block" : "hidden"}`}>
        <div className="flex flex-wrap">
          {renderProductos()}
        </div>
      </div>
      {showDetalleVenta ?
        <DetalleVenta toggleDetalleVenta={toggleDetalleVenta} /> :
        <DetalleVentaResume toggleDetalleVenta={toggleDetalleVenta} />}
    </PageLayout>
  );
};

export default RegisterVentaPage;