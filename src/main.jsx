import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AppliedJob from './components/AppliedJob/AppliedJob';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJob></AppliedJob>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className='lg:w-11/12 mx-auto'>
            <RouterProvider router={router}></RouterProvider>
      </div>
  </StrictMode>,
)
