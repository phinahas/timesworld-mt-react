import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const userAuthConfig = useSelector((state) => state.userAuth);

  if (!userAuthConfig || !userAuthConfig.user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RequireAuth;