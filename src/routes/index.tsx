import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Task1 from 'pages/Task1';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="task1" element={<Task1 />} handle={{ wilson: 'oi' }} />
    </Routes>
  );
};
