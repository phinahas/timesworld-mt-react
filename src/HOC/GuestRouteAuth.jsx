import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const userAuthConfig = useSelector((state) => state.userAuth);

  if (userAuthConfig && userAuthConfig.user) {
    
    return <Navigate to="/" replace />;
  }
  return children;
};

export default GuestRoute;