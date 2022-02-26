import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import { getSaleAction } from '../../redux/ventasDuck';

const VentaPage = ({ venta, getSaleAction }) => {

  const { id } = useParams();

  useEffect(() => {
    getSaleAction(id);
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

export default  connect(mapStateToProps, { getSaleAction })(VentaPage);