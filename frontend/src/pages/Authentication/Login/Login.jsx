import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { loginUser } from "../../../services/authService"; // Adjust the import path
import { useApp } from "../../../context/AppContext"; // Import the AppContext
import "./Login.scss";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useApp(); // Use the login function from AppContext

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser(credentials); // Call the login function
      if (response) {
        // If login is successful
        login(); // Update authentication state
        navigate("/home"); // Redirect to home
      }
    } catch (error) {
      toast.warn("Something Went Wrong!");
      console.error("Login error:", error);
    }
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <form className="main-login-wrapper" onSubmit={handleLogin}>
        <div className="main-login-title">
          <h1>Sign in</h1>
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder=" "
            id="floating-email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <label htmlFor="floating-email">Email</label>
        </div>

        <div className="input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder=" "
            id="floating-password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <label htmlFor="floating-password">Password</label>
          {credentials.password && (
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
