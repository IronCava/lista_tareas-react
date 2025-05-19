import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  // Si está autenticado, mostramos el contenido protegido
  // Si no, redirigimos a /login
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
