import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);
    
        try {
            const response = await fetch(`${baseUrl}${type}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'cc8e73a12fmsh9e9f310b5f6938fp14eccdjsnbc67905d8d26',
                    'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
    
            // Adjust the property based on the actual structure of the API response
            setResults(data?.results || []);
    
        } catch (error) {
            console.error('Error fetching results:', error);
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, isLoading, setSearchTerm }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);
