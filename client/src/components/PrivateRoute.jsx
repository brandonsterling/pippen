import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

export const PrivateRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
