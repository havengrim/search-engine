
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultContextProvider } from './contexts/ResultContextProvider';

import App from './App';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(

    <ResultContextProvider>
<Router>
<App />
</Router>
    </ResultContextProvider>

);