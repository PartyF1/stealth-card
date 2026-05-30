import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider/context";
import { OpenButton } from "../../../components/MainMenu";

export const ProtectedRoute = () => {
  const { isAuth, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return null; // или Loader
  }

  if (!isAuth) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return (
    <>
      <OpenButton />
      <Outlet />
    </>
  );
};
