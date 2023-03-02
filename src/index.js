import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/index';
import AllTyres from './pages/allTyres/index';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "allTyres",
        element: <AllTyres/>,
      },
      // {
      //   path: "dealer",
      //   element: <Dealer/>,
      // },
      // {
      //   path: "guides",
      //   element: <Guides/>,
      // },
      // {
      //   path: "goWith",
      //   element: <GoWith/> ,
      // },
      // {
      //   path: "service",
      //   element: <Service/>,
      // },
      // {
      //   path: "*",
      //   element: <Error/>,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
