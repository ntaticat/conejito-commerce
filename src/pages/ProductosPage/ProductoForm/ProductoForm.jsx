import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { postProductoAction } from './../../../redux/productosDuck';

const ProductoForm = ({ postProductoAction, modal, onToggleModal }) => {

  const onSubmitProducto = (data) => {
    data = {
      ...data,
      state: Boolean(Number(data.state))
    }
    const producto = {
      producto: { ...data }
    }

    postProductoAction(producto);
  }

  return (
    <div className={`${modal ? "visible" : "invisible"} z-20 fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50`}>
      <div className="max-w-sm bg-white">
        <div className="flex items-stretch justify-between p-3 bg-gray-900 text-white">
          <h3 className="text-2xl">Añadir Producto</h3>
          <button onClick={onToggleModal}><FontAwesomeIcon size='lg' icon={faTimesCircle} /></button>
        </div>
        <div className="p-3">

          <Formik
            initialValues={{
              name: "",
              description: "",
              stock: 0,
              state: false
            }}
            onSubmit={onSubmitProducto}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                  <label htmlFor="description">Descripción</label>
                  <Field name="description" type="textarea" className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')} />

                  <label htmlFor="stock">Stock</label>
                  <Field name="stock" type="number" className={'form-control' + (errors.state && touched.state ? ' is-invalid' : '')} />

                  <div id="state-radio">Estado</div>
                  <div role="group" aria-labelledby="state-radio">
                    <label htmlFor="state">
                      Activo
                      <Field name="state" type="radio" value="1" />
                    </label>
                    <label htmlFor="state">
                      Inactivo
                      <Field name="state" type="radio" value="0" />
                    </label>
                  </div>


                  {/* <ErrorMessage name="name" component="div" className="invalid-feedback" /> */}
                </div>
                <div className="mt-3">
                  <button type="submit" className="px-4 py-2 mr-2 text-white bg-green-600 rounded">Añadir</button>
                  <button type="reset" className="px-4 py-2 mr-2 text-white bg-gray-600 rounded">Vaciar</button>
                </div>
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </div>
  );
};

export default connect(null, {postProductoAction})(ProductoForm);