import { createBrowserRouter } from "react-router-dom";
import AuthGuardLayout from "./components/layouts/AuthGuardLayout";
import HomeLayout from "./components/layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/todo";
import Signin from "./pages/Signin";
import Signup from "./pages/Siginup";

export const path = {
  HOME: "/",
  SIGNUP: "/signup",
  SIGNIN: "/signin",
  TODO: "/todo",
};

const { HOME, SIGNIN, SIGNUP, TODO } = path;

const router = createBrowserRouter([
  {
    path: HOME,
    element: <HomeLayout />,
    children: [
      { path: HOME, element: <HomePage /> },
      { path: SIGNIN, element: <Signin /> },
      { path: SIGNUP, element: <Signup /> },
    ],
  },
  {
    path: path.TODO,
    element: <AuthGuardLayout />,
    children: [{ path: TODO, element: <TodoPage /> }],
  },
]);

export default router;
