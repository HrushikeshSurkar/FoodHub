// src/routes/InnerRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

const InnerRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default InnerRoutes;
