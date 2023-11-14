import React from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';


export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  // useEffect(() =>{
  //   getResults('/search/q=Javascipt Mastery&num=40');
  // }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/Search':
      // Render content for the search route
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {/* {results?.results?.map(({ link, title}) => (
              
          ))} */}
        </div>
      )

    case '/images':
      // Render content for the images route
      return <div>Images results content</div>;

    case '/news':
      // Render content for the news route
      return <div>News results content</div>;

    case '/videos':
      // Render content for the videos route
      return <div>Videos results content</div>;

    default:
      console.log('Unexpected pathname:', location.pathname);
      return <div>Unexpected Path</div>;
  }
};
