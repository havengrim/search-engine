import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Results } from './Results';

export const Initials = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/Search');
  }, [navigate]);

  return (
    <div className="p-4">
      <Routes>
        <Route path="/Search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};
