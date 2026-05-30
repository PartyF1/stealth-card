import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider/context";

export const PublicRoute = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (isAuth) {
    return <Navigate to="/offers" replace />;
  }

  return <Outlet />;
};
