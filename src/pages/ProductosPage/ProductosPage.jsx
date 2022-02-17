import PageHeader from '../../components/PageHeader/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { getProductosAction, postProductoAction } from './../../redux/productosDuck';

const ProductosPage = ({productos, getProductosAction, postProductoAction}) => {

  useEffect(() => {
    getProductosAction();
  }, []);

  const [modal, toggleModal] = useState(false);

  const onToggleModal = () => {
    modal ? toggleModal(false) : toggleModal(true);
  }

  const renderProductos = () => {
    return productos.map((producto) => (
      <div key={producto._id} className="flex flex-nowrap justify-between items-center first:rounded-t-lg last:rounded-b-lg first:border-t-2 border-b-2 border-x-2 border-solid border-gray-900 overflow-hidden">
        <div className="py-2 px-3 w-full">
          <h2 className="text-base text-center">{producto.name}</h2>
          <div className="w-full flex flex-nowrap justify-center">
            <p className='text-sm mx-2'>Stock: <span className='font-semibold'>{producto.stock}</span></p>
            <p className='text-sm mx-2'>Precio: <span className='font-semibold'>$50</span></p>
          </div>
        </div>
        <div className="">
          <img className='h-16 w-32 object-cover object-center' src="https://images.coplusk.net/project_images/208626/image/2019-11-27-210127-burger.jpg" alt="" />
        </div>
      </div>
    ));
  }

  const onSubmitProducto = (data) => {
    data = {
      ...data,
      state: Boolean(Number(data.state))
    }
    const producto = {
      producto: {...data}
    }
    
    postProductoAction(producto);
  }

  return (
    <div className='relative min-h-screen'>
      <PageHeader titulo={"Productos"} />

      {/* Productos */}
      <div className="p-3 min-h-screen">
        {renderProductos()}
      </div>

      {/* Formulario */}
      <div className="fixed hidden right-0 top-10 p-3">
        <div className="bg-white p-3 border-2 border-solid border-gray-900 rounded-xl mb-2">
          <form>
            <label htmlFor="">Nombre</label>
            <input className='w-full mb-2' type="text" placeholder='Nombre...' />
            <label htmlFor="">Descripción</label>
            <textarea className='w-full mb-2' placeholder='Datos adicionales...' name="" id="" rows="4"></textarea>
          </form>
        </div>
      </div>

      {/* Panel bottom */}
      <div className="sticky left-0 bottom-0 bg-white w-full h-auto border-y-2 border-solid border-gray-900 py-2 px-3 text-center">
        <button className="py-2 px-3 w-full rounded-lg bg-gray-900 text-white" onClick={onToggleModal}>
          Añadir producto
        </button>

      </div>

      {/* Modal */}
      <div className={`${modal ? "visible" : "invisible"} fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50`}>
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
                state: false,
              }}
              onSubmit={onSubmitProducto}
            >
              {({ errors, status, touched }) => (
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
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    productos: store.productos.productos
  }
};

export default connect(mapStateToProps, { getProductosAction, postProductoAction })(ProductosPage);