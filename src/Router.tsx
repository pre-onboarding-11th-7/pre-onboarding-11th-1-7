import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [],
    errorElement: <div>I am Error</div>,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
