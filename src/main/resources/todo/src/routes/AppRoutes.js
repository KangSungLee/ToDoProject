import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage'; 
import SignupPage from '../pages/SignupPage';
import ToDoPage from '../pages/ToDoPage';

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<ToDoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<ToDoPage />} />
    </Routes>
  );
};

export default AppRoutes;
