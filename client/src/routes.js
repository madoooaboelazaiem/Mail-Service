import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Mail from './pages/Mail';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path={'*'} element={<NotFound />} />

      <Route path={'/'} element={<Navigate to={'/contact'} />} />

      <Route path={'contact'} element={<Mail />} />
    </Routes>
  );
};

export default App;
