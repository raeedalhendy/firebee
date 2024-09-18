import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import HomePage from './Page/Home/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  }
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
