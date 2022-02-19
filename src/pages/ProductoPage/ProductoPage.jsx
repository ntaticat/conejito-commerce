import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import { getProductoAction } from './../../redux/productosDuck';
import { updateProductoImageAction } from './../../redux/uploadsDuck';

const ProductoPage = ({ producto, imagenInfo, getProductoAction, updateProductoImageAction }) => {
  console.log("RENDERIZADO Producto Page");

  const { id } = useParams();

  const [imageBlob, setImageBlob] = useState(undefined);

  useEffect(() => {
    console.log("RENDERIZADO Producto Page desde HOOOK");
  });

  useEffect(() => {
    getProductoAction(id);
  }, [id]);


  const onSubmitImage = async (data) => {
    await updateProductoImageAction(data, id);
  }

  const convertImageToBlob = async (imgData) => {
    if (!imgData) {
      return;
    }
    let reader = new FileReader();
    reader.onloadend = async () => {
      setImageBlob(reader.result);
    };
    reader.readAsDataURL(imgData);
  }
  
  return (
    <div className='relative'>
      <PageHeader titulo={"Producto"} />

      <div className="p-3">
        <h1>{producto.name}</h1>
      </div>

      {/* Formulario */}
      <Formik
        initialValues={{
          img: null
        }}
        onSubmit={onSubmitImage}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="img">Nombre</label>
              <input name="img" type="file" accept="image/png, image/jpeg" onChange={(event) => {
                const imgData = event.currentTarget.files[0];
                setFieldValue("img", imgData);
                convertImageToBlob(imgData);
              }} className="form-control" />
            </div>
            <div className="mt-3">
              {!!imageBlob &&
                <img className='w-full' src={imageBlob} alt="ProductImage" />
              }
            </div>
            <div className="mt-3">
              <button type="submit" className="px-4 py-2 mr-2 text-white bg-green-600 rounded">Añadir</button>
              <button type="reset" className="px-4 py-2 mr-2 text-white bg-gray-600 rounded">Vaciar</button>
            </div>

          </Form>
        )}
      </Formik>

    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    producto: store.productos.producto,
    imagenInfo: store.uploads.imagenInfo
  }
};

export default connect(mapStateToProps, { getProductoAction, updateProductoImageAction })(ProductoPage);