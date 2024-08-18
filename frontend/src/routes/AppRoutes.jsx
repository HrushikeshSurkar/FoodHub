// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import routes from "./routes";

const AppRoutes = () => {
  const { isAuthenticated } = useApp();

  return (
    <Routes>
      {/* Public Routes */}
      {!isAuthenticated &&
        routes.publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

      {/* Private Routes */}
      {isAuthenticated &&
        routes.privateRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

      {/* Redirect based on authentication */}
      <Route
        path="*"
        element={
          isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
