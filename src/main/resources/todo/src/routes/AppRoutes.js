import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage'; 
import SignupPage from '../pages/SignupPage';
import ToDoPage from '../pages/ToDoPage';

const AppRoutes = () => {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      <Route path="/" element={!token ? <ToDoPage /> : <LoginPage />} />
      <Route path="/login" element={token ? <ToDoPage /> : <LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={token ? <ToDoPage /> : <LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
