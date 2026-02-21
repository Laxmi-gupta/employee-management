import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "./services/api.js"

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const verify = async () => {
      try {
        await api.get("/auth/check");
        setIsAuth(true);
      } catch {
        setIsAuth(false);
      }
    };

    verify();
  }, []);

  if (isAuth === null) return <div>Loading...</div>;

  if (!isAuth) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;