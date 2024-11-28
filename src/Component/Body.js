import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Login';
import Browser from './Browser';

function Body() {
  const user = useSelector((store) => store.app.user);

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: user ? <Navigate to="/browser" /> : <Login />,
    },
    {
      path: '/browser',
      element: user ? <Browser /> : <Navigate to="/" />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
