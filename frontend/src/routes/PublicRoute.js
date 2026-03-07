import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {

  const isAuthenticated = false// if user is logged in its false

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default PublicRoute;