// import cookie
import Cookies from "js-cookie";

// import react router dom
import { Navigate } from "react-router-dom";

function privateRoutes({ children }) {
  //navigate
  const navigate = useNavigate();

  //token
  const token = Cookies.get("token");

  // if token is not exist
  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  return children;
}

export default privateRoutes;