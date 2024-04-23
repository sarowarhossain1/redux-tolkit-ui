import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Category from "../Pages/Category/Category";
import Unit from "../Pages/Unit/Unit";
import Brand from "../Pages/Brand/Brand";
import { FaHome } from "react-icons/fa";
import Root from "./Root";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home  />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      // {
      //   path: "/unit",
      //   element: <Unit />,
      // },
      {
        path: "/brand",
        element: <Brand />,
      },
    ],
  },
]);
