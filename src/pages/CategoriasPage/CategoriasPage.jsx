import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { getCategoriasAction, postCategoryAction } from './../../redux/categoriasDuck';

const CategoriasPage = ({ categorias, getCategoriasAction, postCategoryAction }) => {

  useEffect(() => {
    getCategoriasAction();
  }, []);

  // getCategoriasAction()();

  const [modal, toggleModal] = useState(false);

  const onToggleModal = () => {
    modal ? toggleModal(false) : toggleModal(true);
  }

  const renderCategorias = () => {
    return categorias.map((categoria) => (
      <div key={categoria._id} className="flex flex-nowrap justify-between items-center first:rounded-t-lg last:rounded-b-lg first:border-t-2 border-b-2 border-x-2 border-solid border-gray-900">
        <h2 className="py-2 px-3">{categoria.name}</h2>
        <div className="py-2 px-3 text-center text-xs">
          <p className='text-sm'>{categoria.products.length}</p>
          <p>productos</p>
        </div>
      </div>
    ));
  }

  const onSubmitCategoria = (data) => {
    data = {
      ...data,
      state: Boolean(Number(data.state))
    }
    const categoria = {
      categoria: { ...data }
    }

    postCategoryAction(categoria);
  }

  return (
    <PageLayout>
      {/* Categorias */}
      <div className="w-full p-3">
        {renderCategorias()}
      </div>

      {/* Panel bottom */}
      <div className="sticky bottom-0 bg-white left-0 w-full h-auto border-y-2 border-solid border-gray-900 py-2 px-3 text-center">
        <button className="py-2 px-3 w-full rounded-lg bg-gray-900 text-white" onClick={onToggleModal}>
          Añadir categoría
        </button>
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

      {/* Modal */}
      <div className={`${modal ? "visible" : "invisible"} z-20 fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50`}>
        <div className="max-w-sm bg-white">
          <div className="flex items-stretch justify-between p-3 bg-gray-900 text-white">
            <h3 className="text-2xl">Añadir Categoria</h3>
            <button onClick={onToggleModal}><FontAwesomeIcon size='lg' icon={faTimesCircle} /></button>
          </div>
          <div className="p-3">

            <Formik
              initialValues={{
                name: "",
                description: "",
                state: "",
                categoryType: ""
              }}
              onSubmit={onSubmitCategoria}
            >
              {({ errors, status, touched }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                    <label htmlFor="description">Descripción</label>
                    <Field name="description" type="textarea" className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')} />

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

                    <div id="categoryType-group">Estado</div>
                    <div role="group" aria-labelledby="categoryType-group">
                      <label htmlFor="categoryType">
                        Producto
                        <Field name="categoryType" type="radio" value="PRODUCT_CATEGORY" />
                      </label>
                      <label htmlFor="categoryType">
                        Facilitador
                        <Field name="categoryType" type="radio" value="EASY_CATEGORY" />
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
    </PageLayout>
  );
};

const mapStateToProps = (store) => {
  return {
    categorias: store.categorias.categorias
  }
};

export default connect(mapStateToProps, { getCategoriasAction, postCategoryAction })(CategoriasPage);