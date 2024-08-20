import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { registerUser } from "../../../services/authService"; // Adjust the import path
import "./Register.scss";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value })); // Update email, password, or confirmPassword based on input name
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await registerUser(credentials); // Call the register function
      // Handle successful registration response if needed
    } catch (error) {
      toast.warn("Something Went Wrong!");
      console.error("Registration error:", error);
    }
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle password visibility
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev); // Toggle confirm password visibility
  };

  return (
    <>
      <div className="main-register-wrapper">
        <div className="main-register-title">
          <h1>Sign up</h1>
        </div>
        <form onSubmit={handleRegister}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder=" "
              id="register-email"
              name="email" // Use name attribute for handling changes
              value={credentials.email}
              onChange={handleChange} // Update email state
            />
            <label htmlFor="register-email">Email</label>
          </div>

          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              id="register-password"
              name="password" // Use name attribute for handling changes
              value={credentials.password}
              onChange={handleChange} // Update password state
            />
            <label htmlFor="register-password">Password</label>
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

          <div className="input-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder=" "
              id="register-confirm-password"
              name="confirmPassword" // Use name attribute for handling changes
              value={credentials.confirmPassword}
              onChange={handleChange} // Update confirm password state
            />
            <label htmlFor="register-confirm-password">Confirm Password</label>
            {credentials.confirmPassword && (
              <button
                type="button"
                className="password-toggle-button"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            )}
          </div>

          <button type="submit" className="main-register-button">
            Register
          </button>
        </form>
      </div>
      <div className="main-register-sign-in-button">
        Already have an account?
        <span onClick={handleSignIn}>Sign in</span>
      </div>
    </>
  );
};

export default Register;
