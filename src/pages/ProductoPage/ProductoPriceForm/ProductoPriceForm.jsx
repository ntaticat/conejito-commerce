import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProductoPrecioAction } from './../../../redux/productosDuck';

const ProductoPriceForm = ({ producto, addProductoPrecioAction }) => {

  const onSubmitPrice = async (data) => {
    const reqData = {
      precio: {
        ...data
      }
    };

    await addProductoPrecioAction(producto._id, reqData);
  }

  return (
    <Formik
      initialValues={{
        amount: 0,
        cost: 0
      }}
      onSubmit={onSubmitPrice}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="">

            <label htmlFor="amount">Precio</label>
            <Field name="amount" type="number" />

            <label htmlFor="amount">Costo</label>
            <Field name="cost" type="number" />

          </div>
          <div className="mt-3">
            <button type="submit" className="px-4 py-2 mr-2 text-white bg-green-600 rounded">Añadir</button>
            <button type="reset" className="px-4 py-2 mr-2 text-white bg-gray-600 rounded">Vaciar</button>
          </div>

        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = (store) => {
  return {
    producto: store.productos.producto
  }
};

export default connect(mapStateToProps, { addProductoPrecioAction })(ProductoPriceForm);