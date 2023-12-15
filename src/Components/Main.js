import React, { useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Main = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === 'Enter')  {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
    }
  };

  return (
    <>
      <div className="header  relative
       bg-gray-950 text-white p-8">
        <div className="absolute pb-[400px] 
        top-0 right-0 mr-8 mt-8">
          <img src="./images/bg2.png" alt="" className="w-40" />
        </div>
      </div>
      <div className="bg-gray-950 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Find Your Book</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
              className="border-2
               border-gray-700 px-4 py-3 w-64 
                rounded-lg focus:outline-none
                 focus:border-gray-500"
            />
            <button className="bg-yellow-300 
             text-black px-6 py-3 rounded-lg rad hover:py-2">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 ">
        <Card book={bookData} />
      </div>
    </>
  );
};

export default Main;
