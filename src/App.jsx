import React from "react";

import "../src/App.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./router/route";

const App = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
