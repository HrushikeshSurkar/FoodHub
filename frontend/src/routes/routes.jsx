import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";

const routes = {
  publicRoutes: [
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
  ],
  privateRoutes: [
    { path: "/blogs", element: <Blogs /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/home", element: <Home /> },
  ],
};

export default routes;
