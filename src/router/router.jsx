import {createBrowserRouter} from "react-router";
import App from "../App";
import ProjectDetail from "../pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetail />,
  },
], {
  // Prevent automatic scroll restoration
  future: {
    v7_normalizeFormMethod: true,
  }
});
