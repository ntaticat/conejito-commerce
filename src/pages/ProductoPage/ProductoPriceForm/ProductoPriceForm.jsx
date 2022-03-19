import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addProductoPrecioAction } from './../../../redux/productosDuck';

const ProductoPriceForm = () => {

  const dispatch = useDispatch();
  const { producto } = useSelector( store => store.productos );

  const onSubmitPrice = async (data) => {
    const reqData = {
      precio: {
        ...data
      }
    };

    dispatch(addProductoPrecioAction(producto._id, reqData));
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
          <div className="w-full">

            <label htmlFor="amount">Precio</label>
            <Field className="text-center px-3 py-1 w-full rounded-sm border-2 border-solid border-gray-300 outline-gray-500" name="amount" type="number" />

            <label htmlFor="cost">Costo</label>
            <Field className="text-center px-3 py-1 w-full rounded-sm border-2 border-solid border-gray-300 outline-gray-500" name="cost" type="number" />

          </div>
          <div className="w-full mt-3">
            <button type="submit" className="w-full px-4 py-2 mr-2 text-white bg-green-600 rounded-t-md">Actualizar precio</button>
            <button type="reset" className="w-full px-4 py-2 mr-2 text-white bg-gray-600 rounded-b-md">Resear valores</button>
          </div>

        </Form>
      )}
    </Formik>
  );
};

export default ProductoPriceForm;