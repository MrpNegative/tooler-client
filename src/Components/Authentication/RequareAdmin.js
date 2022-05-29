import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Genarel/Shared/Loading";
import useAdmin from "../Hooks/useAdmin";
import { auth } from "./firebase.init";

const RequireAdmin = ({ children }) => {
  const location = useLocation();

  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return <Loading></Loading>;
  }
  if (!user || !admin) {
    signOut(auth);
    return window.location.reload();
  }

  return children;
};

export default RequireAdmin;
