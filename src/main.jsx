import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Work, {
  loader as workTypeLoader,
} from "./components/Routes/Work/Work.jsx";
import Resume from "./components/Routes/Resume.jsx";
// import Home from "./components/Routes/Home.jsx";
import FamilyTree from "./components/Routes/FamilyTree/FamilyTree.jsx";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Navigate to="/work/DataViz" replace={true} />,
      },
      {
        path: "/work/:workType",
        element: <Work />,
        loader: workTypeLoader,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/family-tree",
        element: <FamilyTree />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
