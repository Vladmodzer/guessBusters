import React from "react";
import "./App.css";
import "./fonts.css"
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Rules from "./pages/rules/Rules.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
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
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
