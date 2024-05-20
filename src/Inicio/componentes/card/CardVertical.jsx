import React, { useState } from 'react';

const CardVertical = ({ image, text, type }) => {
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
        className="max-w-md rounded overflow-hidden shadow-lg m-4 transition-all duration-300 ease-in-out transform cursor-pointer"
        onClick={openModal}
        style={{ width: '400px', minHeight: '300px' }}
      >
        <img className="w-full h-64 object-cover" src={image} alt="Image" />
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base mb-4">{text.substring(0, 100)}...</p>
          {/* Truncate the text for initial view */}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-full p-4 relative">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>
            <img className="w-full mb-4" src={image} alt="Image" />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">{text}</p>
              {/* Show full text in modal */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardVertical;
