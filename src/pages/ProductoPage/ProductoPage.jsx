import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import { getProductoAction } from './../../redux/productosDuck';
import ProductoImageForm from './ProductoImageForm/ProductoImageForm';
import ProductoPriceForm from './ProductoPriceForm/ProductoPriceForm';
import "./ProductoPage.css"
import { apiUrl } from '../../utils/environments';
import ModalForm from '../../layouts/ModalForm/ModalForm';

const ProductoPage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { producto } = useSelector(store => store.productos);


  useEffect(() => {
    dispatch(getProductoAction(id));
  }, [id]);

  const [showImageForm, toggleShowImageForm] = useState(false);
  const [showPriceForm, toggleShowPriceForm] = useState(false);

  const closeImageModal = () => {
    toggleShowImageForm(false);
  }

  const closePriceModal = () => {
    toggleShowPriceForm(false);
  }

  return (
    <div className='relative'>
      <PageHeader titulo={"Producto"} />

      <div className="p-3">


        <div className="flex flex-wrap justify-center">
          <div className="product-image-container rounded-lg overflow-hidden shadow-lg">
            <div className="absolute w-full h-full">
              <img className='w-full h-full object-cover object-center' src={`${apiUrl}/${producto?.img}`} alt="" />
            </div>
            {/* <div className="absolute z-20 w-full h-full" style={{ backgroundColor: "black", opacity: "0.50" }}></div> */}
          </div>
        </div>

        <h1 className='py-3 text-lg text-center'>{producto?.name}</h1>

        <div className="px-3 pb-3">
          <p className='text-center text-sm font-light'>
            {producto?.description}
          </p>
        </div>

        <div className="">
          <div className="px-3 py-3 flex flex-nowrap items-start border-b-2 border-solid border-gray-500 border-t-2">
            <p className="w-full text-sm font-light">Precio:</p>
            <p className="w-auto whitespace-nowrap"><span className='text-xs'>$</span>{`${producto?.currentPrice?.amount}`}</p>
          </div>
          <div className="px-3 py-3 flex flex-nowrap items-start border-b-2 border-solid border-gray-500">
            <p className="w-full text-sm font-light">Costo:</p>
            <p className="w-auto whitespace-nowrap"><span className='text-xs'>$</span>{`${producto?.currentPrice?.cost}`}</p>
          </div>
          <div className="px-3 py-3 flex flex-nowrap items-start border-b-2 border-solid border-gray-500">
            <p className="w-full text-sm font-light">Disponible:</p>
            <p className="w-auto text-right leading-none">{`${producto?.stock}`} <span className='text-xs'>unidades</span> </p>
          </div>
          <div className="px-3 py-3 flex flex-nowrap items-start border-b-2 border-solid border-gray-500">
            <p className="w-full text-sm font-light">Estado:</p>
            <p className="w-auto whitespace-nowrap">
              {producto?.state ?
                (<span className='text-sm py-1 px-2 w-full rounded-lg bg-green-900 text-white'>Activo</span>)
                :
                (<span className='text-sm py-1 px-2 w-full rounded-lg bg-red-900 text-white'>Inactivo</span>)
              }
            </p>
          </div>
        </div>



      </div>

      <div className="px-3 pb-3 flex flex-nowrap gap-1">
        <button
          className="py-2 px-3 w-full rounded-md bg-gray-800 text-white border-b-2 border-solid border-gray-500"
          onClick={() => toggleShowImageForm(!showImageForm)}
        >
          Cambiar imagen
        </button>
        <button
          className="py-2 px-3 w-full rounded-md bg-gray-800 text-white"
          onClick={() => toggleShowPriceForm(!showPriceForm)}
        >
          Cambiar precio
        </button>
      </div>

      {/* Formularios */}
      <div>
        {showImageForm &&
          (
            <ModalForm closeFormFn={closeImageModal}>
              <ProductoImageForm />
            </ModalForm>
          )
        }

        {showPriceForm &&
          (
            <ModalForm closeFormFn={closePriceModal}>
              <ProductoPriceForm />
            </ModalForm>
          )
        }
      </div>
    </div>
  );
};

export default ProductoPage;