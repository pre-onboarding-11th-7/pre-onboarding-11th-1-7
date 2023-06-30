import { createBrowserRouter } from "react-router-dom";
import AuthGuardLayout from "./components/layouts/AuthGuardLayout";
import HomeLayout from "./components/layouts/HomeLayout";
import HomePage from "./pages/HomePage";

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
      { path: SIGNIN, element: <div>로그인페이지</div> },
      { path: SIGNUP, element: <div>회원가입페이지</div> },
    ],
  },
  {
    path: path.TODO,
    element: <AuthGuardLayout />,
    children: [{ path: TODO, element: <div>TODO페이지</div> }],
  },
]);

export default router;
