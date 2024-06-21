import React from 'react';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Register from './components/Register'


function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'home',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>
        }
      ]
    }
  ])
  return (
  <RouterProvider router={router}/>
  );
}

export default App;

