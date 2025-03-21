import React from "react";
import MainContainer from "./MainContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingScreen from "./LandingScreen";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
  },
  {
    path: "/resume",
    element: <MainContainer />,
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
