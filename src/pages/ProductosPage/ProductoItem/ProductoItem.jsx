import React from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../../utils/environments';

const ProductoItem = ({ productoInfo }) => {
  const defaultImageUrl = 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';

  return (
    <Link to={`/productos/${productoInfo._id}`} className="flex flex-nowrap justify-between items-center first:rounded-t-lg last:rounded-b-lg first:border-t-2 border-b-2 border-x-2 border-solid border-gray-900 overflow-hidden">
      <div className="py-2 px-3 w-full">
        <h2 className="text-base text-center">{productoInfo.name}</h2>
        <div className="w-full flex flex-nowrap justify-center">
          <p className='text-sm mx-2'>Stock: <span className='font-semibold'>{productoInfo.stock}</span></p>
          <p className='text-sm mx-2'>Precio: <span className='font-semibold'>$50</span></p>
        </div>
      </div>
      <div className="">
        <img
          className='h-16 w-32 object-cover object-center'
          src={(productoInfo.img === "uploads/default.jpg" || productoInfo.img === "") ? defaultImageUrl : `${apiUrl}/${productoInfo.img}`}
          alt="producto"
        />
      </div>
    </Link>
  );
};

export default ProductoItem;