import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./auth_context";

/**
 * TODO: DOCU
 */

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p style={{ textAlign: "center" }}>Lade...</p>;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
