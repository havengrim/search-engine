// ResultContextProvider.jsx

import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Google'); // Set the default value to 'Google'

  const getResults = async () => {
    setIsLoading(true);

    // Only make the request if searchTerm is not an empty string
    if (searchTerm.trim() !== '') {
      const options = {
        method: 'POST',
        url: 'https://google-api31.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': 'e8684ff120mshcf7c3c53edce224p10be6djsn97c361b730fc',
          'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        data: {
          text: searchTerm,
          safesearch: 'off',
          timelimit: '',
          region: 'wt-wt',
          max_results: 20
        }
      };

      try {
        const response = await axios(options);
        console.log(response.data);
        setResults(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      // If searchTerm is empty, clear results and set isLoading to false
      setResults([]);
      setIsLoading(false);
    }
  };

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
