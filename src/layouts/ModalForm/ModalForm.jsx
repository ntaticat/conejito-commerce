import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ModalForm = ({ children, closeFormFn }) => {

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-gray-900 z-20 p-3' aria-hidden="true" >
      <div className="w-full h-full rounded-lg overflow-hidden border-2 border-solid border-gray-500">
        <div className="w-full h-full bg-white overflow-y-auto">
          <div className="h-auto flex flex-nowrap justify-between items-stretch border-b-2 border-solid border-gray-500 bg-slate-900 text-white">
            <h1 className='w-full text-lg px-2 py-1'>Modal de wea</h1>
            <button
              className='bg-red-500 text-white py-1 px-3'
              onClick={() => closeFormFn()}
            >
              <FontAwesomeIcon size='lg' icon={faTimes} />
            </button>
          </div>
          <div className="p-2 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;