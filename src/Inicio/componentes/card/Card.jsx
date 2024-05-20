import React, { useState } from 'react';

const Card = ({ image, text, extraInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={` w-full rounded overflow-hidden shadow-lg m-4 transition-all duration-300 ease-in-out transform cursor-pointer  flex flex-col`}
        onClick={openModal}
      >
        <div className="flex flex-col md:flex-row">
          <img className="w-full md:w-1/3 object-cover" src={image} alt="Image" />
          <div className="p-4 flex-1">
            <p className="text-gray-700 text-base mb-4">{text.substring(0, 100)}...</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-full p-4 relative transform transition-transform duration-300 ease-in-out scale-95 opacity-0 modal-open">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row">
              <img className="w-full md:w-1/2 mb-4 md:mb-0 object-cover" src={image} alt="Image" />
              <div className="px-6 py-4 overflow-y-auto max-h-96 md:w-1/2 flex-grow">
                <p className="text-gray-700 text-base mb-4">{text}</p>
                <p className="text-gray-700 text-sm">{extraInfo}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
