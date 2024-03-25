import React from "react";
import "./reset.css";
import "./fonts.css";
import "./App.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/store/store.js";
import Rules from "./pages/rules/Rules.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Party from "./pages/party/Party.jsx";
import { Provider } from "react-redux";
import Registration from "./pages/registration/Registration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration/>,
  },
  {
    path: "/home",
    element: <Home className="page" />,
    errorElement: <NotFound />,
  },

  {
    path: "/rules",
    element: <Rules />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/party",
    element: <Party />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
