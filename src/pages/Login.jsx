import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Simula que el usuario ha iniciado sesión
    navigate("/admin"); // Redirige automáticamente a la ruta protegida
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <p>Haz clic en el botón para simular el inicio de sesión.</p>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default Login;
