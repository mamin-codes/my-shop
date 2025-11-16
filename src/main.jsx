import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Contact from './Page/Contact/Contact';
import Blog from './Page/Blog/Blog';
import ShopNow from './Page/ShopNow/ShopNow';
import SingleProducts from './Components/Shared/SingleProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children: [
      { index: true, element:<Home></Home>  },
      { path:"/home", element:<Home></Home>  },
      {path: "/about", element:<About></About>},
      {path: "/contact", element:<Contact></Contact>},
      {path: "/blog", element:<Blog></Blog>},
      {path: "/shop", element:<ShopNow></ShopNow>},
      {path: "/shop/:id", element:<SingleProducts></SingleProducts>},
      
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);

