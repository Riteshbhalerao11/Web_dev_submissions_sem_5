import React from "react";
import { useAuth } from "./contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/landing" />;
};
