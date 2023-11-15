import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults(searchTerm);
  }, [searchTerm]);

  if (isLoading) return <Loading />;
  console.log(location.pathname);

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ url, title, description }, index) => (
            <div key={index} className='md:w-2/5 w-full'>
              <a href={url} target='_blank' rel="noreferrer">
                <p className='text-sm'>{url}</p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>{title}</p>
                <p className='text-lg hover:underline dark:text-blue-300 text-black-700'>{description}</p>
                
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return 'SEARCH';
    case '/news':
      return 'SEARCH';
    case '/videos':
      return 'SEARCH';
    default:
      console.log('Unexpected pathname:', location.pathname);
      return <div>Unexpected Path</div>;
  }
};
