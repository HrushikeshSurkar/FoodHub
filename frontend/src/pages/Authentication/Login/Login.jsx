import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./Login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form className="main-login-wrapper" onSubmit={handleLogin}>
        <div className="main-login-title">
          <h1>Sign in</h1>
        </div>

        <div className="input-wrapper">
          <input type="text" placeholder=" " id="floating-email" />
          <label htmlFor="floating-email">Email</label>
        </div>

        <div className="input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder=" "
            id="floating-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
          <label htmlFor="floating-password">Password</label>
          {password && ( // Show the eye button only if there is input
            <button
              type="button"
              className="password-toggle-button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          )}
        </div>

        <button type="submit" className="main-login-button">
          Log in
        </button>
        <div className="main-login-forgot-password">Forgot Password</div>
      </form>
      <div className="main-login-sign-up-button">
        Don&apos;t have an account? <span onClick={handleSignUp}>Sign up</span>
      </div>
    </>
  );
};

export default Login;
