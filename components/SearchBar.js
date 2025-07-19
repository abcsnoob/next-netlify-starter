// components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <input
        type="text"
        placeholder="Tìm thú cưng theo tên hoặc loại..."
        className="w-full max-w-lg p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-lg shadow-md transition-colors duration-300">
        Tìm kiếm
      </button>
    </div>
  );
};

export default SearchBar;
