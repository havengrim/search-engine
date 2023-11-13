
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { ResultContextProvider  } from './components/contexts/ResultContextProvider';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <ResultContextProvider>
<Router>
<App />
</Router>
</ResultContextProvider>

);