// Card.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);

  return (
    <div className="grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 gap-[70px] w-[1420px]
      ml-136 shadow-lg">
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <div
              key={item.id}
              className="relative group
                bg-white border
                border-gray-200 
                rounded-lg 
                ml-7
                h-[440px]
                overflow-hidden shadow-md 
                hover:shadow-lg cursor-pointer 
                transition duration-300 transform
                hover:scale-109"
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
            >
              <img
                src={thumbnail}
                alt={item.volumeInfo.title}
                className="w-52 h-52 object-cover rounded-t-lg
                  pt-7
                  pl-[60px] 
                  "
              />
              <div className="overlay absolute inset-0 bg-gray-800 opacity-75 invisible group-hover:visible flex items-center justify-center">
                <i className="fas fa-search text-white text-2xl"></i>
              </div>
              <div className="p-4 pb-3 ">
                <h3 className="text-xl font-semibold text-gray-950 mb-2 line-clamp-2">
                  {item.volumeInfo.title}
                </h3>
                <p className="text-gray-950 mb-2">
                  Author: {item.volumeInfo.authors?.join(', ')}
                </p>
                <p className="text-yellow-500 font-semibold">&#8377;{amount}</p>
              </div>
            </div>
          );
        }
      })}
     
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
      
    </div>
  );
};

export default Card;
