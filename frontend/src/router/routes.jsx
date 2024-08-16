import { lazy } from "react";

const Login = lazy(() => import("../pages/Authentication/Login/Login"));

export const routes = [{ path: "/", element: <Login /> }];
