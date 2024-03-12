import React from "react";
import "./reset.css"
import "./fonts.css"
import "./App.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from "./pages/rules/Rules.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Registration from "./pages/registration/Registration.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound/>,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/rules",
    element: <Rules />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
