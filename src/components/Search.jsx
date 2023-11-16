// Search.jsx

import React, { useState } from 'react';
import { useResultContext } from '../contexts/ResultContextProvider';

export const Search = () => {
  const { setSearchTerm, getResults } = useResultContext();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputValue);
    getResults();
  };

  return (
    <div className="flex items-center justify-center mt-8  sm:px-56 w-full">
      <input
        type="text"
        placeholder="Enter your search term"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded-md mr-2 w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};
