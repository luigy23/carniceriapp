import React, { useState } from 'react';
import { IconClose } from '../../../assets/Icons/IconClose';

const Card = ({ image, text, titulo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleOutsideClick = (e) => {
    if (e.target.className.includes('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <>
      <div
        className="w-64 rounded overflow-hidden shadow-lg cursor-pointer flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 bg-slate-50"
        onClick={openModal}
      >   
        <div className="w-full h-40 bg-slate-500">
          <img className="w-full h-full object-cover" src={image} alt="Image" />
        </div>
        <div className="p-4 flex-1">
          <h3 className="text-gray-700 text-lg font-bold mb-4">{titulo}</h3>
          <p className="text-gray-700 text-base mb-4">{text.substring(0, 100)}...</p>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal-overlay fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
          onClick={handleOutsideClick}
        >
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-full p-6 md:p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              <IconClose />
            </button>
            <div className="flex flex-col md:flex-row">
              <img className="w-full md:w-1/2 mb-4 md:mb-0 object-cover" src={image} alt="Image" />
              <div className="px-6 py-4 overflow-y-auto max-h-96 md:w-1/2 flex-grow">
                <h3 className="text-gray-700 text-lg font-bold mb-4">{titulo}</h3>
                <p className="text-gray-700 text-base mb-4">{text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

