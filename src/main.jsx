import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alltasks from "./components/Alltasks.jsx";
import Addtask from "./components/Addtask.jsx";
import Mytask from "./components/Mytask.jsx";
import Services from "./components/Services.jsx";
import Home from "./components/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alltask",
        element: <Alltasks />,
      },
      {
        path: "/addtask",
        element: <Addtask />,
      },
      {
        path: "/mytask",
        element: <Mytask />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
