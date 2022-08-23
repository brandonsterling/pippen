import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  console.log(token);

  if (!token) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
