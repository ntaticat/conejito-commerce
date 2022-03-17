import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import { getSaleAction } from '../../redux/ventasDuck';

const VentaPage = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const { venta } = useSelector( store => store.ventas );

  useEffect(() => {
    dispatch(getSaleAction(id));
  }, [id]);

  return (
    <PageLayout>
      <h1>Página de la Venta</h1>
    </PageLayout>
  );
};

const mapStateToProps = (store) => {
  return {
    venta: store.ventas.venta
  };
};

export default VentaPage;