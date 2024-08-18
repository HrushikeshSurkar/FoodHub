// src/routes/OuterRoutes.jsx
import { Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";

const OuterRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Add other public routes here */}
    </Routes>
  );
};

export default OuterRoutes;
