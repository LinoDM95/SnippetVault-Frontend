import React, { createContext, useState, useEffect } from "react";
import { fetchWithAuth } from "../apis/fetch_with_auth";
const isDevelopment = import.meta.env.MODE === "development";
const API_URL = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_DEPLOY;

/**
 * TODO: DOCU
 */

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = sessionStorage.getItem("access");
      if (!accessToken) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const response = await fetchWithAuth(`${API_URL}/api/user/`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setUser(null);
          sessionStorage.removeItem("access");
          sessionStorage.removeItem("refresh");
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    sessionStorage.removeItem("access");
    sessionStorage.removeItem("refresh");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
