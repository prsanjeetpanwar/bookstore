import React from 'react';

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  const handleOverlayClick = (event) => {

    if (event.target.classList.contains('overlay')) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="overlay fixed inset-0 bg-gray-800 opacity-75"></div>
      <div className="overlay-inner z-10 bg-white p-8 rounded-md shadow-lg max-w-xl overflow-y-auto">
        <button
          className="close absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="inner-box flex">
          <img
            src={thumbnail}
            alt={item.volumeInfo.title}
            className="w-32 h-48 object-cover rounded-md"
          />
          <div className="info ml-4">
            <h1 className="text-2xl font-bold mb-2">
              {item.volumeInfo.title}
            </h1>
            <h3 className="text-gray-600">{item.volumeInfo.authors}</h3>
            <h4 className="text-gray-700">
              {item.volumeInfo.publisher}
              <span className="ml-2">{item.volumeInfo.publishedDate}</span>
            </h4>
            <br />
            <a
              href={item.volumeInfo.previewLink}
              className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 inline-block"
            >
              More
            </a>
          </div>
        </div>
        <p className="description mt-4 text-gray-700">
          {item.volumeInfo.description}
        </p>
      </div>
    </div>
  );
};

export default Modal;
