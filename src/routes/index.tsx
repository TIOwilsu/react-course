import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Task1 from 'pages/Task1';
import Task2 from 'pages/Task2';
import Task3 from 'pages/Task3';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="task1" element={<Task1 />} />
      <Route path="task2" element={<Task2 />} />
      <Route path="task3" element={<Task3 />} />
    </Routes>
  );
};
