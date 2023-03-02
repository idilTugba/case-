import React from 'react';
import ReactDOM from 'react-dom/client';
import './assest/css/index.scss';
import Home from './pages/home/index';
import AllTyres from './pages/allTyres/index';
import Dealer from './pages/dealers/index';
import Guides from './pages/guides/index';
import GoWith from './pages/goWith/index';
import Service from './pages/services/index';
import Error from './pages/error/index';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "allTyres",
        element: <AllTyres/>,
      },
      {
        path: "dealer",
        element: <Dealer/>,
      },
      {
        path: "guides",
        element: <Guides/>,
      },
      {
        path: "goWith",
        element: <GoWith/> ,
      },
      {
        path: "service",
        element: <Service/>,
      },
      {
        path: "*",
        element: <Error/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
