import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);
        const options = {
            method: 'GET',
            url: 'https://google-web-search1.p.rapidapi.com/',
            params: {
                query: 'World Cup',
                limit: '20',
                related_keywords: 'true'
            },
            headers: {
                 'X-RapidAPI-Key': '878a3fdf2dmsh746a53a7185cc84p1cff08jsnac5662538f49',
                'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios(options); // Use axios directly
            console.log(response.data);
            setResults(response.data);
        } catch (error) {
            console.error(error);
        } finally {
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
