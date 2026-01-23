import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img src="/src/assets/illustrations/delivery-rider.svg" alt="delivery" className="login-img" />
        <h2>RouteX Delivery Partner</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;