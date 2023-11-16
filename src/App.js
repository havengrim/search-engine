import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Search } from './components/Search';
import { Initials } from './components/Initials';
import { Tabs } from './components/Tabs';



const App = () => {

    const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
       <div className='bg-gray-100 dark:bg-gray-900 dark:text-dark-500 min-h-screen'>
        <Navbar  darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Tabs />
        <Initials />
        <Footer />
        </div>
    </div>
  )
}

export default App;