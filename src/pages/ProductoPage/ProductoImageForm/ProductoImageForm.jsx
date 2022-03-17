import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductoImageAction } from './../../../redux/uploadsDuck';

const ProductoImageForm = () => {

  const dispatch = useDispatch();
  const { producto } = useSelector( store => store.productos );
  const [imageBlob, setImageBlob] = useState(undefined);

  const onSubmitImage = async (data) => {
    dispatch(updateProductoImageAction(data, producto._id));
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
  );
};

export default ProductoImageForm;