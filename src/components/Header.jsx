import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();           // cambia estado a false
    navigate("/");      // redirige a inicio
  };

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Inicio</Link>
      <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
      <Link to="/admin" style={{ marginRight: "10px" }}>Administración</Link>

      {isAuthenticated && (
        <button onClick={handleLogout} style={{ marginLeft: "20px" }}>
          Cerrar sesión
        </button>
      )}
    </nav>
  );
}

export default Header;
